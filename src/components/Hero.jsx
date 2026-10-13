import React from 'react';
import { Check, Droplets, Sparkles, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Hero() {
  const { hero } = siteData;

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* =========================================================================
          MOBILE & TABLET LAYOUT (< lg)
          Faithfully matches the mobile reference screenshot layout
          ========================================================================= */}
      <div className="lg:hidden relative w-full bg-white overflow-hidden pt-8 sm:pt-12">
        <div className="max-w-md mx-auto px-5 sm:px-6">
          {/* Mobile Multiline Headline */}
          <h1 className="text-[28px] sm:text-[34px] font-light text-[#0A3641] tracking-tight leading-[1.18] mb-4 sm:mb-5">
            <span className="block">Hydration, Engineered</span>
            <span className="block">Beyond Simple Water</span>
            <span className="block">Hydrogen Water. Tested.</span>
            <span className="block">Trusted.</span>
          </h1>

          {/* Mobile Supporting Copy */}
          <p className="text-[13px] sm:text-sm font-semibold text-[#0A3641] leading-relaxed mb-6">
            Exceptionally pure Icelandic glacial water, precision-infused with dissolved molecular hydrogen. Clean, measured and formulated for those who expect more from hydration.
          </p>

          {/* Mobile CTA Button */}
          <div className="mb-6">
            <a
              href="#shop"
              className="w-full block py-3.5 px-6 rounded-full bg-[#007E94] hover:bg-[#006F83] active:scale-[0.99] text-white text-[15px] sm:text-base font-semibold text-center tracking-normal shadow-sm transition-all"
            >
              Try HtoEAU Now
            </a>
          </div>

          {/* Mobile Vertical Benefit Indicators */}
          <div className="space-y-3.5 mb-2 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#008CA6] flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="text-[13px] sm:text-sm font-medium text-[#0A3641]">
                Hydrogen-infused for advanced hydration
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#008CA6] flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="text-[13px] sm:text-sm font-medium text-[#0A3641]">
                Clean, stimulant-free formulation
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#008CA6] flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="text-[13px] sm:text-sm font-medium text-[#0A3641]">
                Developed for modern lifestyles
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Product Cans on Glacial Ice */}
        <div className="relative w-full -mt-6 sm:-mt-8 flex justify-center">
          <img
            src="/images/hero-mobile-cans.jpg"
            alt="HtoEAU Sparkling and Still Hydrogen Water"
            className="w-full max-w-[430px] sm:max-w-[480px] object-cover object-top"
          />
        </div>
      </div>

      {/* =========================================================================
          DESKTOP LAYOUT (lg+)
          Full desktop presentation with 1920x800 background
          ========================================================================= */}
      <div 
        className="hidden lg:flex relative w-full min-h-[680px] xl:min-h-[740px] bg-no-repeat bg-cover bg-center items-center"
        style={{
          backgroundImage: `url('/images/hero-bg.png')`,
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-xl lg:max-w-2xl">
            
            {/* Desktop Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold text-brand-navy tracking-tight leading-[1.12] mb-5 sm:mb-6">
              <span className="block">Hydration,</span>
              <span className="block">Engineered Beyond</span>
              <span className="block">Simple Water.</span>
              <span className="block text-brand-teal mt-1">Hydrogen Water.</span>
              <span className="block text-brand-navy">Tested. Trusted.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base lg:text-[17px] text-brand-muted leading-relaxed max-w-lg mb-8 font-normal">
              {hero.subheadline}
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#shop"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-teal text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-brand-teal-dark active:scale-[0.98] transition-all shadow-md hover:shadow-lg group"
              >
                <span>{hero.cta}</span>
              </a>
            </div>

            {/* Desktop Benefit Indicators */}
            <div className="pt-4 border-t border-brand-teal/15 grid grid-cols-3 gap-4 max-w-lg">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-brand-ice-blue flex items-center justify-center flex-shrink-0 text-brand-teal">
                  <Droplets className="w-3.5 h-3.5 text-brand-cyan" />
                </div>
                <span className="text-[12px] font-semibold text-brand-navy/90 tracking-tight">
                  Hydrogen-infused for advanced hydration
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-brand-ice-blue flex items-center justify-center flex-shrink-0 text-brand-teal">
                  <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                </div>
                <span className="text-[12px] font-semibold text-brand-navy/90 tracking-tight">
                  Clean, stimulant-free formulation
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-brand-ice-blue flex items-center justify-center flex-shrink-0 text-brand-teal">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
                </div>
                <span className="text-[12px] font-semibold text-brand-navy/90 tracking-tight">
                  Developed for modern lifestyles
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
