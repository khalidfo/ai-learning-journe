/* ============================================
   nav.js — sidebar tree, expand/collapse,
   active highlight, mobile drawer
   ============================================ */

(function () {
  const sidebar = document.getElementById("sidebar");
  const toggle = document.getElementById("navToggle");
  const overlay = document.getElementById("overlay");

  const CHEVRON =
    '<svg class="sidebar__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';

  /* Accordion: close every section except the given one */
  function closeOtherSections(except) {
    sidebar.querySelectorAll(".sidebar__section").forEach(function (s) {
      if (s !== except) s.classList.remove("is-open");
    });
  }

  /* Build the tree */
  TOPICS.forEach(function (section, i) {
    const wrap = document.createElement("div");
    wrap.className = i === 0 ? "sidebar__section is-open" : "sidebar__section"; // only first open by default
    wrap.dataset.section = i;

    const btn = document.createElement("button");
    btn.className = "sidebar__section-btn";
    btn.innerHTML = "<span>" + section.title + "</span>" + CHEVRON;
    btn.addEventListener("click", function () {
      if (!wrap.classList.contains("is-open")) closeOtherSections(wrap);
      wrap.classList.toggle("is-open");
    });

    const list = document.createElement("ul");
    list.className = "sidebar__list";

    section.children.forEach(function (topic) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = "sidebar__link";
      a.href = "#/" + topic.id;
      a.textContent = topic.title;
      a.dataset.topic = topic.id;
      a.addEventListener("click", closeDrawer);
      li.appendChild(a);
      list.appendChild(li);
    });

    wrap.appendChild(btn);
    wrap.appendChild(list);
    sidebar.appendChild(wrap);
  });

  /* Active link highlight — called by router.js */
  window.setActiveNav = function (id) {
    sidebar.querySelectorAll(".sidebar__link").forEach(function (a) {
      a.classList.toggle("is-active", a.dataset.topic === id);
    });
    // accordion: open only the section containing the active link
    const active = sidebar.querySelector('.sidebar__link[data-topic="' + id + '"]');
    if (active) {
      const section = active.closest(".sidebar__section");
      closeOtherSections(section);
      section.classList.add("is-open");
      // keep active item visible in the sidebar scroll
      active.scrollIntoView({ block: "nearest" });
    }
  };

  /* Mobile drawer */
  function closeDrawer() {
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  overlay.addEventListener("click", closeDrawer);
})();
