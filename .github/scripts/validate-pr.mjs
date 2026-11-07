/**
 * Validate a pull request that adds servers to catalog/servers.json.
 * Expected env: GITHUB_TOKEN, GITHUB_REPOSITORY, PR_NUMBER
 * Exits 1 when the PR fails required checks.
 */
import { readFileSync, writeFileSync } from "node:fs";

const SITE = "https://plugmcp.ai";
const ALLOWED_PATH_PREFIXES = ["catalog/servers.json", "community/"];
const SHELF_IDS = new Set([
  "official-core",
  "browser",
  "databases",
  "design",
  "developer-tools",
  "security",
  "mobile",
  "cloud-ops",
]);

const RESTRICTED_TERMS = [
  "porn",
  "nsfw",
  "onlyfans",
  "hentai",
  "xxx",
  "gambling",
  "casino",
  "sportsbook",
  "alcohol",
  "beer",
  "brewery",
  "wine",
  "winery",
  "liquor",
  "vodka",
  "whiskey",
  "whisky",
  "bourbon",
];

const token = process.env.GITHUB_TOKEN;
const [owner, repo] = (process.env.GITHUB_REPOSITORY || "").split("/");
const prNumber = Number(process.env.PR_NUMBER || "0");
if (!token || !owner || !repo || !prNumber) {
  console.error("GITHUB_TOKEN, GITHUB_REPOSITORY, and PR_NUMBER are required");
  process.exit(2);
}

const headers = {
  accept: "application/vnd.github+json",
  authorization: `Bearer ${token}`,
  "user-agent": "plugmcp-awesome-validate-pr",
  "x-github-api-version": "2022-11-28",
};

async function gh(path, init = {}) {
  const res = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: { ...headers, ...(init.body ? { "content-type": "application/json" } : {}), ...(init.headers || {}) },
  });
  const text = await res.text();
  let body = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = { message: text };
  }
  if (!res.ok) {
    const msg = body && typeof body === "object" && "message" in body ? body.message : text;
    throw new Error(`GitHub ${init.method || "GET"} ${path}: ${res.status} ${msg}`);
  }
  return body;
}

function normalizeGithub(url) {
  if (!url) return null;
  try {
    const u = new URL(url.trim());
    if (u.hostname !== "github.com") return null;
    const parts = u.pathname.split("/").filter(Boolean);
    if (parts.length < 2) return null;
    return `https://github.com/${parts[0].toLowerCase()}/${parts[1].toLowerCase()}`;
  } catch {
    return null;
  }
}

function plugmcpSlug(url) {
  if (!url) return null;
  try {
    const u = new URL(url.trim());
    if (u.hostname !== "plugmcp.ai" && u.hostname !== "www.plugmcp.ai") return null;
    if (u.searchParams.has("q")) return null;
    const m = u.pathname.match(/^\/mcp\/([a-z0-9][a-z0-9-]{1,80})$/i);
    return m ? m[1].toLowerCase() : null;
  } catch {
    return null;
  }
}

function isRestricted(text) {
  const hay = String(text || "").toLowerCase();
  return RESTRICTED_TERMS.some((t) => hay.includes(t));
}

function pathAllowed(filename) {
  return ALLOWED_PATH_PREFIXES.some((p) => filename === p || filename.startsWith(p));
}

const baseCatalog = JSON.parse(readFileSync("catalog/servers.json", "utf8"));
const existingBySlug = new Map((baseCatalog.servers || []).map((s) => [String(s.slug || "").toLowerCase(), s]));
const existingByGithub = new Map();
for (const s of baseCatalog.servers || []) {
  const g = normalizeGithub(s.github_url);
  if (g) existingByGithub.set(g, s);
}

const files = await gh(`/repos/${owner}/${repo}/pulls/${prNumber}/files?per_page=100`);
const disallowed = files.filter((f) => !pathAllowed(f.filename) && f.status !== "removed");
const catalogFile = files.find((f) => f.filename === "catalog/servers.json");

