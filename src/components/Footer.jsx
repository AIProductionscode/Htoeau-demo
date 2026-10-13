import React, { useState } from 'react';
import { ArrowRight, Mail, Shield, Check } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-brand-navy-dark text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Mission Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white p-2.5 rounded-xl inline-block">
              <img
                src="/images/htoeau-logo.png"
                alt="HtoEAU Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-300/80 leading-relaxed max-w-sm">
              Hydration, engineered beyond simple water. Sourced from pristine Icelandic glaciers and infused with molecular hydrogen for cellular equilibrium.
            </p>
            <div className="pt-2 text-[11px] text-gray-400 font-mono">
              Tested. Certified. Trusted.
            </div>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold tracking-widest uppercase text-brand-cyan">
              Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-[13px] text-gray-300">
              {siteData.navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-brand-cyan transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Science & Products (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold tracking-widest uppercase text-brand-cyan">
              The Science
            </p>
            <ul className="space-y-2 text-xs sm:text-[13px] text-gray-300">
              <li>
                <a href="#science" className="hover:text-brand-cyan transition-colors">
                  Molecular Kinetics
                </a>
              </li>
              <li>
                <a href="#science" className="hover:text-brand-cyan transition-colors">
                  Clinical Protocols
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-cyan transition-colors">
                  Icelandic Source
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-brand-cyan transition-colors">
                  Packaging Integrity
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Stay Informed (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold tracking-widest uppercase text-brand-cyan">
              Stay Informed
            </p>
            <p className="text-xs text-gray-300/80 leading-relaxed">
              Subscribe for scientific releases, clinical research updates, and new batch availability.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white/5 border border-white/15 rounded-full py-2.5 pl-4 pr-10 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-brand-cyan transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-brand-cyan text-brand-navy rounded-full flex items-center justify-center hover:bg-brand-cyan-light transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-[11px] text-brand-cyan pt-1">
                  <Check className="w-3 h-3" />
                  <span>Thank you. You are subscribed to research updates.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Legal & Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <p>© {new Date().getFullYear()} HtoEAU®. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#compliance" className="hover:text-gray-300 transition-colors">Quality Assurance</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
