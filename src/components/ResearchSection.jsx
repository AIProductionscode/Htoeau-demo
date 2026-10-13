import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ResearchSection() {
  const { researchItems } = siteData;

  const leftItems = researchItems.filter((i) => i.position.includes('left'));
  const rightItems = researchItems.filter((i) => i.position.includes('right'));
  const bottomItem = researchItems.find((i) => i.position === 'center-bottom');

  return (
    <section className="bg-brand-off-white py-18 sm:py-24 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-brand-teal mb-2">
            SCIENTIFIC VALIDATION
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
            Evaluated in Controlled Human Research
          </h2>
          <p className="text-sm sm:text-base text-brand-muted mt-3 max-w-xl mx-auto">
            Grounded in scientific rigor. Investigated under clinical methodologies to verify real-world physiological and cellular absorption.
          </p>
        </div>

        {/* Central Product Layout with 2 items left, 2 items right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto mb-12">
          
          {/* Left 2 Blocks */}
          <div className="lg:col-span-4 space-y-8 sm:space-y-10 order-2 lg:order-1">
            {leftItems.map((item) => (
              <div key={item.id} className="flex items-start gap-4 text-left lg:text-right flex-row lg:flex-row-reverse group">
                <div className="w-8 h-8 rounded-full bg-brand-ice-blue flex items-center justify-center flex-shrink-0 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-navy tracking-tight mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Product Image */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-48 sm:w-56 h-72 sm:h-80 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-brand-cyan/15 rounded-full blur-2xl -z-10 scale-90" />
              <img
                src="/images/product-still.png"
                alt="HtoEAU Still Hydrogen Can"
                className="max-h-full max-w-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right 2 Blocks */}
          <div className="lg:col-span-4 space-y-8 sm:space-y-10 order-3">
            {rightItems.map((item) => (
              <div key={item.id} className="flex items-start gap-4 text-left group">
                <div className="w-8 h-8 rounded-full bg-brand-ice-blue flex items-center justify-center flex-shrink-0 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-navy tracking-tight mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 5th Compact Item Beneath Central Product */}
        {bottomItem && (
          <div className="max-w-md mx-auto text-center flex items-center justify-center gap-3 p-3.5 rounded-full bg-white border border-gray-200/80 shadow-sm mb-12">
            <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0" />
            <span className="text-xs font-semibold text-brand-navy">
              {bottomItem.title}: <span className="font-normal text-brand-muted">{bottomItem.description}</span>
            </span>
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#science"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-teal text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-brand-teal-dark transition-all shadow-md hover:shadow-lg group"
          >
            <span>Find Out More About the Science</span>
            <ArrowRight className="w-4 h-4 text-brand-cyan group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
