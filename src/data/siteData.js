export const siteData = {
  navigation: [
    { name: 'Shop', href: 'https://htoeau.com/htoeau-products/' },
    { name: 'Benefits', href: 'https://htoeau.com/benefits/' },
    { name: 'Science', href: 'https://htoeau.com/science/' },
    { name: 'About Us', href: 'https://htoeau.com/about/' },
    { name: 'FAQ', href: 'https://htoeau.com/faq/' },
    { name: 'Contact Us', href: 'https://htoeau.com/contact/' },
  ],
  hero: {
    badge: 'Icelandic Glacial Water & Molecular Hydrogen',
    headlinePart1: 'Hydration, Engineered',
    headlinePart2: 'Beyond Simple Water.',
    headlinePart3: 'Hydrogen Water. Tested. Trusted.',
    subheadline: 'Thoughtfully sourced Icelandic glacial water, precisely infused with molecular hydrogen. Meet a refreshing approach to everyday hydration.',
    cta: 'Try HtoEAU Now',
    benefits: [
      { text: 'Pure Glacial Sourcing' },
      { text: '5 mg/L Dissolved H₂' },
      { text: 'Clinically Evaluated' },
    ]
  },
  testimonials: [
    {
      id: 1,
      quote: "As a nutritionist, I'm selective about what I recommend. HtoEAU has solid science and my clients love the results. Great session.",
      author: "Verified customer",
      role: "Clinical Nutritionist & Wellness Consultant",
      rating: 5,
    },
    {
      id: 2,
      quote: "The clarity and cellular hydration are palpable. I feel more recovered between intense training cycles without any gut discomfort.",
      author: "Verified customer",
      role: "High-Performance Triathlete",
      rating: 5,
    },
    {
      id: 3,
      quote: "HtoEAU delivers an exceptionally clean taste and real physiological hydration. It has become an essential part of my daily focus protocol.",
      author: "Verified customer",
      role: "Preventative Health Practitioner",
      rating: 5,
    }
  ],
  products: [
    {
      id: 'still',
      name: 'HtoEAU Still Hydrogen Water',
      subtitle: 'Pure Glacial Infusion',
      description: 'Ultra-pure Icelandic water naturally infused with therapeutic concentrations of dissolved molecular hydrogen for smooth, everyday cellular replenishment.',
      badge: 'Best Seller',
      image: '/images/product-still.png',
      ctaText: 'Shop Still',
      specs: '5 mg/L Molecular H₂ • 250ml Slim Can',
    },
    {
      id: 'sparkling',
      name: 'HtoEAU Sparkling Hydrogen Water',
      subtitle: 'Crisp Rejuvenation',
      description: 'Invigorating micro-bubbles combined with molecular hydrogen for a crisp, elevated sensory experience that supports active physical and cognitive recovery.',
      badge: 'Refreshing',
      image: '/images/product-sparkling.png',
      ctaText: 'Shop Sparkling',
      specs: '5 mg/L Molecular H₂ • Carbonated',
    },
    {
      id: 'collection',
      name: 'HtoEAU Product Collection',
      subtitle: 'Complete Regimen',
      description: 'The balanced dual-pack containing both Still and Sparkling expressions. Designed for morning clarity, midday sustained energy, and evening recovery.',
      badge: 'Full Experience',
      image: '/images/product-collection.png',
      ctaText: 'Shop Collection',
      specs: 'Mixed 12-Pack Variety',
    }
  ],
  productBenefitsRow: [
    { text: 'Zero Sugar & Calories' },
    { text: '5 mg/L Dissolved H₂' },
    { text: '100% Recyclable Aluminum' },
    { text: 'Pristine Icelandic Glacial' },
  ],
  processSteps: [
    {
      step: 1,
      number: '01',
      title: 'Drink HtoEAU',
      description: 'Drink chilled HtoEAU directly upon opening. The nano-sized dissolved molecular hydrogen immediately begins passing through digestive barriers for rapid systemic distribution.',
      highlight: 'Rapid Cellular Absorption',
      image: '/images/hero-bg.png',
      activeColor: 'from-brand-teal to-brand-turquoise',
    },
    {
      step: 2,
      number: '02',
      title: 'Explore the Science',
      description: 'Discover how molecular hydrogen (H₂) selectively neutralizes cytotoxic hydroxyl radicals while leaving essential physiological reactive oxygen species intact.',
      highlight: 'Selective Antioxidant Action',
      image: '/images/product-still.png',
      activeColor: 'from-brand-navy to-brand-teal',
    },
    {
      step: 3,
      number: '03',
      title: 'Make It Part of Your Routine',
      description: 'Incorporate one to two cans daily into your pre-workout, cognitive focus blocks, or post-travel recovery rituals to maintain consistent cellular equilibrium.',
      highlight: 'Daily Habitual Resilience',
      image: '/images/story-water-glass.jpg',
      activeColor: 'from-brand-turquoise to-brand-cyan',
    }
  ],
  sciencePanels: [
    {
      id: 1,
      title: 'Better Recovery',
      description: 'Assists in reducing muscular soreness and lactic build-up following strenuous physical exercise by supporting natural cellular balance.',
      metric: '01 / RECOVERY',
      tag: 'Cellular Restoration'
    },
    {
      id: 2,
      title: 'Consistent Clarity',
      description: 'The ultra-small H₂ molecule effortlessly crosses physiological membranes, providing clean cellular support for sustained mental focus.',
      metric: '02 / CLARITY',
      tag: 'Neural Vitality'
    },
    {
      id: 3,
      title: 'Everyday Resilience',
      description: 'Selectively neutralizes aggressive free radicals while protecting vital signaling cascades required for optimal immune homeostasis.',
      metric: '03 / RESILIENCE',
      tag: 'Metabolic Balance'
    },
    {
      id: 4,
      title: 'Everyday Performance',
      description: 'Supports mitochondrial efficiency and energy turnover, allowing active individuals to maintain steady peak output without stimulants.',
      metric: '04 / PERFORMANCE',
      tag: 'Sustained Output'
    }
  ],
  researchItems: [
    {
      id: 1,
      position: 'top-left',
      title: 'Controlled Human Trials',
      description: 'Tested across standardized human cohorts examining hydration kinetics and cellular antioxidant status.',
    },
    {
      id: 2,
      position: 'bottom-left',
      title: 'Targeted Bioavailability',
      description: 'Due to its miniature molecular mass, dissolved H₂ disperses swiftly into intracellular compartments.',
    },
    {
      id: 3,
      position: 'top-right',
      title: 'Biomarker Quantification',
      description: 'Demonstrated reduction in biomarkers associated with acute physical fatigue and oxidative stress.',
    },
    {
      id: 4,
      position: 'bottom-right',
      title: 'Pure Glacial Matrix',
      description: 'Filtered through untouched volcanic rock in Iceland, providing a low-mineral canvas for hydrogen stability.',
    },
    {
      id: 5,
      position: 'center-bottom',
      title: 'Certified Hydrogen Potency',
      description: 'Each production run is verified to deliver certified molecular hydrogen saturation upon packaging.',
    }
  ],
  story: {
    title: 'We Started With Physics. Not Marketing.',
    paragraph1: 'Water shouldn\'t just quench superficial thirst; it should fuel the basic thermodynamic engine of your cells. When developing HtoEAU, we discarded conventional beverage shortcuts and consulted the fundamental laws of molecular biophysics.',
    paragraph2: 'By pairing one of the planet\'s purest water sources—naturally filtered Icelandic glacial meltwater—with advanced hydrogen nano-infusion technology, we engineered a beverage that supports vitality from the inside out.',
    cta: 'Learn Our Story'
  },
  expert: {
    name: 'Prof. Sergej Osljak',
    title: 'Head of Scientific Research & Advisory',
    bio: 'Pioneering scientific investigations into molecular hydrogen kinetics, cellular redox equilibrium, and hydration bio-mechanisms. Directing clinical evaluation protocols to bring laboratory precision to everyday human performance.',
    highlights: [
      'Published author on dissolved gas kinetics in aqueous solutions',
      'Overseeing independent clinical validation protocols',
      'Advising athletic and wellness institutions on cellular hydration'
    ],
    cta: 'View Scientific Committee'
  },
  community: [
    {
      id: 1,
      image: '/images/community-athlete.jpg',
      headline: 'Uncompromising Physical Restoration',
      quote: 'HtoEAU has become an indispensable element of my post-training protocol. It gives me a clean, revitalized feeling within minutes.',
      role: 'Endurance Athlete',
      tag: 'Strength & Conditioning'
    },
    {
      id: 2,
      image: '/images/community-leader.jpg',
      headline: 'Sustained Cognitive Energy',
      quote: 'During 14-hour strategic sessions, HtoEAU keeps my mental clarity sharp without relying on artificial stimulants or caffeine spikes.',
      role: 'Managing Partner',
      tag: 'Leadership & Focus'
    },
    {
      id: 3,
      image: '/images/community-coach.jpg',
      headline: 'The Science Speaks For Itself',
      quote: 'As a trainer, I look for genuine physiological benefits. My clients consistently report faster turnarounds and better overall energy.',
      role: 'Master Trainer',
      tag: 'Functional Wellness'
    },
    {
      id: 4,
      image: '/images/community-runner.jpg',
      headline: 'Accelerated Mileage Recovery',
      quote: 'Long endurance runs used to leave me feeling depleted for 48 hours. Adding HtoEAU into my routine significantly smoothed out recovery.',
      role: 'Marathon Competitor',
      tag: 'Distance Running'
    }
  ]
};
