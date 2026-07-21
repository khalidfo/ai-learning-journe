/* ============================================
   topics.js — tree structure + topic content
   Data only. Rendering lives in nav.js / router.js
   ============================================ */

/* Inline SVG icons for learn-more lists */
const ICON_PLAY =
  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
const ICON_DOC =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>';

function video(title, url, official) {
  return (
    '<li>' + ICON_PLAY + '<a href="' + url + '" target="_blank" rel="noopener">' +
    title + '</a>' + (official ? ' <span class="src">(Anthropic official)</span>' : '') + '</li>'
  );
}
function doc(title, url) {
  return (
    '<li>' + ICON_DOC + '<a href="' + url + '" target="_blank" rel="noopener">' +
    title + '</a></li>'
  );
}

const TOPICS = [
  /* ============ 1. GETTING STARTED ============ */
  {
    title: "Getting Started",
    children: [
      {
        id: "welcome",
        title: "Welcome & Vision",
        html: `
<h1>Welcome &amp; Vision</h1>
<p class="lead">This tutorial is a practical proposal for adopting AI in a way that maximizes its value — across the entire organization, not just engineering.</p>

<h2>Why organization-wide AI?</h2>
<p>AI is no longer a developer-only tool. Every department can offload repetitive work, speed up research, and improve output quality:</p>
<ul>
  <li><strong>Engineering</strong> — coding, QA, code review, documentation</li>
  <li><strong>Project management</strong> — planning, tracking, reporting</li>
  <li><strong>Business development &amp; sales</strong> — research, outreach, proposals</li>
  <li><strong>Marketing</strong> — content creation, campaigns, analysis</li>
  <li><strong>Finance &amp; operations</strong> — reports, data analysis, process automation</li>
</ul>

<h2>Current focus</h2>
<p>Maximize the use of <strong>Claude</strong> first. Broader multi-tool adoption comes in later phases.</p>

<div class="callout callout--note">
  <div><strong>Scope note:</strong> Autonomous self-hosted AI agent frameworks (e.g. OpenClaw, Hermes) are out of scope for now — planned for a future phase.</div>
</div>`
      },
      {
        id: "goals",
        title: "Goals",
        html: `
<h1>Goals</h1>
<p class="lead">Four concrete goals drive this AI adoption plan.</p>

<h2>The four goals</h2>
<ol>
  <li><strong>Maximize Claude usage</strong> — for tasks needing better quality or higher context limits.</li>
  <li><strong>Leverage multiple providers</strong> — OpenAI, Claude, Gemini, DeepSeek, Grok, Mistral, etc., chosen per task.</li>
  <li><strong>Optimize for efficiency</strong> — minimize time, cost, token consumption, and compute, while maximizing response quality, speed, scalability, reliability, and privacy.</li>
  <li><strong>Use other models inside Claude</strong> — route tasks to third-party or local models from within the Claude workflow when they fit better.</li>
</ol>

<h2>How to read this tutorial</h2>
<p>Topics go from broad to micro level. Start at <em>Claude Fundamentals</em> if you are new; jump straight to <em>Configuration</em> or <em>Agents</em> if you already use Claude Code daily.</p>`
      },
      {
        id: "ecosystem",
        title: "The Claude Ecosystem at a Glance",
        html: `
<h1>The Claude Ecosystem at a Glance</h1>
<p class="lead">One-screen overview of every building block covered in this tutorial.</p>

<div class="table-wrap"><table>
  <thead><tr><th>Building block</th><th>What it does</th><th>Covered in</th></tr></thead>
  <tbody>
    <tr><td><code>Claude Code</code></td><td>The coding tool (CLI, Desktop, IDE, Web)</td><td>Claude Fundamentals</td></tr>
    <tr><td><code>Projects</code></td><td>Workspace grouping files, config, and skills</td><td>Claude Fundamentals</td></tr>
    <tr><td><code>Context window</code></td><td>How much Claude "remembers" at once</td><td>Claude Fundamentals</td></tr>
    <tr><td><code>CLAUDE.md</code></td><td>Memory file with persistent instructions</td><td>Configuration</td></tr>
    <tr><td><code>settings.json</code> / scopes</td><td>Behavior configuration at 4 levels</td><td>Configuration</td></tr>
    <tr><td><code>.claude/</code></td><td>Folder holding all project config</td><td>Configuration</td></tr>
    <tr><td><code>Hooks</code></td><td>Scripts auto-run at lifecycle events</td><td>Automation &amp; Extensibility</td></tr>
    <tr><td><code>Skills</code></td><td>Reusable task playbooks (SKILL.md)</td><td>Automation &amp; Extensibility</td></tr>
    <tr><td><code>Plugins</code></td><td>Add-ons bundling commands, skills, MCP</td><td>Automation &amp; Extensibility</td></tr>
    <tr><td><code>MCP</code></td><td>Standard connector to external tools/data</td><td>Automation &amp; Extensibility</td></tr>
    <tr><td><code>Claude API</code></td><td>Programmatic access to Claude models</td><td>Claude Fundamentals</td></tr>
    <tr><td><code>Cowork</code></td><td>Claude working alongside you like a teammate</td><td>Claude Fundamentals</td></tr>
    <tr><td><code>Tools</code></td><td>Actions beyond text (server &amp; client tools)</td><td>Automation &amp; Extensibility</td></tr>
    <tr><td><code>Evals</code></td><td>Test and refine skills and agents</td><td>Automation &amp; Extensibility</td></tr>
    <tr><td><code>Agent loop</code></td><td>Gather context &rarr; act &rarr; verify cycle</td><td>Agents &amp; Subagents</td></tr>
    <tr><td><code>Subagents</code></td><td>Specialized AI workers with own context</td><td>Agents &amp; Subagents</td></tr>
    <tr><td><code>Managed agents</code></td><td>Server-hosted agents run by Anthropic</td><td>Agents &amp; Subagents</td></tr>
    <tr><td><code>Code review</code></td><td>Automated bug-hunting on your changes</td><td>Workflow Features</td></tr>
    <tr><td><code>Artifacts</code></td><td>Polished visual output (pages, UI)</td><td>Workflow Features</td></tr>
    <tr><td><code>Caveman mode</code></td><td>Token-saving compressed responses</td><td>Workflow Features</td></tr>
    <tr><td><code>Shortcuts</code></td><td>Input prefixes and keyboard shortcuts</td><td>Workflow Features</td></tr>
    <tr><td><code>MarkItDown</code></td><td>Convert any file type to Markdown</td><td>Workflow Features</td></tr>
  </tbody>
</table></div>

<div class="callout callout--tip">
  <div><strong>Tip:</strong> The mental model — <em>CLAUDE.md teaches, Skills instruct, Hooks automate, MCP connects, Subagents delegate.</em></div>
</div>`
      }
    ]
  },

  /* ============ 2. CLAUDE FUNDAMENTALS ============ */
  {
    title: "Claude Fundamentals",
    children: [
      {
        id: "claude-code",
        title: "Claude Code",
        html: `
<h1>Claude Code</h1>
<p class="lead">Claude Code is Anthropic's agentic coding tool: Claude with direct access to your terminal, files, and dev workflow.</p>

<h2>Where you can use it</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Surface</th><th>Best for</th></tr></thead>
  <tbody>
    <tr><td><strong>CLI</strong> (terminal)</td><td>Day-to-day coding, scripting, automation</td></tr>
    <tr><td><strong>Desktop app</strong> (Mac/Windows)</td><td>Standalone sessions outside the terminal</td></tr>
    <tr><td><strong>IDE extensions</strong> (VS Code, JetBrains)</td><td>Inline coding help with editor context</td></tr>
    <tr><td><strong>Web</strong> — claude.ai/code</td><td>Cloud sessions, no local install</td></tr>
  </tbody>
</table></div>

<h2>What makes it different</h2>
<ul>
  <li>Reads and edits real files in your repository, runs commands, executes tests.</li>
  <li>Configurable via <code>CLAUDE.md</code>, settings, hooks, skills, and subagents (all covered later).</li>
  <li>Works with permission modes — you control what it can run.</li>
</ul>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("Mastering Claude Code in 30 Minutes", "https://www.youtube.com/watch?v=AOfogJZ70OQ", true)}
${video("Claude Code for Beginners [Full Course]", "https://www.youtube.com/watch?v=gh2_PhgZGsM")}
${video("How Anthropic Employees ACTUALLY Use Claude Code", "https://www.youtube.com/watch?v=pRfIWmddRsE")}
${doc("Claude Code documentation", "https://code.claude.com/docs/en/overview")}
${doc("Product page", "https://claude.com/claude-code")}
</ul></div>`
      },
      {
        id: "projects",
        title: "Projects",
        html: `
<h1>Projects</h1>
<p class="lead">A Project is a workspace that groups your files, configuration, and knowledge so Claude always has the right context.</p>

<h2>What a Project gives you</h2>
<ul>
  <li><strong>Grouped context</strong> — files, docs, and instructions live together.</li>
  <li><strong>Bundled skills</strong> — attach reusable playbooks the project needs.</li>
  <li><strong>Team sharing</strong> — collaborators see the same knowledge and conventions.</li>
</ul>

<h2>When to create one</h2>
<ul>
  <li>A recurring workstream (product, codebase, campaign) with stable context.</li>
  <li>A team that should share the same AI setup instead of re-explaining it per chat.</li>
</ul>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("How to Use Claude Projects (Kevin Stratvert)", "https://www.youtube.com/watch?v=w7_yWjYyxjE")}
${video("FULL Claude Tutorial for Beginners 2026", "https://www.youtube.com/watch?v=rRrBbyv3ChM")}
${video("Full Claude Tutorial: Beginner to Advanced in 19 Min", "https://www.youtube.com/watch?v=WSPChlfxJyA")}
${doc("What are Projects (Help Center)", "https://support.claude.com/en/articles/9517075-what-are-projects")}
</ul></div>`
      },
      {
        id: "context-window",
        title: "Context Window",
        html: `
<h1>Context Window</h1>
<p class="lead">The context window is the amount of text Claude can "remember" at once — your prompts, files, and Claude's own replies all consume it.</p>

<h2>Why it matters</h2>
<p>When the window fills up, older detail gets summarized or dropped. Long sessions degrade unless you manage context deliberately.</p>

<h2>The three commands</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Command</th><th>What it does</th><th>Use when</th></tr></thead>
  <tbody>
    <tr><td><code>/context</code></td><td>Shows current context usage</td><td>You want to check how full the window is</td></tr>
    <tr><td><code>/compact</code></td><td>Summarizes the conversation, keeps working</td><td>Long session, same task continues</td></tr>
    <tr><td><code>/clear</code></td><td>Resets the session to zero; the previous conversation is preserved and can be resumed</td><td>Switching to an unrelated task</td></tr>
  </tbody>
</table></div>

<div class="callout callout--tip">
  <div><strong>Rule of thumb:</strong> same task &rarr; <code>/compact</code>; new task &rarr; <code>/clear</code>. Claude Code also compacts automatically near the limit.</div>
</div>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("Context Management in Claude Code", "https://www.youtube.com/watch?v=eW3oTyfeWZ0")}
${video("Mastering Claude Code in 30 Minutes", "https://www.youtube.com/watch?v=AOfogJZ70OQ", true)}
${doc("Context window docs", "https://code.claude.com/docs/en/context-window")}
</ul></div>`
      },
      {
        id: "claude-api",
        title: "Claude API",
        html: `
<h1>Claude API</h1>
<p class="lead">The Claude API (formerly the Anthropic API) is programmatic access to Claude — send requests to Claude models from your own code and build your own apps.</p>

<h2>What you can build with it</h2>
<ul>
  <li>Internal tools that call Claude for summarization, extraction, or drafting</li>
  <li>Customer-facing products with Claude behind the scenes</li>
  <li>Automations and pipelines — batch processing, report generation, data cleanup</li>
  <li>Your own agents, using tool use and the Agent SDK</li>
</ul>

<h2>How it relates to the rest of this tutorial</h2>
<p>Claude Code, Projects, and Cowork are ready-made surfaces. The API is the raw building block underneath: same models, but you control the prompts, tools, and integration.</p>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("Your first API call to Claude", "https://www.youtube.com/watch?v=j0ftK_R5DTs", true)}
${doc("Claude Docs home", "https://platform.claude.com/docs/en/home")}
</ul></div>`
      },
      {
        id: "cowork",
        title: "Cowork",
        html: `
<h1>Cowork</h1>
<p class="lead">Cowork is a workspace where Claude works alongside you like a teammate on tasks — available across web and mobile.</p>

<h2>The idea</h2>
<p>Instead of a chat you poll, Cowork gives Claude a shared workspace: you hand over tasks, Claude works on them, and you review the results — closer to delegating to a colleague than prompting a bot.</p>

<h2>Why it matters for non-engineers</h2>
<p>Cowork is a natural fit for the organization-wide adoption goal: project managers, marketers, and operations teams get Claude's help on documents, analysis, and recurring tasks without touching a terminal.</p>

<div class="learn-more"><h4>Learn more</h4><ul>
${doc("Intro to Claude Cowork (Academy course)", "https://anthropic.skilljar.com/introduction-to-claude-cowork")}
${doc("Cowork product page", "https://claude.com/product/cowork")}
${doc("Cowork on web & mobile (blog)", "https://claude.com/blog/cowork-web-mobile")}
</ul></div>`
      }
    ]
  },

  /* ============ 3. CONFIGURATION ============ */
  {
    title: "Configuration",
    children: [
      {
        id: "claude-md",
        title: "CLAUDE.md — Memory Files",
        html: `
<h1>CLAUDE.md — Memory Files</h1>
<p class="lead">CLAUDE.md is a Markdown file Claude reads automatically at the start of every session. It holds persistent instructions: project conventions, commands, style rules, preferences.</p>

<h2>Two levels</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Level</th><th>Location</th><th>Applies to</th></tr></thead>
  <tbody>
    <tr><td><strong>Project</strong></td><td>Repository root (committed to git)</td><td>Everyone working in this repo</td></tr>
    <tr><td><strong>User</strong></td><td><code>~/.claude/CLAUDE.md</code></td><td>You, across all projects</td></tr>
  </tbody>
</table></div>

<h3>User-level path per OS</h3>
<div class="table-wrap"><table>
  <thead><tr><th>OS</th><th>Path</th></tr></thead>
  <tbody>
    <tr><td>Windows</td><td><code>%USERPROFILE%\\.claude\\</code></td></tr>
    <tr><td>macOS</td><td><code>/Users/&lt;you&gt;/.claude/</code></td></tr>
    <tr><td>Linux</td><td><code>/home/&lt;you&gt;/.claude/</code></td></tr>
  </tbody>
</table></div>

<h2>What to put in it</h2>
<ul>
  <li>Build/test commands (<code>npm test</code>, <code>make build</code>)</li>
  <li>Code style and naming conventions</li>
  <li>Repository layout notes and gotchas</li>
  <li>Workflow rules ("always run tests before commit")</li>
</ul>

<div class="callout callout--tip">
  <div><strong>Tip:</strong> Keep it short and factual. A bloated CLAUDE.md wastes context window on every session.</div>
</div>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("Claude Code best practices — Code w/ Claude", "https://www.youtube.com/watch?v=gv0WHhKelSE", true)}
${video("CLAUDE.md Best Practices", "https://www.youtube.com/watch?v=x5WWFL0nIqk")}
${video("Claude.md Explained", "https://www.youtube.com/watch?v=xsa_LoDZ0bI")}
${doc("Memory (CLAUDE.md) docs", "https://code.claude.com/docs/en/memory")}
${doc("Best practices", "https://code.claude.com/docs/en/best-practices")}
</ul></div>`
      },
      {
        id: "settings-json",
        title: "Settings & claude.json",
        html: `
<h1>Settings &amp; claude.json</h1>
<p class="lead">Claude Code behavior is controlled by JSON settings files. They define permissions, environment variables, hooks, and more.</p>

<h2>The files</h2>
<div class="table-wrap"><table>
  <thead><tr><th>File</th><th>Scope</th><th>Typical content</th></tr></thead>
  <tbody>
    <tr><td><code>~/.claude/settings.json</code></td><td>User (all projects)</td><td>Personal defaults, global permissions</td></tr>
    <tr><td><code>.claude/settings.json</code></td><td>Project (shared via git)</td><td>Team permissions, hooks, env vars</td></tr>
    <tr><td><code>.claude/settings.local.json</code></td><td>Local (this machine only)</td><td>Personal overrides, gitignored</td></tr>
  </tbody>
</table></div>

<h2>Key sections</h2>
<ul>
  <li><strong>permissions</strong> — <code>allow</code> / <code>ask</code> / <code>deny</code> rules for tools and commands.</li>
  <li><strong>hooks</strong> — scripts bound to lifecycle events (see the Hooks topic).</li>
  <li><strong>env</strong> — environment variables injected into sessions.</li>
</ul>

<pre><code>{
  "permissions": {
    "allow": ["Bash(npm test:*)"],
    "deny":  ["Bash(rm -rf:*)"]
  }
}</code></pre>

<div class="learn-more"><h4>Learn more</h4><ul>
${doc("Settings documentation", "https://code.claude.com/docs/en/settings")}
</ul></div>`
      },
      {
        id: "scopes",
        title: "Settings Scopes",
        html: `
<h1>Settings Scopes</h1>
<p class="lead">The same setting can exist at four levels. Higher scopes override lower ones — knowing the hierarchy is the difference between settings working and mysteriously not working.</p>

<h2>The four scopes</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Scope</th><th>Location</th><th>Who it affects</th><th>Shared with team?</th></tr></thead>
  <tbody>
    <tr><td><strong>Managed</strong></td><td>Server-managed settings, plist / registry, or system-level <code>managed-settings.json</code></td><td>All org members (server-managed); all users on the machine (plist, HKLM registry, file); current user (HKCU registry)</td><td>Yes (deployed by IT)</td></tr>
    <tr><td><strong>User</strong></td><td><code>~/.claude/</code> directory</td><td>You, across all projects</td><td>No</td></tr>
    <tr><td><strong>Project</strong></td><td><code>.claude/</code> in repository</td><td>All collaborators on this repository</td><td>Yes (committed to git)</td></tr>
    <tr><td><strong>Local</strong></td><td><code>.claude/settings.local.json</code></td><td>You, in this repository only</td><td>No (gitignored when Claude Code creates it)</td></tr>
  </tbody>
</table></div>

<h2>Precedence</h2>
<p>From strongest to weakest:</p>
<pre><code>Managed  &gt;  Local  &gt;  Project  &gt;  User</code></pre>

<div class="callout callout--note">
  <div><strong>Note:</strong> If a setting "doesn't apply", check whether a higher scope overrides it.</div>
</div>

<div class="learn-more"><h4>Learn more</h4><ul>
${doc("Settings documentation", "https://code.claude.com/docs/en/settings")}
</ul></div>`
      },
      {
        id: "claude-folder",
        title: "The .claude/ Folder",
        html: `
<h1>The <code>.claude/</code> Folder</h1>
<p class="lead">A hidden folder holding all of Claude's configuration for a project. Committed to git, it makes the whole team share one AI setup.</p>

<h2>Typical layout</h2>
<pre><code>.claude/
├── settings.json          # team settings: permissions, hooks, env
├── settings.local.json    # your personal overrides (gitignored)
├── agents/                # subagent definitions (*.md)
├── skills/                # project skills (SKILL.md folders)
└── commands/              # custom slash commands</code></pre>

<h2>What lives where</h2>
<ul>
  <li><strong>settings.json</strong> — permissions, hooks configuration, environment.</li>
  <li><strong>agents/</strong> — one Markdown file per subagent (e.g. <code>reviewer.md</code>).</li>
  <li><strong>skills/</strong> — folders each containing a <code>SKILL.md</code>.</li>
</ul>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("Mastering Claude Code in 30 Minutes", "https://www.youtube.com/watch?v=AOfogJZ70OQ", true)}
${video("Claude Code for Beginners [Full Course]", "https://www.youtube.com/watch?v=gh2_PhgZGsM")}
${video("27 Claude Code TIPS in 12 minutes", "https://www.youtube.com/watch?v=-IozMG9x0dI")}
${doc("Settings documentation", "https://code.claude.com/docs/en/settings")}
</ul></div>`
      }
    ]
  },

  /* ============ 4. AUTOMATION & EXTENSIBILITY ============ */
  {
    title: "Automation & Extensibility",
    children: [
      {
        id: "hooks",
        title: "Hooks",
        html: `
<h1>Hooks</h1>
<p class="lead">Hooks are scripts that run automatically at key points in Claude Code's lifecycle — before/after tool calls, on session start, when Claude finishes, and more.</p>

<h2>What hooks can do</h2>
<ul>
  <li>Auto-format files after every edit</li>
  <li>Block dangerous commands before they execute</li>
  <li>Run tests after code changes</li>
  <li>Send a notification when Claude needs input</li>
  <li>Inject extra context at session start</li>
</ul>

<h2>Configuration</h2>
<p>Hooks are defined in <code>settings.json</code> (any scope — user, project, local, or managed):</p>
<pre><code>{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "hooks": [{ "type": "command", "command": "npx prettier --write ." }]
    }]
  }
}</code></pre>

<h2>Common events</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Event</th><th>Fires</th></tr></thead>
  <tbody>
    <tr><td><code>PreToolUse</code></td><td>Before a tool runs (can block it)</td></tr>
    <tr><td><code>PostToolUse</code></td><td>After a tool completes</td></tr>
    <tr><td><code>UserPromptSubmit</code></td><td>When you send a message</td></tr>
    <tr><td><code>SessionStart</code></td><td>When a session begins</td></tr>
    <tr><td><code>Stop</code></td><td>When Claude finishes responding</td></tr>
  </tbody>
</table></div>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("Hooks in Claude Code", "https://www.youtube.com/watch?v=IkaPHiMDazM")}
${video("Claude Code Hooks explained in 5 minutes", "https://www.youtube.com/watch?v=6_y3AtkgjqA")}
${doc("Hooks guide", "https://code.claude.com/docs/en/hooks-guide")}
${doc("Hooks reference", "https://code.claude.com/docs/en/hooks")}
</ul></div>`
      },
      {
        id: "skills",
        title: "Skills & SKILL.md",
        html: `
<h1>Skills &amp; SKILL.md</h1>
<p class="lead">A skill is a reusable playbook — a folder with a <code>SKILL.md</code> file that packages instructions Claude loads on demand to do a specialized task the same way every time.</p>

<h2>Anatomy of a skill</h2>
<pre><code>.claude/skills/deploy-checklist/
└── SKILL.md</code></pre>
<pre><code>---
name: deploy-checklist
description: Run the release checklist before deploying to production
---

# Deploy checklist
1. Run the full test suite
2. Check changelog is updated
3. ...</code></pre>
<p>The <code>description</code> tells Claude <em>when</em> to auto-apply the skill; the body tells it <em>how</em> to do the work.</p>

<h2>When to use a skill</h2>
<ul>
  <li>Repeatable workflows: release steps, review checklists, report formats</li>
  <li>Standards: coding conventions, API design rules, testing rules</li>
  <li>Anything you keep re-explaining to Claude</li>
</ul>

<div class="callout callout--tip">
  <div><strong>Think of it as:</strong> a Standard Operating Procedure (SOP) that any Claude session — or any subagent — can follow.</div>
</div>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("Claude Agent Skills Explained", "https://www.youtube.com/watch?v=fOxC44g8vig")}
${video("Claude Skills Step-by-Step for Beginners", "https://www.youtube.com/watch?v=wO8EboopboU")}
${video("How AI agents & Claude skills work", "https://www.youtube.com/watch?v=S_oN3vlzpMw")}
${doc("Skills (Claude Code)", "https://code.claude.com/docs/en/skills")}
${doc("Agent Skills overview", "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview")}
</ul></div>`
      },
      {
        id: "plugins",
        title: "Plugins",
        html: `
<h1>Plugins</h1>
<p class="lead">A plugin is a package of one or more related skills that adds specific capabilities to Claude and can be easily shared and reused across a team or organization.</p>

<div class="callout callout--note">
  <div><strong>Plugin =</strong> a collection of related skills packaged together for a specific purpose — e.g. a BA Plugin, QA Plugin, Coding Plugin, Sales Plugin, or HR Plugin.</div>
</div>

<h2>What a plugin can bundle</h2>
<ul>
  <li><strong>Commands</strong> — new <code>/something</code> slash commands</li>
  <li><strong>Skills</strong> — packaged playbooks</li>
  <li><strong>Agents</strong> — predefined subagents</li>
  <li><strong>Hooks</strong> — ready-made automation</li>
  <li><strong>MCP servers</strong> — external tool connections</li>
</ul>

<h2>Example: Customer Support plugin</h2>
<ul>
  <li>Skill 1 — Summarize support tickets</li>
  <li>Skill 2 — Draft customer replies</li>
  <li>Skill 3 — Analyze customer sentiment</li>
  <li>Skill 4 — Escalate high-priority issues</li>
</ul>
<p>Instead of installing four separate skills, users install <strong>one plugin</strong>.</p>

<h2>Roles</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Role</th><th>What they can do</th></tr></thead>
  <tbody>
    <tr><td><strong>Plugin Creator / Maintainer</strong></td><td>Create the plugin, add/remove skills, edit it, run evals, and publish updates</td></tr>
    <tr><td><strong>Organization Admin</strong></td><td>Publish the plugin to the company's private marketplace and choose distribution: Available, Installed by Default, Required, or Hidden</td></tr>
    <tr><td><strong>Team Members (Users)</strong></td><td>View the plugin in the company directory, install/use it (if allowed), disable it if not required — but cannot edit it</td></tr>
  </tbody>
</table></div>

<h2>Installing</h2>
<pre><code>/plugin marketplace add &lt;owner&gt;/&lt;repo&gt;
/plugin install &lt;plugin-name&gt;</code></pre>

<h2>In one line</h2>
<ul>
  <li><strong>Skill</strong> = one capability.</li>
  <li><strong>Plugin</strong> = a package of related skills.</li>
  <li><strong>Creator/Maintainer</strong> = creates and edits the plugin.</li>
  <li><strong>Admin</strong> = distributes the plugin to the organization.</li>
  <li><strong>Users</strong> = view, install, and use the plugin, but cannot edit it.</li>
</ul>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("The Ultimate Claude Code Guide — MCP, Skills & More", "https://www.youtube.com/watch?v=uogzSxOw4LU")}
${video("Claude Code Tutorial playlist (Net Ninja)", "https://www.youtube.com/playlist?list=PL4cUxeGkcC9g4YJeBqChhFJwKQ9TRiivY")}
${doc("Plugins documentation", "https://code.claude.com/docs/en/plugins")}
</ul></div>`
      },
      {
        id: "mcp",
        title: "MCP — Model Context Protocol",
        html: `
<h1>MCP — Model Context Protocol</h1>
<p class="lead">MCP is an open standard for connecting AI models to external tools, data, and services — often described as "USB-C for AI applications".</p>

<h2>The idea</h2>
<p>Instead of custom integrations per tool, an <strong>MCP server</strong> exposes capabilities (databases, browsers, ticket systems, APIs) in a standard format any MCP-capable client — like Claude — can use.</p>

<h2>Examples of MCP servers</h2>
<ul>
  <li>GitHub — read issues, create PRs</li>
  <li>Databases — query Postgres/SQLite safely</li>
  <li>Browsers — drive a web page (Playwright)</li>
  <li>Company internal APIs — expose them to Claude securely</li>
</ul>

<h2>Adding one to Claude Code</h2>
<pre><code>claude mcp add github -- npx -y @modelcontextprotocol/server-github</code></pre>

<div class="callout callout--note">
  <div><strong>Note:</strong> MCP was introduced by Anthropic in November 2024 and is now an industry-wide standard.</div>
</div>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("All You Need To Know About MCP", "https://www.youtube.com/watch?v=-UQ6OZywZ2I")}
${video("The Ultimate Claude Code Guide — MCP, Skills & More", "https://www.youtube.com/watch?v=uogzSxOw4LU")}
${doc("MCP in Claude Code", "https://code.claude.com/docs/en/mcp")}
${doc("modelcontextprotocol.io", "https://modelcontextprotocol.io/docs/getting-started/intro")}
</ul></div>`
      },
      {
        id: "tools",
        title: "Tools — Server & Client",
        html: `
<h1>Tools — Server &amp; Client</h1>
<p class="lead">Tools give Claude actions beyond text — reading files, searching the web, running code. They come in two flavors depending on where they execute.</p>

<h2>The two kinds</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Kind</th><th>Where it runs</th><th>Examples</th></tr></thead>
  <tbody>
    <tr><td><strong>Server tools</strong></td><td>On Anthropic's servers — no setup on your side</td><td>Web search, code execution, web fetch</td></tr>
    <tr><td><strong>Client tools</strong></td><td>On your side — you execute them and return the result to Claude</td><td>Your own functions, database queries, internal APIs</td></tr>
  </tbody>
</table></div>

<h2>How a client tool works</h2>
<pre><code>1. You describe the tool to Claude (name, purpose, parameters)
2. Claude decides to call it and sends you the arguments
3. Your code runs the tool and returns the result
4. Claude uses the result to continue the task</code></pre>

<div class="callout callout--note">
  <div><strong>Related:</strong> MCP is a standard way to package and share tools — see the MCP topic. How tools compare to agents and subagents is covered in <em>Agent Loop vs Tool vs MCP vs Subagent</em>.</div>
</div>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("What is tool use on the Claude Developer Platform?", "https://www.youtube.com/watch?v=Ao759wXbRc0", true)}
${video("Claude's built-in tools: web search, code execution, and web fetch", "https://www.youtube.com/watch?v=pm8iwdSIs3M", true)}
${doc("Tool use overview", "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview")}
${doc("Tools (managed agents)", "https://platform.claude.com/docs/en/managed-agents/tools")}
</ul></div>`
      },
      {
        id: "evals",
        title: "Evals",
        html: `
<h1>Evals</h1>
<p class="lead">An eval tests a skill or agent against example cases to measure how well it works and refine it — teach, test, measure, improve.</p>

<h2>The cycle</h2>
<pre><code>Teach    write the skill or agent
Test     run it against example cases
Measure  score the results against expectations
Improve  refine instructions, repeat</code></pre>

<h2>Why bother</h2>
<ul>
  <li>A skill that "seems fine" on one example often fails on the next — evals catch that before your team relies on it.</li>
  <li>Evals turn skill-writing from guesswork into iteration: each change is measured against the same cases.</li>
  <li>Plugin maintainers run evals before publishing updates (see the Plugins topic roles).</li>
</ul>

<div class="learn-more"><h4>Learn more</h4><ul>
${doc("Teach Claude your way of working using Skills", "https://claude.com/resources/tutorials/teach-claude-your-way-of-working-using-skills")}
${doc("Skill Creator plugin", "https://claude.com/plugins/skill-creator")}
${doc("Improving Skill Creator: test, measure, refine (blog)", "https://claude.com/blog/improving-skill-creator-test-measure-and-refine-agent-skills")}
${doc("Cowork evals module (Academy)", "https://anthropic.skilljar.com/introduction-to-claude-cowork/485949")}
${doc("Skill Evals tutorial (Conduction)", "https://www.conduction.nl/academy/claude-skills-tutorial-3-skill-evals/")}
</ul></div>`
      }
    ]
  },

  /* ============ 5. AGENTS & SUBAGENTS ============ */
  {
    title: "Agents & Subagents",
    children: [
      {
        id: "what-is-agent",
        title: "What is an Agent?",
        html: `
<h1>What is an Agent?</h1>
<p class="lead">An agent is an AI worker that carries out a task on its own using tools — reading files, running commands, calling APIs — instead of only answering questions.</p>

<h2>Agent vs. plain chat</h2>
<div class="table-wrap"><table>
  <thead><tr><th></th><th>Plain chat</th><th>Agent</th></tr></thead>
  <tbody>
    <tr><td><strong>Output</strong></td><td>Text answer</td><td>Completed work (edits, commits, reports)</td></tr>
    <tr><td><strong>Tools</strong></td><td>None</td><td>Files, terminal, web, APIs</td></tr>
    <tr><td><strong>Steps</strong></td><td>One reply</td><td>Plans and executes multiple steps</td></tr>
  </tbody>
</table></div>

<div class="callout callout--note">
  <div><strong>Terminology:</strong> "Agent" is the generic industry term. In Claude Code, the concrete feature is called a <strong>Subagent</strong> — next topic.</div>
</div>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("Building the future of agents with Claude", "https://www.youtube.com/watch?v=XuvKFsktX0Q", true)}
${video("How AI agents & Claude skills work", "https://www.youtube.com/watch?v=S_oN3vlzpMw")}
${doc("Building effective agents (Anthropic research)", "https://www.anthropic.com/research/building-effective-agents")}
</ul></div>`
      },
      {
        id: "agent-loop",
        title: "The Agent Loop",
        html: `
<h1>The Agent Loop</h1>
<p class="lead">The agent loop is the repeating cycle an agent runs: gather context, take action, verify results — again and again until the task is done.</p>

<h2>The cycle</h2>
<pre><code>┌─&gt; 1. Gather context   read files, search, ask questions
│   2. Take action      call tools: edit, run commands, fetch
│   3. Verify results   tests pass? output correct?
└── 4. Repeat           until the task is complete</code></pre>

<h2>Why it matters</h2>
<ul>
  <li>It explains agent behavior: Claude doesn't answer once — it iterates until verification passes.</li>
  <li>Better context in (CLAUDE.md, skills) means fewer loop iterations and faster results.</li>
  <li>Verification is the quality gate: tests, linters, and hooks make the loop converge on correct output.</li>
</ul>

<div class="callout callout--note">
  <div><strong>Role:</strong> the agent loop is the orchestrator — it decides which tools to call, when to delegate to subagents, and when the work is done. Full comparison in <em>Agent Loop vs Tool vs MCP vs Subagent</em>.</div>
</div>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("The Claude agent loop explained", "https://www.youtube.com/watch?v=tBIdyIoCQVU", true)}
${doc("Agent loop (Agent SDK)", "https://code.claude.com/docs/en/agent-sdk/agent-loop")}
</ul></div>`
      },
      {
        id: "subagents",
        title: "Subagents in Claude Code",
        html: `
<h1>Subagents in Claude Code</h1>
<p class="lead">A subagent is a helper agent the main Claude spawns for a focused sub-task. It runs with its own separate context window, its own system prompt, and its own tool permissions.</p>

<h2>Why use subagents</h2>
<ul>
  <li><strong>Context isolation</strong> — heavy searching/reading happens in the subagent; only the conclusion returns to your main session.</li>
  <li><strong>Specialization</strong> — a reviewer agent behaves differently from a test-writer agent.</li>
  <li><strong>Parallelism</strong> — several subagents can work at once.</li>
</ul>

<h2>Defining one</h2>
<p>One Markdown file per subagent in <code>.claude/agents/</code> (project) or <code>~/.claude/agents/</code> (user):</p>
<pre><code>---
name: code-reviewer
description: Reviews diffs for bugs and style issues
tools: Read, Grep, Bash
---

You are a strict code reviewer. For every finding report
file:line, severity, problem, and fix. No praise.</code></pre>

<h2>Invoking</h2>
<ul>
  <li>Main Claude delegates automatically when the task matches the description.</li>
  <li>Or ask directly: <em>"use the code-reviewer subagent on this diff"</em>.</li>
</ul>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("Claude Code Tutorial #8 — Subagents (Net Ninja)", "https://www.youtube.com/watch?v=Phr7vBx9yFQ")}
${video("Claude Code Sub Agents in 7 Minutes", "https://www.youtube.com/watch?v=DNGxMX7ym44")}
${video("Claude Code Subagents are Absolutely Insane", "https://www.youtube.com/watch?v=sNI18nzwgn8")}
${doc("Subagents documentation", "https://code.claude.com/docs/en/sub-agents")}
</ul></div>`
      },
      {
        id: "agent-vs-subagent",
        title: "Agent vs Subagent",
        html: `
<h1>Agent vs Subagent</h1>
<p class="lead">Claude Code's official terminology is <strong>Subagent</strong>. Documentation, configuration, and commands all use Subagent — "Agent" is mostly a generic AI term.</p>

<div class="table-wrap"><table>
  <thead><tr><th>Aspect</th><th>Agent</th><th>Subagent (Claude Code)</th></tr></thead>
  <tbody>
    <tr><td><strong>Official Claude Code feature?</strong></td><td>No</td><td>Yes</td></tr>
    <tr><td><strong>Used in documentation?</strong></td><td>Rarely (generic AI term)</td><td>Yes</td></tr>
    <tr><td><strong>Configuration location</strong></td><td>N/A</td><td><code>.claude/agents/</code></td></tr>
    <tr><td><strong>Configuration file</strong></td><td>N/A</td><td><code>backend.md</code>, <code>reviewer.md</code>, etc.</td></tr>
    <tr><td><strong>Who creates it?</strong></td><td>Conceptual term</td><td>You, in project or user configuration</td></tr>
    <tr><td><strong>Who invokes it?</strong></td><td>Conceptually Claude</td><td>Main Claude automatically, or you by name</td></tr>
    <tr><td><strong>Purpose</strong></td><td>Generic term for an AI role</td><td>Specialized AI assistant for a specific task</td></tr>
    <tr><td><strong>Example</strong></td><td>"Backend Agent" (concept)</td><td><code>backend.md</code> (actual subagent)</td></tr>
  </tbody>
</table></div>

<div class="learn-more"><h4>Learn more</h4><ul>
${doc("Subagents documentation", "https://code.claude.com/docs/en/sub-agents")}
</ul></div>`
      },
      {
        id: "managed-agents",
        title: "Managed Agents",
        html: `
<h1>Managed Agents</h1>
<p class="lead">Managed agents are server-hosted agents Anthropic runs for you in a managed sandbox — you define the agent, Anthropic handles the execution environment, tools, and scaling.</p>

<h2>How they differ from local agents</h2>
<div class="table-wrap"><table>
  <thead><tr><th></th><th>Local (Claude Code / SDK)</th><th>Managed agent</th></tr></thead>
  <tbody>
    <tr><td><strong>Runs on</strong></td><td>Your machine or infrastructure</td><td>Anthropic's servers, in a sandbox</td></tr>
    <tr><td><strong>You maintain</strong></td><td>Environment, dependencies, scaling</td><td>Only the agent definition</td></tr>
    <tr><td><strong>Best for</strong></td><td>Local repos, personal workflows</td><td>Production agents, team-scale automation</td></tr>
  </tbody>
</table></div>

<h2>When to reach for one</h2>
<ul>
  <li>You want an agent running reliably without owning servers or sandboxing.</li>
  <li>The agent serves a whole team or product, not one developer's machine.</li>
</ul>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("What are managed agents on the Claude Developer Platform?", "https://www.youtube.com/watch?v=haeslvB0zpg", true)}
${video("Building your first Claude managed agent", "https://www.youtube.com/watch?v=1Rl3gZrlQJo", true)}
${video("How Notion built with Claude Managed Agents", "https://www.youtube.com/watch?v=45hPRdfDEsI", true)}
${doc("Managed agents overview", "https://platform.claude.com/docs/en/managed-agents/overview")}
${doc("Engineering deep dive", "https://www.anthropic.com/engineering/managed-agents")}
${doc("Announcement blog", "https://claude.com/blog/claude-managed-agents")}
</ul></div>`
      },
      {
        id: "skill-vs-agent",
        title: "Skill vs Agent — Full Comparison",
        html: `
<h1>Skill vs Agent — Full Comparison</h1>
<p class="lead">Skills answer <em>"How should this task be done?"</em> Agents answer <em>"Who should do this task?"</em> This table breaks down every angle.</p>

<div class="table-wrap"><table>
  <thead><tr><th>Feature</th><th>SKILL.md</th><th>Agent / Subagent</th></tr></thead>
  <tbody>
    <tr><td><strong>Primary purpose</strong></td><td>Teach Claude how to perform a task</td><td>Create a specialized AI worker for a responsibility</td></tr>
    <tr><td><strong>What it is</strong></td><td>A Markdown instruction file</td><td>A dedicated AI agent with its own prompt, tools, behavior</td></tr>
    <tr><td><strong>Think of it as</strong></td><td>Documentation, playbook, SOP</td><td>A team member with a specific job</td></tr>
    <tr><td><strong>Scope</strong></td><td>Task knowledge</td><td>Role specialization</td></tr>
    <tr><td><strong>Main use</strong></td><td>Repeatable workflows</td><td>Divide complex work among specialists</td></tr>
    <tr><td><strong>Trigger</strong></td><td>Claude decides or user invokes</td><td>Claude or user delegates work</td></tr>
    <tr><td><strong>Contains</strong></td><td>Instructions, steps, examples, best practices</td><td>System prompt, responsibilities, tool permissions</td></tr>
    <tr><td><strong>Own personality</strong></td><td>No</td><td>Yes (specialized behavior)</td></tr>
    <tr><td><strong>Uses tools</strong></td><td>Through Claude</td><td>Configured with specific tools</td></tr>
    <tr><td><strong>Who works?</strong></td><td>Only one AI (Claude)</td><td>Multiple specialized AI agents can collaborate</td></tr>
    <tr><td><strong>Execution flow</strong></td><td><code>User &rarr; Claude &rarr; Read SKILL.md &rarr; Do task</code></td><td><code>User &rarr; Main Claude &rarr; Specialists &rarr; Result</code></td></tr>
    <tr><td><strong>Relationship</strong></td><td>Reusable knowledge any agent can follow</td><td>Worker that can use one or more skills</td></tr>
    <tr><td><strong>Rule of thumb</strong></td><td>Reusable method, standard, workflow</td><td>Specialist with defined responsibilities</td></tr>
    <tr><td><strong>In one sentence</strong></td><td>Knowledge + Process</td><td>Specialized Worker + Responsibility</td></tr>
  </tbody>
</table></div>

<h2>They work together</h2>
<p>Skills and agents are complementary, not competing:</p>
<pre><code>Skills (how):   coding-style/SKILL.md   react/SKILL.md   testing/SKILL.md
Agents (who):   frontend.md   backend.md   reviewer.md   tester.md

An agent follows one or more skills while doing its specialized job.</code></pre>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("How AI agents & Claude skills work", "https://www.youtube.com/watch?v=S_oN3vlzpMw")}
${doc("Skills documentation", "https://code.claude.com/docs/en/skills")}
${doc("Subagents documentation", "https://code.claude.com/docs/en/sub-agents")}
</ul></div>`
      },
      {
        id: "when-to-use",
        title: "When to Use Which",
        html: `
<h1>When to Use Which</h1>
<p class="lead">Quick decision table: given a scenario, reach for a skill or an agent?</p>

<div class="table-wrap"><table>
  <thead><tr><th>Scenario</th><th>Use SKILL.md</th><th>Use Agent</th></tr></thead>
  <tbody>
    <tr><td>Coding conventions</td><td>Yes</td><td>—</td></tr>
    <tr><td>Git workflow</td><td>Yes</td><td>—</td></tr>
    <tr><td>API standards</td><td>Yes</td><td>—</td></tr>
    <tr><td>Project documentation style</td><td>Yes</td><td>—</td></tr>
    <tr><td>Code review</td><td>—</td><td>Yes</td></tr>
    <tr><td>Architecture decisions</td><td>—</td><td>Yes</td></tr>
    <tr><td>Security analysis</td><td>—</td><td>Yes</td></tr>
    <tr><td>Research</td><td>—</td><td>Yes</td></tr>
    <tr><td>Test generation</td><td>—</td><td>Yes</td></tr>
    <tr><td>Large multi-step project</td><td>Alongside agents</td><td>Yes</td></tr>
  </tbody>
</table></div>

<div class="callout callout--tip">
  <div><strong>Shortcut:</strong> if the answer is a <em>document</em> ("here's how we do X"), write a skill. If the answer is a <em>person</em> ("we need someone to do X"), define an agent.</div>
</div>`
      },
      {
        id: "loop-tool-mcp-subagent",
        title: "Agent Loop vs Tool vs MCP vs Subagent",
        html: `
<h1>Agent Loop vs Tool vs MCP vs Subagent</h1>
<p class="lead">Four building blocks that get mixed up constantly. One orchestrates, one acts, one connects, one collaborates.</p>

<h2>One-line summary</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Component</th><th>One-line description</th></tr></thead>
  <tbody>
    <tr><td><strong>Agent Loop</strong></td><td>The orchestrator that reasons, plans, chooses actions, and coordinates the entire workflow</td></tr>
    <tr><td><strong>Tool</strong></td><td>A single-purpose function that performs one action when invoked</td></tr>
    <tr><td><strong>MCP</strong></td><td>A standardized integration layer that gives Claude access to external tools, resources, prompts, and services</td></tr>
    <tr><td><strong>Subagent</strong></td><td>A specialized Claude instance that independently reasons about a delegated task and returns its results to the main agent</td></tr>
  </tbody>
</table></div>

<h2>Full comparison</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Aspect</th><th>Agent Loop</th><th>Tool</th><th>MCP</th><th>Subagent</th></tr></thead>
  <tbody>
    <tr><td><strong>What it is</strong></td><td>The execution engine that controls Claude's workflow</td><td>A callable function that performs a specific action</td><td>A protocol connecting Claude to external systems through MCP servers</td><td>A specialized Claude instance dedicated to a focused task</td></tr>
    <tr><td><strong>Primary purpose</strong></td><td>Plan, reason, execute, and iterate until the task is complete</td><td>Perform a single operation</td><td>Expose external tools, resources, prompts, and services</td><td>Handle specialized or isolated work delegated by the main agent</td></tr>
    <tr><td><strong>AI reasoning</strong></td><td>Yes</td><td>No</td><td>No</td><td>Yes</td></tr>
    <tr><td><strong>Who executes it</strong></td><td>Main Claude</td><td>Claude invokes the tool</td><td>MCP server executes the requested capability</td><td>Another Claude instance</td></tr>
    <tr><td><strong>Can make decisions</strong></td><td>Yes</td><td>No</td><td>No</td><td>Yes</td></tr>
    <tr><td><strong>Can plan multi-step tasks</strong></td><td>Yes</td><td>No</td><td>No</td><td>Yes</td></tr>
    <tr><td><strong>Can call tools</strong></td><td>Yes</td><td>No</td><td>Provides tools rather than calling them</td><td>Yes (if permitted)</td></tr>
    <tr><td><strong>Can use MCP servers</strong></td><td>Yes</td><td>No</td><td>N/A (it is the integration layer)</td><td>Yes (if permitted)</td></tr>
    <tr><td><strong>Can delegate to subagents</strong></td><td>Yes</td><td>No</td><td>No</td><td>Usually no (unless explicitly allowed)</td></tr>
    <tr><td><strong>Connects to external systems</strong></td><td>Indirectly (via tools or MCP)</td><td>Sometimes (if the tool itself supports it)</td><td>Yes — its primary purpose</td><td>Indirectly (through tools or MCP, if permitted)</td></tr>
    <tr><td><strong>Maintains context</strong></td><td>Entire conversation/session</td><td>No</td><td>No (server may keep its own internal state)</td><td>Independent context for the delegated task</td></tr>
    <tr><td><strong>Scope</strong></td><td>Entire task/session</td><td>One operation</td><td>External integrations</td><td>One delegated task</td></tr>
    <tr><td><strong>Lifecycle</strong></td><td>Runs continuously until the task is complete</td><td>Starts and ends with a single call</td><td>Long-lived server waiting for requests</td><td>Created for a delegated task, ends when finished</td></tr>
    <tr><td><strong>Typical examples</strong></td><td>Build a feature, fix bugs, refactor code</td><td>Read file, edit file, run Bash command</td><td>GitHub, Jira, Slack, PostgreSQL, Browser</td><td>Code Reviewer, Documentation Writer, Test Generator</td></tr>
    <tr><td><strong>Primary role</strong></td><td>Orchestrator</td><td>Action Executor</td><td>Integration Layer</td><td>Specialized Collaborator</td></tr>
    <tr><td><strong>Analogy</strong></td><td>Project Manager</td><td>Worker using a specific tool</td><td>Supplier / API Gateway</td><td>Specialist Consultant</td></tr>
  </tbody>
</table></div>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("The Claude agent loop explained", "https://www.youtube.com/watch?v=tBIdyIoCQVU", true)}
${doc("Tool use overview", "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview")}
${doc("MCP in Claude Code", "https://code.claude.com/docs/en/mcp")}
${doc("Subagents documentation", "https://code.claude.com/docs/en/sub-agents")}
</ul></div>`
      }
    ]
  },

  /* ============ 6. WORKFLOW FEATURES ============ */
  {
    title: "Workflow Features",
    children: [
      {
        id: "code-review",
        title: "Code Review",
        html: `
<h1>Code Review</h1>
<p class="lead">Claude Code's review feature examines your code changes for logic errors, security vulnerabilities, broken edge cases, and subtle regressions.</p>

<h2>How to run it</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Command</th><th>Result</th></tr></thead>
  <tbody>
    <tr><td><code>/code-review</code></td><td>Reviews current branch diff, outputs to terminal</td></tr>
    <tr><td><code>/code-review --comment</code></td><td>Posts findings as inline PR comments</td></tr>
    <tr><td><code>/code-review --fix</code></td><td>Applies findings to the working tree</td></tr>
    <tr><td><code>/code-review ultra</code></td><td>Deep multi-agent cloud review of the branch/PR</td></tr>
  </tbody>
</table></div>

<h2>How it works</h2>
<ul>
  <li>Multiple review agents analyze the diff in parallel.</li>
  <li>Findings are verified to filter false positives, then ranked by severity.</li>
  <li>Result: a high-signal summary plus per-line findings.</li>
</ul>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("Claude Code best practices — Code w/ Claude", "https://www.youtube.com/watch?v=gv0WHhKelSE", true)}
${doc("Code review documentation", "https://code.claude.com/docs/en/code-review")}
${doc("Announcement blog", "https://claude.com/blog/code-review")}
</ul></div>`
      },
      {
        id: "artifacts",
        title: "Claude Design & Artifacts",
        html: `
<h1>Claude Design &amp; Artifacts</h1>
<p class="lead">Artifacts are polished, shareable outputs Claude builds for you — working web pages, dashboards, interactive documents, and UI — rendered outside the chat.</p>

<h2>What you can build</h2>
<ul>
  <li>Interactive dashboards and data visualizations</li>
  <li>Working single-page tools (calculators, forms, games)</li>
  <li>Formatted documents and reports</li>
  <li>UI prototypes without a dev environment</li>
</ul>

<h2>Why it matters for non-engineers</h2>
<p>Marketing, PM, and operations teams can turn a plain-language request into a working visual tool — no coding required.</p>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("15 Powerful Claude Artifacts Use Cases", "https://www.youtube.com/watch?v=UA2W4xTqQzs")}
${doc("What are Artifacts (Help Center)", "https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them")}
</ul></div>`
      },
      {
        id: "caveman",
        title: "Caveman Mode",
        html: `
<h1>Caveman Mode</h1>
<p class="lead">Caveman is a community plugin that compresses Claude's responses — dropping filler words while keeping full technical substance. Result: roughly 75% fewer output tokens.</p>

<h2>How it works</h2>
<ul>
  <li>Drops articles, pleasantries, hedging ("Sure! I'd be happy to help&hellip;").</li>
  <li>Keeps code blocks, exact error messages, and technical terms untouched.</li>
  <li>Intensity levels: <code>lite</code>, <code>full</code>, <code>ultra</code>.</li>
</ul>

<h2>Example</h2>
<pre><code>Normal:  "The issue you're experiencing is likely caused by the token
          expiry check using < instead of <=. I'd suggest fixing it."
Caveman: "Bug in auth middleware. Token expiry check use < not <=. Fix:"</code></pre>

<div class="callout callout--note">
  <div><strong>Why bother:</strong> fewer tokens = lower cost and longer usable sessions before the context window fills.</div>
</div>

<div class="learn-more"><h4>Learn more</h4><ul>
${video("Caveman AI Skill in Claude", "https://www.youtube.com/watch?v=jf1sv2geEWo")}
${doc("Caveman plugin (GitHub)", "https://github.com/juliusbrussee/caveman")}
</ul></div>`
      },
      {
        id: "shortcuts",
        title: "Shortcuts & Input Prefixes",
        html: `
<h1>Shortcuts &amp; Input Prefixes</h1>
<p class="lead">A handful of keystrokes controls most of Claude Code's interactive workflow — input prefixes open menus, and a few keys steer permissions and history.</p>

<h2>Input prefixes</h2>
<p>Type these at the <strong>start of the prompt</strong> to open a menu:</p>
<div class="table-wrap"><table>
  <thead><tr><th>Prefix</th><th>Opens</th><th>Use for</th></tr></thead>
  <tbody>
    <tr><td><code>@</code></td><td>File-path autocomplete</td><td>Mention a file so Claude reads it</td></tr>
    <tr><td><code>/</code></td><td>Commands &amp; skills menu</td><td>Run slash commands like <code>/compact</code>, <code>/clear</code>, or a skill</td></tr>
    <tr><td><code>#</code></td><td>Memory quick-add</td><td>Append a note to memory (CLAUDE.md) without opening the file</td></tr>
  </tbody>
</table></div>

<h2>Keyboard shortcuts</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Key</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td><code>Shift + Tab</code></td><td>Cycles <strong>permission modes</strong>: <code>default</code> (manual) &rarr; <code>acceptEdits</code> (auto-accept edits) &rarr; <code>plan</code> (plan first, no edits) &rarr; any others you enable (<code>auto</code>, <code>bypassPermissions</code>)</td></tr>
    <tr><td><code>Esc</code></td><td>Interrupts Claude mid-turn — stops the current response or tool call, keeps work done so far. If a dialog (e.g. permission prompt) is open, closes the dialog instead</td></tr>
    <tr><td><code>Esc Esc</code> (double press)</td><td>With text in the prompt &rarr; clears the draft (saved to history). With an empty prompt &rarr; opens the <strong>rewind menu</strong> to restore or summarize code &amp; conversation from an earlier point</td></tr>
  </tbody>
</table></div>

<div class="callout callout--tip">
  <div><strong>Tip:</strong> the context commands <code>/compact</code>, <code>/clear</code>, and <code>/context</code> are covered in the Context Window topic.</div>
</div>

<div class="learn-more"><h4>Learn more</h4><ul>
${doc("Interactive mode", "https://code.claude.com/docs/en/interactive-mode")}
${doc("Permission modes", "https://code.claude.com/docs/en/permission-modes")}
${doc("Checkpointing / rewind", "https://code.claude.com/docs/en/checkpointing")}
${doc("Memory (#)", "https://code.claude.com/docs/en/memory")}
${doc("Commands", "https://code.claude.com/docs/en/commands")}
</ul></div>`
      },
      {
        id: "markitdown",
        title: "MarkItDown — Any File to Markdown",
        html: `
<h1>MarkItDown — Any File to Markdown</h1>
<p class="lead">MarkItDown is Microsoft's open-source utility that converts almost any file type to Markdown — the format Claude reads best.</p>

<h2>Supported inputs</h2>
<ul>
  <li>PDF, Word, PowerPoint, Excel</li>
  <li>Images (EXIF metadata and OCR)</li>
  <li>Audio (EXIF metadata and speech transcription)</li>
  <li>HTML and text-based formats (CSV, JSON, XML)</li>
  <li>ZIP files (iterates over contents), EPubs, YouTube URLs, and more</li>
</ul>

<h2>Why it fits this journey</h2>
<p>Organization knowledge lives in Office documents and PDFs. Converting them to Markdown makes them usable as CLAUDE.md content, skill references, or project files — clean text instead of binary blobs.</p>

<pre><code>pip install markitdown
markitdown report.pdf &gt; report.md</code></pre>

<div class="learn-more"><h4>Learn more</h4><ul>
${doc("MarkItDown (GitHub)", "https://github.com/microsoft/markitdown")}
</ul></div>`
      }
    ]
  },

  /* ============ 7. LEARNING RESOURCES ============ */
  {
    title: "Learning Resources",
    children: [
      {
        id: "official-resources",
        title: "Official Anthropic Resources",
        html: `
<h1>Official Anthropic Resources</h1>
<p class="lead">Free, first-party learning material — the most accurate and up-to-date source.</p>

<h2>Anthropic Academy</h2>
<p>Free structured courses on Claude, Claude Code, and building with the API:
<a href="https://anthropic.skilljar.com/" target="_blank" rel="noopener">anthropic.skilljar.com</a></p>

<h2>Official YouTube channel</h2>
<p><a href="https://www.youtube.com/@claude/videos" target="_blank" rel="noopener">@claude</a> — product demos, conference talks, deep dives.</p>

<h2>Official playlists</h2>
<div class="learn-more"><h4>Playlists</h4><ul>
${video("Code with Claude 2026 | Japan", "https://www.youtube.com/playlist?list=PLmWCw1CzcFinrtcyN6EMIp6KqrDj8sxD7", true)}
${video("Claude Code Skills", "https://www.youtube.com/playlist?list=PLmWCw1CzcFim_hkruZSlABOUOAAQ5JMyo", true)}
${video("Code with Claude 2026 | San Francisco", "https://www.youtube.com/playlist?list=PLmWCw1CzcFim2obQ-w3ohbULOfwp5lApR", true)}
</ul></div>

<h2>Documentation hubs</h2>
<div class="learn-more"><h4>Docs</h4><ul>
${doc("Claude Code docs", "https://code.claude.com/docs/en/overview")}
${doc("Claude Platform docs", "https://platform.claude.com/docs")}
${doc("Model Context Protocol", "https://modelcontextprotocol.io")}
</ul></div>`
      },
      {
        id: "community-resources",
        title: "Community Channels & Playlists",
        html: `
<h1>Community Channels &amp; Playlists</h1>
<p class="lead">High-quality community tutorials — practical walkthroughs and real-world workflows.</p>

<div class="learn-more"><h4>Playlists</h4><ul>
${video("Claude Code Tutorial — Net Ninja", "https://www.youtube.com/playlist?list=PL4cUxeGkcC9g4YJeBqChhFJwKQ9TRiivY")}
${video("Claude Code", "https://www.youtube.com/playlist?list=PLSbQllRagIuQWckVcfszya8Zv8HGheNlc")}
${video("Claude Code Workflows", "https://www.youtube.com/playlist?list=PLm7xfhMOszqwW8iaG2crzPKErJA2eNfYV")}
${video("Claude Code Tutorial for Beginners (2026)", "https://www.youtube.com/playlist?list=PL4HikwTaYE0ETMaJqnNvm_2I3NEbexMDZ")}
</ul></div>

<div class="callout callout--tip">
  <div><strong>Suggested path:</strong> Anthropic Academy first for fundamentals, then Net Ninja's playlist for hands-on Claude Code practice.</div>
</div>`
      }
    ]
  }
];
