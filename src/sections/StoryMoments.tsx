import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FILM_CONFIG, StoryChapter } from '../config/filmData';
import { TiltCard } from '../components/TiltCard';

// Relative asset imports
import childhoodButterImg from '../assets/images/childhood-butter.jpg';
import roboticsNewYorkImg from '../assets/images/robotics-newyork.jpg';
import convergenceImg from '../assets/images/convergence.jpg';
import heroVaranasiImg from '../assets/images/hero-varanasi.jpg';

const CHAPTER_IMAGES: Record<string, string> = {
  "01": childhoodButterImg,
  "02": roboticsNewYorkImg,
  "03": convergenceImg,
  "04": heroVaranasiImg,
};

gsap.registerPlugin(ScrollTrigger);

export const StoryMoments: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowRefs.current.forEach((el) => {
        if (!el) return;

        const title = el.querySelector('.story-title');
        const prose = el.querySelector('.story-prose');
        const tag = el.querySelector('.story-tag-box');
        const visual = el.querySelector('.story-img');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        });

        tl.fromTo(tag, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6 })
          .fromTo(title, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.3')
          .fromTo(prose, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5');

        if (visual) {
          gsap.fromTo(
            visual,
            { scale: 1.08, opacity: 0.7 },
            {
              scale: 1,
              opacity: 1,
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="story" ref={sectionRef} className="story-section">
      {/* Header */}
      <div className="film-container story-header">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
          <span style={{ width: '2rem', height: '1px', background: 'var(--saffron-editorial)' }} />
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--saffron-editorial)', fontWeight: 600 }}>
            THE STORY
          </span>
          <span style={{ width: '2rem', height: '1px', background: 'var(--saffron-editorial)' }} />
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 800, letterSpacing: '0.2em', color: 'var(--text-dark-navy)' }}>
          The Story
        </h2>
        <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'var(--text-dark-muted)', marginTop: '0.75rem' }}>
          Four Movements of Memory, Motion, and Truth
        </p>
      </div>

      {/* Story Chapters (Alternating Left / Right Zigzag Layout) */}
      <div className="film-container story-grid">
        {FILM_CONFIG.storyChapters.map((chap: StoryChapter, idx: number) => {
          const isImageLeft = idx % 2 === 1; // Movement 02 and 04 have Image on Left, Text on Right
          const imgSrc = CHAPTER_IMAGES[chap.num] || chap.imagePath;

          const textColumn = (
            <div key="text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="story-tag-box" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--saffron-editorial)', letterSpacing: '0.15em' }}>
                  {chap.num}
                </span>
                <span style={{ width: '1.5rem', height: '1px', background: 'rgba(12, 20, 36, 0.2)' }} />
                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-dark-muted)', fontWeight: 600 }}>
                  {chap.tag}
                </span>
              </div>

              <h3 className="story-title">{chap.title}</h3>

              <p className="story-prose">{chap.content}</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '1.2rem', borderTop: '1px solid rgba(12, 20, 36, 0.12)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--saffron-editorial)' }} />
                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--text-dark-muted)', fontWeight: 600 }}>
                  {chap.subtitle}
                </span>
              </div>
            </div>
          );

          const visualColumn = (
            <TiltCard key="visual" className="story-card-visual">
              <div
                className="story-img"
                style={{
                  backgroundImage: `radial-gradient(circle at center, rgba(12,20,36,0.05) 0%, rgba(12,20,36,0.4) 100%), url('${imgSrc}')`,
                }}
              />
            </TiltCard>
          );

          return (
            <div
              key={chap.num}
              ref={(el) => {
                if (el) rowRefs.current[idx] = el;
              }}
              className="story-row"
            >
              {/* If isImageLeft is true: Image on Left, Text on Right */}
              {/* If isImageLeft is false: Text on Left, Image on Right */}
              {isImageLeft ? [visualColumn, textColumn] : [textColumn, visualColumn]}
            </div>
          );
        })}
      </div>
    </section>
  );
};
