import React, { useState } from 'react';
import { ArrowRight, X, Shield, Sparkles, Trophy, CheckCircle2 } from 'lucide-react';

export default function BurnleyPartnerSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="partnership" className="w-full bg-[#f8fafb] py-12 sm:py-16 lg:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card Container with subtle premium claret ambient glow */}
        <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/80 bg-[#380620]">
          
          {/* Subtle claret ambient illumination */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#501033] via-[#701646] to-[#0096A8]/20 rounded-2xl sm:rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none" />

          {/* Main Visual Banner matching the authoritative uploaded reference */}
          <div className="relative w-full aspect-[1024/632] overflow-hidden select-none">
            <img
              src="/images/burnley-partner-full.jpg"
              alt="HtoEAU Official Partner of Burnley Football Club - Matchday hydration. Engineered."
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />

            {/* Interactive Hotspot / Button exactly overlaid over 'Explore the Partnership →' */}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              aria-label="Explore the Partnership with Burnley Football Club"
              className="absolute cursor-pointer rounded-full transition-all duration-200 hover:ring-2 hover:ring-white/80 hover:brightness-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              style={{
                left: '6.05%',
                top: '78.0%',
                width: '26.07%',
                height: '7.12%',
              }}
            >
              {/* Subtle hover pulse indicator */}
              <span className="sr-only">Explore the Partnership</span>
            </button>
          </div>

          {/* Semantic & Screen-Reader content for accessibility & SEO */}
          <div className="sr-only">
            <p>OFFICIAL PARTNER: HtoEAU and Burnley Football Club</p>
            <h2>Matchday hydration. Engineered.</h2>
            <p>
              HtoEAU is proud to partner with Burnley FC, uniting performance, community and a shared commitment to a healthier tomorrow.
            </p>
            <button onClick={() => setModalOpen(true)}>Explore the Partnership</button>
          </div>
        </div>

      </div>

      {/* Partnership Detail Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-gray-100 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Top decorative claret accent */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#4A0D2D] via-[#701646] to-brand-cyan" />

            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#701646] mb-2 mt-1">
              <Trophy className="w-4 h-4" />
              <span>Official Matchday Partnership</span>
            </div>

            <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-brand-navy tracking-tight mb-2">
              HtoEAU × Burnley Football Club
            </h3>

            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-5">
              Turf Moor demands relentless energy and unwavering stamina. HtoEAU delivers precision molecular hydrogen water directly to Burnley FC’s first team and academy setup—empowering faster recovery, cellular balance, and peak physical output.
            </p>

            <div className="space-y-2.5 mb-6 pt-3 border-t border-gray-100">
              <div className="flex items-start gap-2.5 text-xs text-brand-navy font-medium">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                <span>Exclusive matchday and training ground hydration supplier</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-brand-navy font-medium">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                <span>Custom limited-edition Burnley FC 330ml commemorative cans</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-brand-navy font-medium">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                <span>Active youth sports hydration and wellness community programs</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-brand-navy hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
              <a
                href="#shop"
                onClick={() => setModalOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#501033] hover:bg-[#380620] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm inline-flex items-center gap-1.5"
              >
                <span>Shop HtoEAU Range</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
