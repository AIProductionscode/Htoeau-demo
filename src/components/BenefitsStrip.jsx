import React from 'react';
import { Sparkles, ShieldCheck, Droplet, Leaf, RefreshCw } from 'lucide-react';

export default function BenefitsStrip() {
  const items = [
    { icon: <Droplet className="w-4 h-4 text-brand-cyan" />, text: "Icelandic Glacial Water" },
    { icon: <Sparkles className="w-4 h-4 text-brand-cyan" />, text: "5 mg/L Dissolved Molecular H₂" },
    { icon: <Leaf className="w-4 h-4 text-brand-cyan" />, text: "100% Recyclable Aluminum" },
    { icon: <ShieldCheck className="w-4 h-4 text-brand-cyan" />, text: "Evaluated in Human Trials" },
    { icon: <RefreshCw className="w-4 h-4 text-brand-cyan" />, text: "Carbon-Neutral Shipping" },
  ];

  return (
    <div className="bg-brand-teal text-white py-4 border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6 text-xs sm:text-[13px] font-medium tracking-wide">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-brand-ice-blue">
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
