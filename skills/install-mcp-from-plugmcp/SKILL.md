---
name: install-mcp-from-plugmcp
description: Find an MCP server on PlugMCP and install it into Cursor, Claude, or VS Code.
---

# Install an MCP server from PlugMCP

## When to use

The user wants to add an MCP server to their agent and does not already have a publisher install snippet.

## Steps

1. Open the PlugMCP directory: https://plugmcp.ai/mcp
2. Search by name, tool, or category. Prefer Official, remote, or high-star results when several match.
3. Open the listing page. Note transport (remote vs local) and whether a host option exists.
4. Install:
   - **Cursor / Claude / VS Code:** use the listing **Add to** buttons, or copy the publisher snippet from the page.
   - **Remote URL:** paste the endpoint into the agent’s MCP connector settings.
   - **Local / stdio:** follow the publisher command on the listing (usually `npx` or `uvx`).
5. Confirm the agent lists the new tools. If install fails, check the listing’s docs link and the publisher repo.

## Links

- Directory: https://plugmcp.ai/mcp
- Skills catalog: https://plugmcp.ai/skills
- Curated shelf: https://github.com/plugmcp-ai/awesome-mcp-servers
