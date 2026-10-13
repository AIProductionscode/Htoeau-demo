import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function CommunitySection() {
  const { community } = siteData;
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-18 sm:py-24 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-brand-teal mb-2">
              REAL-WORLD IMPACT
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
              The Community of High Performers
            </h2>
            <p className="text-sm sm:text-base text-brand-muted mt-2 max-w-xl">
              From elite strength athletes and competitive endurance runners to corporate leaders who demand sustained cognitive clarity.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 mt-6 md:mt-0">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-brand-navy hover:text-brand-teal flex items-center justify-center transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-brand-navy hover:text-brand-teal flex items-center justify-center transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid / Horizontal Scroll on smaller devices */}
        <div
          ref={scrollContainerRef}
          className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory"
        >
          {community.map((item) => (
            <div
              key={item.id}
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 bg-brand-off-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:-translate-y-1 snap-start group"
            >
              <div>
                {/* Photo container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.role}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-brand-teal text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-white/50">
                    {item.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-base font-bold text-brand-navy tracking-tight mb-2.5 leading-snug">
                    {item.headline}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-brand-muted leading-relaxed font-normal">
                    “{item.quote}”
                  </p>
                </div>
              </div>

              {/* Attribution Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-gray-200/50 flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-teal uppercase tracking-wide">
                  {item.role}
                </span>
                <span className="text-[11px] text-brand-cyan font-bold">• Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
