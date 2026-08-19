# TATRAAPI — Feature Film Website

A premium, cinematic, Awwwards-level interactive website for the upcoming feature film **TATRAAPI**, produced by **Tatraapi Films, LLC**.

---

## 📽️ Creative Overview

- **Genre**: A Spiritual Drama
- **Logline**: The convergence of modern science and ancient scripture, in search of life's meaning and purpose.
- **Languages**: Shot bilingually in English and Hindi (performed live on set, not dubbed).
- **Locations**: Bengaluru (Production Base), Varanasi (River Location Work), New York (Second Shoot Block).
- **Production Entity**: Tatraapi Films, LLC
- **Status**: In Development (Confidential — for outreach use)

---

## 🛠️ Technology Stack

- **Framework**: React 18 / 19 + TypeScript + Vite
- **Animations & Storytelling**: GSAP 3 + ScrollTrigger
- **Smooth Momentum Scrolling**: Lenis (`lenis`)
- **Atmosphere & Visual Effects**: Custom 2D/WebGL Canvas Film Grain & Floating Golden Dust Motes
- **Sound Design**: Web Audio API generative ambient cinematic drone (C-minor/G harmonics & river mist overtone)
- **Typography**: Google Fonts (`Cinzel`, `Cormorant Garamond`, `Plus Jakarta Sans`, `Noto Serif Devanagari`)
- **Icons**: Lucide React

---

## 🚀 Getting Started

### 1. Installation
```bash
cd tatraapi-film
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```

---

## 📁 Project Structure

```
tatraapi-film/
├── index.html                  # SEO, metadata, font imports
├── vite.config.ts              # Vite configuration
├── src/
│   ├── main.tsx                # Application bootstrap
│   ├── App.tsx                 # Root layout & section choreography
│   ├── config/
│   │   └── filmData.ts         # Central configuration for copy, email, and film metadata
│   ├── styles/
│   │   └── index.css           # Design system tokens, typography, glassmorphism, responsive utilities
│   ├── components/
│   │   ├── Preloader.tsx       # Cinematic movie title reveal preloader
│   │   ├── Navbar.tsx          # Floating glass header with sound toggle and mobile drawer
│   │   ├── CustomCursor.tsx    # Magnetic desktop cursor with contextual badges
│   │   ├── FilmGrain.tsx       # Dynamic canvas grain and floating dust particle system
│   │   └── Footer.tsx          # Minimal confidential production footer
│   ├── sections/
│   │   ├── Hero.tsx            # Varanasi dawn backdrop, movie title reveal, scroll trigger
│   │   ├── TheQuestion.tsx     # The central "Makhan Chor" inquiry & monumental "WHY?" reveal
│   │   ├── StoryMoments.tsx    # 4-chapter narrative movements (Question, Return, Convergence, Answer)
│   │   ├── CharacterRelations.tsx # Intimate human orbit (Aakash, Father, Sister, Wife, Friend)
│   │   ├── ScienceVsScripture.tsx # Split-screen merger: New York Robotics vs Ancient Ganges
│   │   ├── GenreTone.tsx       # Spiritual Drama statement & atmospheric tonal coordinates
│   │   ├── TitleSection.tsx    # Monumental TATRAAPI title typography
│   │   ├── ComparableFilms.tsx # Horizontal reference gallery (The Namesake, Life of Pi, etc.)
│   │   ├── LanguageSection.tsx # Bilingual English + Hindi on-set performance showcase
│   │   ├── LocationsJourney.tsx# Bengaluru, Varanasi, and New York production hubs
│   │   ├── VaranasiExperience.tsx # Fullscreen contemplative Ganges dawn experience
│   │   └── Inquiries.tsx       # Industry outreach and contact form
│   └── utils/
│       ├── lenis.ts            # Lenis smooth scroll synchronization with GSAP ScrollTrigger
│       └── soundEngine.ts      # Web Audio API ambient cinematic synthesizer
└── public/
    └── assets/images/          # Production stills and cinematic fallback imagery
```

---

## 🔒 Confidentiality & Content Integrity

All narrative points, character descriptions, and location details strictly adhere to the project brief. The contact email is centrally managed via `src/config/filmData.ts`:
```ts
contactEmail: "contact@tatraapifilms.example"
```

---

© Tatraapi Films, LLC — All rights reserved. Confidential — for outreach use.
