"use client";

import React, { useEffect } from 'react';


interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    id: "01",
    title: "Boutique",
    description: "Compatto simplifies the complex process of furnishing all-inclusive, boutique & high-end hotels, and luxury residences in Greece."
  },
  {
    id: "02",
    title: "Bespoke", // Changed to showcase variety, change back to Boutique if needed!
    description: "Compatto simplifies the complex process of furnishing all-inclusive, boutique & high-end hotels, and luxury residences in Greece."
  }
];

export default function WhyCeebee() {
   return (
    <section className="relative min-h-screen w-full bg-gradient-to-tr from-[#f5eae4] via-[#fffbf9] to-[#ebdcd5] py-20 px-6 md:px-16 lg:px-24 flex flex-col justify-between overflow-hidden font-sans selection:bg-[#5a2a42]/10">
      
      {/* Decorative Line Art - Top Right (Hanging Plant) */}
      <div className="absolute top-0 right-4 md:right-12 w-32 md:w-48 opacity-40 pointer-events-none transition-transform duration-700 hover:scale-105">
        <svg viewBox="0 0 100 100" fill="none" stroke="#5a2a42" strokeWidth="0.5">
          {/* Main pot & strings */}
          <path d="M50,10 L35,45 M50,10 L65,45 M35,45 L65,45 L58,58 L42,58 Z" />
          {/* Abstract leaf shapes */}
          <circle cx="38" cy="42" r="5" />
          <circle cx="62" cy="42" r="5" />
          <path d="M30,35 Q20,30 35,42 Q40,30 48,42" />
          <path d="M70,35 Q80,30 65,42 Q60,30 52,42" />
        </svg>
      </div>

      {/* Main Title */}
      <div className="text-center w-full mb-12 md:mb-6">
        <h2 
          data-aos="fade-down"
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#5a2a42] tracking-wide"
        >
          Why Ceebee?
        </h2>
      </div>

      {/* Dynamic Content Grid */}
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-16 md:gap-8 my-auto relative z-10">
        
        {/* Item 01 - Left Aligned */}
        <div 
          data-aos="fade-right"
          className="max-w-xl self-start group"
        >
          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-sm md:text-base font-mono text-[#5a2a42] font-semibold tracking-wider">
              {features[0].id}.
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-[#331826] relative pb-1">
              {features[0].title}
              <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-[#5a2a42] transition-all duration-300 group-hover:w-full" />
            </h3>
          </div>
          <p className="text-[#5c4d54] text-base md:text-lg leading-relaxed pl-8">
            {features[0].description}
          </p>
        </div>

        {/* Item 02 - Right Aligned */}
        <div 
          data-aos="fade-left"
          className="max-w-xl self-end group text-left md:text-right"
        >
          <div className="flex items-baseline md:justify-end gap-3 mb-3">
            <span className="text-sm md:text-base font-mono text-[#5a2a42] font-semibold tracking-wider">
              {features[1].id}.
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-[#331826] relative pb-1">
              {features[1].title}
              <span className="absolute bottom-0 left-0 md:left-auto md:right-0 w-12 h-[2px] bg-[#5a2a42] transition-all duration-300 group-hover:w-full" />
            </h3>
          </div>
          <p className="text-[#5c4d54] text-base md:text-lg leading-relaxed pl-8 md:pl-0 md:pr-8">
            {features[1].description}
          </p>
        </div>

      </div>

      {/* Footer Section: "Our Projects" & Chair Graphic */}
      <div className="w-full max-w-7xl mx-auto flex items-end justify-between mt-12 md:mt-0">
        
        {/* Decorative Line Art - Bottom Left (Chair & Plant) */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="200"
          className="w-40 md:w-64 opacity-50 pointer-events-none transform transition-transform duration-500 hover:scale-105 origin-bottom-left hidden sm:block"
        >
          <svg viewBox="0 0 120 100" fill="none" stroke="#5a2a42" strokeWidth="0.5">
            {/* Minimalist Armchair */}
            <path d="M20,80 L25,50 C25,40 35,40 45,40 C55,40 65,40 65,50 L70,80" />
            <path d="M15,55 L25,50 M75,55 L65,50" />
            <path d="M22,68 L68,68" />
            {/* Chair Legs */}
            <path d="M25,80 L20,95 M65,80 L70,95 M30,80 L32,92 M60,80 L58,92" />
            {/* Potted Plant */}
            <path d="M80,95 L95,95 L92,80 L83,80 Z" />
            <path d="M87,80 Q75,60 85,55 Q90,70 87,80" />
            <path d="M87,80 Q98,55 92,65" />
            <path d="M87,80 Q105,70 91,76" />
          </svg>
        </div>

        {/* Footer Text */}
        <div 
          data-aos="zoom-in-up"
          className="w-full sm:w-auto text-center sm:text-right pb-4"
        >
          <a 
            href="#projects" 
            className="text-3xl md:text-4xl font-serif text-[#5a2a42] tracking-wide hover:opacity-80 transition-opacity inline-flex items-center gap-2 group"
          >
            Our Projects
            <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">→</span>
          </a>
        </div>
        
      </div>
    </section>
  );
}