"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';

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
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.refresh();
    }
  }, []);

  return (
    <section 
      className="relative w-full min-h-screen overflow-x-hidden bg-[#fffbf9] font-sans selection:bg-[#5a2a42]/10 isolation-isolate py-20 md:py-28 px-6 md:px-16 lg:px-24 flex flex-col justify-between"
    >
      
      {/* ================= PREMIUM ATMOSPHERIC GRADIENT SYSTEM ================= */}
      {/* This custom multi-stop gradient background simulates the soft, glowing corners 
        and high-end architectural shadows visible in the reference layout.
      */}
      <div 
        className="absolute inset-0 -z-30 pointer-events-none transition-opacity duration-500"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, rgba(245, 234, 228, 0.92) 0%, transparent 45%),
            radial-gradient(circle at 100% 100%, rgba(235, 220, 213, 0.95) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(255, 251, 249, 0.98) 0%, transparent 40%),
            linear-gradient(135deg, #fffbf9 0%, #f7f1ed 50%, #ebdcd5 100%)
          `
        }}
      />

      {/* Center Ambient Subtle Pattern Blend Mesh */}
      <div 
        className="absolute inset-0 -z-20 opacity-[0.12] mix-blend-multiply pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/img/bg-why.png')` }} 
      />


      {/* ================= FIXED BACKGROUND WIREFRAME ILLUSTRATIONS ================= */}
      {/* Top Right Decorative Hanging Plant Element */}
      <div className="absolute top-0 right-4 md:right-12 w-40 md:w-56 lg:w-64 h-[320px] pointer-events-none z-10 opacity-90 mix-blend-darken">
        <Image
          src="/assets/img/why2.png"
          alt="Architectural line-art hanging plant interior decor"
          fill
          className="object-contain object-top"
          priority
        />
      </div>

      {/* Bottom Left Premium Armchair & Monstera Setup */}
      <div className="absolute bottom-0 left-2 md:left-10 w-52 md:w-72 lg:w-[420px] h-[380px] pointer-events-none z-10 opacity-85 mix-blend-darken">
        <Image
          src="/assets/img/why1.png"
          alt="Luxury modernist furniture lounge blueprint outline"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>


      {/* ================= MAIN HEADER SECTION ================= */}
      <div className="text-center w-full mb-12 lg:mb-6 shrink-0 z-20">
        <h2 
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#5a2a42] tracking-wide font-normal"
        >
          Why Ceebee?
        </h2>
      </div>


      {/* ================= STAGGERED MULTI-COLUMN DESIGN GRID ================= */}
      {/* Renders all data structures dynamically into an alternating grid layer layout 
        exactly matching the spatial blueprints of your mockup image.
      */}
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-12 md:gap-20 lg:gap-14 my-auto relative z-20 py-8">
        {features.map((feature, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={feature.id}
              className={`w-full flex ${isEven ? "justify-start" : "justify-end"}`}
            >
              {/* Feature Text Component Card block */}
              <div 
                data-aos={isEven ? "fade-right" : "fade-left"}
                data-aos-delay={index * 150}
                data-aos-duration="1000"
                className={`max-w-lg md:max-w-xl flex flex-col transition-transform duration-500 hover:translate-y-[-2px] ${
                  isEven ? "text-left" : "text-left md:text-right"
                }`}
              >
                {/* Custom Inline Numeric Label Row */}
                <div className={`flex items-baseline gap-2 mb-3 ${isEven ? "justify-start" : "justify-start md:justify-end"}`}>
                  <span className="text-base md:text-lg font-mono text-[#5a2a42] font-semibold tracking-wider">
                    {feature.id}.
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#331826] relative pb-1.5 tracking-wide">
                    {feature.title}
                    {/* Architectural Underline Accent Accentuation indicator */}
                    <span 
                      className={`absolute bottom-0 h-[1.5px] bg-[#5a2a42]/80 w-12 transition-all duration-300 group-hover:w-24 ${
                        isEven ? "left-0" : "left-0 md:left-auto md:right-0"
                      }`} 
                    />
                  </h3>
                </div>

                {/* Body Frame Description Copy Typography */}
                <p className={`text-[#5c4d54] text-sm md:text-base lg:text-[17px] leading-relaxed font-light ${
                  isEven ? "pl-0 md:pl-6" : "pl-0 md:pl-0 md:pr-6"
                }`}>
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>


      {/* ================= PERSISTENT SYSTEM FOOTER HUD ================= */}
      <div className="w-full text-center md:text-right max-w-6xl mx-auto pt-10 shrink-0 z-20">
       
      </div>

    </section>
  );
}