/* =========================================================
   Farrel Edric — project slider
   Progressive enhancement: the carousel is a plain scroll-snap
   flex row, so swiping/keyboard scrolling works with no JS.
   This adds arrows, dots, a counter and arrow-key support.
   ========================================================= */
(function () {
  'use strict';

  document.querySelectorAll('[data-slider]').forEach(function (root) {
    var viewport = root.querySelector('.ace-slider__viewport');
    var slides = Array.prototype.slice.call(root.querySelectorAll('.ace-slider__slide'));
    var dotsBox = root.querySelector('.ace-slider__dots');
    var counter = root.querySelector('.ace-slider__count');
    var prev = root.querySelector('.ace-slider__nav--prev');
    var next = root.querySelector('.ace-slider__nav--next');
    if (!viewport || slides.length < 2) return;

    var dots = [];

    function currentIndex() {
      var w = viewport.clientWidth || 1;
      return Math.round(viewport.scrollLeft / w);
    }

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* Custom eased animation driven by setTimeout.
       NOT viewport.scrollTo({behavior:'smooth'}): that either jumps to the wrong
       offset when combined with scroll-snap, or silently does nothing in engines
       that skip the animation - measured both. rAF is also unusable here because
       it is not delivered in every embedding context. */
    var raf = null;
    function goTo(i) {
      var w = viewport.clientWidth || 1;
      i = Math.max(0, Math.min(slides.length - 1, i));
      var to = i * w;
      var from = viewport.scrollLeft;

      if (raf) { window.clearTimeout(raf); raf = null; }
      if (reduceMotion || Math.abs(to - from) < 1) {
        viewport.scrollLeft = to;
        sync();
        return;
      }

      var t0 = Date.now(), dur = 300;
      (function step() {
        var p = Math.min(1, (Date.now() - t0) / dur);
        var e = 1 - Math.pow(1 - p, 3);                  /* ease-out cubic */
        viewport.scrollLeft = from + (to - from) * e;
        if (p < 1) {
          raf = window.setTimeout(step, 16);
        } else {
          raf = null;
          viewport.scrollLeft = to;                      /* exact landing */
          sync();
        }
      })();
      sync();
    }

    function sync() {
      var i = currentIndex();
      dots.forEach(function (d, n) {
        d.setAttribute('aria-selected', String(n === i));
        d.tabIndex = n === i ? 0 : -1;
      });
      if (counter) counter.textContent = (i + 1) + ' / ' + slides.length;
      if (prev) prev.disabled = i === 0;
      if (next) next.disabled = i === slides.length - 1;
    }

    if (dotsBox) {
      slides.forEach(function (s, i) {
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('role', 'tab');
        b.setAttribute('aria-selected', String(i === 0));
        b.setAttribute('aria-label', 'Go to image ' + (i + 1) + ' of ' + slides.length);
        b.tabIndex = i === 0 ? 0 : -1;
        b.addEventListener('click', function () { goTo(i); });
        dotsBox.appendChild(b);
        dots.push(b);
      });
      /* roving focus across the dots */
      dotsBox.addEventListener('keydown', function (e) {
        var i = currentIndex();
        if (e.key === 'ArrowRight') { e.preventDefault(); goTo(i + 1); dots[Math.min(dots.length - 1, i + 1)].focus(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(i - 1); dots[Math.max(0, i - 1)].focus(); }
        if (e.key === 'Home') { e.preventDefault(); goTo(0); dots[0].focus(); }
        if (e.key === 'End') { e.preventDefault(); goTo(slides.length - 1); dots[dots.length - 1].focus(); }
      });
    }

    if (prev) prev.addEventListener('click', function () { goTo(currentIndex() - 1); });
    if (next) next.addEventListener('click', function () { goTo(currentIndex() + 1); });

    /* keyboard support when the carousel itself has focus */
    viewport.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(currentIndex() + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(currentIndex() - 1); }
    });

    /* make the viewport keyboard reachable without adding it to the tab order
       twice - slides are not focusable, so a single tabindex is enough */
    if (!viewport.hasAttribute('tabindex')) viewport.setAttribute('tabindex', '0');
    viewport.setAttribute('role', 'group');
    viewport.setAttribute('aria-roledescription', 'carousel');
    viewport.setAttribute('aria-label', 'ACE project screenshots');

    /* direct sync on scroll: cheap, and independent of rAF delivery */
    viewport.addEventListener('scroll', sync, { passive: true });

    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () { goTo(currentIndex()); sync(); }, 150);
    });

    sync();
  });
})();
