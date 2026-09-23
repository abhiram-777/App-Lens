/**
 * AppLens - Core Application Logic & State Engine
 * Clean, modular vanilla JS ready for PHP/MySQL replacement.
 */

const AppLens = (function () {
  "use strict";

  // Local storage keys
  const STORAGE_REPORTS = "applens_custom_reports";
  const STORAGE_BOOKMARKS = "applens_saved_apps";
  const STORAGE_UPVOTES = "applens_user_upvotes";

  /**
   * Retrieve active application ID from URL (?id=...)
   */
  function getQueryAppId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id") || "whatsapp";
  }

  /**
   * Fetch app object by ID
   */
  function getAppById(appId) {
    if (!window.APPLENS_DATA || !window.APPLENS_DATA.apps) return null;
    return window.APPLENS_DATA.apps.find(a => a.id.toLowerCase() === appId.toLowerCase()) || window.APPLENS_DATA.apps[0];
  }

  /**
   * Get all apps including local additions
   */
  function getAllApps() {
    return window.APPLENS_DATA ? window.APPLENS_DATA.apps : [];
  }

  /**
   * Retrieve community reports including dynamically submitted ones
   */
  function getReportsForApp(appId) {
    const app = getAppById(appId);
    if (!app) return [];

    let customReports = [];
    try {
      const stored = localStorage.getItem(STORAGE_REPORTS);
      if (stored) {
        customReports = JSON.parse(stored).filter(r => r.appId === appId);
      }
    } catch (e) {
      console.error("Failed to load local reports", e);
    }

    return [...customReports, ...(app.communityReports || [])];
  }

  /**
   * Add a new community report
   */
  function submitReport(reportData) {
    try {
      const stored = localStorage.getItem(STORAGE_REPORTS);
      const reports = stored ? JSON.parse(stored) : [];
      
      const newReport = {
        id: "rep-user-" + Date.now(),
        user: reportData.user || "Community Member",
        device: reportData.device || "Android Device",
        osVersion: reportData.osVersion || "Latest OS",
        appVersion: reportData.appVersion || "Current",
        appId: reportData.appId,
        date: "Just now",
        issueType: reportData.issueType || "Other",
        rating: Number(reportData.rating) || 4,
        verified: true,
        title: reportData.title,
        content: reportData.content,
        upvotes: 1,
        userUpvoted: true
      };

      reports.unshift(newReport);
      localStorage.setItem(STORAGE_REPORTS, JSON.stringify(reports));
      return newReport;
    } catch (e) {
      console.error("Error saving report", e);
      return null;
    }
  }

  /**
   * Bookmark / Save App Toggle
   */
  function isBookmarked(appId) {
    try {
      const stored = localStorage.getItem(STORAGE_BOOKMARKS);
      const bookmarks = stored ? JSON.parse(stored) : ["whatsapp", "signal"];
      return bookmarks.includes(appId);
    } catch (e) {
      return false;
    }
  }

  function toggleBookmark(appId) {
    try {
      const stored = localStorage.getItem(STORAGE_BOOKMARKS);
      let bookmarks = stored ? JSON.parse(stored) : ["whatsapp", "signal"];
      
      if (bookmarks.includes(appId)) {
        bookmarks = bookmarks.filter(id => id !== appId);
        showToast("Removed from saved applications", "info");
      } else {
        bookmarks.push(appId);
        showToast("Added to saved applications", "success");
      }
      
      localStorage.setItem(STORAGE_BOOKMARKS, JSON.stringify(bookmarks));
      return bookmarks.includes(appId);
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  /**
   * Upvote a community report
   */
  function toggleUpvote(reportId) {
    try {
      const stored = localStorage.getItem(STORAGE_UPVOTES);
      let upvotes = stored ? JSON.parse(stored) : [];
      const hasUpvoted = upvotes.includes(reportId);

      if (hasUpvoted) {
        upvotes = upvotes.filter(id => id !== reportId);
      } else {
        upvotes.push(reportId);
      }

      localStorage.setItem(STORAGE_UPVOTES, JSON.stringify(upvotes));
      return !hasUpvoted;
    } catch (e) {
      return false;
    }
  }

  /**
   * Render Star Rating SVGs
   */
  function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let html = '<div class="al-rating-box" aria-label="Rating ' + rating + ' out of 5">';
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        html += `<svg class="al-rating-star" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
      } else if (i === fullStars && hasHalf) {
        html += `<svg class="al-rating-star" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill-opacity="0.3"/><path d="M12 2v15.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
      } else {
        html += `<svg class="al-rating-star" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" fill-opacity="0.25"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
      }
    }
    
    html += `<span class="ms-1">${Number(rating).toFixed(1)}</span></div>`;
    return html;
  }

  /**
   * Show Minimal Toast Notification
   */
  function showToast(message, type = "info") {
    let container = document.getElementById("al-toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "al-toast-container";
      container.className = "al-toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "al-toast";
    
    const icon = type === "success" 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

    toast.innerHTML = `${icon}<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = "opacity 200ms ease, transform 200ms ease";
      toast.style.opacity = "0";
      toast.style.transform = "translateY(8px) scale(0.95)";
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  }

  return {
    getQueryAppId,
    getAppById,
    getAllApps,
    getReportsForApp,
    submitReport,
    isBookmarked,
    toggleBookmark,
    toggleUpvote,
    renderStars,
    showToast
  };
})();

window.AppLens = AppLens;

document.addEventListener("DOMContentLoaded", function () {
  function redirectToLogin(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    window.alert("You need to log in to do that action.");
    window.location.assign("login.html");
  }

  document.addEventListener("click", function (event) {
    const submitLink = event.target.closest(".js-login-required, a[href^='submit-report.html']");
    const reportSubmitButton = event.target.closest("#report-form button[type='submit']");
    if (submitLink || reportSubmitButton) redirectToLogin(event);
  }, true);

  document.addEventListener("submit", function (event) {
    if (event.target.id === "report-form") redirectToLogin(event);
  }, true);
});
