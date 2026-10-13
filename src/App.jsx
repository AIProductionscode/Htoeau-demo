import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TestimonialCarousel from './components/TestimonialCarousel';
import PartnershipSection from './components/PartnershipSection';
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
  return (
    <div className="min-h-screen bg-white text-brand-navy flex flex-col font-sans antialiased selection:bg-brand-cyan/25 selection:text-brand-teal">
      {/* 1. Slim navigation header */}
      <Header />

      <main className="flex-grow">
        {/* 2. Main hero with icy water background and product cans */}
        <Hero />

        {/* 3. Customer testimonial carousel */}
        <TestimonialCarousel />

        {/* Official Partnership Section (Burnley FC) */}
        <PartnershipSection />

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
