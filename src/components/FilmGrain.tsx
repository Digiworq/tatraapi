import React, { useEffect, useRef } from 'react';

interface FilmGrainProps {
  enabled?: boolean;
}

export const FilmGrain: React.FC<FilmGrainProps> = ({ enabled = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dust particles
    const particleCount = Math.min(width > 768 ? 40 : 18, 50);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.4,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.4 - 0.1, // Float gently upward like incense/mist
      opacity: Math.random() * 0.4 + 0.1,
      fadeSpeed: Math.random() * 0.005 + 0.002,
      fadeDirection: Math.random() > 0.5 ? 1 : -1,
    }));

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Noise pattern generator
    const noiseCanvas = document.createElement('canvas');
    noiseCanvas.width = 120;
    noiseCanvas.height = 120;
    const noiseCtx = noiseCanvas.getContext('2d');

    const updateNoise = () => {
      if (!noiseCtx) return;
      const imgData = noiseCtx.createImageData(120, 120);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        const val = Math.random() * 255;
        data[i] = val;
        data[i + 1] = val;
        data[i + 2] = val;
        data[i + 3] = 14; // Subtle alpha
      }
      noiseCtx.putImageData(imgData, 0, 0);
    };

    let lastNoiseTime = 0;

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Render Grain at 15fps to conserve GPU
      if (time - lastNoiseTime > 66) {
        updateNoise();
        lastNoiseTime = time;
      }

      if (noiseCtx) {
        const pattern = ctx.createPattern(noiseCanvas, 'repeat');
        if (pattern) {
          ctx.fillStyle = pattern;
          ctx.fillRect(0, 0, width, height);
        }
      }

      // Render Floating Dust Motes (Golden Warm Light)
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.fadeSpeed * p.fadeDirection;

        if (p.opacity >= 0.55) p.fadeDirection = -1;
        if (p.opacity <= 0.05) p.fadeDirection = 1;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 196, 117, ${p.opacity * 0.45})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 90,
      }}
      aria-hidden="true"
    />
  );
};
