import React from 'react';
import { FILM_CONFIG } from '../config/filmData';

export const GenreTone: React.FC = () => {
  return (
    <section className="genretone-section">
      {/* Background Soft Glow (Cerulean + Saffron Amber) */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(200, 122, 50, 0.15) 0%, rgba(24, 106, 168, 0.1) 50%, transparent 75%)',
          borderRadius: '50%',
          filter: 'blur(130px)',
          pointerEvents: 'none',
        }}
      />

      <div className="film-container relative" style={{ zIndex: 10 }}>
        {/* Saffron Editorial Tag (Matching Reference Image 2) */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.8rem' }}>
          <span style={{ width: '2rem', height: '1px', background: 'var(--saffron-editorial)' }} />
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--saffron-editorial)', fontWeight: 600 }}>
            GENRE & TONE
          </span>
          <span style={{ width: '2rem', height: '1px', background: 'var(--saffron-editorial)' }} />
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.8rem, 6.8vw, 5.8rem)', fontWeight: 800, letterSpacing: '0.22em', marginBottom: '1.5rem' }} className="text-logo-gradient">
          {FILM_CONFIG.genre}
        </h2>

        <p style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(1.5rem, 3.2vw, 2.5rem)', color: 'var(--text-sand-dim)', fontWeight: 300, maxWidth: '58rem', margin: '0 auto', lineHeight: 1.65, fontStyle: 'italic' }}>
          "{FILM_CONFIG.genreDescription}"
        </p>

        {/* Tonal Coordinates Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
            maxWidth: '56rem',
            margin: '4.5rem auto 0 auto',
            paddingTop: '3rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {[
            { title: 'ATMOSPHERE', desc: 'Mysterious & Contemplative' },
            { title: 'AESTHETIC', desc: 'Ancient Stone & Robotics' },
            { title: 'TEMPO', desc: 'Unhurried & Intentional' },
            { title: 'DIALOGUE', desc: 'Live Bilingual Performance' },
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--logo-gold)', marginBottom: '0.3rem' }}>
                {item.title}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-midnight-muted)' }}>
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
