import React from 'react';
import { ArrowRight, Droplets, Sparkles, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Hero() {
  const { hero } = siteData;

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background container using the exact supplied hero background */}
      <div 
        className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] bg-no-repeat bg-cover bg-right lg:bg-center flex items-center"
        style={{
          backgroundImage: `url('/images/hero-bg.png')`,
        }}
      >
        {/* Soft gradient wash on mobile/tablet to ensure text legibility while keeping the cans crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent md:via-white/60 lg:via-white/30 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 w-full">
          <div className="max-w-xl lg:max-w-2xl">
            
            {/* Small Eyebrow Badge */}
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-ice-blue/70 border border-brand-cyan/30 text-brand-teal text-[11px] font-semibold tracking-wide uppercase mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              <span>{hero.badge}</span>
            </div> */}

            {/* Deliberate Multiline Headline matching the reference screenshot */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-brand-navy tracking-tight leading-[1.12] mb-5 sm:mb-6">
              <span className="block">Hydration,</span>
              <span className="block">Engineered Beyond</span>
              <span className="block">Simple Water.</span>
              <span className="block text-brand-teal mt-1">Hydrogen Water.</span>
              <span className="block text-brand-navy">Tested. Trusted.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-[17px] text-brand-muted leading-relaxed max-w-lg mb-8 font-normal">
              {hero.subheadline}
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#shop"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-teal text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-brand-teal-dark active:scale-[0.98] transition-all shadow-md hover:shadow-lg group"
              >
                <span>{hero.cta}</span>
                {/* <ArrowRight className="w-4 h-4 text-brand-cyan group-hover:translate-x-1 transition-transform" /> */}
              </a>

              {/* <a
                href="#science"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-brand-navy text-xs sm:text-sm font-medium border border-gray-200/80 hover:border-brand-teal/40 transition-all shadow-sm"
              >
                Explore Science
              </a> */}
            </div>

            {/* Hero Benefit Indicators */}
            <div className="pt-4 border-t border-brand-teal/15 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 max-w-lg">
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
                  Clean, stimulant-free formulation
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
