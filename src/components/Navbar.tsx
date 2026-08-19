import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import officialLogo from '../logo/Tatraapi_Films_Final_Logo_Light_Blue_Yellow 1.png';

interface NavbarProps {
  grainEnabled: boolean;
  onToggleGrain: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ grainEnabled, onToggleGrain }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar-fixed ${isScrolled ? 'navbar-scrolled' : 'navbar-unscrolled'}`}>
        <div className="film-container navbar-content" style={{ alignItems: 'center' }}>
          {/* Prominent Official Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            title="Tatraapi Films"
          >
            <img
              src={officialLogo}
              alt="Tatraapi Films Official Logo"
              style={{
                height: isScrolled ? '52px' : '66px',
                width: 'auto',
                maxWidth: '220px',
                objectFit: 'contain',
                transition: 'height 0.3s ease, transform 0.3s ease',
                filter: 'brightness(1.25) contrast(1.1) drop-shadow(0 2px 14px rgba(229, 169, 59, 0.25)) drop-shadow(0 4px 20px rgba(0,0,0,0.9))',
              }}
            />
          </div>

          {/* Desktop Nav Links */}
          <nav className="nav-links-desktop">
            {[
              { id: 'question', label: 'The Question' },
              { id: 'story', label: 'The Story' },
              { id: 'characters', label: 'Characters' },
              { id: 'convergence', label: 'Convergence' },
              { id: 'locations', label: 'Locations' },
              { id: 'comparables', label: 'The Namesake' },
              { id: 'inquiries', label: 'Inquiries' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="nav-link-btn"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="navbar-controls">
            {/* Grain Toggle */}
            <button
              onClick={onToggleGrain}
              className={`control-round-btn ${grainEnabled ? 'active' : ''}`}
              title="Toggle atmosphere particles"
              aria-label="Toggle atmosphere particles"
            >
              <Sparkles size={14} />
            </button>

            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hamburger-btn"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : 'closed'}`}>
        <button
          onClick={() => setMobileMenuOpen(false)}
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: '#fff' }}
          aria-label="Close Menu"
        >
          <X size={28} />
        </button>

        <div className="mobile-drawer-links" style={{ alignItems: 'center' }}>
          <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src={officialLogo}
              alt="Tatraapi Films Logo"
              style={{
                width: '180px',
                height: 'auto',
                marginBottom: '1rem',
                filter: 'brightness(1.25) contrast(1.1) drop-shadow(0 0 25px rgba(229,169,59,0.3))',
              }}
            />
          </div>

          {[
            { id: 'question', label: 'The Question' },
            { id: 'story', label: 'The Story' },
            { id: 'characters', label: 'Characters' },
            { id: 'convergence', label: 'Science vs Scripture' },
            { id: 'locations', label: 'Locations' },
            { id: 'comparables', label: 'The Namesake' },
            { id: 'inquiries', label: 'Inquiries' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="mobile-nav-link"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
