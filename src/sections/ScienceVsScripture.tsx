import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FILM_CONFIG } from '../config/filmData';
import { Cpu, Compass, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ScienceVsScripture: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const centerBoxRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        leftColRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
      )
        .fromTo(
          rightColRef.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
          '<'
        )
        .fromTo(
          centerBoxRef.current,
          { opacity: 0, y: 25, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: 'power3.out' },
          '-=0.4'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="convergence"
      ref={sectionRef}
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-midnight-deep)',
        padding: 'clamp(5rem, 8vw, 9rem) 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      {/* Background Subtle Gradient Lighting */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(800px, 90vw)',
          height: '450px',
          background: 'radial-gradient(circle, rgba(24, 106, 168, 0.08) 0%, rgba(229, 169, 59, 0.06) 50%, transparent 75%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      <div className="film-container relative" style={{ zIndex: 10 }}>
        {/* 3-Column Clean Structured Grid - Center Box does NOT overlay Left & Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Side: SCIENCE (No Box, clean open layout) */}
          <div ref={leftColRef} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', color: 'var(--logo-blue-light)' }}>
              <Cpu size={18} />
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.28em', fontFamily: 'var(--font-mono)' }}>
                {FILM_CONFIG.convergence.leftSide.loc}
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 800, letterSpacing: '0.18em', color: 'var(--text-sand-light)', marginBottom: '0.5rem' }}>
              {FILM_CONFIG.convergence.leftSide.domain}
            </h3>

            <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-midnight-muted)', marginBottom: '2rem' }}>
              {FILM_CONFIG.convergence.leftSide.subhead}
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-sand-dim)' }}>
              {FILM_CONFIG.convergence.leftSide.elements.map((el, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--logo-blue-light)', borderRadius: '50%', flexShrink: 0 }} />
                  <span>{el}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center: THE CONVERGENCE (Dedicated Card Box Container) */}
          <div
            ref={centerBoxRef}
            style={{
              background: 'var(--bg-midnight-surface)',
              border: '1px solid var(--border-midnight-gold)',
              borderRadius: '4px',
              padding: 'clamp(1.8rem, 3.5vw, 3rem)',
              textAlign: 'center',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.85), 0 0 30px rgba(229, 169, 59, 0.12)',
              position: 'relative',
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem', color: 'var(--saffron-editorial)' }}>
              <Sparkles size={14} />
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 600 }}>
                THE CONVERGENCE
              </span>
            </div>

            <h4 style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(1.35rem, 2.2vw, 1.95rem)', color: 'var(--text-sand-light)', fontWeight: 300, lineHeight: 1.5, fontStyle: 'italic', margin: '0 0 1.5rem 0' }}>
              "{FILM_CONFIG.convergence.statement}"
            </h4>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', paddingTop: '1.2rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ width: '1.5rem', height: '1px', background: 'rgba(229, 169, 59, 0.4)' }} />
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.22em', fontFamily: 'var(--font-mono)', color: 'var(--logo-gold)' }}>
                Tatraapi Philosophy
              </span>
              <span style={{ width: '1.5rem', height: '1px', background: 'rgba(229, 169, 59, 0.4)' }} />
            </div>
          </div>

          {/* Right Side: SCRIPTURE (No Box, clean open layout) */}
          <div ref={rightColRef} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', color: 'var(--logo-gold)' }}>
              <Compass size={18} />
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.28em', fontFamily: 'var(--font-mono)' }}>
                {FILM_CONFIG.convergence.rightSide.loc}
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 800, letterSpacing: '0.18em', color: 'var(--text-sand-light)', marginBottom: '0.5rem' }}>
              {FILM_CONFIG.convergence.rightSide.domain}
            </h3>

            <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-midnight-muted)', marginBottom: '2rem' }}>
              {FILM_CONFIG.convergence.rightSide.subhead}
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-sand-dim)' }}>
              {FILM_CONFIG.convergence.rightSide.elements.map((el, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--logo-gold)', borderRadius: '50%', flexShrink: 0 }} />
                  <span>{el}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
