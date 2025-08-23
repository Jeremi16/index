// theme-switcher.js
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

// Cek preferensi yang sudah tersimpan di localStorage
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  htmlEl.classList.add('dark');
} else {
  htmlEl.classList.remove('dark');
}

themeToggleBtn.addEventListener('click', () => {
  // Toggle class 'dark' di elemen <html>
  htmlEl.classList.toggle('dark');

  // Simpan pilihan pengguna di localStorage
  if (htmlEl.classList.contains('dark')) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
});