import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FILM_CONFIG, ComparableFilm } from '../config/filmData';
import { Clapperboard } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';

// Direct asset imports
import namesakeImg from 'C:/Users/Admin/.gemini/antigravity/brain/8334074e-e077-4cbb-8c5d-7e188124a56f/ref_the_namesake_1787139230432.jpg';
import lifeOfPiImg from 'C:/Users/Admin/.gemini/antigravity/brain/8334074e-e077-4cbb-8c5d-7e188124a56f/ref_life_of_pi_1787139619793.jpg';
import lunchboxImg from 'C:/Users/Admin/.gemini/antigravity/brain/8334074e-e077-4cbb-8c5d-7e188124a56f/ref_lunchbox_1787139644506.jpg';
import infinityImg from 'C:/Users/Admin/.gemini/antigravity/brain/8334074e-e077-4cbb-8c5d-7e188124a56f/ref_infinity_1787139663668.jpg';
import pkImg from 'C:/Users/Admin/.gemini/antigravity/brain/8334074e-e077-4cbb-8c5d-7e188124a56f/ref_pk_1787139764946.jpg';
import treeOfLifeImg from 'C:/Users/Admin/.gemini/antigravity/brain/8334074e-e077-4cbb-8c5d-7e188124a56f/convergence_art_1787130454543.jpg';

const CARD_IMAGES: Record<string, string> = {
  "The Namesake": namesakeImg,
  "Life of Pi": lifeOfPiImg,
  "The Lunchbox": lunchboxImg,
  "The Man Who Knew Infinity": infinityImg,
  "PK": pkImg,
  "The Tree of Life": treeOfLifeImg,
};

gsap.registerPlugin(ScrollTrigger);

export const ComparableFilms: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollTrackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 769px)', () => {
      if (scrollTrackRef.current && containerRef.current) {
        const totalWidth = scrollTrackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;

        if (totalWidth > viewportWidth) {
          gsap.to(scrollTrackRef.current, {
            x: () => -(totalWidth - viewportWidth + 80),
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: () => `+=${totalWidth - viewportWidth + 400}`,
              pin: true,
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          });
        }
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="comparables" ref={containerRef} className="comparables-section">
      <div className="film-container" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <Clapperboard size={15} style={{ color: 'var(--saffron-editorial)' }} />
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--saffron-editorial)', fontWeight: 600 }}>
            THE NAMESAKE
          </span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '0.2em', color: 'var(--text-dark-navy)' }}>
          Comparable Works
        </h2>
        <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--text-dark-muted)', marginTop: '0.5rem' }}>
          Kinship in mood, intellectual inquiry, and human emotion
        </p>
      </div>

      <div ref={scrollTrackRef} className="comparables-track">
        {FILM_CONFIG.comparableFilms.map((film: ComparableFilm, idx: number) => {
          const imgSrc = CARD_IMAGES[film.title] || film.imagePath;

          return (
            <TiltCard
              key={idx}
              className="film-ref-card"
              style={{
                height: '470px',
                width: 'clamp(270px, 78vw, 360px)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0',
                backgroundColor: '#090d18',
                border: '1px solid var(--border-midnight-gold)',
                borderRadius: '6px',
                boxShadow: '0 25px 50px rgba(12, 20, 36, 0.45)',
                flexShrink: 0,
              }}
            >
              {/* Crisp, Vibrant Full-Card Background Artwork */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url('${imgSrc}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.88,
                  filter: 'brightness(1.05) contrast(1.05)',
                  transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.4s ease',
                  zIndex: 1,
                }}
                className="card-bg-img"
              />

              {/* Dual Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(8,12,22,0.85) 0%, rgba(8,12,22,0.15) 35%, rgba(8,12,22,0.4) 65%, rgba(8,12,22,0.95) 100%)',
                  zIndex: 2,
                  pointerEvents: 'none',
                }}
              />

              {/* Top Header Floating Badge */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.2rem 1.4rem',
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                }}
              >
                <span
                  style={{
                    color: 'var(--logo-gold-light)',
                    background: 'rgba(8, 13, 23, 0.85)',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '3px',
                    border: '1px solid rgba(229, 169, 59, 0.3)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  Reference 0{idx + 1}
                </span>
                {film.year && (
                  <span
                    style={{
                      color: 'var(--logo-blue-light)',
                      background: 'rgba(8, 13, 23, 0.85)',
                      padding: '0.3rem 0.65rem',
                      borderRadius: '3px',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {film.year}
                  </span>
                )}
              </div>

              {/* Bottom Frosted Glass Info Bar */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 5,
                  padding: '1.4rem',
                  background: 'rgba(8, 13, 23, 0.88)',
                  backdropFilter: 'blur(16px)',
                  borderTop: '1px solid rgba(229, 169, 59, 0.25)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    color: 'var(--text-sand-light)',
                    marginBottom: '0.45rem',
                    textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                  }}
                >
                  {film.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: '1.05rem',
                    color: 'var(--text-sand-dim)',
                    lineHeight: 1.45,
                    fontWeight: 300,
                    fontStyle: 'italic',
                  }}
                >
                  "{film.resonance}"
                </p>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
};
