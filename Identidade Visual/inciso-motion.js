(function () {
  const E = 'cubic-bezier(.2,.8,.2,1)';
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const K = {
    draw: [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
    grow: [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
    rise: [{ transform: 'translateY(100%)', clipPath: 'inset(0 0 100% 0)' }, { transform: 'translateY(0)', clipPath: 'inset(0 0 0% 0)' }],
    up: [{ opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'translateY(0)' }],
    fade: [{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }]
  };
  const DUR = { draw: 700, grow: 1000, rise: 720, up: 560, fade: 700 };
  function stampK(r) {
    const R = 'rotate(' + r + 'deg)';
    return [
      { opacity: 0, transform: 'scale(1.9) ' + R, easing: 'cubic-bezier(.55,0,.9,.45)' },
      { opacity: 1, transform: 'scale(.92) ' + R, offset: 0.5, easing: E },
      { transform: 'scale(1.05) ' + R + ' translate(1.5px,-1px)', offset: 0.64 },
      { transform: 'scale(.98) ' + R + ' translate(-1.5px,1px)', offset: 0.76 },
      { transform: 'scale(1.01) ' + R + ' translate(.5px,0)', offset: 0.88 },
      { opacity: 1, transform: 'scale(1) ' + R }
    ];
  }
  function play(root, s) {
    if (!root || reduce()) return;
    s = s || 1;
    root.querySelectorAll('[data-a]').forEach(el => {
      el.getAnimations().forEach(a => a.cancel());
      const t = el.dataset.a, d = (+el.dataset.d || 0) / s, dur = +el.dataset.dur || 0;
      if (t === 'letters') {
        el.querySelectorAll('[data-l]').forEach((c, i) => {
          c.getAnimations().forEach(a => a.cancel());
          c.animate([{ opacity: 0, transform: 'translateY(.2em)' }, { opacity: 1, transform: 'translateY(0)' }],
            { duration: (dur || 360) / s, delay: d + i * (+el.dataset.st || 55) / s, easing: E, fill: 'backwards' });
        });
        return;
      }
      if (t === 'stamp') { el.animate(stampK(el.dataset.r ? +el.dataset.r : -8), { duration: (dur || 620) / s, delay: d, fill: 'backwards' }); return; }
      if (t === 'ring') {
        el.animate([{ strokeDashoffset: el.dataset.from + 'px' }, { strokeDashoffset: el.dataset.to + 'px' }],
          { duration: (dur || 1600) / s, delay: d, easing: E, fill: 'backwards' });
        return;
      }
      if (t === 'count') {
        const to = +el.dataset.to, suf = el.dataset.suf || '', D = (dur || 1600) / s, t0 = performance.now() + d;
        const tok = (el._tok = (el._tok || 0) + 1);
        el.textContent = '0' + suf;
        const f = now => {
          if (tok !== el._tok) return;
          const p = Math.min(1, Math.max(0, (now - t0) / D));
          el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + suf;
          if (p < 1) requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
        return;
      }
      if (t === 'stroke') {
        const L = el.getTotalLength ? el.getTotalLength() : 40;
        el.style.strokeDasharray = L;
        el.animate([{ strokeDashoffset: L }, { strokeDashoffset: 0 }], { duration: (dur || 480) / s, delay: d, easing: E, fill: 'backwards' });
        return;
      }
      if (t === 'pop') { el.animate([{ opacity: 0, transform: 'scale(.6)' }, { opacity: 1, transform: 'scale(1.08)', offset: .6 }, { opacity: 1, transform: 'scale(1)' }], { duration: (dur || 480) / s, delay: d, easing: E, fill: 'backwards' }); return; }
      if (K[t]) el.animate(K[t], { duration: (dur || DUR[t]) / s, delay: d, easing: E, fill: 'backwards' });
    });
  }
  function observe(root, speed) {
    if (!root || root._obs) return;
    const io = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) { play(root, typeof speed === 'function' ? speed() : speed); io.disconnect(); } });
    }, { threshold: 0.35 });
    root._obs = io;
    io.observe(root);
  }
  function spin(el, sec) {
    if (!el || reduce()) return;
    el.getAnimations().forEach(a => a.cancel());
    el.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: sec * 1000, iterations: Infinity });
  }
  function shake(el) {
    if (!el || reduce()) return;
    el.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(5px)' }, { transform: 'translateX(-3px)' }, { transform: 'translateX(2px)' }, { transform: 'translateX(0)' }], { duration: 420, easing: 'ease-out' });
  }
  const ICON = {
    spin: [{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }],
    tick: [{ transform: 'rotate(0)' }, { transform: 'rotate(30deg)' }, { transform: 'rotate(-10deg)' }, { transform: 'rotate(0)' }],
    flip: [{ transform: 'perspective(80px) rotateY(0)' }, { transform: 'perspective(80px) rotateY(180deg)', offset: .5 }, { transform: 'perspective(80px) rotateY(360deg)' }],
    pop: [{ transform: 'scale(1)' }, { transform: 'scale(1.18)', offset: .4 }, { transform: 'scale(.96)', offset: .75 }, { transform: 'scale(1)' }],
    nudge: [{ transform: 'translateX(0)' }, { transform: 'translateX(4px)', offset: .45 }, { transform: 'translateX(0)' }],
    rise: [{ transform: 'translateY(0)' }, { transform: 'translateY(-4px)', offset: .45 }, { transform: 'translateY(0)' }],
    diag: [{ transform: 'translate(0,0)' }, { transform: 'translate(-3px,-3px)', offset: .45 }, { transform: 'translate(0,0)' }]
  };
  function icon(el) {
    if (!el || reduce() || el.getAnimations().length) return;
    const k = ICON[el.dataset.ia] || ICON.pop;
    el.animate(k, { duration: el.dataset.ia === 'spin' ? 700 : 520, easing: E });
  }
  if (!window.__incisoIconHover) {
    window.__incisoIconHover = true;
    document.addEventListener('mouseover', e => {
      const host = e.target.closest && e.target.closest('[data-ih]');
      if (!host || host.contains(e.relatedTarget)) return;
      host.querySelectorAll('[data-ia]').forEach(icon);
    });
  }
  window.IncisoMotion = { play, observe, spin, shake, icon, reduce, EASE: E };
})();
