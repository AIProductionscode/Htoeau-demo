import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PartnershipSection({ onNavigate }) {
  const handleExplore = () => {
    if (onNavigate) {
      onNavigate();
    } else {
      window.history.pushState({}, '', '/partnership');
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="partnership" 
      className="relative w-full bg-[#2A0213] text-white overflow-hidden"
    >
      {/* Background container using the clean Burnley FC & Turf Moor image */}
      <div 
        className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] xl:min-h-[720px] bg-no-repeat bg-cover bg-right lg:bg-[center_right] flex items-center"
        style={{
          backgroundImage: `url('/images/burnley-bg-clean.jpg')`,
        }}
      >
        {/* Subtle claret gradient wash on the left to ensure seamless text legibility across all viewport widths */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A0213] via-[#2A0213]/90 md:via-[#2A0213]/70 to-transparent lg:max-w-[55%] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 w-full">
          <div className="max-w-xl lg:max-w-lg xl:max-w-xl z-10">
            
            {/* Eyebrow: OFFICIAL PARTNER */}
            <p className="text-[11px] sm:text-[12px] font-semibold tracking-[0.25em] uppercase text-white/80 mb-5">
              OFFICIAL PARTNER
            </p>

            {/* Logos Lockup: HtoEAU | Burnley FC */}
            <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              {/* HtoEAU Logo / Wordmark */}
              <div className="flex items-center">
                <img
                  src="/images/htoeau-logo.png"
                  alt="HtoEAU"
                  className="h-10 sm:h-12 md:h-14 w-auto brightness-0 invert object-contain"
                />
              </div>

              {/* Vertical Divider */}
              <div className="h-9 sm:h-11 md:h-12 w-[1.5px] bg-white/30" />

              {/* Burnley Football Club Lockup */}
              <div className="flex items-center gap-3">
                <img 
                  src="/images/burnley-crest.png" 
                  alt="Burnley Football Club Crest"
                  className="h-11 sm:h-13 md:h-14 w-auto object-contain brightness-110 drop-shadow-sm"
                />
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-wider uppercase text-white">
                    BURNLEY
                  </span>
                  <span className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold tracking-wider uppercase text-white/90 mt-0.5">
                    FOOTBALL CLUB
                  </span>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-extrabold text-white tracking-tight leading-[1.08] mb-5 sm:mb-6">
              <span className="block">Matchday</span>
              <span className="block">hydration.</span>
              <span className="block italic text-[#8EE2F0] font-black">
                Engineered.
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-[15px] text-white/85 leading-relaxed max-w-lg mb-8 sm:mb-10 font-normal">
              HtoEAU is proud to partner with Burnley FC, uniting performance, community and a shared commitment to a healthier tomorrow.
            </p>

            {/* Call-to-Action Button */}
            <div>
              <button
                type="button"
                onClick={handleExplore}
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#8EE2F0] hover:bg-[#A3EAF6] active:scale-[0.98] text-[#10232F] text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <span>Explore the Partnership</span>
                <ArrowRight className="w-4 h-4 text-[#10232F] group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
