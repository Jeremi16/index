// assets/js/main.js

async function loadComponent(targetId, url) {
  const container = document.getElementById(targetId);
  if (!container) return;
  try {
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new Error(`Gagal load ${url}`);
    container.innerHTML = await res.text();
  } catch (e) {
    console.error(`❌ Error load ${url}:`, e);
  }
}

function injectScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.defer = true;
    s.onload = () => resolve(src);
    s.onerror = () => reject(new Error(`Gagal load script: ${src}`));
    document.body.appendChild(s);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("navbar", "/components/navbar.html");
  await injectScript(`/assets/js/navbar.js?v=${Date.now()}`); // ⬅️ cache-buster

  if (typeof window.initFlowbite === "function") {
    window.initFlowbite();
  }

  await loadComponent("footer", "/components/footer.html");
  await injectScript(`/assets/js/footer.js?v=${Date.now()}`); // ⬅️ cache-buster
});
