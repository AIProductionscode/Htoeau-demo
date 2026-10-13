import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Sparkles, RefreshCw, Layers } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ProductSection() {
  const { products, productBenefitsRow } = siteData;

  return (
    <section id="shop" className="bg-brand-teal text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle organic background glow */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-brand-cyan/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-brand-turquoise/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-brand-cyan mb-2">
            THE HtoEAU COLLECTION
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Driven by Science. Engineered for Modern Performance.
          </h2>
          <p className="text-sm sm:text-base text-brand-ice-blue/80 mt-3 max-w-xl mx-auto">
            Choose your daily formulation or experience the synergy of our full molecular hydration suite.
          </p>
        </div>

        {/* 3 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white text-brand-navy rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-white/20 group"
            >
              {/* Top Meta & Badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-brand-ice-blue text-brand-teal">
                    {product.badge}
                  </span>
                  <span className="text-[11px] font-medium text-brand-muted">
                    {product.subtitle}
                  </span>
                </div>

                {/* Product Image Area */}
                <div className="relative h-60 sm:h-64 flex items-center justify-center p-4 rounded-xl bg-gradient-to-b from-[#f8fafc] to-[#eef3f5] overflow-hidden mb-6 group-hover:scale-102 transition-transform duration-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain drop-shadow-md"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-brand-navy tracking-tight mb-2">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-[13px] text-brand-muted leading-relaxed mb-4">
                  {product.description}
                </p>
              </div>

              {/* Card Footer with specs and CTA button */}
              <div className="pt-4 border-t border-gray-100 mt-2">
                <div className="text-[11px] font-semibold text-brand-teal/80 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>{product.specs}</span>
                </div>

                <button
                  type="button"
                  className="w-full py-3 px-5 rounded-full bg-brand-teal hover:bg-brand-teal-dark text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 group-hover:bg-brand-cyan group-hover:text-brand-navy shadow-sm"
                  onClick={() => alert(`Selected ${product.name}. Check out or add to bag coming soon!`)}
                >
                  <span>{product.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Benefits Row */}
        <div className="pt-10 border-t border-white/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {productBenefitsRow.map((benefit, idx) => (
              <div key={idx} className="flex items-center justify-center gap-2 text-brand-ice-blue">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium tracking-wide">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
