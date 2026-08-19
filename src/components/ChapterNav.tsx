import React, { useState, useEffect } from 'react';

interface Chapter {
  id: string;
  num: string;
  name: string;
}

const CHAPTERS: Chapter[] = [
  { id: 'hero', num: '00', name: 'Prologue' },
  { id: 'question', num: '01', name: 'The Question' },
  { id: 'story', num: '02', name: 'The Story' },
  { id: 'characters', num: '03', name: 'The Orbit' },
  { id: 'convergence', num: '04', name: 'Convergence' },
  { id: 'locations', num: '05', name: 'Geography' },
  { id: 'comparables', num: '06', name: 'The Namesake' },
  { id: 'inquiries', num: '07', name: 'Inquiries' },
];

export const ChapterNav: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<string>('hero');
  const [hoveredChapter, setHoveredChapter] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        const chapter = CHAPTERS[i];
        if (chapter.id === 'hero') {
          if (window.scrollY < 400) {
            setActiveChapter('hero');
            break;
          }
        } else {
          const el = document.getElementById(chapter.id);
          if (el && el.offsetTop <= scrollPos) {
            setActiveChapter(chapter.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        right: '1.5rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 90,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '1rem',
        pointerEvents: 'auto',
      }}
      className="hidden-on-mobile"
    >
      {CHAPTERS.map((chap) => {
        const isActive = chap.id === activeChapter;
        const isHovered = chap.id === hoveredChapter;

        return (
          <div
            key={chap.id}
            onMouseEnter={() => setHoveredChapter(chap.id)}
            onMouseLeave={() => setHoveredChapter(null)}
            onClick={() => scrollTo(chap.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            {/* Tooltip on Hover / Active */}
            <div
              style={{
                opacity: isHovered || isActive ? 1 : 0,
                transform: isHovered || isActive ? 'translateX(0)' : 'translateX(10px)',
                transition: 'all 0.3s ease',
                pointerEvents: 'none',
                background: 'rgba(12, 18, 32, 0.85)',
                border: '1px solid rgba(229, 169, 59, 0.3)',
                padding: '0.2rem 0.6rem',
                borderRadius: '9999px',
                fontSize: '0.6rem',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: isActive ? 'var(--logo-gold)' : 'var(--text-sand-dim)',
                whiteSpace: 'nowrap',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span style={{ color: 'var(--logo-gold)', marginRight: '0.3rem' }}>{chap.num}</span>
              {chap.name}
            </div>

            {/* Indicator Dot / Line */}
            <div
              style={{
                width: isActive ? '20px' : isHovered ? '14px' : '6px',
                height: '6px',
                borderRadius: '9999px',
                background: isActive
                  ? 'var(--logo-gold)'
                  : isHovered
                  ? 'var(--logo-blue-light)'
                  : 'rgba(255, 255, 255, 0.25)',
                boxShadow: isActive ? '0 0 10px rgba(229, 169, 59, 0.8)' : 'none',
                transition: 'all 0.3s var(--ease-cinematic)',
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
