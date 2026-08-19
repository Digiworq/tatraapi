import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { FilmGrain } from './components/FilmGrain';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { ScreenplayModal } from './components/ScreenplayModal';
import { Hero } from './sections/Hero';
import { TheQuestion } from './sections/TheQuestion';
import { StoryMoments } from './sections/StoryMoments';
import { CharacterRelations } from './sections/CharacterRelations';
import { ScienceVsScripture } from './sections/ScienceVsScripture';
import { GenreTone } from './sections/GenreTone';
import { TitleSection } from './sections/TitleSection';
import { ComparableFilms } from './sections/ComparableFilms';
import { LanguageSection } from './sections/LanguageSection';
import { LocationsJourney } from './sections/LocationsJourney';
import { VaranasiExperience } from './sections/VaranasiExperience';
import { Inquiries } from './sections/Inquiries';
import { initSmoothScroll } from './utils/lenis';

export const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [grainEnabled, setGrainEnabled] = useState<boolean>(true);
  const [screenplayOpen, setScreenplayOpen] = useState<boolean>(false);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const cleanupLenis = initSmoothScroll();
    return () => {
      cleanupLenis();
    };
  }, []);

  return (
    <div className="film-site-root">
      {/* Top Hairline Celestial Scroll Progress */}
      <ScrollProgress />

      {/* Cinematic Custom Cursor */}
      <CustomCursor />

      {/* Atmospheric Golden Dust Motes */}
      <FilmGrain enabled={grainEnabled} />

      {/* Intro Preloader Sequence */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Global Header Navigation */}
      <Navbar
        grainEnabled={grainEnabled}
        onToggleGrain={() => setGrainEnabled(!grainEnabled)}
      />

      {/* Interactive Screenplay Excerpt Modal */}
      <ScreenplayModal
        isOpen={screenplayOpen}
        onClose={() => setScreenplayOpen(false)}
      />

      {/* Main Narrative Structure */}
      <main>
        <Hero />
        <TheQuestion />
        <StoryMoments />
        <CharacterRelations />
        <ScienceVsScripture />
        <GenreTone />
        <TitleSection />
        <ComparableFilms />
        <LanguageSection onOpenScreenplay={() => setScreenplayOpen(true)} />
        <LocationsJourney />
        <VaranasiExperience />
        <Inquiries />
      </main>

      {/* Production & Legal Footer */}
      <Footer />
    </div>
  );
};

export default App;
