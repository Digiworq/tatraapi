import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { FILM_CONFIG } from '../config/filmData';
import { HeroCanvas } from '../components/HeroCanvas';
import heroVaranasiImg from '../assets/images/hero-varanasi.jpg';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const bgImageRef = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        bgImageRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 0.55, duration: 2, ease: 'power2.out' }
      )
        .fromTo(
          titleRef.current,
          { y: 40, opacity: 0, filter: 'blur(10px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.8, ease: 'power3.out' },
          '-=1.4'
        )
        .fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' },
          '-=1.0'
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          '-=0.5'
        );

      if (heroRef.current && bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToQuestion = () => {
    const el = document.getElementById('question');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={heroRef} className="hero-section">
      {/* Background Visual Layer */}
      <div
        ref={bgImageRef}
        className="hero-bg"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(12,18,32,0.1) 0%, rgba(8,13,23,0.92) 100%), url('${heroVaranasiImg}')`,
        }}
      />

      {/* Interactive Quantum & Diya Embers Canvas */}
      <HeroCanvas />

      <div className="hero-gradient-overlay" />

      {/* Floating Center Glow */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(600px, 90vw)',
          height: '300px',
          background: 'rgba(229, 169, 59, 0.08)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-devanagari-badge">
          <div className="hero-badge-line" />
          <span style={{ fontFamily: 'var(--font-devanagari)', fontSize: '0.9rem', color: 'rgba(229, 169, 59, 0.9)', letterSpacing: '0.25em' }}>
            {FILM_CONFIG.devanagariTitle}
          </span>
          <div className="hero-badge-line" />
        </div>

        <h1 ref={titleRef} className="hero-title text-logo-gradient">
          {FILM_CONFIG.title}
        </h1>

        <div className="hero-divider" />

        <p ref={subtitleRef} className="hero-subtitle">
          {FILM_CONFIG.status}
        </p>
      </div>

      {/* Bottom Scroll Prompt */}
      <div
        ref={scrollIndicatorRef}
        onClick={scrollToQuestion}
        className="hero-scroll-prompt"
        data-cursor="SCROLL"
      >
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-mouse-icon">
          <div className="scroll-mouse-wheel" />
        </div>
        <ChevronDown size={14} style={{ color: 'var(--text-midnight-muted)' }} />
      </div>
    </section>
  );
};
