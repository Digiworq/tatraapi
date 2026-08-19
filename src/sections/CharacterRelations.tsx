import React, { useState } from 'react';
import { FILM_CONFIG, Character } from '../config/filmData';

// Dynamic relational tensions connecting the core family members to Aakash and the central inquiry
const RELATIONAL_TENSIONS: Record<string, { bond: string; dynamic: string; tensionType: string }> = {
  aakash: {
    bond: "The Gravitational Core",
    dynamic: "Carrying the childhood Makhan Chor paradox across decades of robotics.",
    tensionType: "Inner Convergence",
  },
  father: {
    bond: "Aakash ↔ Father",
    dynamic: "Unwavering Vedic certainty vs mathematical empirical inquiry. Decades of silence.",
    tensionType: "Scriptural Authority",
  },
  sister: {
    bond: "Aakash ↔ Sister",
    dynamic: "Shared childhood memories, but an investigative refusal to accept family silence.",
    tensionType: "Unspoken Curiosity",
  },
  wife: {
    bond: "Aakash ↔ Wife",
    dynamic: "Clinical precision meeting ancestral roots; bridging empathy and diagnostic rigor.",
    tensionType: "Dual Modernity",
  },
};

// Filtered to core family characters only (Aakash, Father, Sister, Wife)
const FAMILY_CHARACTERS = FILM_CONFIG.characters.filter((c: Character) => c.id !== 'friend');

