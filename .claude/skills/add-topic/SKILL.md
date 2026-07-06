---
name: add-topic
description: Add or edit a tutorial topic in assets/js/topics.js following the site's content patterns. Use when asked to add a new topic, section, or page to the tutorial site.
---

# Add a tutorial topic

All content lives in `assets/js/topics.js` in the `TOPICS` array. One section = one sidebar group; one child = one page.

## Steps

1. Pick the right section in `TOPICS` (or add a new `{ title, children: [] }` section).
2. Add a child object:

```js
{
  id: "my-topic",          // kebab-case, unique, becomes the URL: tutorial.html#/my-topic
  title: "My Topic",       // sidebar + pager label
  html: ` ...content... `  // template literal, no nested backticks
}
```

3. Content HTML pattern (order matters):

```html
<h1>Topic Title</h1>
<p class="lead">One-sentence summary of the topic.</p>

<h2>Section heading</h2>
<p>Body text…</p>
```

## Building blocks

- **Table** — always wrapped for scroll:
  `<div class="table-wrap"><table><thead><tr><th>…</th></tr></thead><tbody>…</tbody></table></div>`
- **Callout** —
  `<div class="callout callout--tip"><div><strong>Tip:</strong> …</div></div>`
  (variants: `callout--tip`, `callout--note`)
- **Code block** — `<pre><code>…</code></pre>`; escape `<` as `&lt;` inside.
- **Learn-more box** — use the helpers defined at the top of `topics.js`:

```js
<div class="learn-more"><h4>Learn more</h4><ul>
${video("Video title", "https://youtube.com/…", true)}   // true = Anthropic official
${doc("Doc title", "https://code.claude.com/docs/…")}
</ul></div>
```

## Rules

- No nested backticks inside the `html` template literal.
- No raster images; inline SVG only.
- Green palette only; never add new colors.
- Routing and sidebar update automatically — no changes needed in nav.js/router.js.
- Verify: open `tutorial.html#/my-topic` in a browser.
