import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FILM_CONFIG } from '../config/filmData';

gsap.registerPlugin(ScrollTrigger);

export const VaranasiExperience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current && bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { scale: 1.15, yPercent: -10 },
          {
            scale: 1,
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-midnight-deep)',
        userSelect: 'none',
      }}
    >
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at center, rgba(12,18,32,0.1) 0%, rgba(8,13,23,0.85) 100%), url('/assets/images/varanasi-experience.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.45,
          pointerEvents: 'none',
        }}
      />

      <div className="cinematic-vignette" />

      {/* Floating Center Content */}
      <div ref={contentRef} className="film-container-narrow relative" style={{ zIndex: 10, textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <span style={{ width: '2rem', height: '1px', background: 'var(--saffron-editorial)' }} />
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--saffron-editorial)', fontWeight: 600 }}>
            THE SACRED CONFLUENCE
          </span>
          <span style={{ width: '2rem', height: '1px', background: 'var(--saffron-editorial)' }} />
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 8vw, 7.5rem)', fontWeight: 800, letterSpacing: '0.25em', marginBottom: '1.5rem', lineHeight: 1 }} className="text-logo-gradient">
          {FILM_CONFIG.varanasiSpecial.title}
        </h2>

        <p style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', color: 'var(--text-sand-light)', fontWeight: 300, fontStyle: 'italic', maxWidth: '44rem', margin: '0 auto 1.5rem auto', lineHeight: 1.35 }}>
          "{FILM_CONFIG.varanasiSpecial.subtext}"
        </p>

        <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'var(--text-midnight-muted)', maxWidth: '32rem', margin: '0 auto' }}>
          {FILM_CONFIG.varanasiSpecial.quote}
        </p>
      </div>
    </section>
  );
};
