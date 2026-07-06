# AI Learning Journey — Project Instructions

Static tutorial website: "Maximizing Your AI Learning Journey". Documentation-style layout (left tree menu, right content). Pure HTML/CSS/vanilla JS — no frameworks, no build step, no server. Opens directly from disk (`file://`).

## File structure

```
index.html         Landing page (hero + "Let's Start Now" button)
tutorial.html      Tutorial shell (topbar, sidebar, content pane)
css/base.css       Reset, CSS variables (green palette), shared components
css/home.css       Hero page styles
css/tutorial.css   Sidebar tree, content, tables, callouts, responsive
js/topics.js       ALL topic content lives here (data only)
js/nav.js          Builds sidebar tree from TOPICS, drawer toggle
js/router.js       Hash routing (#/topic-id), renders content, prev/next
README.md          Human-facing overview (keep in sync with this file)
```

## Conventions

- **Content lives only in `js/topics.js`** — a `TOPICS` array of sections, each with `children: [{ id, title, html }]`. Never hardcode topic content in HTML files.
- **Routing**: `tutorial.html#/topic-id`. Router falls back to first topic on unknown/empty hash.
- **Green theme only** — use CSS variables from `base.css` (`--green-50` … `--green-950`). No other accent colors.
- **No frameworks, no dependencies, no fetch()** — fetch of local files breaks on `file://`.
- **No raster images** — inline SVG only.
- **No emoji** in site content unless genuinely useful.
- Tables always wrapped in `<div class="table-wrap">` for horizontal scroll.
- Learn-more boxes use the `video(title, url, official)` and `doc(title, url)` helpers defined at the top of `topics.js`.

## Adding a topic

Use the `add-topic` skill (`.claude/skills/add-topic/SKILL.md`) — it documents the exact pattern.

## Testing

Open `index.html` in a browser. No server needed. Check: hero button → tutorial, every sidebar link renders, deep link (`tutorial.html#/hooks`) works, mobile drawer below 900px.
