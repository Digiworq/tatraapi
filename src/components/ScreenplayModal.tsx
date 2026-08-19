import React, { useState } from 'react';
import { X, FileText, Globe } from 'lucide-react';
import officialLogo from '../logo/Tatraapi_Films_Final_Logo_Light_Blue_Yellow 1.png';

interface ScreenplayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScreenplayModal: React.FC<ScreenplayModalProps> = ({ isOpen, onClose }) => {
  const [lang, setLang] = useState<'both' | 'en' | 'hi'>('both');

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(5, 8, 15, 0.9)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.75rem, 3vw, 2.5rem)',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '92vh',
          backgroundColor: '#0a0f1d',
          border: '1px solid var(--border-midnight-gold)',
          borderRadius: '6px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 80px rgba(0,0,0,0.95), 0 0 40px rgba(229, 169, 59, 0.15)',
          overflow: 'hidden',
          animation: 'fadeIn 0.3s ease-out',
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '1rem 1.4rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.8rem',
            background: '#0d1424',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <img src={officialLogo} alt="Logo" style={{ height: '30px', width: 'auto' }} />
            <div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9rem', color: 'var(--text-sand-light)', letterSpacing: '0.15em', display: 'block' }}>
                TATRAAPI — Screenplay
              </span>
              <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: 'var(--logo-gold)', display: 'block' }}>
                SCENE 42 · DUAL-TRACK DRAFT
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Language Switcher */}
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.06)', borderRadius: '9999px', padding: '2px' }}>
              <button
                onClick={() => setLang('both')}
                style={{
                  padding: '0.3rem 0.6rem',
                  borderRadius: '9999px',
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  color: lang === 'both' ? 'var(--logo-gold)' : 'var(--text-midnight-muted)',
                  background: lang === 'both' ? 'rgba(229,169,59,0.2)' : 'transparent',
                }}
              >
                Dual
              </button>
              <button
                onClick={() => setLang('en')}
                style={{
                  padding: '0.3rem 0.6rem',
                  borderRadius: '9999px',
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  color: lang === 'en' ? 'var(--logo-gold)' : 'var(--text-midnight-muted)',
                  background: lang === 'en' ? 'rgba(229,169,59,0.2)' : 'transparent',
                }}
              >
                English
              </button>
              <button
                onClick={() => setLang('hi')}
                style={{
                  padding: '0.3rem 0.6rem',
                  borderRadius: '9999px',
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  color: lang === 'hi' ? 'var(--logo-gold)' : 'var(--text-midnight-muted)',
                  background: lang === 'hi' ? 'rgba(229,169,59,0.2)' : 'transparent',
                }}
              >
                हिन्दी
              </button>
            </div>

            <button
              onClick={onClose}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-sand-dim)',
                background: 'rgba(255,255,255,0.08)',
                minWidth: '34px',
              }}
              aria-label="Close Screenplay Reader"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Screenplay Content Body */}
        <div
          style={{
            padding: 'clamp(1.2rem, 3vw, 2.5rem)',
            overflowY: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            lineHeight: 1.7,
            color: 'var(--text-sand-light)',
            backgroundColor: '#080c16',
          }}
        >
          {/* Scene Heading */}
          <div style={{ color: 'var(--logo-blue-light)', fontWeight: 700, marginBottom: '1.5rem', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
            EXT. MANIKARNIKA GHAT, VARANASI - DAWN (4:45 AM)
          </div>

          {/* Action description */}
          <p style={{ color: 'var(--text-midnight-muted)', marginBottom: '1.8rem', fontStyle: 'italic' }}>
            Thick winter fog drifts over the Ganges. Distant temple bells echo across the stone steps. 
            AAKASH (34) stands near the riverbank, looking down at an unlit earthen diya in his hands. 
            HIS FATHER (68) approaches quietly, wrapped in a coarse raw-silk shawl.
          </p>

          {/* Dialogue Block 1 */}
          <div style={{ marginBottom: '2rem', paddingLeft: 'clamp(0.5rem, 2vw, 2rem)' }}>
            <span style={{ color: 'var(--logo-gold)', fontWeight: 700, display: 'block', marginBottom: '0.4rem', letterSpacing: '0.1em' }}>
              HIS FATHER
            </span>
            {(lang === 'both' || lang === 'en') && (
              <p style={{ color: 'var(--text-sand-light)', marginBottom: lang === 'both' ? '0.4rem' : '0' }}>
                You came back searching for an equation. But some things aren't broken, Aakash. They are only whole in ways you cannot measure.
              </p>
            )}
            {(lang === 'both' || lang === 'hi') && (
              <p style={{ color: 'var(--logo-gold-light)', fontFamily: 'var(--font-devanagari)', fontSize: '0.9rem' }}>
                तुम समीकरण खोजने वापस आए हो। लेकिन हर चीज़ टूटी हुई नहीं होती, आकाश। कुछ बातें सिर्फ़ उस तरह पूरी होती हैं जिसे तुम नाप नहीं सकते।
              </p>
            )}
          </div>

          {/* Beat */}
          <p style={{ color: 'var(--text-midnight-muted)', marginBottom: '2rem', fontStyle: 'italic', paddingLeft: '1rem' }}>
            Aakash looks at the moving river. A long, unhurried silence between them.
          </p>

          {/* Dialogue Block 2 */}
          <div style={{ marginBottom: '2rem', paddingLeft: 'clamp(0.5rem, 2vw, 2rem)' }}>
            <span style={{ color: 'var(--logo-blue-light)', fontWeight: 700, display: 'block', marginBottom: '0.4rem', letterSpacing: '0.1em' }}>
              AAKASH
            </span>
            {(lang === 'both' || lang === 'en') && (
              <p style={{ color: 'var(--text-sand-light)', marginBottom: lang === 'both' ? '0.4rem' : '0' }}>
                If you steal because you are hungry, it is human. If you steal because you are God... it is a paradox. Why does he steal the butter, Pitaji?
              </p>
            )}
            {(lang === 'both' || lang === 'hi') && (
              <p style={{ color: 'var(--logo-gold-light)', fontFamily: 'var(--font-devanagari)', fontSize: '0.9rem' }}>
                अगर आप भूख की वजह से चुराते हैं, तो यह मानवीय है। लेकिन अगर आप ईश्वर होकर चुराते हैं... तो यह एक विरोधाभास है। वे माखन क्यों चुराते हैं, पिताजी?
              </p>
            )}
          </div>

          {/* Dialogue Block 3 */}
          <div style={{ marginBottom: '2rem', paddingLeft: 'clamp(0.5rem, 2vw, 2rem)' }}>
            <span style={{ color: 'var(--logo-gold)', fontWeight: 700, display: 'block', marginBottom: '0.4rem', letterSpacing: '0.1em' }}>
              HIS FATHER
            </span>
            {(lang === 'both' || lang === 'en') && (
              <p style={{ color: 'var(--text-sand-light)', marginBottom: lang === 'both' ? '0.4rem' : '0' }}>
                (Softly, turning toward the current)<br />
                Because love cannot be given by force. It must be taken like a secret.
              </p>
            )}
            {(lang === 'both' || lang === 'hi') && (
              <p style={{ color: 'var(--logo-gold-light)', fontFamily: 'var(--font-devanagari)', fontSize: '0.9rem' }}>
                (धीमी आवाज़ में, धारा की ओर मुड़ते हुए)<br />
                क्योंकि प्रेम ज़बरदस्ती नहीं दिया जा सकता। उसे एक राज़ की तरह चुराना पड़ता है।
              </p>
            )}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem', color: 'var(--text-midnight-muted)', fontSize: '0.7rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.2rem' }}>
            [ END OF EXCERPT · TATRAAPI FILMS ]
          </div>
        </div>
      </div>
    </div>
  );
};
