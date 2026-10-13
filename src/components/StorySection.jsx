import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function StorySection() {
  const { story } = siteData;

  return (
    <section id="about" className="w-full bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Column: Photograph */}
        <div className="relative min-h-[380px] sm:min-h-[460px] lg:min-h-[580px] w-full overflow-hidden">
          <img
            src="/images/story-water-glass.jpg"
            alt="Person holding a glass of pure water"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
          {/* Subtle soft edge gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:hidden" />
        </div>

        {/* Right Column: Blue/Teal Content Area */}
        <div className="bg-brand-teal text-white p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center">
          <div className="max-w-xl">
            
            <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-brand-cyan mb-3">
              OUR PHILOSOPHY
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {story.title}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-brand-ice-blue/90 leading-relaxed font-light mb-8">
              <p>
                {story.paragraph1}
              </p>
              <p>
                {story.paragraph2}
              </p>
            </div>

            {/* Principles row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-4 border-t border-white/15">
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-white font-medium">
                <span className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <Check className="w-3 h-3 text-brand-cyan" />
                </span>
                <span>Icelandic Volcanic Filtration</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-white font-medium">
                <span className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <Check className="w-3 h-3 text-brand-cyan" />
                </span>
                <span>Zero Artificial Additives</span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-brand-teal hover:bg-brand-ice-blue text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-md group"
              >
                <span>{story.cta}</span>
                <ArrowRight className="w-4 h-4 text-brand-teal group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
