import React from 'react';

/**
 * PartnershipSectionAlt
 * 
 * Alternative Client-Approved Partnership Section (Option 2).
 * Follows the uploaded visual reference with the bright stadium overcast aesthetic,
 * official logo lockups, uppercase typography, and Burnley FC squad photography.
 * 
 * To switch back to Option 1, see the commented section in src/App.jsx.
 */
export default function PartnershipSectionAlt({ onNavigate }) {
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
      className="relative my-5 w-full overflow-hidden bg-[#EDEEF1]"
    >
      {/* =========================================================================
          DESKTOP PRESENTATION (lg+)
          Full wide banner using the high-resolution upscaled background image.
          ========================================================================= */}
      <div 
        className="hidden lg:flex relative w-full min-h-[460px] xl:min-h-[500px] 2xl:min-h-[540px] bg-no-repeat bg-cover bg-right xl:bg-center items-center"
        style={{
          backgroundImage: `url('/images/burnley-partnership-alt-clean.jpg')`,
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 py-12 lg:py-16 w-full">
          <div className="max-w-xl xl:max-w-2xl">
            
            {/* Logos Lockup: HtoEAU ✕ Burnley FC */}
            <div className="flex items-center gap-5 sm:gap-6 mb-6">
              {/* HtoEAU Wordmark & Tagline */}
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-2xl xl:text-[27px] font-bold text-[#141414] tracking-tight font-sans">
                    HtoEAU
                  </span>
                  <span className="text-[10px] text-[#141414] font-medium ml-0.5">®</span>
                </div>
                <span className="text-[8.5px] font-semibold tracking-[0.28em] text-[#555555] uppercase mt-0.5">
                  MORE THAN WATER
                </span>
              </div>

              {/* Thin Cross Separator */}
              <span className="text-[#888888] text-base font-light select-none">✕</span>

              {/* Burnley FC Crest + Text */}
              <div className="flex items-center gap-2.5">
                <img 
                  src="/images/burnley-crest.png" 
                  alt="Burnley Football Club Crest"
                  className="h-9 xl:h-10 w-auto object-contain drop-shadow-xs"
                />
                <div className="flex flex-col text-left leading-[1.05]">
                  <span className="text-[11.5px] xl:text-[12.5px] font-black tracking-wider uppercase text-[#6C1D45]">
                    BURNLEY
                  </span>
                  <span className="text-[9.5px] xl:text-[10.5px] font-bold tracking-wider uppercase text-[#6C1D45] mt-0.5">
                    FOOTBALL CLUB
                  </span>
                </div>
              </div>
            </div>

            {/* Eyebrow: OFFICIAL PARTNERSHIP */}
            <p className="text-[11px] xl:text-[12px] font-semibold tracking-[0.25em] uppercase text-[#6B7280] mb-3.5">
              OFFICIAL PARTNERSHIP
            </p>

            {/* Headline matching reference */}
            <h2 className="text-3xl lg:text-[38px] xl:text-[44px] font-extrabold text-[#111827] tracking-tight leading-[1.12] mb-4 uppercase">
              <span className="block">A SHARED COMMITMENT</span>
              <span className="block">TO A BRIGHTER TOMORROW</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm xl:text-[15px] text-[#4B5563] leading-relaxed max-w-lg mb-7 font-normal">
              We are proud to announce our official partnership with Burnley Football Club. Together, we're championing performance, wellbeing and a more sustainable future.
            </p>

            {/* Call-to-Action Button */}
            <div>
              <button
                type="button"
                onClick={handleExplore}
                className="inline-flex items-center justify-center gap-2.5 px-6 xl:px-7 py-3 xl:py-3.5 bg-black hover:bg-[#262626] active:scale-[0.98] text-white text-[11px] xl:text-xs font-semibold tracking-[0.16em] uppercase rounded-none transition-all duration-200 shadow-sm hover:shadow-md group"
              >
                <span>DISCOVER THE PARTNERSHIP</span>
                <span className="text-sm transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET PRESENTATION (lg:hidden)
          Responsive stacked layout: content on top, player photography below.
          ========================================================================= */}
      <div className="lg:hidden relative w-full bg-[#EDEEF1] pt-8 sm:pt-10 overflow-hidden">
        <div className="max-w-lg mx-auto px-5 sm:px-6">
          
          {/* Logos Lockup */}
          <div className="flex items-center gap-4 sm:gap-5 mb-5 sm:mb-6">
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="text-xl sm:text-2xl font-bold text-[#141414] tracking-tight font-sans">
                  HtoEAU
                </span>
                <span className="text-[9px] text-[#141414] font-medium ml-0.5">®</span>
              </div>
              <span className="text-[7.5px] sm:text-[8px] font-semibold tracking-[0.25em] text-[#555555] uppercase mt-0.5">
                MORE THAN WATER
              </span>
            </div>

            <span className="text-[#888888] text-sm font-light select-none">✕</span>

            <div className="flex items-center gap-2">
              <img 
                src="/images/burnley-crest.png" 
                alt="Burnley Football Club Crest"
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <div className="flex flex-col text-left leading-[1.05]">
                <span className="text-[11px] sm:text-[12px] font-black tracking-wider uppercase text-[#6C1D45]">
                  BURNLEY
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-[#6C1D45] mt-0.5">
                  FOOTBALL CLUB
                </span>
              </div>
            </div>
          </div>

          {/* Eyebrow */}
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#6B7280] mb-2.5">
            OFFICIAL PARTNERSHIP
          </p>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight leading-[1.12] mb-3.5 uppercase">
            <span className="block">A SHARED COMMITMENT</span>
            <span className="block">TO A BRIGHTER TOMORROW</span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6 font-normal">
            We are proud to announce our official partnership with Burnley Football Club. Together, we're championing performance, wellbeing and a more sustainable future.
          </p>

          {/* Call-to-Action Button */}
          <div className="mb-6 sm:mb-8">
            <button
              type="button"
              onClick={handleExplore}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-black hover:bg-[#262626] active:scale-[0.98] text-white text-xs font-semibold tracking-[0.16em] uppercase rounded-none transition-all shadow-sm group"
            >
              <span>DISCOVER THE PARTNERSHIP</span>
              <span className="text-sm transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* Player Photography */}
        <div className="relative w-full flex justify-center mt-2">
          <img
            src="/images/burnley-partnership-alt-players.jpg"
            alt="Burnley Football Club and HtoEAU Partnership"
            className="w-full max-w-xl sm:max-w-2xl object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
