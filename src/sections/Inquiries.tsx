import React, { useState } from 'react';
import { FILM_CONFIG } from '../config/filmData';
import { Mail, Copy, Check, Send, Globe } from 'lucide-react';
import officialLogo from '../logo/Tatraapi_Films_Final_Logo_Light_Blue_Yellow 1.png';

export const Inquiries: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(FILM_CONFIG.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="inquiries" className="inquiries-section">
      <div className="film-container-narrow relative" style={{ zIndex: 10, textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--saffron-editorial)' }}>
          <Mail size={16} />
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 600 }}>
            INQUIRIES
          </span>
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, letterSpacing: '0.2em', color: 'var(--text-dark-navy)', marginBottom: '1rem' }}>
          {FILM_CONFIG.inquiries.title}
        </h2>

        <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-dark-muted)', marginBottom: '3.5rem' }}>
          {FILM_CONFIG.inquiries.lead}
        </p>

        {/* Outreach Card */}
        <div className="inquiries-box" style={{ textAlign: 'left' }}>
          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)', color: 'var(--text-sand-light)', fontWeight: 300, lineHeight: 1.65, marginBottom: '2.5rem' }}>
            "{FILM_CONFIG.inquiries.body}"
          </p>

          <div
            style={{
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <img
                src={officialLogo}
                alt="Tatraapi Films Emblem"
                style={{
                  width: '90px',
                  height: 'auto',
                  filter: 'brightness(1.25) contrast(1.1) drop-shadow(0 0 15px rgba(229,169,59,0.35)) drop-shadow(0 4px 12px rgba(0,0,0,0.8))',
                }}
              />
              <div>
                <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-midnight-muted)', display: 'block', marginBottom: '0.25rem' }}>
                  Production Entity
                </span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-sand-light)', letterSpacing: '0.15em' }}>
                  {FILM_CONFIG.production}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a
                href={`mailto:${FILM_CONFIG.contactEmail}`}
                className="btn-cinematic"
              >
                <Send size={13} />
                <span>Initiate Dialogue</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="control-round-btn"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copied ? <Check size={14} style={{ color: '#4ade80' }} /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          {/* Official Contact Links */}
          <div
            style={{
              marginTop: '1.8rem',
              paddingTop: '1.2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={13} style={{ color: 'var(--logo-gold)' }} />
              <span style={{ color: 'var(--text-midnight-muted)' }}>Email:</span>
              <a
                href={`mailto:${FILM_CONFIG.contactEmail}`}
                style={{ color: 'var(--logo-gold-light)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--logo-gold-light)')}
              >
                {FILM_CONFIG.contactEmail}
              </a>
            </div>

            {/* Official Website */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Globe size={13} style={{ color: 'var(--logo-blue-light)' }} />
              <span style={{ color: 'var(--text-midnight-muted)' }}>Web:</span>
              <a
                href={FILM_CONFIG.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--logo-blue-light)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--logo-blue-light)')}
              >
                {FILM_CONFIG.websiteDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