const labels = new Set(["contribution"]);
const problems = [];
const notes = [];

if (disallowed.length) {
  problems.push(`Only catalog/servers.json (and optional community/*) may change. Disallowed: ${disallowed.map((f) => f.filename).join(", ")}`);
  labels.add("invalid-paths");
}

if (!catalogFile) {
  problems.push("PR must modify catalog/servers.json with the new server object.");
  labels.add("missing-catalog");
}

let added = [];
if (catalogFile?.patch) {
  // Prefer full head file via Contents API when possible; fall back to patch heuristics.
  try {
    const pr = await gh(`/repos/${owner}/${repo}/pulls/${prNumber}`);
    const headSha = pr.head.sha;
    const content = await gh(
      `/repos/${owner}/${repo}/contents/catalog/servers.json?ref=${encodeURIComponent(headSha)}`,
    );
    if (content.encoding === "base64" && content.content) {
      const headJson = JSON.parse(Buffer.from(content.content.replace(/\n/g, ""), "base64").toString("utf8"));
      const headServers = Array.isArray(headJson.servers) ? headJson.servers : [];
      added = headServers.filter((s) => s?.slug && !existingBySlug.has(String(s.slug).toLowerCase()));
    }
  } catch (err) {
    notes.push(`Could not read head catalog (${err.message}); falling back to patch parse.`);
  }
}

if (!added.length && catalogFile?.patch) {
  const plus = catalogFile.patch
    .split("\n")
    .filter((l) => l.startsWith("+") && !l.startsWith("+++"))
    .map((l) => l.slice(1))
    .join("\n");
  const slugMatches = [...plus.matchAll(/"slug"\s*:\s*"([^"]+)"/g)].map((m) => m[1]);
  for (const slug of slugMatches) {
    if (!existingBySlug.has(slug.toLowerCase())) {
      const blockMatch = plus.match(new RegExp(`\\{[^{}]*"slug"\\s*:\\s*"${slug}"[^{}]*\\}`, "s"));
      if (blockMatch) {
        try {
          added.push(JSON.parse(blockMatch[0]));
        } catch {
          added.push({ slug });
        }
      } else {
        added.push({ slug });
      }
    }
  }
}

if (!added.length) {
  problems.push("No new catalog server objects detected. Add one entry to catalog/servers.json.");
  labels.add("missing-entry");
}

for (const entry of added) {
  const name = entry.name || entry.slug || "(unnamed)";
  const slug = plugmcpSlug(entry.plugmcp_url) || (entry.slug ? String(entry.slug).toLowerCase() : null);
  const github = normalizeGithub(entry.github_url);

  if (!entry.plugmcp_url || !plugmcpSlug(entry.plugmcp_url)) {
    problems.push(`${name}: plugmcp_url must be ${SITE}/mcp/{slug} (no ?q=).`);
    labels.add("missing-plugmcp");
  } else {
    labels.add("has-plugmcp");
  }

  if (!github) {
    problems.push(`${name}: github_url must be https://github.com/owner/repo.`);
    labels.add("missing-github");
  }

  if (entry.shelf && !SHELF_IDS.has(entry.shelf)) {
    problems.push(`${name}: shelf must be one of ${[...SHELF_IDS].join(", ")}.`);
    labels.add("invalid-shelf");
  }

  if (isRestricted(`${entry.name || ""} ${entry.blurb || ""} ${entry.slug || ""}`)) {
    problems.push(`${name}: matches restricted (adult / gambling / alcohol) terms.`);
    labels.add("restricted");
  }

  if (slug && existingBySlug.has(slug)) {
    problems.push(`${name}: slug already in catalog (${slug}).`);
    labels.add("duplicate");
  }
  if (github && existingByGithub.has(github)) {
    problems.push(`${name}: github_url already in catalog (${github}).`);
    labels.add("duplicate");
  }

  if (slug) {
    const probe = await fetch(`${SITE}/mcp/${slug}`, { method: "GET", redirect: "follow" });
    if (probe.status === 404) {
      problems.push(`${name}: ${SITE}/mcp/${slug} returned 404 — submit on PlugMCP first.`);
      labels.add("missing-plugmcp");
    } else if (!probe.ok) {
      problems.push(`${name}: ${SITE}/mcp/${slug} returned HTTP ${probe.status}.`);
      labels.add("missing-plugmcp");
    } else {
      const html = await probe.text();
      if (/Not listed|does not list adult|gambling|alcohol/i.test(html)) {
        problems.push(`${name}: PlugMCP marks this listing as restricted.`);
        labels.add("restricted");
      } else {
        notes.push(`${name}: PlugMCP page OK (${SITE}/mcp/${slug}).`);
      }
    }
  }
}

