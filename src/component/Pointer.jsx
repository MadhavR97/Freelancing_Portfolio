import React, { useEffect, useRef } from 'react';

const Pointer = () => {
  const ringRef = useRef(null);
  const glowRef = useRef(null);
  const blurRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const ring = ringRef.current;
    const glow = glowRef.current;
    const blur = blurRef.current;
    const dot = dotRef.current;
    if (!ring || !dot || !glow || !blur) return;

    let tx = 0, ty = 0;
    let rx = 0, ry = 0;
    let gx = 0, gy = 0;
    let bx = 0, by = 0;
    let rs = 1, gs = 1.2, ds = 1;
    let da = 0.85;
    let angle = 0;
    let hovered = false;
    const started = { current: false };
    let raf;

    const animate = () => {
      if (started.current) {
        rx += (tx - rx) * 0.1;
        ry += (ty - ry) * 0.1;
        bx += (tx - bx) * 0.1;
        by += (ty - by) * 0.1;
        gx += (tx - gx) * 0.06;
        gy += (ty - gy) * 0.06;
      }

      const trs = hovered ? 1.5 : 1;
      const tgs = hovered ? 1.8 : 1.2;
      const tds = hovered ? 1.8 : 1;
      const tda = hovered ? 1 : 0.85;

      rs += (trs - rs) * 0.04;
      gs += (tgs - gs) * 0.03;
      ds += (tds - ds) * 0.04;
      da += (tda - da) * 0.04;
      angle += 0.8;

      const s = 40 * rs;
      const dotSize = 6 * ds;
      const dotR = Math.round(da * 130 + (1 - da) * 168);
      const dotG = Math.round(da * 102 + (1 - da) * 139);
      const dotB = Math.round(da * 241 + (1 - da) * 252);
      const dotGlow = da > 0.9
        ? '0 0 12px rgba(99,102,241,0.6), 0 0 24px rgba(168,85,247,0.3)'
        : '0 0 6px rgba(255,255,255,0.1)';

      const posRing = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${rs})`;
      const posBlur = `translate3d(${bx}px, ${by}px, 0) translate(-50%, -50%) scale(${rs})`;
      const posGlow = `translate3d(${gx}px, ${gy}px, 0) translate(-50%, -50%) scale(${gs})`;

      ring.style.transform = posRing;
      ring.style.background = `conic-gradient(from ${angle}deg, #6366f1, #a855f7, #06b6d4, #6366f1)`;

      blur.style.transform = posBlur;
      const blurSize = `${s}px`;
      blur.style.width = blurSize;
      blur.style.height = blurSize;

      glow.style.transform = posGlow;
      glow.style.background = da > 0.5
        ? 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)'
        : 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 60%)';

      dot.style.left = `${tx}px`;
      dot.style.top = `${ty}px`;
      dot.style.width = `${dotSize}px`;
      dot.style.height = `${dotSize}px`;
      dot.style.background = `rgba(${dotR}, ${dotG}, ${dotB}, ${da})`;
      dot.style.boxShadow = dotGlow;

      raf = requestAnimationFrame(animate);
    };

    const onMove = (e) => {
      if (!started.current) {
        started.current = true;
        rx = e.clientX; ry = e.clientY;
        bx = e.clientX; by = e.clientY;
        gx = e.clientX; gy = e.clientY;
      }
      tx = e.clientX; ty = e.clientY;
    };

    const sel = 'a, button, [role="button"], input, textarea, select';
    const onOver = (e) => { hovered = !!e.target.closest(sel); };
    const onOut = (e) => {
      const t = e.relatedTarget;
      if (!t || !t.closest || !t.closest(sel)) hovered = false;
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, true);
    document.addEventListener('mouseout', onOut, true);
    animate();

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver, true);
      document.removeEventListener('mouseout', onOut, true);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{ left: 0, top: 0, width: 80, height: 80, willChange: 'transform' }}
      />
      <div
        ref={blurRef}
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: 0, top: 0,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          WebkitMask: 'radial-gradient(circle, black 17px, transparent 17px)',
          mask: 'radial-gradient(circle, black 17px, transparent 17px)',
          willChange: 'transform, width, height',
        }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: 0, top: 0,
          width: 40, height: 40,
          WebkitMask: 'radial-gradient(circle, transparent 17px, black 18px, black 19px, transparent 20px)',
          mask: 'radial-gradient(circle, transparent 17px, black 18px, black 19px, transparent 20px)',
          willChange: 'transform, background',
        }}
      />
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: 0, top: 0,
          transform: 'translate(-50%, -50%)',
          borderRadius: '9999px',
          willChange: 'left, top, width, height, background, box-shadow',
        }}
      />
    </>
  );
};

export default Pointer;
