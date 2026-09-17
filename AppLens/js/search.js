/**
 * AppLens - Instant Global Search & Autocomplete Modal
 * Fluent motion, keyboard accessibility, live search filtering.
 */

const AppLensSearch = (function () {
  "use strict";

  let modalBackdrop = null;
  let searchInput = null;
  let resultsContainer = null;
  let selectedIndex = -1;

  function initModal() {
    if (document.getElementById("al-search-modal-backdrop")) {
      modalBackdrop = document.getElementById("al-search-modal-backdrop");
      searchInput = document.getElementById("al-search-modal-input");
      resultsContainer = document.getElementById("al-search-results-list");
      return;
    }

    // Create Modal DOM
    modalBackdrop = document.createElement("div");
    modalBackdrop.id = "al-search-modal-backdrop";
    modalBackdrop.className = "al-search-modal-backdrop";
    modalBackdrop.setAttribute("role", "dialog");
    modalBackdrop.setAttribute("aria-modal", "true");
    modalBackdrop.setAttribute("aria-label", "Search applications");

    modalBackdrop.innerHTML = `
      <div class="al-search-modal" onclick="event.stopPropagation()">
        <div class="al-search-modal-input-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-muted">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" id="al-search-modal-input" class="al-search-modal-input" placeholder="Search an app, developer or package name..." autocomplete="off" />
          <span class="al-kbd-hint">ESC</span>
        </div>
        <ul id="al-search-results-list" class="al-search-results-list"></ul>
      </div>
    `;

    document.body.appendChild(modalBackdrop);

    searchInput = document.getElementById("al-search-modal-input");
    resultsContainer = document.getElementById("al-search-results-list");

    // Close on backdrop click
    modalBackdrop.addEventListener("click", closeModal);

    // Live search input
    searchInput.addEventListener("input", function () {
      renderResults(this.value.trim());
    });

    // Keyboard navigation within search
    searchInput.addEventListener("keydown", function (e) {
      const items = resultsContainer.querySelectorAll(".al-search-result-item");
      if (items.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % items.length;
        updateSelection(items);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        updateSelection(items);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (selectedIndex >= 0 && items[selectedIndex]) {
          items[selectedIndex].click();
        } else if (items[0]) {
          items[0].click();
        }
      }
    });
  }

  function updateSelection(items) {
    items.forEach((it, idx) => {
      if (idx === selectedIndex) {
        it.classList.add("selected");
        it.scrollIntoView({ block: "nearest" });
      } else {
        it.classList.remove("selected");
      }
    });
  }

  function openModal() {
    initModal();
    modalBackdrop.classList.add("open");
    selectedIndex = -1;
    searchInput.value = "";
    renderResults("");
    setTimeout(() => searchInput.focus(), 50);
  }

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove("open");
    }
  }

  function renderResults(query) {
    if (!resultsContainer) return;
    const q = query.toLowerCase();
    const apps = window.APPLENS_DATA ? window.APPLENS_DATA.apps : [];

    const matches = apps.filter(app => {
      if (!q) return true;
      return app.name.toLowerCase().includes(q) ||
             app.developer.toLowerCase().includes(q) ||
             app.category.toLowerCase().includes(q) ||
             app.packageName.toLowerCase().includes(q);
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <li style="padding: 2.5rem 1rem; text-align: center; color: var(--al-text-muted);">
          <p style="margin: 0; font-weight: 500;">No applications found matching "${escapeHtml(query)}"</p>
          <span style="font-size: 0.8125rem;">Try searching by app name, developer, or category.</span>
        </li>
      `;
      return;
    }

    let html = "";
    matches.forEach(app => {
      html += `
        <li class="al-search-result-item" onclick="window.location.href='application.html?id=${app.id}'">
          <div class="al-app-icon sm">
            ${app.icon}
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;">
              <span style="font-weight: 600; color: var(--al-text-main); font-size: 0.9375rem;">${escapeHtml(app.name)}</span>
              <span class="al-badge al-badge-neutral">${escapeHtml(app.category)}</span>
            </div>
            <div style="font-size: 0.75rem; color: var(--al-text-muted); margin-top: 0.15rem;">
              ${escapeHtml(app.developer)} • v${escapeHtml(app.currentVersion)}
            </div>
          </div>
          <div style="font-size: 0.8125rem; font-weight: 600; color: var(--al-text-main); display: flex; align-items: center; gap: 0.25rem;">
            <svg class="al-rating-star" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ${app.rating}
          </div>
        </li>
      `;
    });

    resultsContainer.innerHTML = html;
  }

  function escapeHtml(str) {
    if (!str) return "";
    return str.replace(/[&<>"']/g, function (m) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      }[m];
    });
  }

  // Hook up any search trigger buttons on the page
  document.addEventListener("DOMContentLoaded", function () {
    const triggers = document.querySelectorAll(".js-search-trigger");
    triggers.forEach(trig => {
      trig.addEventListener("click", openModal);
    });
  });

  return {
    openModal,
    closeModal
  };
})();

window.AppLensSearch = AppLensSearch;
