import React from 'react';
import { FILM_CONFIG } from '../config/filmData';
import officialLogo from '../logo/Tatraapi_Films_Final_Logo_Light_Blue_Yellow 1.png';

export const TitleSection: React.FC = () => {
  return (
    <section style={{ position: 'relative', backgroundColor: '#040406', padding: '9rem 0', textAlign: 'center', overflow: 'hidden' }}>
      {/* Background Sacred Geometric Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(58, 104, 136, 0.08) 50%, transparent 75%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          pointerEvents: 'none',
        }}
      />

      <div className="film-container relative" style={{ zIndex: 10 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
          <span style={{ width: '2rem', height: '1px', background: 'rgba(212, 175, 55, 0.4)' }} />
          <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--gold-accent)' }}>
            Official Production Brand
          </span>
          <span style={{ width: '2rem', height: '1px', background: 'rgba(212, 175, 55, 0.4)' }} />
        </div>

        {/* Big Official Emblem Showcase */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '2rem 0' }}>
          <img
            src={officialLogo}
            alt="Tatraapi Films Official Emblem"
            style={{
              width: 'clamp(280px, 50vw, 540px)',
              height: 'auto',
              filter: 'brightness(1.25) contrast(1.1) drop-shadow(0 15px 40px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 35px rgba(212, 175, 55, 0.35))',
              transition: 'transform 0.5s ease',
            }}
          />
        </div>

        <div style={{ width: '4rem', height: '1px', background: 'rgba(212, 175, 55, 0.4)', margin: '2.5rem auto' }} />

        <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--text-muted)', maxWidth: '28rem', margin: '0 auto' }}>
          {FILM_CONFIG.status}
        </p>
      </div>
    </section>
  );
};
