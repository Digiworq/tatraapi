import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FILM_CONFIG } from '../config/filmData';

gsap.registerPlugin(ScrollTrigger);

export const TheQuestion: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const bigWhyRef = useRef<HTMLHeadingElement | null>(null);
  const bgVisualRef = useRef<HTMLDivElement | null>(null);
  const subtextRef = useRef<HTMLParagraphElement | null>(null);

  const questionWords = FILM_CONFIG.centralQuestion.question.split(' ');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 0.8,
        },
      });

      tl.fromTo(
        bgVisualRef.current,
        { opacity: 0, scale: 1.08 },
        { opacity: 0.35, scale: 1, duration: 1.5 }
      );

      tl.fromTo(
        wordsRef.current,
        { opacity: 0.1, y: 15, filter: 'blur(4px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.1,
          duration: 2,
          ease: 'power2.out',
        },
        '-=0.5'
      );

      tl.fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 0.85, y: 0, duration: 1.2 },
        '-=0.6'
      );

      tl.fromTo(
        bigWhyRef.current,
        { opacity: 0, scale: 0.85, filter: 'blur(16px)' },
        {
          opacity: 0.1,
          scale: 1.05,
          filter: 'blur(0px)',
          duration: 2.2,
          ease: 'power2.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="question" ref={sectionRef} className="question-section">
      {/* Background Visual */}
      <div
        ref={bgVisualRef}
        className="question-bg-visual"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(12,18,32,0.2) 0%, rgba(8,13,23,0.95) 100%), url('/assets/images/childhood-butter.jpg')`,
        }}
      />

      <div className="cinematic-vignette" />

      {/* Massive Monumental "WHY?" Watermark */}
      <h2 ref={bigWhyRef} className="question-watermark">
        {FILM_CONFIG.centralQuestion.climaxWord}
      </h2>

      {/* Foreground Content */}
      <div className="film-container-narrow text-center relative" style={{ zIndex: 10 }}>
        {/* Saffron Editorial Tag */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <span style={{ width: '2rem', height: '1px', background: 'var(--saffron-editorial)' }} />
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--saffron-editorial)', fontWeight: 600 }}>
            THE CENTRAL QUESTION
          </span>
          <span style={{ width: '2rem', height: '1px', background: 'var(--saffron-editorial)' }} />
        </div>

        <blockquote className="question-quote">
          {questionWords.map((word, idx) => (
            <span
              key={idx}
              ref={(el) => {
                if (el) wordsRef.current[idx] = el;
              }}
              style={{ display: 'inline-block', marginRight: '0.3em' }}
            >
              {word}
            </span>
          ))}
        </blockquote>

        <p ref={subtextRef} className="question-subtext">
          {FILM_CONFIG.centralQuestion.subtext}
        </p>

        {/* Diya Flame Symbolism */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginTop: '3.5rem', opacity: 0.6 }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--logo-gold)' }} />
          <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontFamily: 'var(--font-mono)', color: 'var(--logo-gold-light)' }}>
            The Genesis of Inquiry
          </span>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--logo-gold)' }} />
        </div>
      </div>
    </section>
  );
};