export const CharacterRelations: React.FC = () => {
  const [activeCharId, setActiveCharId] = useState<string>('aakash');

  const selectedChar = FAMILY_CHARACTERS.find((c: Character) => c.id === activeCharId) || FAMILY_CHARACTERS[0];
  const relationData = RELATIONAL_TENSIONS[selectedChar.id] || RELATIONAL_TENSIONS.aakash;

  return (
    <section id="characters" className="characters-section">
      <div className="film-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto 3.5rem auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span style={{ width: '1.5rem', height: '1px', background: 'var(--saffron-editorial)' }} />
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--saffron-editorial)', fontWeight: 600 }}>
              INTERPERSONAL ORBIT
            </span>
            <span style={{ width: '1.5rem', height: '1px', background: 'var(--saffron-editorial)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 800, letterSpacing: '0.2em', color: 'var(--text-sand-light)' }}>
            The Orbit
          </h2>
          <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-midnight-muted)', marginTop: '0.5rem' }}>
            A family drawn together by silence, precision, and grief
          </p>
        </div>

        {/* Character Tabs Selector (Core Family Only) */}
        <div className="char-tabs-bar">
          {FAMILY_CHARACTERS.map((char: Character) => {
            const isActive = char.id === activeCharId;
            return (
              <button
                key={char.id}
                onClick={() => setActiveCharId(char.id)}
                className={`char-tab-btn ${isActive ? 'active' : ''}`}
              >
                {char.name}
              </button>
            );
          })}
        </div>

        {/* Main Orbit Stage */}
        <div className="char-spotlight-box">
          {/* Left Column: Narrative Dossier */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--logo-gold)', fontFamily: 'var(--font-mono)' }}>
                {selectedChar.relation}
              </span>
              <span style={{ width: '2rem', height: '1px', background: 'rgba(255, 255, 255, 0.2)' }} />
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-midnight-muted)' }}>
                {selectedChar.role}
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--text-sand-light)', marginBottom: '1rem' }}>
              {selectedChar.name}
            </h3>

            <p className="char-quote-text">
              "{selectedChar.description}"
            </p>

            <div style={{ padding: '1.2rem 1.4rem', background: 'rgba(8, 13, 23, 0.7)', borderLeft: '2px solid var(--logo-gold)', borderRadius: '2px', marginBottom: '1.8rem' }}>
              <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-midnight-muted)', display: 'block', marginBottom: '0.35rem', fontFamily: 'var(--font-mono)' }}>
                Relational Tension & Dynamic
              </span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-sand-dim)', fontWeight: 300, lineHeight: 1.6 }}>
                {relationData.dynamic}
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {selectedChar.keywords.map((kw: string, i: number) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.16em',
                    padding: '0.4rem 0.85rem',
                    background: 'rgba(24, 106, 168, 0.15)',
                    border: '1px solid var(--border-midnight-subtle)',
                    color: 'var(--text-sand-dim)',
                    borderRadius: '2px',
                  }}
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Family Triad & Core Constellation Orbit Visualizer */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '340px',
                aspectRatio: '1 / 1',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(22, 32, 53, 0.8) 0%, rgba(12, 18, 32, 0.95) 70%, rgba(8, 13, 23, 1) 100%)',
                border: '1px solid var(--border-midnight-gold)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(229, 169, 59, 0.12)',
              }}
            >
              {/* Concentric Gravitational Orbit Rings (Percentage-based for responsive mobile scale) */}
              <div
                style={{
                  position: 'absolute',
                  width: '64%',
                  height: '64%',
                  borderRadius: '50%',
                  border: '1px dashed rgba(229, 169, 59, 0.25)',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  width: '84%',
                  height: '84%',
                  borderRadius: '50%',
                  border: '1px solid rgba(56, 189, 248, 0.15)',
                  pointerEvents: 'none',
                }}
              />

              {/* Connecting Tension Lines (SVG) */}
              <svg
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                }}
                viewBox="0 0 340 340"
              >
                {/* Center is (170, 170) */}
                {/* Father node at (170, 65) - Top */}
                <line
                  x1="170"
                  y1="170"
                  x2="170"
                  y2="65"
                  stroke={activeCharId === 'father' ? 'var(--logo-gold)' : 'rgba(255,255,255,0.15)'}
                  strokeWidth={activeCharId === 'father' ? '2.5' : '1'}
                  strokeDasharray={activeCharId === 'father' ? 'none' : '4 4'}
                />
                {/* Sister node at (80, 240) - Bottom Left */}
                <line
                  x1="170"
                  y1="170"
                  x2="80"
                  y2="240"
                  stroke={activeCharId === 'sister' ? 'var(--saffron-editorial)' : 'rgba(255,255,255,0.15)'}
                  strokeWidth={activeCharId === 'sister' ? '2.5' : '1'}
                  strokeDasharray={activeCharId === 'sister' ? 'none' : '4 4'}
                />
                {/* Wife node at (260, 240) - Bottom Right */}
                <line
                  x1="170"
                  y1="170"
                  x2="260"
                  y2="240"
                  stroke={activeCharId === 'wife' ? 'var(--logo-blue-light)' : 'rgba(255,255,255,0.15)'}
                  strokeWidth={activeCharId === 'wife' ? '2.5' : '1'}
                  strokeDasharray={activeCharId === 'wife' ? 'none' : '4 4'}
                />
              </svg>

              {/* Center Core Node: Aakash */}
              <div
                onClick={() => setActiveCharId('aakash')}
                style={{
                  width: '66px',
                  height: '66px',
                  borderRadius: '50%',
                  background: activeCharId === 'aakash' ? 'linear-gradient(135deg, #186aa8, #e5a93b)' : '#131b2e',
                  border: '2px solid var(--logo-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  boxShadow: activeCharId === 'aakash' ? '0 0 25px rgba(229, 169, 59, 0.6)' : 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-serif)', fontWeight: 800, color: '#fff', letterSpacing: '0.05em' }}>
                  AAKASH
                </span>
                <span style={{ fontSize: '0.42rem', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase' }}>
                  Protagonist
                </span>
              </div>

              {/* Orbit Node: Father (Top Center) */}
              <div
                onClick={() => setActiveCharId('father')}
                style={{
                  position: 'absolute',
                  top: '19%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: activeCharId === 'father' ? 'rgba(229, 169, 59, 0.3)' : '#0d1424',
                  border: activeCharId === 'father' ? '2px solid var(--logo-gold)' : '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  boxShadow: activeCharId === 'father' ? '0 0 20px rgba(229, 169, 59, 0.5)' : 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-serif)', color: activeCharId === 'father' ? 'var(--logo-gold-light)' : 'var(--text-sand-dim)', fontWeight: 700 }}>
                  Father
                </span>
              </div>

              {/* Orbit Node: Sister (Bottom Left) */}
              <div
                onClick={() => setActiveCharId('sister')}
                style={{
                  position: 'absolute',
                  bottom: '21%',
                  left: '23%',
                  transform: 'translate(-50%, 50%)',
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: activeCharId === 'sister' ? 'rgba(200, 122, 50, 0.3)' : '#0d1424',
                  border: activeCharId === 'sister' ? '2px solid var(--saffron-editorial)' : '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  boxShadow: activeCharId === 'sister' ? '0 0 20px rgba(200, 122, 50, 0.5)' : 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-serif)', color: activeCharId === 'sister' ? 'var(--saffron-editorial)' : 'var(--text-sand-dim)', fontWeight: 700 }}>
                  Sister
                </span>
              </div>

              {/* Orbit Node: Wife (Bottom Right) */}
              <div
                onClick={() => setActiveCharId('wife')}
                style={{
                  position: 'absolute',
                  bottom: '21%',
                  right: '23%',
                  transform: 'translate(50%, 50%)',
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: activeCharId === 'wife' ? 'rgba(56, 189, 248, 0.3)' : '#0d1424',
                  border: activeCharId === 'wife' ? '2px solid var(--logo-blue-light)' : '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  boxShadow: activeCharId === 'wife' ? '0 0 20px rgba(56, 189, 248, 0.5)' : 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-serif)', color: activeCharId === 'wife' ? 'var(--logo-blue-light)' : 'var(--text-sand-dim)', fontWeight: 700 }}>
                  Wife
                </span>
              </div>
            </div>

            {/* Orbit Caption */}
            <span style={{ marginTop: '1.5rem', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-midnight-muted)' }}>
              Interactive Family Orbit Map
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
