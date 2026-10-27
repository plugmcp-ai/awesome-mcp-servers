# Contributing

Add servers and skills that agents actually use. Keep this shelf curated — not a dump of the full PlugMCP directory.

## Rules

1. One entry per PR when you can.
2. Link the PlugMCP page (`https://plugmcp.ai/mcp?q=...` or `/mcp/{slug}`) and the publisher GitHub repo.
3. Prefer the official or clearly maintained project. Skip mirrors and empty forks.
4. Keep the description to one plain sentence. No emojis in the list body unless they are already in the product name.
5. If the server is missing from PlugMCP, [submit it](https://plugmcp.ai/mcp/submit) first, then open the PR here.
6. Do not vendor third-party MCP server source into this repository.
7. Put the entry in the matching `servers/<shelf>.md` file **and** add the same object to `catalog/servers.json`.

## Format (markdown)

```md
- [Name](https://plugmcp.ai/mcp?q=name) · [repo](https://github.com/owner/repo) — one line
```

## Format (catalog)

```json
{
  "name": "Name",
  "shelf": "browser",
  "plugmcp_url": "https://plugmcp.ai/mcp?q=name",
  "github_url": "https://github.com/owner/repo",
  "blurb": "one line"
}
```

Shelf ids: `official-core`, `browser`, `databases`, `design`, `developer-tools`, `security`, `mobile`, `cloud-ops`.

## Skills

- First-party PlugMCP skills go under `skills/<id>/SKILL.md` and `catalog/skills.json`.
- Third-party skill catalogs stay as pointers in `skills/README.md` only.

## Nominate without a PR

Open a [Discussion](https://github.com/plugmcp-ai/awesome-mcp-servers/discussions) titled “Nominate: &lt;server name&gt;” with the publisher URL.
