/* ============================================
   router.js — hash routing (#/topic-id),
   content rendering, prev/next pager
   ============================================ */

(function () {
  const article = document.getElementById("article");
  const pager = document.getElementById("pager");

  /* Flat ordered list of all topics for routing + pager */
  const FLAT = [];
  TOPICS.forEach(function (section) {
    section.children.forEach(function (topic) {
      FLAT.push(topic);
    });
  });

  const ARROW_L =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>';
  const ARROW_R =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  function currentId() {
    const hash = location.hash.replace(/^#\/?/, "");
    return hash || FLAT[0].id;
  }

  function render() {
    const id = currentId();
    let idx = FLAT.findIndex(function (t) { return t.id === id; });
    if (idx === -1) idx = 0;
    const topic = FLAT[idx];

    article.innerHTML = topic.html;
    document.title = topic.title + " — Maximizing Your AI Learning Journey";

    /* Pager */
    const prev = FLAT[idx - 1];
    const next = FLAT[idx + 1];
    let html = "";
    if (prev) {
      html += '<a href="#/' + prev.id + '">' + ARROW_L + " " + prev.title + "</a>";
    } else {
      html += '<span class="pager__spacer"></span>';
    }
    if (next) {
      html += '<a href="#/' + next.id + '">' + next.title + " " + ARROW_R + "</a>";
    }
    pager.innerHTML = html;

    if (window.setActiveNav) window.setActiveNav(topic.id);
    window.scrollTo({ top: 0 });
  }

  window.addEventListener("hashchange", render);
  render();
})();
