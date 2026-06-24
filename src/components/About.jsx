import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Words that should glow red when lit
const RED_WORDS = new Set([
  'Software', 'Engineer', 'full-stack', 'Next.js', 'Tailwind', 'CSS',
  'JavaScript', 'Node.js', 'Express', 'scalable', 'impactful',
  'innovative', 'React', 'backend',
]);

const About = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const textWrapperRef = useRef(null);

  const paragraphs = [
    `I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like Next.js and Tailwind CSS. My journey in tech began with a curiosity for solving real-world problems through innovative solutions, which evolved into a love for crafting user-centric digital experiences.`,
    `With a strong foundation in JavaScript frameworks, I focus on creating scalable, efficient, and visually appealing applications. Currently, I am diving deeper into backend development with Node.js and Express to expand my skill set and deliver powerful, server-side solutions.`,
    `Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative solutions. I aim to contribute to impactful projects that make a difference in users' lives.`,
  ];

  useEffect(() => {
    const wordSpans = containerRef.current.querySelectorAll('.about-word');
    if (!wordSpans.length) return;

    let ctx;

    const runSplitAndAnimation = () => {
      if (ctx) ctx.revert();

      // Group words into lines based on their vertical offset
      const lineMap = {};
      wordSpans.forEach((span) => {
        // Reset styles first so offsets are computed on the natural layout
        span.style.color = '';
        span.style.opacity = '';
        span.style.textShadow = '';

        const top = span.offsetTop;
        if (!lineMap[top]) {
          lineMap[top] = [];
        }
        lineMap[top].push(span);
      });

      // Sort lines by vertical position
      const sortedTops = Object.keys(lineMap).sort((a, b) => Number(a) - Number(b));
      const lines = sortedTops.map((top) => lineMap[top]);

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
          }
        });

        // 1. Translate the entire text wrapper up slowly as we scroll
        tl.fromTo(textWrapperRef.current,
          { y: '25vh' },
          {
            y: '-30vh',
            ease: 'none',
            duration: lines.length * 1.0,
          },
          0
        );

        // 2. Animate each line in sequence
        lines.forEach((lineSpans, lineIndex) => {
          const startTime = lineIndex * 1.0;

          // Highlight the whole line together
          lineSpans.forEach((word) => {
            const cleanText = word.textContent.trim().replace(/[.,!?()]/g, '');
            const isRedWord = RED_WORDS.has(cleanText);
            
            const activeColor = isRedWord ? '#e11d48' : '#ffffff';
            const activeShadow = isRedWord 
              ? '0 0 12px rgba(225, 29, 72, 0.8), 0 0 24px rgba(225, 29, 72, 0.4)'
              : '0 0 12px rgba(255, 255, 255, 0.8), 0 0 24px rgba(255, 255, 255, 0.3)';

            // Highlight line
            tl.to(word, {
              color: activeColor,
              textShadow: activeShadow,
              opacity: 1,
              duration: 0.3,
            }, startTime);
          });
        });
      });
    };

    // Run initially
    runSplitAndAnimation();

    // Re-calculate lines on window resize to ensure responsiveness
    window.addEventListener('resize', runSplitAndAnimation);

    return () => {
      if (ctx) ctx.revert();
      window.removeEventListener('resize', runSplitAndAnimation);
    };
  }, []);

  return (
    <>
      <style>{`
        /* ── Section ── */
        #about { 
          height: 250vh; 
          position: relative; 
          background: transparent; 
        }

        .sticky-container {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── Heading Wrapper ── */
        .heading-wrapper {
          position: absolute;
          top: 8vh;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          text-align: center;
        }

        /* ── Text Viewport & Masking ── */
        .text-viewport {
          position: absolute;
          inset: 0;
          overflow: hidden;
          mask-image: linear-gradient(to bottom, transparent 0%, transparent 18%, black 28%, black 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, transparent 18%, black 28%, black 80%, transparent 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Scroll text block ── */
        .scroll-text-wrapper {
          max-width: 820px;
          padding: 0 2rem;
          width: 100%;
        }
        
        .scroll-text-divider {
          width: 2px;
          height: 3rem;
          background: linear-gradient(to bottom, #e11d48, transparent);
          margin: 0 auto 3rem;
          border-radius: 2px;
        }
        
        .scroll-text-para {
          font-size: clamp(1.25rem, 2.5vw, 1.6rem);
          line-height: 1.85;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 400;
          margin: 0 0 2.5rem;
          letter-spacing: -0.01em;
          word-spacing: 0.05em;
        }
        .scroll-text-para:last-child { margin-bottom: 0; }

        .about-word {
          color: rgba(255, 255, 255, 0.15);
          opacity: 0.8;
          display: inline;
        }

        @media (max-width: 640px) {
          .scroll-text-wrapper { padding: 0 1.25rem; }
          .scroll-text-para { font-size: 1.1rem; line-height: 1.75; }
        }
      `}</style>

      <section id="about" ref={sectionRef}>
        <div className="sticky-container">
          
          {/* ── Heading ── */}
          <div className="heading-wrapper">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">About Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full" />
            </motion.div>
          </div>

          {/* ── Text Viewport (Masked) ── */}
          <div className="text-viewport" ref={containerRef}>
            <div ref={textWrapperRef} className="scroll-text-wrapper">
              <div className="scroll-text-divider" />
              {paragraphs.map((para, paraIdx) => {
                const words = para.split(' ');
                return (
                  <p key={paraIdx} className="scroll-text-para">
                    {words.map((word, wordIdx) => (
                      <span key={wordIdx} className="about-word">
                        {word}{' '}
                      </span>
                    ))}
                  </p>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;