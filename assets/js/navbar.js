// assets/js/navbar.js
(function () {
  const normalize = (p) => {
    if (!p) return "/";
    return p.replace(/\/index\.html$/i, "").replace(/\/$/, "") || "/";
  };

  const highlightActive = () => {
    const current = normalize(window.location.pathname);

    document.querySelectorAll("#navbar .nav-link").forEach((link) => {
      const href = link.getAttribute("href") || "/";
      const linkPath = normalize(href);

      // reset dulu
      link.classList.remove(
        "bg-gray-700",
        "text-white",
        "font-semibold",
        "text-gray-300",
        "hover:bg-gray-700",
        "hover:text-white"
      );
      // pastikan base classes ada
      link.classList.add("rounded-md", "px-4", "py-2", "transition-colors", "duration-150");

      if (linkPath === current) {
        // aktif
        link.classList.add("bg-gray-700", "text-white", "font-semibold");
        link.setAttribute("aria-current", "page");
      } else {
        // non-aktif + hover
        link.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white");
        link.removeAttribute("aria-current");
      }
    });
  };

  // jalankan sekarang kalau DOM sudah siap; kalau belum, tunggu
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", highlightActive);
  } else {
    highlightActive();
  }

  // observe jika #navbar diisi/diperbarui secara dinamis
  const host = document.getElementById("navbar");
  if (host) {
    const mo = new MutationObserver(() => highlightActive());
    mo.observe(host, { childList: true, subtree: true });
  }
})();
