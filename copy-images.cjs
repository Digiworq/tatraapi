const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\8334074e-e077-4cbb-8c5d-7e188124a56f';
const targetDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\scratch\\tatraapi-film\\public\\assets\\images';
const srcTargetDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\scratch\\tatraapi-film\\src\\assets\\images';

[targetDir, srcTargetDir].forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

const mappings = [
  { src: 'hero_varanasi_dawn_1787129976702.jpg', dest: 'hero-varanasi.jpg' },
  { src: 'child_butter_pot_1787130003269.jpg', dest: 'childhood-butter.jpg' },
  { src: 'robotics_newyork_1787130354216.jpg', dest: 'robotics-newyork.jpg' },
  { src: 'convergence_art_1787130454543.jpg', dest: 'convergence.jpg' },
  { src: 'varanasi_experience_1787130785887.jpg', dest: 'varanasi-experience.jpg' },
  { src: 'bengaluru_base_1787130804475.jpg', dest: 'bengaluru-base.jpg' },
];

mappings.forEach(({ src, dest }) => {
  const sourcePath = path.join(srcDir, src);
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, path.join(targetDir, dest));
    fs.copyFileSync(sourcePath, path.join(srcTargetDir, dest));
    console.log(`Copied ${src} -> ${dest}`);
  } else {
    console.warn(`Source file not found: ${sourcePath}`);
  }
});
