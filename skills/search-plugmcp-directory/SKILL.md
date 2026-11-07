---
name: search-plugmcp-directory
description: Search 70,000+ MCP servers and agent skills from your agent with the PlugMCP directory MCP, then get the exact install config for Cursor, Claude, VS Code, and other clients.
---

# Search the PlugMCP directory from an agent

## When to use

The user asks which MCP server to use for a task, wants to compare servers, or needs an install snippet for a named server.

## Connect once

- Remote (preferred): add `https://plugmcp.ai/mcp-server` as a streamable HTTP MCP server.
  - Claude Code: `claude mcp add --transport http plugmcp https://plugmcp.ai/mcp-server`
  - Cursor or VS Code: add `{ "url": "https://plugmcp.ai/mcp-server" }` under the server name `plugmcp`.
- Local stdio: `npx -y plugmcp-mcp` proxies the same tools.
- No key is needed for 20 calls a day, at most 5 a minute. A free directory key from https://plugmcp.ai/directory-mcp raises it to 400 a day, paced at 15 a minute and 60 an hour. Send it as `Authorization: Bearer <key>`, or set `PLUGMCP_API_KEY` for the stdio package.
- When a call says a limit was reached, wait the time it gives before retrying. Do not loop.

## Steps

1. The user describes a task: call `recommend_servers`. The user names a product: call `search_servers`.
2. Prefer results marked official or verified, with a recent health check, before raw star count.
3. Call `get_server` for tools, auth, and health when the choice is close. Use `compare_servers` for two to four candidates.
4. Call `get_install` with the user's client (`cursor`, `claude-code`, `claude-desktop`, `vscode`, `windsurf`, `chatgpt`, `codex`, `gemini-cli`, `grok`, `grok-bot`) and apply the config it returns.
5. For skills, use `search_skills` and `get_skill`.
6. Tell the user which server you picked and why in one sentence.

## Links

- Guide: https://plugmcp.ai/directory-mcp
- Server card: https://plugmcp.ai/.well-known/mcp/server-card.json
- Auth: https://plugmcp.ai/auth.md
