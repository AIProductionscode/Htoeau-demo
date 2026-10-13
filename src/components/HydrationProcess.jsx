import React, { useState } from 'react';
import { ArrowRight, CheckCircle, ChevronRight, Activity, Zap, Compass } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function HydrationProcess() {
  const [activeStep, setActiveStep] = useState(1);
  const steps = siteData.processSteps;

  const currentStep = steps.find((s) => s.step === activeStep) || steps[0];

  return (
    <section id="benefits" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-brand-teal mb-2">
            THE PROCESS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
            From Molecular Hydrogen to Next-Level Hydration
          </h2>
          <p className="text-sm sm:text-base text-brand-muted mt-3 max-w-2xl mx-auto">
            Discover how pure glacial water and dissolved molecular hydrogen are delivered with laboratory precision for optimal cellular hydration.
          </p>
        </div>

        {/* Asymmetric Process Visualization matching the screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 min-h-[460px]">
          
          {/* Main Active Panel (spanning 8 columns on desktop) */}
          <div className="lg:col-span-8 bg-gradient-to-br from-brand-ice-light via-white to-brand-ice-blue/40 rounded-2xl border border-brand-ice-blue p-7 sm:p-10 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            {/* Background subtle water splash graphic */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top metadata */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center text-sm font-bold shadow-sm">
                    {currentStep.step}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
                    Step {currentStep.number} of 03
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-brand-teal/80 bg-white/80 px-3 py-1 rounded-full border border-gray-200">
                  {currentStep.highlight}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-4">
                {currentStep.title}
              </h3>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed max-w-xl">
                {currentStep.description}
              </p>
            </div>

            {/* Visual preview inside the active panel */}
            <div className="relative z-10 mt-8 pt-6 border-t border-gray-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-brand-navy/80 font-medium">
                <CheckCircle className="w-4 h-4 text-brand-cyan" />
                <span>Optimized thermodynamic dispersion upon ingestion</span>
              </div>

              <div className="flex items-center gap-2">
                {steps.map((s) => (
                  <button
                    key={s.step}
                    onClick={() => setActiveStep(s.step)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeStep === s.step
                        ? 'bg-brand-teal text-white shadow-sm'
                        : 'bg-white text-brand-navy hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    Step 0{s.step}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Narrow Vertical Panels (spanning 4 columns on desktop, 2 columns each) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {steps
              .filter((s) => s.step !== activeStep)
              .map((stepItem) => (
                <div
                  key={stepItem.step}
                  onClick={() => setActiveStep(stepItem.step)}
                  className="bg-brand-off-white hover:bg-brand-ice-light rounded-2xl border border-gray-200/80 p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-8 h-8 rounded-full bg-gray-200 group-hover:bg-brand-teal group-hover:text-white text-brand-navy text-xs font-bold flex items-center justify-center transition-colors">
                        {stepItem.step}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-brand-teal group-hover:translate-x-0.5 transition-all" />
                    </div>

                    <span className="text-[10px] font-bold tracking-widest uppercase text-brand-muted group-hover:text-brand-teal transition-colors">
                      Step {stepItem.number}
                    </span>
                    <h4 className="text-base font-bold text-brand-navy mt-1 tracking-tight">
                      {stepItem.title}
                    </h4>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-200 text-[11px] font-semibold text-brand-teal flex items-center gap-1 group-hover:text-brand-cyan">
                    <span>Expand Step</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
          </div>

        </div>

      </div>
    </section>
  );
}
