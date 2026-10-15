import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TestimonialCarousel from './components/TestimonialCarousel';
// Original Partnership Section (Option 1) - Preserved for future use
import PartnershipSection from './components/PartnershipSection';
// Alternative Partnership Section (Option 2) - Client-approved design direction
import PartnershipSectionAlt from './components/PartnershipSectionAlt';
import PartnershipPage from './components/PartnershipPage';
import ProductSection from './components/ProductSection';
import HydrationProcess from './components/HydrationProcess';
import ScienceSection from './components/ScienceSection';
import ResearchSection from './components/ResearchSection';
import StorySection from './components/StorySection';
import ExpertSection from './components/ExpertSection';
import BenefitsStrip from './components/BenefitsStrip';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/partnership' || window.location.hash === '#partnership-page') {
        return 'partnership';
      }
    }
    return 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/partnership' || window.location.hash === '#partnership-page') {
        setCurrentRoute('partnership');
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToPartnership = () => {
    window.history.pushState({}, '', '/partnership');
    setCurrentRoute('partnership');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentRoute('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentRoute === 'partnership') {
    return <PartnershipPage onNavigateHome={navigateToHome} />;
  }

  return (
    <div className="min-h-screen bg-white text-brand-navy flex flex-col font-sans antialiased selection:bg-brand-cyan/25 selection:text-brand-teal">
      {/* 1. Slim navigation header */}
      <Header />

      <main className="flex-grow">
        {/* 2. Main hero with icy water background and product cans */}
        <Hero />

       

        {/* =========================================================================
            OFFICIAL PARTNERSHIP SECTION (BURNLEY FC) - DESIGN DIRECTION OPTIONS
            To switch designs, comment/uncomment the respective component below.
            ========================================================================= */}
        
        {/* OPTION 1: Original Partnership Section (Preserved for future use) */}
        {/* <PartnershipSection onNavigate={navigateToPartnership} /> */}

        {/* OPTION 2: Alternative Client-Approved Partnership Section (Active) */}
        <PartnershipSectionAlt onNavigate={navigateToPartnership} />
 {/* 3. Customer testimonial carousel */}
        <TestimonialCarousel />

        {/* 4. Teal product showcase section with three product cards */}
        <ProductSection />

        {/* 5. Hydration process section with numbered steps */}
        <HydrationProcess />

        {/* 6. Dark scientific hydration section */}
        <ScienceSection />

        {/* 7. Human research section with a central product image and surrounding information */}
        <ResearchSection />

        {/* 8. Brand story section featuring a person holding a glass of water */}
        <StorySection />

        {/* 9. Expert section featuring a professional portrait */}
        <ExpertSection />

        {/* Mid-page scientific validation benefits strip */}
        <BenefitsStrip />

        {/* 10. Community of high performers section with horizontal profile carousel */}
        <CommunitySection />
      </main>

      {/* 11. Minimal footer */}
      <Footer />
    </div>
  );
}
