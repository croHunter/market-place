import React from 'react';
import CarouselSection from './component/carousel-section/CarouselSection';
import HeroSection from './component/hero-section/HeroSection';
import NavSection from './component/nav-section/NavSection';
import ShortFeature from './component/short-feature/ShortFeature';

const App = () => {
  return (
    <>
      <NavSection />
      <main>
        <HeroSection />
        <CarouselSection />
        <ShortFeature />
      </main>
    </>
  );
};

export default App;
