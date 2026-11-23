# Awesome MCP servers

<p align="center">
  <img src="logo.png" alt="PlugMCP" width="96" />
</p>

<p align="center">
  <strong>Best MCP servers for Cursor, Claude, and VS Code</strong><br />
  Ranked from PlugMCP · official and remote called out · skills included
</p>

<p align="center">
  <a href="https://github.com/plugmcp-ai/awesome-mcp-servers/stargazers"><img src="https://img.shields.io/github/stars/plugmcp-ai/awesome-mcp-servers?style=flat" alt="GitHub stars" /></a>
  <a href="https://plugmcp.ai/mcp"><img src="https://img.shields.io/badge/directory-plugmcp.ai-111111" alt="PlugMCP directory" /></a>
  <a href="https://plugmcp.ai/mcp/submit"><img src="https://img.shields.io/badge/submit-server-0a7" alt="Submit a server" /></a>
  <img src="https://img.shields.io/badge/updated-2026-11-23-informational" alt="Updated 2026-11-23" />
</p>

<p align="center">
  <a href="https://plugmcp.ai/mcp">Directory</a> ·
  <a href="https://plugmcp.ai/skills">Skills</a> ·
  <a href="https://plugmcp.ai/mcp/submit">Submit</a> ·
  <a href="CONTRIBUTING.md">Contribute</a>
</p>

