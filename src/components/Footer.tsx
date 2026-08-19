import React from 'react';
import { FILM_CONFIG } from '../config/filmData';
import { Mail, Globe } from 'lucide-react';
import officialLogo from '../logo/Tatraapi_Films_Final_Logo_Light_Blue_Yellow 1.png';

export const Footer: React.FC = () => {
  return (
    <footer style={{ position: 'relative', backgroundColor: 'var(--bg-midnight-deep)', borderTop: '1px solid rgba(229, 169, 59, 0.2)', padding: '6rem 0 5rem 0', textAlign: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '500px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--logo-gold), transparent)' }} />

      <div className="film-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        {/* Big Official Logo Brandmark */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
          <img
            src={officialLogo}
            alt="Tatraapi Films"
            style={{
              width: 'clamp(200px, 30vw, 280px)',
              height: 'auto',
              filter: 'brightness(1.25) contrast(1.1) drop-shadow(0 8px 25px rgba(0,0,0,0.9)) drop-shadow(0 0 25px rgba(229, 169, 59, 0.3))',
              marginBottom: '0.5rem',
            }}
          />
          <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'var(--text-midnight-muted)' }}>
            {FILM_CONFIG.production}
          </p>
        </div>

        {/* Contact & Web Info in Footer */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '2rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
          <a
            href={`mailto:${FILM_CONFIG.contactEmail}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--logo-gold-light)', textDecoration: 'none', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--logo-gold-light)')}
          >
            <Mail size={14} style={{ color: 'var(--logo-gold)' }} />
            <span>{FILM_CONFIG.contactEmail}</span>
          </a>

          <span style={{ opacity: 0.3, color: 'var(--text-midnight-muted)' }}>·</span>

          <a
            href={FILM_CONFIG.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--logo-blue-light)', textDecoration: 'none', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--logo-blue-light)')}
          >
            <Globe size={14} style={{ color: 'var(--logo-blue-light)' }} />
            <span>{FILM_CONFIG.websiteDisplay}</span>
          </a>
        </div>

        <div style={{ width: '4rem', height: '1px', background: 'rgba(255, 255, 255, 0.1)', margin: '0.2rem 0' }} />

        {/* Legal & Confidentiality Notices */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--text-midnight-muted)' }}>
          <span>{FILM_CONFIG.copyright}</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span style={{ color: 'var(--logo-gold-light)' }}>{FILM_CONFIG.confidentialityNotice}</span>
        </div>
      </div>
    </footer>
  );
};
