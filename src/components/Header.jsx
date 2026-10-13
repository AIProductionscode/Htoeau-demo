import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white transition-all duration-300">
      {/* Top slim accent bar */}
      <div className="bg-brand-teal text-white py-1.5 px-4 text-center text-[11px] font-medium tracking-wider uppercase flex items-center justify-center gap-2">
        <span>Free carbon-neutral shipping on all subscription orders</span>
        <span className="hidden sm:inline text-brand-cyan">•</span>
        <span className="hidden sm:inline text-brand-cyan font-semibold">100% Recyclable Aluminum</span>
      </div>

      {/* Main navigation row */}
      <div className={`border-b border-gray-100 transition-all duration-200 ${scrolled ? 'py-2 shadow-sm' : 'py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="flex items-center group">
                <img
                  src="/images/htoeau-logo.png"
                  alt="HtoEAU Premium Hydrogen Water"
                  className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
                />
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
              {siteData.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[13px] font-medium text-brand-navy/80 hover:text-brand-teal transition-colors tracking-wide relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand-cyan after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Right utility icons */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              <button
                type="button"
                aria-label="Search"
                className="text-brand-navy/70 hover:text-brand-teal p-1.5 rounded-full hover:bg-gray-50 transition-colors"
                onClick={() => {
                  const el = document.getElementById('shop');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Search className="w-[18px] h-[18px]" strokeWidth={1.8} />
              </button>

              <button
                type="button"
                aria-label="User Account"
                className="hidden sm:inline-flex text-brand-navy/70 hover:text-brand-teal p-1.5 rounded-full hover:bg-gray-50 transition-colors"
              >
                <User className="w-[18px] h-[18px]" strokeWidth={1.8} />
              </button>

              <a
                href="#shop"
                className="relative text-brand-navy/80 hover:text-brand-teal p-1.5 rounded-full hover:bg-gray-50 transition-colors flex items-center"
                aria-label="Cart"
              >
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.8} />
                <span className="absolute -top-0.5 -right-0.5 bg-brand-cyan text-brand-navy text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </a>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-brand-navy p-1.5 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-brand-navy" />
                ) : (
                  <Menu className="w-5 h-5 text-brand-navy" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-xl transition-all">
          <div className="px-5 pt-3 pb-6 space-y-2">
            {siteData.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-sm font-medium text-brand-navy hover:text-brand-teal border-b border-gray-50"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <a
                href="#shop"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-brand-teal text-white py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-brand-teal-dark transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Shop HtoEAU Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
