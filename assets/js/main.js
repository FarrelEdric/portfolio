/* =========================================================
   Farrel Edric — portfolio interactions
   Theme · nav state · scroll progress · reveal · mobile menu
   ========================================================= */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ── theme ──────────────────────────────────────────── */
  var toggle = document.getElementById('theme-toggle');
  var meta = document.querySelector('meta[name="theme-color"]');

  function setTheme(theme, persist) {
    root.setAttribute('data-theme', theme);
    if (persist) {
      try { localStorage.setItem('fe-theme', theme); } catch (e) {}
    }
    if (toggle) {
      var goingLight = theme === 'dark';
      toggle.setAttribute('aria-pressed', String(theme === 'light'));
      toggle.setAttribute('aria-label', goingLight ? 'Switch to light theme' : 'Switch to dark theme');
    }
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#080808' : '#F5F5F2');
    swapPortrait(theme);
  }

  /* The hero portrait is a vignette: its edges are blended into the page
     background colour, so it needs a different baked image per theme.
     <picture> cannot switch on a class, so the sources are rewritten here. */
  function swapPortrait(theme) {
    var light = theme === 'light';
    var src = document.querySelector('#hero-picture source[type="image/webp"]');
    var img = document.getElementById('hero-portrait');
    if (src) {
      src.setAttribute('srcset', light
        ? 'assets/portrait-light.webp 760w, assets/portrait-light-2x.webp 1140w'
        : 'assets/portrait.webp 760w, assets/portrait-2x.webp 1140w');
    }
    if (img) {
      var want = light ? 'assets/portrait-light.png' : 'assets/portrait.png';
      if (img.getAttribute('src') !== want) img.setAttribute('src', want);
    }
  }

  setTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark', false);

  if (toggle) {
    toggle.addEventListener('click', function () {
      setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
    });
  }

  /* follow the OS only while the visitor has never chosen */
  var stored = null;
  try { stored = localStorage.getItem('fe-theme'); } catch (e) {}
  if (!stored && window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: light)');
    var onScheme = function (e) { setTheme(e.matches ? 'light' : 'dark', false); };
    if (mq.addEventListener) mq.addEventListener('change', onScheme);
    else if (mq.addListener) mq.addListener(onScheme);
  }

  /* ── nav: stuck, auto-hide, scroll progress ─────────── */
  var nav = document.getElementById('nav');
  var progress = document.getElementById('nav-progress');
  var lastY = window.scrollY;
  var ticking = false;

  function onScroll() {
    var y = window.scrollY;

    if (nav) {
      nav.classList.toggle('is-stuck', y > 24);
      var down = y > lastY && y > 420;
      var menuOpen = document.body.classList.contains('menu-open');
      nav.classList.toggle('is-hidden', down && !menuOpen);
    }

    if (progress) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
      progress.style.width = (ratio * 100).toFixed(2) + '%';
    }

    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* ── reveal on scroll ────────────────────────────────────
     getBoundingClientRect check on scroll, plus an immediate pass on load.
     Deliberately timer-free and IntersectionObserver-free: timer-driven and
     observer callbacks are not delivered by some embedded/preview renderers,
     which would leave the whole page below the fold invisible.
     ──────────────────────────────────────────────────────── */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  function revealVisible() {
    for (var i = reveals.length - 1; i >= 0; i--) {
      var el = reveals[i];
      if (el.classList.contains('is-visible')) continue;
      var r = el.getBoundingClientRect();
      var vh = window.innerHeight || document.documentElement.clientHeight || 800;
      if (r.top < vh * 0.94 && r.bottom > 0) el.classList.add('is-visible');
    }
  }

  reveals.forEach(function (el) {
    /* stagger siblings within the same block */
    var sibs = el.parentElement ? el.parentElement.querySelectorAll(':scope > .reveal') : null;
    var idx = sibs ? Array.prototype.indexOf.call(sibs, el) : 0;
    el.style.setProperty('--d', Math.min(idx, 5) * 70 + 'ms');
  });

  if (reduce.matches) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    revealVisible();
    window.addEventListener('scroll', revealVisible, { passive: true });
    window.addEventListener('resize', revealVisible);
    window.addEventListener('orientationchange', revealVisible);
    window.addEventListener('load', revealVisible);
  }

  /* ── mobile menu ────────────────────────────────────── */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobile-menu');
  var lastFocus = null;

  function openMenu() {
    if (!menu || !burger) return;
    lastFocus = document.activeElement;
    menu.hidden = false;
    root.style.overflow = 'hidden';
    root.classList.add('menu-open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Close menu');
    if (nav) nav.classList.remove('is-hidden');
    /* force layout so the opacity/visibility transition actually plays
       (no requestAnimationFrame: some embedded renderers never call it) */
    void menu.offsetHeight;
    menu.classList.add('is-open');
    var first = menu.querySelector('a');
    if (first) first.focus({ preventScroll: true });
  }

  function closeMenu(restore) {
    if (!menu || !burger) return;
    menu.classList.remove('is-open');
    root.style.overflow = '';
    root.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
    /* visibility:hidden already makes the panel inert; the timeout only tidies up */
    window.setTimeout(function () { menu.hidden = true; }, reduce.matches ? 0 : 380);
    if (restore && lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  if (burger && menu) {
    burger.addEventListener('click', function () {
      if (burger.getAttribute('aria-expanded') === 'true') closeMenu(true);
      else openMenu();
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') closeMenu(true);
      /* keep tabbing inside the overlay while it is open */
      if (e.key === 'Tab' && burger.getAttribute('aria-expanded') === 'true') {
        var items = menu.querySelectorAll('a, button');
        if (!items.length) return;
        var first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 940 && burger.getAttribute('aria-expanded') === 'true') closeMenu(false);
    });
  }

  /* ── current section in nav ─────────────────────────── */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav__links a'));
  var sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          var on = a.getAttribute('href') === '#' + entry.target.id;
          if (on) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ── footer year ────────────────────────────────────── */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* ── portrait: hide gracefully if the asset is missing ─ */
  var portrait = document.getElementById('hero-portrait');
  if (portrait) {
    portrait.addEventListener('error', function () {
      portrait.hidden = true;
      var vis = portrait.closest('.hero__visual');
      if (vis) vis.classList.add('is-empty');
    });
  }
})();
