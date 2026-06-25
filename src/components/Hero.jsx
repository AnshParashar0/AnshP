import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/* ── Animated particle field (replaces Spline) ────────────── */
const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener('mousemove', handleMouse);

    const count = 80;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        baseAlpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 2;
          p.y += (dy / dist) * force * 2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 0, ${p.baseAlpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 40, 40, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
    />
  );
};

/* ── Floating code snippets ────────────────────────────────── */
const codeSnippets = [
  { text: 'const dev = "passionate";', top: '15%', left: '8%', delay: 0 },
  { text: 'npm run build', top: '25%', right: '6%', delay: 1.2 },
  { text: 'git push origin main', bottom: '30%', left: '5%', delay: 2.4 },
  { text: '() => createArt()', bottom: '20%', right: '10%', delay: 0.8 },
  { text: '<Component />', top: '60%', left: '12%', delay: 1.8 },
  { text: 'async/await', top: '45%', right: '8%', delay: 3.0 },
];

const FloatingSnippets = () => (
  <>
    {codeSnippets.map((s, i) => {
      const pos = {};
      if (s.top) pos.top = s.top;
      if (s.bottom) pos.bottom = s.bottom;
      if (s.left) pos.left = s.left;
      if (s.right) pos.right = s.right;
      return (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.18, 0.18, 0], y: [0, -20, -20, -40] }}
          transition={{
            duration: 8,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute font-jetbrains text-[11px] sm:text-xs text-red-500/30 pointer-events-none select-none hidden sm:block"
          style={pos}
        >
          {s.text}
        </motion.span>
      );
    })}
  </>
);

/* ── Interpolation helper ──────────────────────────────────── */
function lerp(value, inMin, inMax, outMin, outMax) {
  const t = Math.max(0, Math.min(1, (value - inMin) / (inMax - inMin)));
  return outMin + t * (outMax - outMin);
}

function lerpMulti(value, inputs, outputs) {
  if (value <= inputs[0]) return outputs[0];
  if (value >= inputs[inputs.length - 1]) return outputs[outputs.length - 1];
  for (let i = 0; i < inputs.length - 1; i++) {
    if (value >= inputs[i] && value <= inputs[i + 1]) {
      const t = (value - inputs[i]) / (inputs[i + 1] - inputs[i]);
      return outputs[i] + t * (outputs[i + 1] - outputs[i]);
    }
  }
  return outputs[outputs.length - 1];
}

/* ── Main Hero ──────────────────────────────────────────────── */
const Hero = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = containerRef.current;
        if (!el) { ticking = false; return; }
        const rect = el.getBoundingClientRect();
        const totalScroll = el.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(totalScroll, 1));
        const p = scrolled / Math.max(totalScroll, 1);
        setProgress(p);
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Only two phases now: Intro fades out as Role fades in. Hero is shorter
  // (150vh instead of 250vh) since there's less content to scroll through.
  const introOpacity = lerp(progress, 0, 0.4, 1, 0);
  const introY = lerp(progress, 0, 0.4, 0, -100);
  const introScale = lerp(progress, 0, 0.4, 1, 0.85);

  const roleOpacity = lerpMulti(progress, [0.3, 0.55, 1], [0, 1, 1]);
  const roleY = lerpMulti(progress, [0.3, 0.55, 1], [60, 0, 0]);
  const roleScale = lerpMulti(progress, [0.3, 0.55, 1], [0.9, 1, 1]);

  const scrollHintOpacity = lerp(progress, 0, 0.12, 1, 0);
  const scrollHintY = lerp(progress, 0, 0.12, 0, -20);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-[150vh]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black">
        <ParticleField />

        <div
          className="absolute pointer-events-none"
          style={{
            width: '600px',
            height: '600px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(255,0,0,0.06) 0%, transparent 70%)',
            zIndex: 1,
          }}
        />

        <FloatingSnippets />

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            zIndex: 1,
          }}
        />

        <div className="absolute top-[20%] left-[10%] sm:left-[15%] text-red-500/10 text-6xl sm:text-8xl font-jetbrains pointer-events-none select-none" style={{ zIndex: 1 }}>
          {'<'}
        </div>
        <div className="absolute bottom-[20%] right-[10%] sm:right-[15%] text-red-500/10 text-6xl sm:text-8xl font-jetbrains pointer-events-none select-none" style={{ zIndex: 1 }}>
          {'/>'}
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
          {/* Phase 1 — Intro */}
          <div
            style={{
              opacity: introOpacity,
              transform: `translateY(${introY}px) scale(${introScale})`,
            }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-red-500/60 text-sm sm:text-base tracking-[0.3em] uppercase mb-6 font-jetbrains"
            >
              Welcome to my portfolio
            </motion.p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-jetbrains">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-white/90"
              >
                Hi,I&apos;m{' '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="gradient-text"
              >
                Ansh Parashar
              </motion.span>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
              className="w-24 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent mt-6 origin-center"
            />
          </div>

          {/* Phase 2 — Role (final state, stays visible for rest of scroll) */}
          <div
            style={{
              opacity: roleOpacity,
              transform: `translateY(${roleY}px) scale(${roleScale})`,
            }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold font-jetbrains">
              <span className="gradient-text">Full Stack Developer</span>
            </p>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            opacity: scrollHintOpacity,
            transform: `translateY(${scrollHintY}px)`,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-red-600/50 text-xs uppercase tracking-widest font-jetbrains">
            Scroll down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-red-500"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

