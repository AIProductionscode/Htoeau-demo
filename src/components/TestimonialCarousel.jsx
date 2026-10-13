import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteData.testimonials;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-brand-off-white py-14 sm:py-18 lg:py-20 border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200/80 shadow-sm hover:shadow text-brand-navy hover:text-brand-teal hover:border-brand-teal/40 flex items-center justify-center transition-all flex-shrink-0 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Testimonial Content */}
          <div className="mx-6 sm:mx-12 lg:mx-16 text-center max-w-3xl flex-1 transition-all duration-300">
            {/* Star Rating */}
            <div className="flex items-center justify-center gap-1 mb-4 text-brand-cyan">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
              ))}
            </div>

            {/* Quotation */}
            <blockquote className="text-base sm:text-lg md:text-xl lg:text-[22px] font-medium text-brand-navy/90 leading-relaxed tracking-tight italic mb-5">
              “{current.quote}”
            </blockquote>

            {/* Attribution */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs sm:text-sm font-semibold text-brand-teal tracking-wide uppercase">
                {current.author}
              </span>
              <span className="text-[12px] text-brand-muted mt-0.5">
                {current.role}
              </span>
            </div>

            {/* Pagination dots */}
            <div className="flex items-center justify-center gap-1.5 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-6 bg-brand-teal'
                      : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200/80 shadow-sm hover:shadow text-brand-navy hover:text-brand-teal hover:border-brand-teal/40 flex items-center justify-center transition-all flex-shrink-0 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>
      </div>
    </section>
  );
}
