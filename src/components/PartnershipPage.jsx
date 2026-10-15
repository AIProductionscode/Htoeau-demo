import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Copy, ShoppingBag, Sparkles } from 'lucide-react';
import Footer from './Footer';

export default function PartnershipPage({ onNavigateHome }) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText('CLARET15');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#38041B] text-white flex flex-col font-sans antialiased selection:bg-[#8EE2F0]/25 selection:text-[#10232F]">
      
      {/* 1. Header Bar */}
      <header className="sticky top-0 z-50 bg-[#141C24] border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Back to Home Link */}
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/80 hover:text-white transition-colors py-1 px-3 rounded-full hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          {/* Right Action */}
          <a
            href="#products"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#8EE2F0] hover:bg-[#A3EAF6] text-[#10232F] text-xs font-bold tracking-wide transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Shop Cans</span>
          </a>

        </div>
      </header>

      <main className="flex-grow">
        
        {/* 2. Hero Section: Official Hydration Partner with Pitch & Cans */}
        <section className="relative w-full overflow-hidden bg-[#182312] border-b border-black/30">
          <div 
            className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] bg-cover bg-center flex items-center"
            style={{
              backgroundImage: `url('/images/burnley-page-hero.png')`,
            }}
          >
            {/* Subtle contrast gradient on left to guarantee text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent sm:max-w-[70%]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
              <div className="max-w-xl">
                {/* Logos Lockup: HtoEAU | Burnley FC (matching Partnership Section) */}
                <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {/* HtoEAU Logo / Wordmark */}
                  <div className="flex items-center">
                    <img
                      src="/images/htoeau-logo.png"
                      alt="HtoEAU"
                      className="h-10 sm:h-12 md:h-14 w-auto brightness-0 invert object-contain"
                    />
                  </div>

                  {/* Vertical Divider */}
                  <div className="h-9 sm:h-11 md:h-12 w-[1.5px] bg-white/30" />

                  {/* Burnley Football Club Lockup */}
                  <div className="flex items-center gap-3">
                    <img 
                      src="/images/burnley-crest.png" 
                      alt="Burnley Football Club Crest"
                      className="h-11 sm:h-13 md:h-14 w-auto object-contain brightness-110 drop-shadow-sm"
                    />
                    <div className="flex flex-col text-left leading-tight">
                      <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-wider uppercase text-white">
                        BURNLEY
                      </span>
                      <span className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold tracking-wider uppercase text-white/90 mt-0.5">
                        FOOTBALL CLUB
                      </span>
                    </div>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15] mb-4">
                  Official Hydration<br />
                  and performance<br />
                  partner of<br />
                  Burnley FC
                </h1>

                <p className="text-sm sm:text-base text-white/90 font-medium mb-3">
                  Naturally alkaline,<br className="hidden sm:inline" />
                  hydrogen water.
                </p>

                <p className="text-base sm:text-lg text-white font-extrabold tracking-wide mb-6">
                  Meet our new cans.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#fan-offer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8EE2F0] hover:bg-[#A3EAF6] text-[#10232F] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>Claim Fan Offer</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Claret and Blue Fan Offer Banner */}
        <section id="fan-offer" className="bg-[#4E0F28] py-8 sm:py-10 border-b border-black/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black italic tracking-wide text-white uppercase mb-1">
              CLAIM YOUR CLARET AND BLUE FAN OFFER
            </h2>

            <p className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white/70 mb-5">
              STOCK UP FOR MATCHDAY
            </p>

            {/* Fan Code Box */}
            <div className="inline-flex items-center justify-between bg-white text-[#10232F] rounded-full p-1.5 sm:p-2 shadow-lg border border-white/20 max-w-md w-full sm:w-auto">
              <div className="px-4 py-1 text-xs sm:text-sm font-extrabold tracking-wider text-[#4E0F28] flex items-center gap-2">
                <span>FAN CODE: CLARET15</span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  title="Copy Code"
                  className="p-1 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <a
                href="#products"
                className="px-5 sm:px-6 py-2 rounded-full bg-[#4E0F28] hover:bg-[#38041B] text-white text-xs sm:text-sm font-bold tracking-wide transition-colors"
              >
                Shop now
              </a>
            </div>

            {copied && (
              <p className="text-xs text-[#8EE2F0] mt-2 font-medium">
                Code copied to clipboard! Enjoy 15% off at checkout.
              </p>
            )}

          </div>
        </section>

        {/* 4. The Partnership Section: Hydration, Engineered for matchday. */}
        <section className="bg-[#F8F9FA] text-[#10232F] py-14 sm:py-20 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading & Stadium Seats Image */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#8B1E4B] mb-2">
                    THE PARTNERSHIP
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10232F] tracking-tight leading-[1.12] mb-6">
                    Hydration,<br />
                    Engineered<br />
                    for matchday.
                  </h2>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 max-w-sm">
                  <img
                    src="/images/burnley-seats.png"
                    alt="HtoEAU Cans placed in Burnley FC Turf Moor blue stadium seats"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Paragraph, Why Hydrogen, and 2x2 Stats Grid */}
              <div className="lg:col-span-7 space-y-6">
                
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  <strong className="font-bold text-[#10232F]">HtoEAU®</strong> is naturally alkaline, hydrogen-infused water from Icelandic glaciers, and the official hydration and performance partner of Burnley FC. Pure water, nothing added.
                </p>

                {/* Why Hydrogen Callout Box */}
                <div className="border-l-2 border-[#8B1E4B] pl-4 py-1 bg-white p-3 rounded-r-xl border-y border-r border-gray-100">
                  <p className="text-[11px] font-bold tracking-wider uppercase text-[#8B1E4B] mb-1">
                    WHY HYDROGEN?
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Research suggests drinking hydrogen water may benefit performance and mental well-being.
                  </p>
                </div>

                {/* 2x2 Stats Grid */}
                <div className="border-t border-b border-gray-300 py-6 my-6">
                  <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                    
                    {/* Stat 1 */}
                    <div className="border-b border-gray-200 pb-4">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#10232F]">
                        5 mg/L
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Dissolved hydrogen, minimum
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="border-b border-gray-200 pb-4">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#10232F]">
                        pH 8.3
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Naturally alkaline
                      </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="pt-2">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#10232F]">
                        Zero
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Sugar, stimulants, additives
                      </div>
                    </div>

                    {/* Stat 4 */}
                    <div className="pt-2">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#10232F]">
                        Iceland
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Glacial source
                      </div>
                    </div>

                  </div>
                </div>

                {/* Button: Find out more about HtoEAU */}
                <div>
                  <button
                    type="button"
                    onClick={onNavigateHome}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4E0F28] hover:bg-[#38041B] text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors shadow-sm"
                  >
                    <span>Find out more about HtoEAU</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 5. Performance partner, on and off the pitch. */}
        <section className="bg-[#4E0F28] py-14 sm:py-20 border-b border-black/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-8">
              <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-white/70 mb-2">
                HtoEAU AT BURNLEY
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Performance partner, on and off the pitch.
              </h2>
            </div>

            {/* 3 Action Match Photos */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 overflow-hidden rounded-2xl">
              
              {/* Photo 1: Women's squad player */}
              <div className="sm:col-span-3 rounded-xl overflow-hidden bg-black/20 h-56 sm:h-72">
                <img
                  src="/images/burnley-match-1.png"
                  alt="Burnley FC Women's player in action"
                  className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-300"
                />
              </div>

              {/* Photo 2: Team celebration huddle */}
              <div className="sm:col-span-6 rounded-xl overflow-hidden bg-black/20 h-56 sm:h-72">
                <img
                  src="/images/burnley-match-2.png"
                  alt="Burnley FC squad celebrating goal in claret shirts"
                  className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-300"
                />
              </div>

              {/* Photo 3: Player celebrating with heart gesture */}
              <div className="sm:col-span-3 rounded-xl overflow-hidden bg-black/20 h-56 sm:h-72">
                <img
                  src="/images/burnley-match-3.png"
                  alt="Burnley FC player smiling with fans"
                  className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-300"
                />
              </div>

            </div>

          </div>
        </section>

        {/* 6. The HtoEAU Range: Our new cans. */}
        <section id="products" className="bg-[#38041B] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-10 sm:mb-12">
              <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-white/70 mb-2">
                THE HtoEAU RANGE
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Our new cans.
              </h2>
            </div>

            {/* 3 Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Card 1: Still */}
              <div className="bg-[#F8F9FA] text-[#10232F] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div>
                  {/* Can image */}
                  <div className="h-60 flex items-center justify-center p-4 bg-gradient-to-b from-[#eef3f5] to-white rounded-2xl mb-6">
                    <img
                      src="/images/product-still.png"
                      alt="HtoEAU Still Hydrogen Can"
                      className="max-h-full max-w-full object-contain drop-shadow-md"
                    />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#10232F] mb-2">
                    Still
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mb-4">
                    Naturally alkaline glacial water with 5 mg/L dissolved hydrogen.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-xs font-bold text-[#4E0F28] mb-3">
                    From £1.99 per can
                  </div>
                  <button
                    type="button"
                    onClick={() => alert('Still Hydrogen Water added to cart!')}
                    className="w-full py-2.5 px-4 rounded-full bg-[#4E0F28] hover:bg-[#38041B] text-white text-xs font-bold tracking-wide transition-colors"
                  >
                    View product
                  </button>
                </div>
              </div>

              {/* Card 2: Sparkling */}
              <div className="bg-[#F8F9FA] text-[#10232F] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div>
                  {/* Can image */}
                  <div className="h-60 flex items-center justify-center p-4 bg-gradient-to-b from-[#eef3f5] to-white rounded-2xl mb-6">
                    <img
                      src="/images/product-sparkling.png"
                      alt="HtoEAU Sparkling Hydrogen Can"
                      className="max-h-full max-w-full object-contain drop-shadow-md"
                    />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#10232F] mb-2">
                    Sparkling
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mb-4">
                    Naturally alkaline sparkling glacial water with 5 mg/L dissolved hydrogen.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-xs font-bold text-[#4E0F28] mb-3">
                    From £1.99 per can
                  </div>
                  <button
                    type="button"
                    onClick={() => alert('Sparkling Hydrogen Water added to cart!')}
                    className="w-full py-2.5 px-4 rounded-full bg-[#4E0F28] hover:bg-[#38041B] text-white text-xs font-bold tracking-wide transition-colors"
                  >
                    View product
                  </button>
                </div>
              </div>

              {/* Card 3: Duo Pack */}
              <div className="bg-[#F8F9FA] text-[#10232F] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div>
                  {/* Can image */}
                  <div className="h-60 flex items-center justify-center p-4 bg-gradient-to-b from-[#eef3f5] to-white rounded-2xl mb-6">
                    <img
                      src="/images/product-collection.png"
                      alt="HtoEAU Duo Pack (Still & Sparkling)"
                      className="max-h-full max-w-full object-contain drop-shadow-md"
                    />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#10232F] mb-2">
                    Duo Pack
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mb-4">
                    Still and sparkling together in one pack.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-xs font-bold text-[#4E0F28] mb-3">
                    From £1.99 per can
                  </div>
                  <button
                    type="button"
                    onClick={() => alert('Duo Pack added to cart!')}
                    className="w-full py-2.5 px-4 rounded-full bg-[#4E0F28] hover:bg-[#38041B] text-white text-xs font-bold tracking-wide transition-colors"
                  >
                    View product
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* 7. Footer */}
      <Footer />

    </div>
  );
}
