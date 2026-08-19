import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Auto-copy generated cinematic artwork & official logo
function copyFilmAssets() {
  return {
    name: 'copy-film-assets',
    buildStart() {
      const brainDir = path.resolve('C:/Users/Admin/.gemini/antigravity/brain/8334074e-e077-4cbb-8c5d-7e188124a56f');
      const publicImagesDir = path.resolve('public/assets/images');
      const publicLogoDir = path.resolve('public/assets/logo');
      const srcImagesDir = path.resolve('src/assets/images');
      const logoFile = path.resolve('src/logo/Tatraapi_Films_Final_Logo_Light_Blue_Yellow 1.png');

      [publicImagesDir, publicLogoDir, srcImagesDir].forEach(d => {
        if (!fs.existsSync(d)) {
          fs.mkdirSync(d, { recursive: true });
        }
      });

      if (fs.existsSync(logoFile)) {
        try {
          fs.copyFileSync(logoFile, path.join(publicLogoDir, 'logo.png'));
        } catch (e) {
          console.error('Failed to copy logo:', e);
        }
      }

      const mappings = [
        { src: 'hero_varanasi_dawn_1787129976702.jpg', dest: 'hero-varanasi.jpg' },
        { src: 'child_butter_pot_1787130003269.jpg', dest: 'childhood-butter.jpg' },
        { src: 'robotics_newyork_1787130354216.jpg', dest: 'robotics-newyork.jpg' },
        { src: 'convergence_art_1787130454543.jpg', dest: 'convergence.jpg' },
        { src: 'varanasi_experience_1787130785887.jpg', dest: 'varanasi-experience.jpg' },
        { src: 'bengaluru_base_1787130804475.jpg', dest: 'bengaluru-base.jpg' },
        // Comparable reference cards
        { src: 'ref_the_namesake_1787139230432.jpg', dest: 'ref-namesake.jpg' },
        { src: 'ref_life_of_pi_1787139619793.jpg', dest: 'ref-life-of-pi.jpg' },
        { src: 'ref_lunchbox_1787139644506.jpg', dest: 'ref-lunchbox.jpg' },
        { src: 'ref_infinity_1787139663668.jpg', dest: 'ref-infinity.jpg' },
        { src: 'ref_pk_1787139764946.jpg', dest: 'ref-pk.jpg' },
        { src: 'convergence_art_1787130454543.jpg', dest: 'ref-treeoflife.jpg' },
      ];

      mappings.forEach(({ src, dest }) => {
        const sourcePath = path.join(brainDir, src);
        if (fs.existsSync(sourcePath)) {
          try {
            fs.copyFileSync(sourcePath, path.join(publicImagesDir, dest));
            fs.copyFileSync(sourcePath, path.join(srcImagesDir, dest));
          } catch (e) {
            console.error(`Failed to copy ${src}:`, e);
          }
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), copyFilmAssets()],
  server: {
    port: 5173,
    host: true,
  },
});
