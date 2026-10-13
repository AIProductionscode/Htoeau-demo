import React from 'react';
import { Shield, Sparkles, Brain, Zap, Activity } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ScienceSection() {
  const { sciencePanels } = siteData;

  const icons = [
    <Activity key="1" className="w-5 h-5 text-brand-cyan" />,
    <Brain key="2" className="w-5 h-5 text-brand-cyan" />,
    <Shield key="3" className="w-5 h-5 text-brand-cyan" />,
    <Zap key="4" className="w-5 h-5 text-brand-cyan" />,
  ];

  return (
    <section id="science" className="bg-brand-navy text-white py-18 sm:py-24 relative overflow-hidden">
      {/* Subtle scientific ambient grid/glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#00C5D7_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-brand-cyan mb-3">
            MOLECULAR MECHANICS & CELLULAR EQUILIBRIUM
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight uppercase">
            PRECISION HYDRATION AT THE CELLULAR LEVEL
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed">
            H₂ is the universe's smallest molecule, permitting rapid physical diffusion through membranes where traditional hydration supplements cannot reach.
          </p>
        </div>

        {/* 4 Dark Translucent Panels in a Horizontal Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-12">
          {sciencePanels.map((panel, idx) => (
            <div
              key={panel.id}
              className="bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-cyan/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:border-brand-cyan/50 transition-colors">
                    {icons[idx]}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-brand-cyan font-semibold">
                    {panel.metric}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2.5">
                  {panel.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-gray-300/80 leading-relaxed font-normal">
                  {panel.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-cyan/90">
                  {panel.tag}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan group-hover:scale-125 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Understated Supporting Line Beneath */}
        <div className="text-center pt-6 border-t border-white/[0.08] max-w-2xl mx-auto">
          <p className="text-[11px] sm:text-xs text-gray-400 font-mono tracking-wide">
            Tested for certified dissolved molecular concentration (5 mg/L) • Stable packaging integrity
          </p>
        </div>

      </div>
    </section>
  );
}
