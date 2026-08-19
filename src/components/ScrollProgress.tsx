import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollPercent(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
        zIndex: 999,
        pointerEvents: 'none',
        background: 'rgba(12, 18, 32, 0.4)',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${scrollPercent}%`,
          background: 'linear-gradient(90deg, #186aa8 0%, #38bdf8 40%, #e5a93b 85%, #f6cd6f 100%)',
          boxShadow: '0 0 12px rgba(229, 169, 59, 0.8), 0 0 20px rgba(56, 189, 248, 0.5)',
          transition: 'width 0.1s linear',
        }}
      />
    </div>
  );
};
