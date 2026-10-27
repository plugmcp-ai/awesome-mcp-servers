---
name: submit-mcp-server
description: Submit a missing MCP server so it appears on PlugMCP and can be added to the curated GitHub shelf.
---

# Submit an MCP server to PlugMCP

## When to use

The user found an MCP server that is missing from https://plugmcp.ai/mcp or wants it on the curated GitHub shelf.

## Steps

1. Confirm it is a real MCP server (tools/resources over MCP), not a random CLI.
2. Prefer the official publisher URL (GitHub, npm, PyPI, or docs site).
3. Submit at https://plugmcp.ai/mcp/submit with name, URL, and a one-line description.
4. After it appears in the directory, optionally open a PR on https://github.com/plugmcp-ai/awesome-mcp-servers:
   - Add one line under the right `servers/*.md` shelf.
   - Update `catalog/servers.json` with the same entry.
   - Follow [CONTRIBUTING.md](../../CONTRIBUTING.md).

## Links

- Submit: https://plugmcp.ai/mcp/submit
- Directory: https://plugmcp.ai/mcp
- Curated shelf: https://github.com/plugmcp-ai/awesome-mcp-servers
