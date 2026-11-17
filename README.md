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
  <img src="https://img.shields.io/badge/updated-2026-11-17-informational" alt="Updated 2026-11-17" />
</p>

<p align="center">
  <a href="https://plugmcp.ai/mcp">Directory</a> ·
  <a href="https://plugmcp.ai/skills">Skills</a> ·
  <a href="https://plugmcp.ai/mcp/submit">Submit</a> ·
  <a href="CONTRIBUTING.md">Contribute</a>
</p>

Ranked MCP servers you can install in Cursor, Claude, and VS Code, checked against the PlugMCP directory. This repo keeps the usable shelf (~266 servers in markdown, 900 in the machine catalog, 400 skills). Search the full index at [plugmcp.ai/mcp](https://plugmcp.ai/mcp).

Updated 2026-11-17. Submit on PlugMCP first, then open a catalog PR — see [CONTRIBUTING.md](CONTRIBUTING.md).

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
- [Git](https://plugmcp.ai/mcp/modelcontextprotocol-server-git) · [repo](https://github.com/modelcontextprotocol/servers/tree/main/src/git) — The reference Git server from the Model Context Protocol project. It works on local repositories: it shows status, staged and unstaged. · local, Cursor, Claude
  `uvx mcp-server-git`
- [Filesystem](https://plugmcp.ai/mcp/modelcontextprotocol-server-filesystem) · [repo](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) — The reference filesystem server from the Model Context Protocol project. It reads and writes text and media files, edits files with diffs,. · local, Cursor, Claude
  `npx -y @modelcontextprotocol/server-filesystem`
- [Memory](https://plugmcp.ai/mcp/modelcontextprotocol-server-memory) · [repo](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) — The reference memory server from the Model Context Protocol project. It keeps a knowledge graph in a local file: entities with. · local, Cursor, Claude
  `npx -y @modelcontextprotocol/server-memory`
- [Firecrawl](https://plugmcp.ai/mcp/firecrawl-firecrawl-mcp-server) · [repo](https://github.com/firecrawl/firecrawl-mcp-server) — Search the web and get full page content. Search an index built for coding agents: GitHub issues, merged pull requests, READMEs, and docs.. · Cursor, Claude, VS Code
- [Time](https://plugmcp.ai/mcp/modelcontextprotocol-server-time) · [repo](https://github.com/modelcontextprotocol/servers/tree/main/src/time) — The reference time server from the Model Context Protocol project. It tells the agent the current time in any IANA timezone and converts a. · local, Cursor, Claude
  `uvx mcp-server-time`
- [Fetch](https://plugmcp.ai/mcp/modelcontextprotocol-server-fetch) · [repo](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) — The reference fetch server from the Model Context Protocol project. Give it a URL and it fetches the page and converts the HTML to. · local, Cursor, Claude
  `uvx mcp-server-fetch`
- [Sequential Thinking](https://plugmcp.ai/mcp/modelcontextprotocol-server-sequential-thinking) · [repo](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking) — The reference sequential thinking server from the Model Context Protocol project. It gives the agent one tool for working through a. · local, Cursor, Claude
  `npx -y @modelcontextprotocol/server-sequential-thinking`
- [Exa](https://plugmcp.ai/mcp/ai.exa-exa) · [repo](https://github.com/exa-labs/exa-mcp-server) — Exa MCP Server Connect AI agents to Exa for web search, content fetching, and multi-step research. Documentation · NPM Package · Get your. · official, remote, Cursor, Claude, VS Code
  `remote https://mcp.exa.ai/mcp`
- [Chrome DevTools MCP](https://plugmcp.ai/mcp/io.github.secforge-chrome-devtools-mcp) · [repo](https://github.com/ChromeDevTools/chrome-devtools-mcp) — Get performance insights: Uses [Chrome. Advanced browser debugging: Analyze network requests, take screenshots and. Reliable automation.. · official, local, Cursor, Claude
  `npx -y @secforge/chrome-devtools-mcp@1.10.1004`
- [Github](https://plugmcp.ai/mcp/github-github-mcp-server) · [repo](https://github.com/github/github-mcp-server) — GitHub's official MCP Server [![Go Report Card](https://goreportcard.com/badge/github.com/github/github-mcp-server/v2)](https://goreportcar. · Cursor, Claude, VS Code
- [Notion](https://plugmcp.ai/mcp/io.github.awkoy-notion-mcp-server) · [repo](https://github.com/awkoy/notion-mcp-server) — Token-auth Notion MCP: pages, databases, blocks, comments, files. Runs headless in CI and agents. · official, local, Cursor, Claude, VS Code
  `npx -y notion-mcp-server@3.4.0`
- [Apify MCP Server](https://plugmcp.ai/mcp/com.apify-apify-mcp-server) · [repo](https://github.com/apify/apify-mcp-server) — mcp.apify.com The Apify Model Context Protocol (MCP) server at enables your AI agents to extract data from social media, search engines,. · official, remote, Cursor, Claude, VS Code
  `remote https://mcp.apify.com/`
- [Everything](https://plugmcp.ai/mcp/modelcontextprotocol-server-everything) · [repo](https://github.com/modelcontextprotocol/servers/tree/main/src/everything) — The reference test server from the Model Context Protocol project. It implements every part of the protocol, including tools, resources,. · local, Cursor, Claude
  `npx -y @modelcontextprotocol/server-everything`
- [Github](https://plugmcp.ai/mcp/io.github.dave-london-github) · [repo](https://github.com/Dave-London/Pare) — Pare Reliable, structured CLI output for AI agents — no more parsing fragile terminal text. Pare provides servers that wrap common. · official, local, Cursor, Claude, VS Code
  `npx -y @paretools/github@0.7.1`
- [GitHub](https://plugmcp.ai/mcp/io.github.aifity-omnigit-mcp) · [repo](https://github.com/aifity/omnigit-mcp) — Connect AI assistants to GitHub - manage repos, issues, PRs, workflows, and git operations. · official, local, Cursor, Claude, VS Code
  `docker run -i --rm ghcr.io/aifity/omnigit-mcp:0.6.0`
- [MCP Server Cloudflare](https://plugmcp.ai/mcp/com.cloudflare.mcp-mcp) · [repo](https://github.com/cloudflare/mcp-server-cloudflare) — Cloudflare MCP servers # Cloudflare MCP Server Model Context Protocol (MCP) is a [new, standardized. · official, remote, Cursor, Claude, VS Code
  `remote https://docs.mcp.cloudflare.com/mcp`
- [RenCosta2025 Context7fork](https://plugmcp.ai/mcp/ai.smithery-rencosta2025-context7fork) · [repo](https://github.com/renCosta2025/context7fork) — 1⃣ Write your prompt naturally. 2⃣ Tell the LLM to use context7. 3⃣ Get working code answers · official, remote, Cursor, Claude, VS Code
  `remote https://server.smithery.ai/@renCosta2025/context7fork/mcp`

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

- [Obsidian Skills](https://plugmcp.ai/mcp/obsidianmd-obsidian-skills) · [repo](https://github.com/obsidianmd/obsidian-skills) — Agent Skills for use with Obsidian. These skills follow the so they can be used by any skills-compatible agent, including Claude Code,. · Cursor, Claude
- [Electric Pglite](https://plugmcp.ai/mcp/electric-sql-electric-pglite) · [repo](https://github.com/electric-sql/electric-pglite) — PGlite - the WASM build of Postgres from Electric . Build reactive, realtime, local-first apps directly on Postgres. --> · Cursor, Claude
- [Electric Pglite](https://plugmcp.ai/mcp/neondatabase-electric-pglite) · [repo](https://github.com/neondatabase/electric-pglite) — PGlite - the WASM build of Postgres from Electric . Build reactive, realtime, local-first apps directly on Postgres. --> · Cursor, Claude
- [Garden Skills](https://plugmcp.ai/mcp/conardli-garden-skills) · [repo](https://github.com/ConardLi/garden-skills) — ConardLi's open-source Skills collection, featuring web design, knowledge retrieval, image generation, and more. <div align="center"> #. · Cursor, Claude
- [Pansou](https://plugmcp.ai/mcp/fish2018-pansou) · [repo](https://github.com/fish2018/pansou) — PanSou是一款高性能的网盘资源搜索API服务，支持TG频道和插件搜索。系统设计以性能和可扩展性为核心，支持多频道多插件并发搜索、结果智能排序和网盘类型分类。docker集成前后端，一键启动，开箱即用。仅供学习研究，请勿以各种形式用于盈利目的。. · Cursor, Claude
- [Vim](https://plugmcp.ai/mcp/vscodevim-vim) · [repo](https://github.com/VSCodeVim/Vim) — VSCodeVim Vim emulation for Visual Studio Code --> VSCodeVim is a Vim emulator for . - Our outlines the breaking/major/minor updates. · Cursor, Claude
- [Omniget](https://plugmcp.ai/mcp/tonhowtf-omniget) · [repo](https://github.com/tonhowtf/omniget) — OmniGet is a free, open source (GPL-3.0) desktop app for Windows, macOS and Linux. It downloads video, audio, images, torrents and files. · Cursor, Claude
- [OpenAny](https://plugmcp.ai/mcp/si.openany-openany) · [repo](https://github.com/openanysi/openany-mcp) — B2A: one MCP endpoint for 3,200+ APIs (social, SEO, crypto, company, finance, legal) and 168+ models (GPT, Claude, Gemini, DeepSeek, Qwen,. · official, remote, Cursor, Claude, VS Code
  `remote https://mcp.openany.si/`
- [AutoRAG](https://plugmcp.ai/mcp/marker-inc-korea-autorag) · [repo](https://github.com/Marker-Inc-Korea/AutoRAG) — Your Personal Librarian Agent. Ask anything on your computer, organize files, remember important info and files. # AutoRAG Agent **Now. · Cursor, Claude
- [Pinky](https://plugmcp.ai/mcp/diygod-pinky) · [repo](https://github.com/DIYgod/pinky) — Pinky Let AI use your iPhone or Android phone, with you in the loop: any agent from macOS, Windows or Linux, or Pinky itself, right on the. · Cursor, Claude
- [Emp3r0r](https://plugmcp.ai/mcp/jm33-m0-emp3r0r) · [repo](https://github.com/jm33-m0/emp3r0r) — Stealthy, Linux-first multi-operator C2 with a self-healing mesh, in-memory execution, and an AI-driven MCP assistant. # emp3r0r <img. · Cursor, Claude
- [MCP Adapter](https://plugmcp.ai/mcp/wordpress-mcp-adapter-mcpso) · [repo](https://github.com/WordPress/mcp-adapter) — Ability-to-MCP conversion — WordPress abilities automatically become MCP , , and. Multi-server management — run multiple MCP servers, each. · Cursor, Claude
- [Docker MCP Tutorial](https://plugmcp.ai/mcp/thenetworkchuck-docker-mcp-tutorial) · [repo](https://github.com/theNetworkChuck/docker-mcp-tutorial) — Complete tutorial materials for building MCP servers with Docker - from NetworkChuck's video # 🚀 Docker MCP Tutorial - Build AI Tools. · Cursor, Claude
- [Remocn](https://plugmcp.ai/mcp/remocn-remocn) · [repo](https://github.com/Remocn/remocn) — Production-ready animations, transitions, backgrounds, and scenes for Remotion <p align="center"> <img src="./public/hero.png" alt="remocn. · Cursor, Claude, VS Code
- [Animateicons](https://plugmcp.ai/mcp/avijit07x-animateicons) · [repo](https://github.com/Avijit07x/animateicons) — · · · --- 1,500 free, open source animated icons for React, Vue, Angular and plain JavaScript. Every animation is hand-crafted and tuned. · Cursor, Claude, VS Code

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
