"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import mandatory native Swiper core style modules
import 'swiper/css';
import 'swiper/css/effect-fade';

interface ProjectSlide {
  id: string;
  index: number;
  title: string;
  subtitle: string;
  imageSrc: string;
}

const projectSlides: ProjectSlide[] = [
  {
    id: "project-1",
    index: 1,
    title: "India & Art (Dakshin)",
    subtitle: "Traditional Heritage Curation",
    imageSrc: "/assets/img/1.png"
  },
  {
    id: "project-2",
    index: 2,
    title: "India & Art (East Edit)",
    subtitle: "Bespoke Column Architecture",
    imageSrc: "/assets/img/2.png"
  },
  {
    id: "project-3",
    index: 3,
    title: "India & Art (Celebrating India)",
    subtitle: "Pristine Luxury Finishes",
    imageSrc: "/assets/img/3.png"
  },
  {
    id: "project-4",
    index: 4,
    title: "Silent Room",
    subtitle: "Fine Textured Palettes",
    imageSrc: "/assets/img/4.png"
  },
  {
    id: "project-5",
    index: 5,
    title: "Luxury",
    subtitle: "The Timeless Atrium",
    imageSrc: "/assets/img/5.png"
  },
  {
    id: "project-6",
    index: 6,
    title: "Soulful Storytelling",
    subtitle: "Final Curated Balance",
    imageSrc: "/assets/img/6.png"
  },
  {
    id: "project-7",
    index: 7,
    title: "Minimal Elegance",
    subtitle: "Modern Architectural Silence",
    imageSrc: "/assets/img/7.png"
  }
];

export default function LuxuryProjectSlider() {
  const [activeIndex, setActiveIndex] = useState<number>(3); // Set default to index 3 (Slide 4) to mirror reference mockup
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  const jumpToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#fffbf9]">
      
      {/* Immersive Master Full-Bleed Slider Component */}
      <Swiper
        modules={[Mousewheel, EffectFade]}
        effect={'fade'}
        speed={800}
        initialSlide={3}
        mousewheel={{
          releaseOnEdges: true,
          sensitivity: 1,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        className="w-full h-full"
      >
        {projectSlides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            
            {/* Full Screen High-Definition Image Wrapper */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.imageSrc}
                alt={slide.title}
                fill
                priority={slide.index === 4}
                sizes="100vw"
                className="object-cover transition-transform duration-1000 scale-100"
              />
              
              {/* Premium Luxury Overlay: Custom specified blend matrix masking the bottom 30% */}
              <div 
                className="absolute inset-0 z-10 pointer-events-none mix-blend-normal"
                style={{
                  background: 'linear-gradient(to top, rgba(245, 234, 228, 0.90) 0%, rgba(255, 251, 249, 0.95) 18%, rgba(235, 220, 213, 0.90) 30%, rgba(255, 255, 255, 0) 65%)'
                }}
              />
            </div>

            {/* Title HUD Placed Elegantly Below the Timeline Ring System */}
            <div className="absolute inset-x-0 bottom-[7%] flex flex-col items-center z-20 text-center select-none pointer-events-none">
              <h2 className="text-6xl md:text-8xl lg:text-[4rem] font-serif text-[#1a1a1a] tracking-tight font-light transition-all duration-700 leading-none">
                {slide.title}
              </h2>
              {slide.subtitle && (
                <p className="text-black/40 font-sans tracking-widest mt-5 uppercase text-[11px]">
                  {slide.subtitle}
                </p>
              )}
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* Interactive Senior Architectural Timeline HUD Layout */}
      <div className="absolute bottom-[24%] left-0 right-0 w-full z-30 hidden sm:block">
        <div className="relative w-full flex items-center justify-between px-16 lg:px-24">
          
          {/* Continuous Flat Axis Vector Tracking Line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-black/15 z-0" />
          
          {/* Interactive Project Progress Step Nodes */}
          {projectSlides.map((slide, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={slide.id}
                className="relative flex items-center justify-center z-10"
                style={{ width: `${100 / projectSlides.length}%` }}
              >
                <button
                  onClick={() => jumpToSlide(idx)}
                  className="relative flex items-center justify-center focus:outline-none group transition-transform duration-300"
                >
                  {/* Concentric Layered Dial Rings matching image reference (Active Step Aura) */}
                  {isActive && (
                    <>
                      <div className="absolute w-[100px] h-[100px] rounded-full border border-black/5 bg-black/[0.02] backdrop-blur-[2px] transition-all duration-500" />
                      <div className="absolute w-[76px] h-[76px] rounded-full border border-black/10" />
                      <div className="absolute w-[58px] h-[58px] rounded-full border border-black/20" />
                    </>
                  )}

                  {/* Core Interactive Numeric Node Indicator */}
                  <div 
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-serif text-xl transition-all duration-500 relative z-10 ${
                      isActive 
                        ? 'text-white bg-neutral-900 shadow-xl shadow-black/10 scale-105' 
                        : 'text-black/60 hover:text-black hover:scale-105'
                    }`}
                  >
                    {slide.index}
                  </div>
                </button>

                {/* Micro Ambient Audio Waveform Visualizer Vector Layer */}
                {isActive && (
                  <div className="absolute left-[calc(50%+36px)] top-1/2 -translate-y-1/2 flex items-center opacity-65 z-20 pointer-events-none hidden lg:flex text-neutral-800">
                    <svg width="135" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 12H12M16 12V8M16 12V16M22 12V4M22 12V20M28 12V6M28 12V18M34 12V10M34 12V14M40 12H52M56 12V5M56 12V19M62 12V2M62 12V22M68 12V7M68 12V17M74 12H90M94 12V9M94 12V15M100 12V3M100 12V21M106 12V7M106 12V17M112 12H118" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}

        </div>
      </div>

      {/* Mobile-Only Clean Modular Navigation Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 sm:hidden flex gap-3 bg-white/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
        {projectSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => jumpToSlide(idx)}
            className={`h-1 rounded-full transition-all duration-300 ${
              activeIndex === idx ? 'w-6 bg-neutral-900' : 'w-1.5 bg-neutral-900/25'
            }`}
          />
        ))}
      </div>

    </section>
  );
}