const allLabelNames = [
  "contribution",
  "has-plugmcp",
  "missing-plugmcp",
  "missing-github",
  "duplicate",
  "restricted",
  "invalid-paths",
  "missing-catalog",
  "missing-entry",
  "invalid-shelf",
  "checks-passed",
  "checks-failed",
];

if (problems.length) labels.add("checks-failed");
else {
  labels.add("checks-passed");
  labels.delete("missing-plugmcp");
  labels.delete("missing-github");
  labels.delete("duplicate");
  labels.delete("restricted");
  labels.delete("invalid-paths");
  labels.delete("missing-catalog");
  labels.delete("missing-entry");
  labels.delete("invalid-shelf");
}

for (const name of allLabelNames) {
  try {
    await gh(`/repos/${owner}/${repo}/labels`, {
      method: "POST",
      body: JSON.stringify({
        name,
        color: name.startsWith("checks-passed") || name === "has-plugmcp" || name === "contribution" ? "0E8A16" : "D73A4A",
        description: `awesome-mcp-servers bot: ${name}`,
      }),
    });
  } catch {
    /* exists */
  }
}

await gh(`/repos/${owner}/${repo}/issues/${prNumber}/labels`, {
  method: "POST",
  body: JSON.stringify({ labels: [...labels] }),
});

for (const name of allLabelNames) {
  if (labels.has(name)) continue;
  try {
    await gh(`/repos/${owner}/${repo}/issues/${prNumber}/labels/${encodeURIComponent(name)}`, { method: "DELETE" });
  } catch {
    /* absent */
  }
}

const marker = "<!-- plugmcp-validate-pr -->";
const body = [
  marker,
  problems.length ? "## Validation failed" : "## Validation passed",
  "",
  problems.length ? problems.map((p) => `- ${p}`).join("\n") : "- Catalog entry looks good.",
  "",
  notes.length ? `### Notes\n\n${notes.map((n) => `- ${n}`).join("\n")}` : "",
  "",
  "### Required path",
  "",
  `1. Submit at ${SITE}/mcp/submit until \`/mcp/{slug}\` is live.`,
  "2. Add one object to `catalog/servers.json` (do not hand-edit curated `servers/*.md`).",
  "3. Prefix the PR title with 🤖 for agent-opened PRs.",
  "",
  `See [CONTRIBUTING.md](https://github.com/${owner}/${repo}/blob/main/CONTRIBUTING.md).`,
].join("\n");

const comments = await gh(`/repos/${owner}/${repo}/issues/${prNumber}/comments?per_page=100`);
const existing = (comments || []).find((c) => typeof c.body === "string" && c.body.includes(marker));
if (existing) {
  await gh(`/repos/${owner}/${repo}/issues/comments/${existing.id}`, {
    method: "PATCH",
    body: JSON.stringify({ body }),
  });
} else {
  await gh(`/repos/${owner}/${repo}/issues/${prNumber}/comments`, {
    method: "POST",
    body: JSON.stringify({ body }),
  });
}

const summary = { ok: problems.length === 0, problems, notes, added: added.map((s) => s.slug), labels: [...labels] };
writeFileSync("validate-pr-result.json", JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
if (problems.length) process.exit(1);
