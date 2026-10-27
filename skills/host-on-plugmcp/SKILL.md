---
name: host-on-plugmcp
description: Host an MCP server on PlugMCP with API keys and call logs.
---

# Host a server on PlugMCP

## When to use

The user wants a PlugMCP-hosted endpoint (`mcp.plugmcp.ai`) with keys and logs instead of only running a publisher install locally.

## Steps

1. Open Host: https://plugmcp.ai/host
2. Sign in and create a server (or open an existing one in the app).
3. Wire tools (HTTP or app), set a voice policy if needed, then publish.
4. Copy the endpoint URL (`https://mcp.plugmcp.ai/s/{slug}`) and create an API key (`pb_live_…`). Show the key once; store only the hash on the server.
5. Add the endpoint to Cursor, Claude, ChatGPT, or VS Code with the key in the auth header the listing/docs specify.
6. Verify with a live call in the dashboard logs. Failures show as red rows with latency.

## Links

- Host: https://plugmcp.ai/host
- Pricing: https://plugmcp.ai/pricing
- Directory (find something to host or wrap): https://plugmcp.ai/mcp