Ranked MCP servers you can install in Cursor, Claude, and VS Code, checked against the PlugMCP directory. This repo keeps the usable shelf (~280 servers in markdown, 900 in the machine catalog, 400 skills). Search the full index at [plugmcp.ai/mcp](https://plugmcp.ai/mcp).

Updated 2026-11-23. Submit on PlugMCP first, then open a catalog PR — see [CONTRIBUTING.md](CONTRIBUTING.md).

## Start here

Servers people actually search for. Each row links to its PlugMCP page (install, tools, host option) and the publisher repo.

- [Context7](https://plugmcp.ai/mcp/upstash-context7) · [repo](https://github.com/upstash/context7) — CLI + Skills — installs a skill that guides your agent to fetch docs using ctx7 CLI commands (no MCP required). MCP — registers a Context7. · Cursor, Claude, VS Code
- [Context7](https://plugmcp.ai/mcp/io.github.upstash-context7) · [repo](https://github.com/upstash/context7) — CLI + Skills — installs a skill that guides your agent to fetch docs using ctx7 CLI commands (no MCP required). MCP — registers a Context7. · official, remote, Cursor, Claude, VS Code
  `remote https://mcp.context7.com/mcp`
- [Scrapling MCP Server](https://plugmcp.ai/mcp/io.github.d4vinci-scrapling) · [repo](https://github.com/D4Vinci/Scrapling) — Effortless Web Scraping for the Modern Web Selection methods &middot; Fetchers &middot; Spiders &middot; Proxy Rotation &middot; CLI. · official, local, Cursor, Claude, VS Code
  `uvx scrapling==0.5.1`
- [World Monitor](https://plugmcp.ai/mcp/app.worldmonitor-mcp) · [repo](https://github.com/koala73/worldmonitor) — Live markets, conflicts, country risk, chokepoints, energy, and China decision signals. 93 tools. · official, remote, Cursor, Claude, VS Code
  `remote https://worldmonitor.app/mcp`
- [Chrome DevTools MCP](https://plugmcp.ai/mcp/io.github.chromedevtools-chrome-devtools-mcp) · [repo](https://github.com/ChromeDevTools/chrome-devtools-mcp) — Get performance insights: Uses [Chrome. Advanced browser debugging: Analyze network requests, take screenshots and. Reliable automation.. · official, local, Cursor, Claude, VS Code
  `npx -y chrome-devtools-mcp@1.13.0`
- [Codebase Memory](https://plugmcp.ai/mcp/io.github.deusdata-codebase-memory-mcp) · [repo](https://github.com/DeusData/codebase-memory-mcp) — 162 languages: vendored tree-sitter grammars compiled into the binary. No separate parser installation.. About 120× fewer tokens in the. · official, local, Cursor, Claude, VS Code
  `npx -y codebase-memory-mcp@0.12.1`
- [Reactive Resume](https://plugmcp.ai/mcp/io.github.amruthpillai-reactive-resume) · [repo](https://github.com/reactive-resume/reactive-resume) — > [!IMPORTANT] > Repository moved: Reactive Resume now lives at on GitHub. > Docker Hub stays at amruthpillai/reactive-resume. GHCR images. · official, remote, Cursor, Claude, VS Code
  `remote https://rxresu.me/mcp`
- [GitHub](https://plugmcp.ai/mcp/io.github.github-github-mcp-server) · [repo](https://github.com/github/github-mcp-server) — Connect AI assistants to GitHub - manage repos, issues, PRs, and workflows through natural language. [![Go Report. · official, remote, Cursor, Claude, VS Code
  `remote https://api.githubcopilot.com/mcp/`
- [Mind Map MCP](https://plugmcp.ai/mcp/mindmap-mcp) · [repo](https://github.com/plugmcp-ai/mindmap-mcp) — Turn long answers into mind maps and flowcharts inside the chat. Edit, restyle and comment; the AI updates the same diagram. · local, Cursor, Claude, VS Code
  `npx -y mindmap-mcp`
- [Filesystem](https://plugmcp.ai/mcp/modelcontextprotocol-server-filesystem) · [repo](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) — The reference filesystem server from the Model Context Protocol project. It reads and writes text and media files, edits files with diffs,. · local, Cursor, Claude
  `npx -y @modelcontextprotocol/server-filesystem`
- [Git](https://plugmcp.ai/mcp/modelcontextprotocol-server-git) · [repo](https://github.com/modelcontextprotocol/servers/tree/main/src/git) — The reference Git server from the Model Context Protocol project. It works on local repositories: it shows status, staged and unstaged. · local, Cursor, Claude
  `uvx mcp-server-git`
- [Memory](https://plugmcp.ai/mcp/modelcontextprotocol-server-memory) · [repo](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) — The reference memory server from the Model Context Protocol project. It keeps a knowledge graph in a local file: entities with. · local, Cursor, Claude
  `npx -y @modelcontextprotocol/server-memory`
- [Firecrawl](https://plugmcp.ai/mcp/firecrawl-firecrawl-mcp-server) · [repo](https://github.com/firecrawl/firecrawl-mcp-server) — Search the web and get full page content. Search an index built for coding agents: GitHub issues, merged pull requests, READMEs, and docs.. · Cursor, Claude, VS Code
- [Agent Manager.dev Documentation](https://plugmcp.ai/mcp/io.github.yoanwai-agent-manager-docs) · [repo](https://github.com/YoanWai/agent-manager-site) — Docs for agent-manager, the terminal UI that runs AI coding agents as live tmux sessions. · official, remote, Cursor, Claude, VS Code
  `remote https://agent-manager.dev/mcp`
- [Exa](https://plugmcp.ai/mcp/ai.exa-exa) · [repo](https://github.com/exa-labs/exa-mcp-server) — Exa MCP Server Connect AI agents to Exa for web search, content fetching, and multi-step research. Documentation · NPM Package · Get your. · official, remote, Cursor, Claude, VS Code
  `remote https://mcp.exa.ai/mcp`
- [Time](https://plugmcp.ai/mcp/modelcontextprotocol-server-time) · [repo](https://github.com/modelcontextprotocol/servers/tree/main/src/time) — The reference time server from the Model Context Protocol project. It tells the agent the current time in any IANA timezone and converts a. · local, Cursor, Claude
  `uvx mcp-server-time`
- [Sequential Thinking](https://plugmcp.ai/mcp/modelcontextprotocol-server-sequential-thinking) · [repo](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking) — The reference sequential thinking server from the Model Context Protocol project. It gives the agent one tool for working through a. · local, Cursor, Claude
  `npx -y @modelcontextprotocol/server-sequential-thinking`
- [Fetch](https://plugmcp.ai/mcp/modelcontextprotocol-server-fetch) · [repo](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) — The reference fetch server from the Model Context Protocol project. Give it a URL and it fetches the page and converts the HTML to. · local, Cursor, Claude
  `uvx mcp-server-fetch`
- [Chrome DevTools MCP](https://plugmcp.ai/mcp/io.github.secforge-chrome-devtools-mcp) · [repo](https://github.com/ChromeDevTools/chrome-devtools-mcp) — Get performance insights: Uses [Chrome. Advanced browser debugging: Analyze network requests, take screenshots and. Reliable automation.. · official, local, Cursor, Claude
  `npx -y @secforge/chrome-devtools-mcp@1.10.1004`
- [Github](https://plugmcp.ai/mcp/github-github-mcp-server) · [repo](https://github.com/github/github-mcp-server) — GitHub's official MCP Server [![Go Report Card](https://goreportcard.com/badge/github.com/github/github-mcp-server/v2)](https://goreportcar. · official, Cursor, Claude, VS Code
- [Notion](https://plugmcp.ai/mcp/io.github.awkoy-notion-mcp-server) · [repo](https://github.com/awkoy/notion-mcp-server) — Token-auth Notion MCP: pages, databases, blocks, comments, files. Runs headless in CI and agents. · official, local, Cursor, Claude, VS Code
  `npx -y notion-mcp-server@3.5.0`
- [Apify](https://plugmcp.ai/mcp/com.apify-apify-mcp-server) · [repo](https://github.com/apify/apify-mcp-server) — mcp.apify.com The Apify Model Context Protocol (MCP) server at enables your AI agents to extract data from social media, search engines,. · official, remote, Cursor, Claude, VS Code
  `remote https://mcp.apify.com/`
- [Misakanet](https://plugmcp.ai/mcp/io.github.ikalus1988-misakanet) · [repo](https://github.com/Ikalus1988/MisakaNet) — Failure-memory layer for coding agents: search evidence-rated failure lessons by error text. <div align="right"> [English](README.md) |. · official, remote, Cursor, Claude, VS Code
  `remote https://misakanet.org/mcp`
- [Everything](https://plugmcp.ai/mcp/modelcontextprotocol-server-everything) · [repo](https://github.com/modelcontextprotocol/servers/tree/main/src/everything) — The reference test server from the Model Context Protocol project. It implements every part of the protocol, including tools, resources,. · local, Cursor, Claude
  `npx -y @modelcontextprotocol/server-everything`
- [Github](https://plugmcp.ai/mcp/io.github.dave-london-github) · [repo](https://github.com/Dave-London/Pare) — Pare Reliable, structured CLI output for AI agents — no more parsing fragile terminal text. Pare provides servers that wrap common. · official, local, Cursor, Claude, VS Code
  `npx -y @paretools/github@0.7.1`

## Jump to

- [MCP servers for Cursor](servers/cursor.md)
- [MCP servers for Claude](servers/claude.md)
- [Official MCP servers](servers/official.md)
- [Remote MCP servers](servers/remote.md)
- [Browser and web](servers/browser.md)
- [Databases](servers/databases.md)
- [Design and product](servers/design.md)
- [Developer tools](servers/developer-tools.md)
- [Security](servers/security.md)
- [Mobile and devices](servers/mobile.md)
- [Cloud, ops, and search](servers/cloud-ops.md)
- [Agent skills](skills/README.md)
- [New this week](#new-this-week)

## Shelves

| Shelf | File |
| --- | --- |
| Official and core | [servers/official-core.md](servers/official-core.md) |
| Browser and web | [servers/browser.md](servers/browser.md) |
| Databases | [servers/databases.md](servers/databases.md) |
| Design and product | [servers/design.md](servers/design.md) |
| Developer tools | [servers/developer-tools.md](servers/developer-tools.md) |
| Security | [servers/security.md](servers/security.md) |
| Mobile and devices | [servers/mobile.md](servers/mobile.md) |
| Cloud, ops, and search | [servers/cloud-ops.md](servers/cloud-ops.md) |
| MCP servers for Cursor | [servers/cursor.md](servers/cursor.md) |
| MCP servers for Claude | [servers/claude.md](servers/claude.md) |
| Official MCP servers | [servers/official.md](servers/official.md) |
| Remote MCP servers | [servers/remote.md](servers/remote.md) |
| Agent skills | [skills/README.md](skills/README.md) |

Machine catalog: [catalog/servers.json](catalog/servers.json) · [catalog/skills.json](catalog/skills.json)

## New this week

- [Mind Map MCP](https://plugmcp.ai/mcp/mindmap-mcp) · [repo](https://github.com/plugmcp-ai/mindmap-mcp) — Turn long answers into mind maps and flowcharts inside the chat. Edit, restyle and comment; the AI updates the same diagram. · local, Cursor, Claude, VS Code
  `npx -y mindmap-mcp`
- [Firecrawl](https://plugmcp.ai/mcp/firecrawl-firecrawl) · [repo](https://github.com/firecrawl/firecrawl) — Search: Find information across the web. Scrape: Clean data from any page. Interact: Click, navigate, and operate pages · Cursor, Claude
- [Paseo](https://plugmcp.ai/mcp/getpaseo-paseo) · [repo](https://github.com/getpaseo/paseo) — Paseo English · 简体中文 · 日本語 · 한국어 One interface for Claude Code, Codex, Copilot, OpenCode, Pi, Antigravity, and Muse Code agents. Paseo is. · Cursor, Claude
- [ARTEX](https://plugmcp.ai/mcp/baarai-artex) · [repo](https://github.com/BaaRai/ARTEX) — ARTEX - AI autonomous penetration testing system (English translation; upstream: Autumn-27/ARTEX, AGPL-3.0) <div align="center"> <img. · Cursor, Claude
- [Playwright Cli](https://plugmcp.ai/mcp/microsoft-playwright-cli) · [repo](https://github.com/microsoft/playwright-cli) — Token-efficient. Does not force page data into LLM. · Cursor, Claude
- [MR Office](https://plugmcp.ai/mcp/ai.mroffice-office) · [repo](https://github.com/XinaTian/MROffice) — Create, open and edit documents, spreadsheets and PDFs in MR Office's editor, inline in chat. # MR Office <p align="center"><sub>🌐 <a. · official, remote, Cursor, Claude, VS Code
  `remote https://mcp.mroffice.ai/mcp`
- [Blender Ai MCP Addon](https://plugmcp.ai/mcp/bookwjitchieni1986-blender-ai-mcp-addon) · [repo](https://github.com/bookwjitchieni1986/blender-ai-mcp-addon) — AI assistant and MCP server for Blender: visual chat, scene tools, multi-agent workflows. Works with ChatGPT/GPT, Claude, Gemini, Ollama,. · Cursor, Claude
- [Fast Anything](https://plugmcp.ai/mcp/el4cteo-fast-anything) · [repo](https://github.com/EL4CTEO/fast-anything) — Don't rewrite it in Rust. Rewrite the 5% that's slow. Rewriting a whole app in Rust costs months, minute-long compiles and gigabytes of. · Cursor, Claude
- [IncarnaMind](https://plugmcp.ai/mcp/incarnamind-incarnamind) · [repo](https://github.com/IncarnaMind/IncarnaMind) — English · 简体中文 IncarnaMind The artifact layer for any agent: what your AI writes, checked against your files. A free, open-source desktop. · Cursor, Claude
- [NTSCRT](https://plugmcp.ai/mcp/finnmckenty-ntscrt) · [repo](https://github.com/finnmckenty/NTSCRT) — Run video and images through simulated video gear on Mac and Windows: digital camera compression, TV signal, VHS tape and CRT screen. #. · Cursor, Claude
- [Agy Fast](https://plugmcp.ai/mcp/ink-q-agy-fast) · [repo](https://github.com/INK-Q/agy-fast) — Non-invasive MCP accelerator plugin for Google Antigravity (CLI/Desktop/IDE): cuts LLM turns (-34%), token quota (-31%), and upload. · Cursor, Claude
- [ProtoForge](https://plugmcp.ai/mcp/suoten-protoforge) · [repo](https://github.com/suoten/ProtoForge) — ProtoForge 一台电脑 = 32 种工业设备 ProtoForge — an open-source (MIT) industrial protocol simulator: 32 protocols (Modbus/S7/OPC-UA/IEC. · Cursor, Claude
- [Pysad](https://plugmcp.ai/mcp/selimfirat-pysad) · [repo](https://github.com/selimfirat/pysad) — English · 简体中文 One pass. Every outlier. Streaming anomaly detection in Python for multivariate and univariate data streams. PySAD scores. · Cursor, Claude
- [Docker MCP Tutorial](https://plugmcp.ai/mcp/thenetworkchuck-docker-mcp-tutorial) · [repo](https://github.com/theNetworkChuck/docker-mcp-tutorial) — Complete tutorial materials for building MCP servers with Docker - from NetworkChuck's video # 🚀 Docker MCP Tutorial - Build AI Tools. · Cursor, Claude
- [Firefox](https://plugmcp.ai/mcp/mozilla-firefox-mcp) · [repo](https://github.com/mozilla/firefox-mcp) — Model Context Protocol (MCP) server that lets AI agents browse the web and debug web pages with Firefox # Firefox MCP [![npm. · local, Cursor, Claude
  `npx -y @mozilla/firefox-mcp@0.11.0`

## Browse on PlugMCP

| Go here | For |
| --- | --- |
| [MCP directory](https://plugmcp.ai/mcp) | Search every server |
| [Best for Cursor](https://plugmcp.ai/best/cursor-mcp-servers) | Usable Cursor picks |
| [Best for Claude](https://plugmcp.ai/best/claude-mcp-servers) | Usable Claude picks |
| [Agent skills](https://plugmcp.ai/skills) | SKILL.md packs |
| [Host](https://plugmcp.ai/host) | Run a server with keys and logs |
| [Submit](https://plugmcp.ai/mcp/submit) | Add a server we missed |

## Install a server

1. Open the PlugMCP page from a shelf link (`/mcp/{slug}`).
2. Use **Add to Cursor**, **Claude**, or **VS Code**, or copy the publisher snippet.
3. Or choose **Run on PlugMCP** to host a copy with keys and call logs.

## Why this list

- Each entry links to its indexable PlugMCP page and the publisher repo.
- Shelves are capped and sorted by quality, then stars — not a dump of the full directory.
- We skip star-farm mirrors and empty forks. Prefer the official or clearly maintained server.
- We do not vendor third-party MCP server source here.
- Community additions: [Submit](https://plugmcp.ai/mcp/submit) so the listing is live, then open a PR that adds the object to `catalog/servers.json`. A daily job refreshes curated shelves; catalog entries that still exist on PlugMCP are kept.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Entries stay with their publishers. This list text is [CC0 1.0](LICENSE). PlugMCP-authored skill packs under `skills/` are also CC0 unless a file says otherwise.
