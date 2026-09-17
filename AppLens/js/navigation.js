/**
 * AppLens - Navigation & Shell Interactivity
 * Manages active states, sticky header acrylic transition, keyboard shortcuts.
 */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // 1. Identify current page filename
  const pathname = window.location.pathname;
  const pageName = pathname.substring(pathname.lastIndexOf("/") + 1) || "index.html";

  // 2. Highlight desktop active navigation
  const navLinks = document.querySelectorAll(".al-nav-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href && (href === pageName || (pageName === "" && href === "index.html") || (href.includes(pageName) && pageName !== ""))) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // 3. Highlight mobile bottom navigation
  const mobileNavItems = document.querySelectorAll(".al-mobile-nav-item");
  mobileNavItems.forEach(item => {
    const href = item.getAttribute("href");
    if (href && (href === pageName || (pageName === "" && href === "index.html") || (href.includes(pageName) && pageName !== ""))) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // 4. Sticky Header Acrylic Blur Transition on Scroll
  const header = document.querySelector(".al-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.05)";
        header.style.background = "rgba(255, 255, 255, 0.94)";
      } else {
        header.style.boxShadow = "none";
        header.style.background = "rgba(255, 255, 255, 0.88)";
      }
    }, { passive: true });
  }

  // 5. Global Keyboard Shortcuts: Ctrl+K or / opens Search Modal
  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (window.AppLensSearch) {
        window.AppLensSearch.openModal();
      }
    } else if (e.key === "/" && !["input", "textarea"].includes(document.activeElement.tagName.toLowerCase())) {
      e.preventDefault();
      if (window.AppLensSearch) {
        window.AppLensSearch.openModal();
      }
    } else if (e.key === "Escape") {
      if (window.AppLensSearch) {
        window.AppLensSearch.closeModal();
      }
    }
  });
});
