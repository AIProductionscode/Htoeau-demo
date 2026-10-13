import React from 'react';
import { ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ExpertSection() {
  const { expert } = siteData;

  return (
    <section className="w-full bg-gradient-to-r from-brand-teal-deep to-brand-teal text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        
        {/* Left Column: Text Content (7 cols on desktop) */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 xl:p-20 order-2 lg:order-1">
          <div className="max-w-xl">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-brand-cyan text-[11px] font-semibold tracking-wider uppercase mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Scientific Advisory & Clinical Governance</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
              {expert.name}
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-brand-cyan tracking-wide uppercase mb-6">
              {expert.title}
            </p>

            <p className="text-sm sm:text-base text-brand-ice-blue/90 leading-relaxed font-light mb-8">
              {expert.bio}
            </p>

            {/* Scientific Highlights */}
            <div className="space-y-3 mb-8 pt-4 border-t border-white/15">
              {expert.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-[13px] text-brand-ice-blue font-normal leading-normal">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a
                href="#science"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-brand-cyan hover:bg-brand-cyan-light text-brand-navy text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md group"
              >
                <span>{expert.cta}</span>
                <ArrowRight className="w-4 h-4 text-brand-navy group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>

        {/* Right Column: Professional Portrait (5 cols on desktop) */}
        <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-full min-h-[480px] w-full overflow-hidden order-1 lg:order-2">
          <img
            src="/images/expert-portrait.jpg"
            alt={expert.name}
            className="absolute inset-0 w-full h-full object-cover object-top"
            loading="lazy"
          />
          {/* Subtle gradient vignette to blend into teal on desktop */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-teal-deep to-transparent pointer-events-none" />
          <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-brand-teal-deep via-transparent to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
