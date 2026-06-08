"use client";

import React from 'react';

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
    title: "Bespoke",
    description: "Crafting unique, tailor-made furniture layouts designed to match the distinct architectural identity of upscale premium spaces."
  },
  {
    id: "03",
    title: "Heritage",
    description: "Blending contemporary ergonomics with timeless European design traditions to create meaningful, narrative-driven interiors."
  },
  {
    id: "04",
    title: "Sustainability",
    description: "Sourcing premium eco-conscious materials built for endurance, ensuring aesthetic longevity while minimizing environmental footprints."
  }
];

export default function WhyCeebee() {
  return (
    <section className="relative h-screen w-full overflow-y-auto scrollbar-none bg-gradient-to-tr from-[#f5eae4]/90 via-[#fffbf9]/95 to-[#ebdcd5]/90 py-20 px-6 md:px-16 lg:px-24 flex flex-col justify-between font-sans selection:bg-[#5a2a42]/10 isolation-isolate">
      
      {/* Background Image Layer - Fixed context inside the section */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-15 mix-blend-multiply pointer-events-none"
        style={{ 
          backgroundImage: `url('/assets/img/bg-why.png')` 
        }} 
      />

      {/* Decorative Line Art - Top Right (Hanging Plant) */}
      <div className="absolute top-0 right-4 md:right-12 w-32 md:w-48 opacity-40 pointer-events-none transition-transform duration-700 hover:scale-105 z-20">
        
      </div>

      {/* Main Title */}
      <div className="text-center w-full mb-16 shrink-0">
        <h2 
          data-aos="fade-down"
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#5a2a42] tracking-wide"
        >
          Why Ceebee?
        </h2>
      </div>

      {/* Dynamic Content Grid (Scrolls internally) */}
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-24 my-auto relative z-10 py-12">
        {features.map((feature, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={feature.id}
              data-aos={isEven ? "fade-right" : "fade-left"}
              className={`max-w-xl group flex flex-col ${isEven ? "self-start text-left" : "self-end text-left md:text-right"}`}
            >
              <div className={`flex items-baseline gap-3 mb-3 ${isEven ? "justify-start" : "justify-start md:justify-end"}`}>
                <span className="text-sm md:text-base font-mono text-[#5a2a42] font-semibold tracking-wider">
                  {feature.id}.
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-[#331826] relative pb-1">
                  {feature.title}
                  <span className={`absolute bottom-0 w-12 h-[2px] bg-[#5a2a42] transition-all duration-300 group-hover:w-full ${isEven ? "left-0" : "left-0 md:left-auto md:right-0"}`} />
                </h3>
              </div>
              <p className={`text-[#5c4d54] text-base md:text-lg leading-relaxed ${isEven ? "pl-8" : "pl-8 md:pl-0 md:pr-8"}`}>
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Footer Section: "Our Projects" & Chair Graphic */}
      <div className="w-full max-w-7xl mx-auto flex items-end justify-between mt-16 relative z-10 shrink-0">
        
        {/* Decorative Line Art - Bottom Left (Chair & Plant) */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="200"
          className="w-40 md:w-64 opacity-50 pointer-events-none transform transition-transform duration-500 hover:scale-105 origin-bottom-left hidden sm:block"
        >
         
        </div>

        {/* Footer Text */}
        <div 
          data-aos="zoom-in-up"
          className="w-full sm:w-auto text-center sm:text-right pb-4"
        >
         
        </div>
        
      </div>
    </section>
  );
}