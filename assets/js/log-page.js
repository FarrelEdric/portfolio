/* Tema untuk halaman log mingguan.
   Halaman ini sengaja tidak memuat main.js: berkas itu mengurus hal-hal khas
   beranda — potret yang berganti per tema, penggeser, animasi reveal, dan
   penanda bagian aktif — yang tidak ada di sini. Yang dibutuhkan hanya tombol
   tema, jadi ditulis terpisah supaya tidak menyeret kode yang tak terpakai. */
(function () {
  'use strict';

  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function setTheme(theme, persist) {
    root.setAttribute('data-theme', theme);
    if (persist) {
      try { localStorage.setItem('fe-theme', theme); } catch (e) {}
    }
    if (toggle) {
      var goingLight = theme === 'dark';
      toggle.setAttribute('aria-pressed', String(theme === 'light'));
      /* Label ikut bahasa yang sedang aktif. */
      var label = goingLight ? 'Switch to light theme' : 'Switch to dark theme';
      toggle.setAttribute('aria-label',
        window.FE_i18n ? window.FE_i18n.t(label) : label);
    }
  }

  setTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark', false);

  if (toggle) {
    toggle.addEventListener('click', function () {
      setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
    });
  }
})();
