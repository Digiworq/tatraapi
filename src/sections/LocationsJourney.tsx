import React, { useState } from 'react';
import { FILM_CONFIG, LocationItem } from '../config/filmData';
import { MapPin } from 'lucide-react';

// Direct asset imports
import newYorkImg from 'C:/Users/Admin/.gemini/antigravity/brain/8334074e-e077-4cbb-8c5d-7e188124a56f/robotics_newyork_1787130354216.jpg';
import bengaluruImg from 'C:/Users/Admin/.gemini/antigravity/brain/8334074e-e077-4cbb-8c5d-7e188124a56f/bengaluru_base_1787130804475.jpg';
import varanasiImg from 'C:/Users/Admin/.gemini/antigravity/brain/8334074e-e077-4cbb-8c5d-7e188124a56f/varanasi_experience_1787130785887.jpg';

const LOCATION_ARTWORKS: Record<string, string> = {
  "NEW YORK": newYorkImg,
  "BENGALURU": bengaluruImg,
  "VARANASI": varanasiImg,
};

export const LocationsJourney: React.FC = () => {
  const [activeCity, setActiveCity] = useState<string>('NEW YORK');

  const activeLoc = FILM_CONFIG.locations.find((l: LocationItem) => l.city === activeCity) || FILM_CONFIG.locations[0];
  const activeImg = LOCATION_ARTWORKS[activeLoc.city] || activeLoc.imagePath;

  return (
    <section id="locations" className="locations-section">
      <div className="film-container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto clamp(2.5rem, 5vw, 4rem) auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <MapPin size={15} style={{ color: 'var(--logo-gold)' }} />
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--logo-gold)', fontWeight: 600 }}>
              PRODUCTION GEOGRAPHY
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 800, letterSpacing: '0.2em', color: 'var(--text-sand-light)' }}>
            Locations
          </h2>
          <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-midnight-muted)', marginTop: '0.5rem' }}>
            Three distinct visual worlds across two continents
          </p>
        </div>

        {/* Location Pipeline Tabs */}
        <div className="loc-pipeline-grid">
          {FILM_CONFIG.locations.map((loc: LocationItem) => {
            const isActive = loc.city === activeCity;
            return (
              <button
                key={loc.city}
                onClick={() => setActiveCity(loc.city)}
                className={`loc-selector-btn ${isActive ? 'active' : ''}`}
              >
                <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.2em', color: isActive ? 'var(--logo-gold)' : 'var(--text-midnight-muted)', display: 'block', marginBottom: '0.35rem' }}>
                  {loc.role}
                </span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--text-sand-light)', display: 'block' }}>
                  {loc.city}
                </span>
              </button>
            );
          })}
        </div>

        {/* Spotlight Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1.8rem, 4vw, 3rem)',
            alignItems: 'center',
            background: 'var(--bg-midnight-surface)',
            border: '1px solid var(--border-midnight-gold)',
            borderRadius: '4px',
            padding: 'clamp(1.5rem, 4vw, 3.5rem)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.85)',
          }}
        >
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--logo-gold)', textTransform: 'uppercase', letterSpacing: '0.25em' }}>
                {activeLoc.role}
              </span>
              <span style={{ width: '1.5rem', height: '1px', background: 'rgba(255, 255, 255, 0.2)' }} />
              <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-midnight-muted)' }}>
                {activeLoc.coordinates}
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, letterSpacing: '0.18em', marginBottom: '1.2rem' }} className="text-logo-gradient">
              {activeLoc.city}
            </h3>

            <p style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(1.2rem, 2.2vw, 1.45rem)', color: 'var(--text-sand-dim)', fontWeight: 300, lineHeight: 1.6, marginBottom: '1.8rem' }}>
              "{activeLoc.description}"
            </p>

            <div style={{ padding: '1rem 1.2rem', background: 'rgba(8, 13, 23, 0.6)', borderLeft: '2px solid var(--logo-gold)', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: 'var(--font-mono)', color: 'var(--text-midnight-muted)', display: 'block', marginBottom: '0.25rem' }}>
                Visual Texture & Lighting
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-sand-dim)', fontWeight: 300 }}>
                {activeLoc.atmosphere}
              </span>
            </div>
          </div>

          {/* Clean Location Image Viewport */}
          <div style={{ position: 'relative', aspectRatio: '16 / 10', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)', background: 'var(--bg-midnight-deep)', width: '100%' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `radial-gradient(circle at center, rgba(12,18,32,0.05) 0%, rgba(8,13,23,0.4) 100%), url('${activeImg}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
