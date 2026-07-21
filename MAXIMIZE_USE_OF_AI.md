# Maximize use of AI
Proposal for using AI in a way that maximizes its value.

## Goals

**Vision:** Adopt AI across the entire organization — not just engineering. Every department can benefit:

- **Engineering** — coding, QA, code review, documentation
- **Project management** — planning, tracking, reporting
- **Business development & sales** — research, outreach, proposals
- **Marketing** — content creation, campaigns, analysis
- **Finance & operations** — reports, data analysis, process automation

**Current focus:** Maximize the use of **Claude** first. Broader multi-tool adoption comes in later phases.

1. **Maximize Claude usage** for tasks needing better quality or higher context limits.
3. **Leverage multiple providers** (OpenAI, Claude, Gemini, DeepSeek, Grok, Mistral, etc.) based on the task.
4. **Optimize for efficiency** — minimize time, cost, token consumption, and compute, while maximizing response quality, speed, scalability, reliability, and privacy.
5. **Use other models inside Claude** — route tasks to third-party or local models from within the Claude workflow when they fit better.

> **Scope note:** Autonomous self-hosted AI agent frameworks (e.g. OpenClaw, Hermes) are out of scope for now — planned for a future phase.

## Claude Concepts

| Topic | What it is (plain language) | Learn more (▶ videos · 📄 official docs) |
|-------|-----------------------------|------------------------------------------|
| **CLAUDE.md** | Memory file Claude reads automatically. Holds project instructions and preferences. Lives at **project level** (repo root, shared with team) or **user level** (`~/.claude/`, applies to all your projects — Windows: `%USERPROFILE%\.claude\`, macOS: `/Users/<you>/.claude/`, Linux: `/home/<you>/.claude/`). | ▶ 🅰 [Claude Code best practices — Code w/ Claude](https://www.youtube.com/watch?v=gv0WHhKelSE) · ▶ [CLAUDE.md Best Practices](https://www.youtube.com/watch?v=x5WWFL0nIqk) · ▶ [Claude.md Explained](https://www.youtube.com/watch?v=xsa_LoDZ0bI) · 📄 [Memory (CLAUDE.md)](https://code.claude.com/docs/en/memory) · 📄 [Best practices](https://code.claude.com/docs/en/best-practices) |
| **claude.json** | Configuration file for settings. Comes in **local** (this machine only), **project** (shared with the repo), and **user** (all your projects) scopes. | 📄 [Settings](https://code.claude.com/docs/en/settings) |
| **SKILL.md** | Defines a reusable "skill" — a packaged capability Claude can load on demand to do a specialized task. | ▶ [Claude Agent Skills Explained](https://www.youtube.com/watch?v=fOxC44g8vig) · ▶ [Claude Skills Step-by-Step for Beginners](https://www.youtube.com/watch?v=wO8EboopboU) · ▶ [How AI agents & Claude skills work](https://www.youtube.com/watch?v=S_oN3vlzpMw) · 📄 [Skills (Claude Code)](https://code.claude.com/docs/en/skills) · 📄 [Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) |
| **.claude/** | Hidden folder holding Claude's config for a project. Contains **hooks** (auto-run scripts) configured in **settings.json**. | ▶ 🅰 [Mastering Claude Code in 30 Minutes](https://www.youtube.com/watch?v=AOfogJZ70OQ) · ▶ [Claude Code for Beginners [Full Course]](https://www.youtube.com/watch?v=gh2_PhgZGsM) · ▶ [27 Claude Code TIPS in 12 minutes](https://www.youtube.com/watch?v=-IozMG9x0dI) · 📄 [Settings](https://code.claude.com/docs/en/settings) |
| **Hooks** | Scripts that run automatically at certain events (e.g. before/after a tool runs). Set up in `settings.json`. Server-managed settings, plist / registry, or system-level `managed-settings.json` | ▶ [Hooks in Claude Code](https://www.youtube.com/watch?v=IkaPHiMDazM) · ▶ [Claude Code Hooks explained in 5 minutes](https://www.youtube.com/watch?v=6_y3AtkgjqA) · 📄 [Hooks guide](https://code.claude.com/docs/en/hooks-guide) · 📄 [Hooks reference](https://code.claude.com/docs/en/hooks) |
| **Agent / Subagent** | An AI worker that carries out a task on its own using tools. A helper agent the main agent spawns for a focused sub-task, keeping its own separate context. | ▶ 🅰 [Building the future of agents with Claude](https://www.youtube.com/watch?v=XuvKFsktX0Q) · ▶ [How AI agents & Claude skills work](https://www.youtube.com/watch?v=S_oN3vlzpMw) · ▶ [Claude Code Tutorial #8 — Subagents (Net Ninja)](https://www.youtube.com/watch?v=Phr7vBx9yFQ) · ▶ [Claude Code Sub Agents in 7 Minutes](https://www.youtube.com/watch?v=DNGxMX7ym44) · ▶ [Claude Code Subagents are Absolutely Insane](https://www.youtube.com/watch?v=sNI18nzwgn8) · 📄 [Subagents](https://code.claude.com/docs/en/sub-agents) · 📄 [Building effective agents](https://www.anthropic.com/research/building-effective-agents) |
| **MCP** | Model Context Protocol — a standard way to connect Claude to external tools, data, and services. | ▶ [All You Need To Know About MCP](https://www.youtube.com/watch?v=-UQ6OZywZ2I) · ▶ [The Ultimate Claude Code Guide — MCP, Skills & More](https://www.youtube.com/watch?v=uogzSxOw4LU) · 📄 [MCP in Claude Code](https://code.claude.com/docs/en/mcp) · 📄 [modelcontextprotocol.io](https://modelcontextprotocol.io/docs/getting-started/intro) |
| **Claude Design** | Guidance/system for building polished visual output (artifacts, UI). | ▶ [15 Powerful Claude Artifacts Use Cases](https://www.youtube.com/watch?v=UA2W4xTqQzs) · 📄 [What are Artifacts (Help Center)](https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them) |
| **Project** | A workspace grouping your files and config. Can bundle **skills** and be **shared with a team**. | ▶ [How to Use Claude Projects (Kevin Stratvert)](https://www.youtube.com/watch?v=w7_yWjYyxjE) · ▶ [FULL Claude Tutorial for Beginners 2026](https://www.youtube.com/watch?v=rRrBbyv3ChM) · ▶ [Full Claude Tutorial: Beginner to Advanced in 19 Min](https://www.youtube.com/watch?v=WSPChlfxJyA) · 📄 [What are Projects (Help Center)](https://support.claude.com/en/articles/9517075-what-are-projects) |
| **Plugin** | An add-on that extends Claude with extra commands, skills, or integrations. Bundle one or more skills into a Plugin. Such as BA Plugin, QA Plugin, Coding Plugin, Sales Plugin, HR Plugin | ▶ [The Ultimate Claude Code Guide — MCP, Skills & More](https://www.youtube.com/watch?v=uogzSxOw4LU) · ▶ [Claude Code Tutorial playlist (Net Ninja)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g4YJeBqChhFJwKQ9TRiivY) · 📄 [Plugins](https://code.claude.com/docs/en/plugins) |
| **Claude Code** | The coding tool. Available as **CLI**, **Desktop**, **IDE** extension, and **Web** (claude.ai/code). | ▶ 🅰 [Mastering Claude Code in 30 Minutes](https://www.youtube.com/watch?v=AOfogJZ70OQ) · ▶ [Claude Code for Beginners [Full Course]](https://www.youtube.com/watch?v=gh2_PhgZGsM) · ▶ [How Anthropic Employees ACTUALLY Use Claude Code](https://www.youtube.com/watch?v=pRfIWmddRsE) · 📄 [Claude Code docs](https://code.claude.com/docs/en/overview) · 📄 [Product page](https://claude.com/claude-code) |
| **Context window** | The amount of text Claude can "remember" at once. Manage it with **/compact** (summarize), **/clear** (reset), and **/context** (check usage). | ▶ [Context Management in Claude Code](https://www.youtube.com/watch?v=eW3oTyfeWZ0) · ▶ 🅰 [Mastering Claude Code in 30 Minutes](https://www.youtube.com/watch?v=AOfogJZ70OQ) · 📄 [Context window](https://code.claude.com/docs/en/context-window) |
| **Caveman** | A compressed communication mode that cuts token usage by trimming filler words. | ▶ [Caveman AI Skill in Claude](https://www.youtube.com/watch?v=jf1sv2geEWo) · 📄 [GitHub](https://github.com/juliusbrussee/caveman) |
| **Code review** | Feature that reviews your code changes for bugs and improvements. | ▶ 🅰 [Claude Code best practices — Code w/ Claude](https://www.youtube.com/watch?v=gv0WHhKelSE) · 📄 [Code review docs](https://code.claude.com/docs/en/code-review) · 📄 [Announcement blog](https://claude.com/blog/code-review) |
| **API** | The Claude API (formerly Anthropic API) — programmatic access to send requests to Claude models and build your own apps. | ▶ 🅰 [Your first API call to Claude](https://www.youtube.com/watch?v=j0ftK_R5DTs) · 📄 [Claude Docs home](https://platform.claude.com/docs/en/home) |
| **Agent loop** | The repeating cycle an agent runs: gather context → take action (call tools) → verify results → repeat until the task is done. | ▶ 🅰 [The Claude agent loop explained](https://www.youtube.com/watch?v=tBIdyIoCQVU) · 📄 [Agent loop (Agent SDK)](https://code.claude.com/docs/en/agent-sdk/agent-loop) |
| **Tool / Server tool / Client tool** | Tools give Claude actions beyond text. **Server tools** run on Anthropic's servers (e.g. web search, code execution). **Client tools** run on your side — you execute them and return the result to Claude. | ▶ 🅰 [What is tool use on the Claude Developer Platform?](https://www.youtube.com/watch?v=Ao759wXbRc0) · ▶ 🅰 [Claude's built-in tools: web search, code execution, and web fetch](https://www.youtube.com/watch?v=pm8iwdSIs3M) · 📄 [Tool use overview](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview) · 📄 [Tools (managed agents)](https://platform.claude.com/docs/en/managed-agents/tools) |
| **Managed agents** | Server-hosted agents Anthropic runs for you in a managed sandbox — you define the agent, Anthropic handles the execution environment, tools, and scaling. | ▶ 🅰 [What are managed agents on the Claude Developer Platform?](https://www.youtube.com/watch?v=haeslvB0zpg) · ▶ 🅰 [Building your first Claude managed agent](https://www.youtube.com/watch?v=1Rl3gZrlQJo) · ▶ 🅰 [How Notion built with Claude Managed Agents](https://www.youtube.com/watch?v=45hPRdfDEsI) · 📄 [Managed agents overview](https://platform.claude.com/docs/en/managed-agents/overview) · 📄 [Engineering deep dive](https://www.anthropic.com/engineering/managed-agents) · 📄 [Announcement blog](https://claude.com/blog/claude-managed-agents) |
| **Cowork** | A workspace where Claude works alongside you like a teammate on tasks, across web and mobile. | 📄 [Intro to Claude Cowork (Academy course)](https://anthropic.skilljar.com/introduction-to-claude-cowork) · 📄 [Cowork product page](https://claude.com/product/cowork) · 📄 [Cowork on web & mobile (blog)](https://claude.com/blog/cowork-web-mobile) |
| **Eval** | Testing a skill or agent against example cases to measure how well it works and refine it — teach, test, measure, improve. | 📄 [Teach Claude your way of working using Skills](https://claude.com/resources/tutorials/teach-claude-your-way-of-working-using-skills) · 📄 [Skill Creator](https://claude.com/plugins/skill-creator) · 📄 [Improving Skill Creator: test, measure, refine (blog)](https://claude.com/blog/improving-skill-creator-test-measure-and-refine-agent-skills) · 📄 [Cowork evals module (Academy)](https://anthropic.skilljar.com/introduction-to-claude-cowork/485949) · 📄 [Skill Evals tutorial (Conduction)](https://www.conduction.nl/academy/claude-skills-tutorial-3-skill-evals/) |
| **`@` · `/` · `#` (input prefixes)** | Type at the **start of the prompt** to open a menu. **`@`** → file-path autocomplete (mention a file). **`/`** → commands & skills. **`#`** → quick-add a note to memory (CLAUDE.md). | 📄 [Interactive mode](https://code.claude.com/docs/en/interactive-mode) · 📄 [Memory (#)](https://code.claude.com/docs/en/memory) · 📄 [Commands](https://code.claude.com/docs/en/commands) |
| **Shift + Tab** | Cycle **permission modes**: `default` (Manual) → `acceptEdits` (auto-accept edits) → `plan` (plan first, no edits) → any others you enable (`auto`, `bypassPermissions`). | 📄 [Interactive mode](https://code.claude.com/docs/en/interactive-mode) · 📄 [Permission modes](https://code.claude.com/docs/en/permission-modes) |
| **Esc** | Interrupt Claude mid-turn — stops the current response or tool call, keeps work done so far. If a dialog (e.g. permission prompt) is open, closes the dialog instead. | 📄 [Interactive mode](https://code.claude.com/docs/en/interactive-mode) |
| **Esc Esc (double Esc)** | Press **`Esc` twice**. With text in the prompt → clears the draft (saved to history). With empty prompt → opens the **rewind menu** to restore or summarize code & conversation from an earlier point. | 📄 [Interactive mode](https://code.claude.com/docs/en/interactive-mode) · 📄 [Checkpointing / rewind](https://code.claude.com/docs/en/checkpointing) |
| **/compact** | Slash command that **summarizes** the conversation into a compact form to free up the context window while keeping key details. | 📄 [Commands](https://code.claude.com/docs/en/commands) · 📄 [Context window](https://code.claude.com/docs/en/context-window) |
| **/clear** | Slash command that **resets** the conversation and starts a fresh session. Input history resets; the previous conversation is preserved and can be resumed. | 📄 [Commands](https://code.claude.com/docs/en/commands) · 📄 [Context window](https://code.claude.com/docs/en/context-window) |




## Available scopes

| Scope | Location | Who it affects | Shared with team? |
|-------|----------|----------------|-------------------|
| **Managed** | Server-managed settings, plist / registry, or system-level `managed-settings.json` | All organization members (server-managed delivery); all users on the machine (plist, HKLM registry, file delivery); current user (HKCU registry delivery) | Yes (deployed by IT) |
| **User** | `~/.claude/` directory | You, across all projects | No |
| **Project** | `.claude/` in repository | All collaborators on this repository | Yes |
| **Local** | `.claude/settings.local.json` | You, in this repository only | No (SVN ignored when Claude Code creates it) |

## Skill vs. Agent / Subagent

| Feature                               | **SKILL.md**                                                                                                                                                             | **Agent / Subagent**                                                                                                                                          |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Primary purpose**                   | Teach Claude how to perform a task                                                                                                                                       | Create a specialized AI worker for a specific responsibility                                                                                                  |
| **What it is**                        | A Markdown instruction file                                                                                                                                              | A dedicated AI agent with its own prompt, tools, and behavior                                                                                                 |
| **Think of it as**                    | Documentation, playbook, or SOP                                                                                                                                          | A team member with a specific job                                                                                                                             |
| **Scope**                             | Task knowledge                                                                                                                                                           | Role specialization                                                                                                                                           |
| **Main use**                          | Repeatable workflows                                                                                                                                                     | Divide complex work among specialists                                                                                                                         |
| **Trigger**                           | Claude decides or the user invokes the skill                                                                                                                             | Claude or the user delegates work to the agent                                                                                                                |
| **Contains**                          | Instructions, steps, examples, best practices                                                                                                                            | System prompt, responsibilities, tool permissions, workflow                                                                                                   |
| **Has memory**                        | No                                                                                                                                                                       | No persistent memory (only its prompt/context)                                                                                                                |
| **Own personality**                   | No                                                                                                                                                                       | Yes (specialized behavior)                                                                                                                                    |
| **Uses tools**                        | Through Claude                                                                                                                                                           | Can be configured with specific tools                                                                                                                         |
| **Calls other agents**                | No                                                                                                                                                                       | Depending on implementation, yes                                                                                                                              |
| **Best for**                          | Coding standards, deployment guides, documentation style                                                                                                                 | Reviewer, debugger, tester, researcher, architect                                                                                                             |
| **Similar to**                        | Standard Operating Procedure (SOP)                                                                                                                                       | Employee with a job description                                                                                                                               |
| **Who works?**                        | **Only one AI (Claude)**                                                                                                                                                 | **Multiple specialized AI agents can collaborate**                                                                                                            |
| **REST API example**                  | Claude reads the REST API Skill, then builds the API following the documented standards.                                                                                 | Main Claude delegates work to Architect, Backend, Security, and Documentation agents.                                                                         |
| **Execution flow**                    | `User → Claude → Read SKILL.md → Generate REST API`                                                                                                                      | `User → Main Claude → Architect → Backend → Security → Documentation → Final Result`                                                                          |
| **Outcome**                           | One AI follows a reusable instruction manual to complete the task.                                                                                                       | Multiple specialized AI workers collaborate, each handling a specific responsibility.                                                                         |
| **Can they work together?**           | Provides reusable knowledge (e.g., REST API standards, testing rules, coding conventions).                                                                               | Uses one or more skills while performing its specialized role. An agent can follow multiple `SKILL.md` files to complete its work.                            |
| **Real project example (E-commerce)** | `coding-style/SKILL.md`<br>`react/SKILL.md`<br>`api-design/SKILL.md`<br>`testing/SKILL.md`<br>`database/SKILL.md`<br><br>Each skill defines **how** work should be done. | `frontend/`<br>`backend/`<br>`reviewer/`<br>`tester/`<br>`architect/`<br><br>Each agent is responsible for **who** performs a particular part of the project. |
| **Relationship**                      | Acts as reusable knowledge that any agent or Claude can follow.                                                                                                          | Acts as the worker that can use one or more skills to complete its assigned responsibility.                                                                   |
| **Rule of thumb**                     | Use when you want Claude to follow a reusable method, standard, best practice, or workflow.                                                                              | Use when you want Claude to assign work to a specialist with defined responsibilities and behavior.                                                           |
| **Key question answered**             | **How should this task be done?**                                                                                                                                        | **Who should do this task?**                                                                                                                                  |
| **In one sentence**                   | Knowledge + Process                                                                                                                                                      | Specialized Worker + Responsibility                                                                                                                           |

### When to Use Which

| Scenario                    | Use SKILL.md     | Use Agent |
| --------------------------- | ---------------- | --------- |
| Coding conventions          | ✅                | ❌         |
| SVN workflow                | ✅                | ❌         |
| API standards               | ✅                | ❌         |
| Project documentation style | ✅                | ❌         |
| Code review                 | ❌                | ✅         |
| Architecture decisions      | ❌                | ✅         |
| Security analysis           | ❌                | ✅         |
| Research                    | ❌                | ✅         |
| Test generation             | ❌                | ✅         |
| Large multi-step project    | Alongside agents | ✅         |


### Agent vs. Subagent

Claude Code's official terminology is Subagent. The documentation, configuration, and commands use Subagent, not Agent. [Offical source](https://code.claude.com/docs/en/subagents).

| Aspect                                 | Agent                                | Subagent (Claude Code)                                            |
| -------------------------------------- | ------------------------------------ | ----------------------------------------------------------------- |
| **Official Claude Code feature?**      | ❌ No                                 | ✅ Yes                                                             |
| **Used in Claude Code documentation?** | Rarely (mostly as a generic AI term) | Yes                                                               |
| **Configuration location**             | N/A                                  | `.claude/agents/`                                                 |
| **Configuration file**                 | N/A                                  | `backend.md`, `reviewer.md`, etc.                                 |
| **Who creates it?**                    | Conceptual term                      | You define it in your project or user configuration               |
| **Who invokes it?**                    | Conceptually Claude                  | Main Claude automatically or via `/agent` (depending on workflow) |
| **Purpose**                            | Generic term for an AI role          | Specialized AI assistant for a specific task                      |
| **Example**                            | "Backend Agent" (concept)            | `backend.md` (actual Claude Code subagent)                        |


### Agent Loop vs. Tool vs. MCP vs. Subagent

| Aspect                           | Agent Loop                                                    | Tool                                                | MCP                                                                     | Subagent                                                        |
| -------------------------------- | ------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------- |
| **What it is**                   | The execution engine that controls Claude's workflow          | A callable function that performs a specific action | A protocol that connects Claude to external systems through MCP servers | A specialized Claude instance dedicated to a focused task       |
| **Primary Purpose**              | Plan, reason, execute, and iterate until the task is complete | Perform a single operation                          | Expose external tools, resources, prompts, and services                 | Handle specialized or isolated work delegated by the main agent |
| **AI Reasoning**                 | ✅ Yes                                                         | ❌ No                                                | ❌ No                                                                    | ✅ Yes                                                           |
| **Who Executes It**              | Main Claude                                                   | Claude invokes the tool                             | MCP Server executes the requested capability                            | Another Claude instance                                         |
| **Who Controls It**              | Claude                                                        | Claude                                              | Claude (through the MCP client)                                         | Claude                                                          |
| **Can Make Decisions**           | ✅ Yes                                                         | ❌ No                                                | ❌ No                                                                    | ✅ Yes                                                           |
| **Can Plan Multi-Step Tasks**    | ✅ Yes                                                         | ❌ No                                                | ❌ No                                                                    | ✅ Yes                                                           |
| **Can Call Tools**               | ✅ Yes                                                         | ❌ No                                                | Provides tools rather than calling them                                 | ✅ Yes (if permitted)                                            |
| **Can Use MCP Servers**          | ✅ Yes                                                         | ❌ No                                                | N/A (it is the integration layer)                                       | ✅ Yes (if permitted)                                            |
| **Can Delegate to Subagents**    | ✅ Yes                                                         | ❌ No                                                | ❌ No                                                                    | Usually no (unless explicitly allowed)                          |
| **Connects to External Systems** | Indirectly (via tools or MCP)                                 | Sometimes (if the tool itself supports it)          | ✅ Yes (its primary purpose)                                             | Indirectly (through tools or MCP, if permitted)                 |
| **Maintains Context**            | Entire conversation/session                                   | ❌ No                                                | ❌ No (server may maintain its own internal state)                       | Independent context for the delegated task                      |
| **Scope**                        | Entire task/session                                           | One operation                                       | External integrations                                                   | One delegated task                                              |
| **Lifecycle**                    | Runs continuously until the task is complete                  | Starts and ends with a single call                  | Runs as a long-lived server waiting for requests                        | Created for a delegated task and ends when finished             |
| **Typical Examples**             | Build a feature, fix bugs, refactor code                      | Read file, edit file, run Bash command              | GitHub, Jira, Slack, PostgreSQL, Browser                                | Code Reviewer, Documentation Writer, Test Generator             |
| **Primary Role**                 | Orchestrator                                                  | Action Executor                                     | Integration Layer                                                       | Specialized Collaborator                                        |
| **Analogy**                      | Project Manager                                               | Worker using a specific tool                        | Supplier/API Gateway                                                    | Specialist Consultant                                           |

#### Summary of Agent Loop vs. Tool vs. MCP vs. Subagent

| Component      | One-line Description                                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Agent Loop** | The orchestrator that reasons, plans, chooses actions, and coordinates the entire workflow.                                |
| **Tool**       | A single-purpose function that performs one action when invoked.                                                           |
| **MCP**        | A standardized integration layer that gives Claude access to external tools, resources, prompts, and services.             |
| **Subagent**   | A specialized Claude instance that independently reasons about a delegated task and returns its results to the main agent. |


## Plugin 

A **plugin** is a **package of one or more related AI skills** that adds specific capabilities to Claude and can be easily shared and reused across a team or organization.

> **Plugin = A collection of related skills packaged together for a specific purpose.**

### Example

**Plugin:** Customer Support

* Skill 1: Summarize support tickets
* Skill 2: Draft customer replies
* Skill 3: Analyze customer sentiment
* Skill 4: Escalate high-priority issues

Instead of installing four separate skills, users install **one plugin**.

### Roles for Plugin

| Role                          | What they can do                                                                                                                                |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Plugin Creator/Maintainer** | Create the plugin, add/remove skills, edit it, run evals, and publish updates.                                                                  |
| **Organization Admin**        | Publish the plugin to the company's private marketplace and choose how it's distributed (Available, Installed by Default, Required, or Hidden). |
| **Team Members (Users)**      | View the plugin in the company directory, install/use it (if allowed), and disable it if it's not required. They **cannot edit** the plugin.    |

### Plugin In one line

* **Skill** = One capability.
* **Plugin** = A package of related skills.
* **Creator/Maintainer** = Creates and edits the plugin.
* **Admin** = Distributes the plugin to the organization.
* **Users** = View, install, and use the plugin, but cannot edit it.


## Learning Resources

### Official (Anthropic)

- 🎓 **Anthropic Academy** — free structured courses: [anthropic.skilljar.com](https://anthropic.skilljar.com/)
- 📺 **Official Claude YouTube channel**: [@claude](https://www.youtube.com/@claude/videos)
- ▶ Official playlists:
  - [Code with Claude 2026 | Japan 🇯🇵](https://www.youtube.com/playlist?list=PLmWCw1CzcFinrtcyN6EMIp6KqrDj8sxD7)
  - [Claude Code Skills](https://www.youtube.com/playlist?list=PLmWCw1CzcFim_hkruZSlABOUOAAQ5JMyo)
  - [Code with Claude 2026 | San Francisco](https://www.youtube.com/playlist?list=PLmWCw1CzcFim2obQ-w3ohbULOfwp5lApR)

### Community channels

- ▶ [Claude Code Tutorial — Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g4YJeBqChhFJwKQ9TRiivY)
- ▶ [Claude Code](https://www.youtube.com/playlist?list=PLSbQllRagIuQWckVcfszya8Zv8HGheNlc)
- ▶ [Claude Code Workflows](https://www.youtube.com/playlist?list=PLm7xfhMOszqwW8iaG2crzPKErJA2eNfYV)
- ▶ [Claude Code Tutorial for Beginners (2026)](https://www.youtube.com/playlist?list=PL4HikwTaYE0ETMaJqnNvm_2I3NEbexMDZ)


# TODO
- Tool vs MCP
- Tool vs Agent/Subagent


## Convert any file type to Markdown (.md)

MarkItDown https://github.com/microsoft/markitdown

MarkItDown currently supports the conversion from:

PDF
PowerPoint
Word
Excel
Images (EXIF metadata and OCR)
Audio (EXIF metadata and speech transcription)
HTML
Text-based formats (CSV, JSON, XML)
ZIP files (iterates over contents)
Youtube URLs
EPubs
... and more!

 

