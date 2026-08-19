import React, { useState } from 'react';
import { FILM_CONFIG } from '../config/filmData';
import { Languages, BookOpen } from 'lucide-react';

interface LanguageSectionProps {
  onOpenScreenplay?: () => void;
}

export const LanguageSection: React.FC<LanguageSectionProps> = ({ onOpenScreenplay }) => {
  const [activeLang, setActiveLang] = useState<'both' | 'hi' | 'en'>('both');

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--bg-midnight-deep)', padding: '8rem 0', textAlign: 'center', overflow: 'hidden', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="film-container relative" style={{ zIndex: 10 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--saffron-editorial)' }}>
          <Languages size={16} />
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 600 }}>
            LINGUISTIC AUTHENTICITY
          </span>
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', fontWeight: 800, letterSpacing: '0.22em', color: 'var(--text-sand-light)', marginBottom: '1rem' }}>
          {FILM_CONFIG.language.tag}
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', margin: '1.5rem 0' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, letterSpacing: '0.2em' }} className="text-logo-gradient">
            English
          </span>
          <span style={{ fontSize: '1.5rem', color: 'var(--logo-gold)' }}>+</span>
          <span style={{ fontFamily: 'var(--font-devanagari)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, letterSpacing: '0.15em' }} className="text-logo-gradient">
            हिन्दी (Hindi)
          </span>
        </div>

        <p style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', color: 'var(--text-sand-dim)', fontWeight: 300, fontStyle: 'italic', maxWidth: '38rem', margin: '0 auto 2.5rem auto' }}>
          "{FILM_CONFIG.language.details}"
        </p>

        {/* Dual Script Comparison Card */}
        <div style={{ maxWidth: '46rem', margin: '0 auto', background: 'var(--bg-midnight-surface)', border: '1px solid var(--border-midnight-gold)', padding: '2.5rem', borderRadius: '4px', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.85)' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <button
              onClick={() => setActiveLang('both')}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                border: activeLang === 'both' ? '1px solid var(--logo-gold)' : '1px solid rgba(255, 255, 255, 0.1)',
                background: activeLang === 'both' ? 'rgba(229, 169, 59, 0.18)' : 'transparent',
                color: activeLang === 'both' ? 'var(--logo-gold-light)' : 'var(--text-midnight-muted)',
              }}
            >
              Dual View
            </button>
            <button
              onClick={() => setActiveLang('en')}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                border: activeLang === 'en' ? '1px solid var(--logo-gold)' : '1px solid rgba(255, 255, 255, 0.1)',
                background: activeLang === 'en' ? 'rgba(229, 169, 59, 0.18)' : 'transparent',
                color: activeLang === 'en' ? 'var(--logo-gold-light)' : 'var(--text-midnight-muted)',
              }}
            >
              English Script
            </button>
            <button
              onClick={() => setActiveLang('hi')}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                border: activeLang === 'hi' ? '1px solid var(--logo-gold)' : '1px solid rgba(255, 255, 255, 0.1)',
                background: activeLang === 'hi' ? 'rgba(229, 169, 59, 0.18)' : 'transparent',
                color: activeLang === 'hi' ? 'var(--logo-gold-light)' : 'var(--text-midnight-muted)',
              }}
            >
              Devanagari Script
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            {(activeLang === 'both' || activeLang === 'en') && (
              <div>
                <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: 'var(--font-mono)', color: 'var(--text-midnight-muted)', display: 'block', marginBottom: '0.4rem' }}>
                  English Original
                </span>
                <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.45rem', color: 'var(--text-sand-light)' }}>
                  "{FILM_CONFIG.language.englishSample}"
                </p>
              </div>
            )}

            {(activeLang === 'both' || activeLang === 'hi') && (
              <div>
                <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: 'var(--font-mono)', color: 'var(--text-midnight-muted)', display: 'block', marginBottom: '0.4rem' }}>
                  Hindi Devanagari
                </span>
                <p style={{ fontFamily: 'var(--font-devanagari)', fontSize: '1.45rem', color: 'var(--logo-gold-light)' }}>
                  "{FILM_CONFIG.language.devanagariSample}"
                </p>
              </div>
            )}
          </div>

          {/* Interactive Screenplay Trigger */}
          {onOpenScreenplay && (
            <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <button
                onClick={onOpenScreenplay}
                className="btn-cinematic"
                style={{ margin: '0 auto' }}
              >
                <BookOpen size={14} style={{ color: 'var(--logo-gold)' }} />
                <span>Open Screenplay Excerpt (Scene 42)</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
