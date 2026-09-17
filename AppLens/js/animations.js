/**
 * AppLens - Motion & Micro-Interactions
 * Inspired by Microsoft Fluent Design: subtle, fast, smooth, purposeful.
 */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1. Interactive Permission Accordion
  const accordionRows = document.querySelectorAll(".al-perm-row");
  accordionRows.forEach(row => {
    const trigger = row.querySelector(".al-perm-trigger");
    if (trigger) {
      trigger.addEventListener("click", () => {
        const isOpen = row.classList.contains("open");
        
        // Optional: close other rows in the same accordion
        const parent = row.closest(".al-perm-accordion");
        if (parent && !isOpen) {
          parent.querySelectorAll(".al-perm-row.open").forEach(other => {
            other.classList.remove("open");
            const icon = other.querySelector(".al-perm-icon-chevron");
            if (icon) icon.style.transform = "rotate(0deg)";
          });
        }

        row.classList.toggle("open");
        const chevron = trigger.querySelector(".al-perm-icon-chevron");
        if (chevron) {
          chevron.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
          chevron.style.transition = "transform 240ms cubic-bezier(0.16, 1, 0.3, 1)";
        }
      });
    }
  });

  // 2. Subtle page entrance fade
  if (!prefersReducedMotion) {
    const mainContent = document.querySelector(".al-main");
    if (mainContent) {
      mainContent.style.opacity = "0";
      mainContent.style.transform = "translateY(6px)";
      mainContent.style.transition = "opacity 280ms cubic-bezier(0.16, 1, 0.3, 1), transform 280ms cubic-bezier(0.16, 1, 0.3, 1)";
      requestAnimationFrame(() => {
        mainContent.style.opacity = "1";
        mainContent.style.transform = "translateY(0)";
      });
    }
  }

  // 3. Upvote button interactive trigger
  document.addEventListener("click", function (e) {
    const upvoteBtn = e.target.closest(".al-upvote-btn");
    if (upvoteBtn) {
      const reportId = upvoteBtn.getAttribute("data-report-id");
      const countSpan = upvoteBtn.querySelector(".al-upvote-count");
      let count = parseInt(countSpan.textContent, 10) || 0;

      if (window.AppLens && reportId) {
        const isNowUpvoted = window.AppLens.toggleUpvote(reportId);
        if (isNowUpvoted) {
          upvoteBtn.classList.add("upvoted");
          countSpan.textContent = count + 1;
          window.AppLens.showToast("Upvoted community report", "info");
        } else {
          upvoteBtn.classList.remove("upvoted");
          countSpan.textContent = Math.max(0, count - 1);
        }
      }
    }
  });
});
