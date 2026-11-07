# Contributing

Curated shelves (`servers/*.md`, README start-here blocks) are regenerated daily from [PlugMCP](https://plugmcp.ai/mcp). Hand-edits to those files do not last. Community PRs are welcome for `catalog/servers.json` once the listing is live on PlugMCP.

## Add a server (required path)

1. Submit at [plugmcp.ai/mcp/submit](https://plugmcp.ai/mcp/submit) with a name, a short description, and a remote URL, GitHub repo, or npm package.
2. Wait until `https://plugmcp.ai/mcp/{slug}` returns 200 (remote endpoints are probed on the way in; signed-in submitters claim the listing).
3. Open a pull request that adds one object to `catalog/servers.json` (see format below). The validate-pr bot checks the PlugMCP URL, GitHub repo, and duplicates.
4. Within a day the curated markdown shelves refresh from PlugMCP. Quality-ranked rows appear under `servers/`; catalog entries that still exist on PlugMCP are preserved across publishes.

## Agent / bot PRs

Prefix the PR title with `🤖` (one robot emoji) when an agent opens the PR. Green checks still required; humans may merge faster when the bot is green.

## Catalog format

```json
{
  "name": "Name",
  "slug": "slug",
  "shelf": "browser",
  "plugmcp_url": "https://plugmcp.ai/mcp/slug",
  "github_url": "https://github.com/owner/repo",
  "blurb": "one line",
  "official": false,
  "remote": true,
  "stars": 0,
  "quality": 0,
  "install": null
}
```

Shelf ids: `official-core`, `browser`, `databases`, `design`, `developer-tools`, `security`, `mobile`, `cloud-ops`.

## Rules

1. One entry per PR when you can.
2. Link the PlugMCP page as `https://plugmcp.ai/mcp/{slug}` (never `?q=`) and the publisher GitHub repo.
3. Prefer the official or clearly maintained project. Skip mirrors and empty forks.
4. Keep the description to one plain sentence. No emojis in the list body unless they are already in the product name.
5. Do not vendor third-party MCP server source into this repository.
6. Do not hand-edit `servers/*.md` for lasting changes — those files are cron-owned.

## Nominate without a PR

Open a [Discussion](https://github.com/plugmcp-ai/awesome-mcp-servers/discussions) titled "Nominate: " with the publisher URL, or submit on PlugMCP only and wait for the daily shelf refresh.

## Skills

Third-party skill catalogs stay as pointers in `skills/README.md` and `catalog/skills.json`. PlugMCP-authored packs under `skills/*/SKILL.md` are copied from the site.

## Report a wrong listing

Use [plugmcp.ai/mcp/submit](https://plugmcp.ai/mcp/submit) to add a missing server, or email support@plugmcp.ai for spam and impersonators.
