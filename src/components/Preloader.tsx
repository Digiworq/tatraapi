import React, { useState, useEffect } from 'react';
import { FILM_CONFIG } from '../config/filmData';
import officialLogo from '../logo/Tatraapi_Films_Final_Logo_Light_Blue_Yellow 1.png';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'intro' | 'fadeout' | 'done'>('intro');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase('fadeout');
          setTimeout(() => {
            setPhase('done');
            onComplete();
          }, 700);
          return 100;
        }
        const step = prev < 50 ? 5 : prev < 85 ? 8 : 4;
        return Math.min(prev + step, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: '#050507',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: phase === 'fadeout' ? 0 : 1,
        pointerEvents: phase === 'fadeout' ? 'none' : 'auto',
        transition: 'opacity 0.7s var(--ease-cinematic)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(58, 104, 136, 0.08) 60%, transparent 80%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Official Logo Symbol */}
        <img
          src={officialLogo}
          alt="Tatraapi Films Official Emblem"
          style={{
            width: 'clamp(140px, 20vw, 210px)',
            height: 'auto',
            marginBottom: '1.5rem',
            filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.35))',
          }}
        />

        <p style={{ fontSize: '0.65rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--text-muted)' }}>
          {FILM_CONFIG.status}
        </p>

        <div style={{ marginTop: '2.5rem', width: '12rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '100%', height: '2px', backgroundColor: 'rgba(255, 255, 255, 0.1)', position: 'relative', overflow: 'hidden', borderRadius: '1px' }}>
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                backgroundColor: 'var(--gold-accent)',
                width: `${progress}%`,
                transition: 'width 0.1s linear',
              }}
            />
          </div>
          <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.2em', color: 'var(--text-muted)' }}>
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};
