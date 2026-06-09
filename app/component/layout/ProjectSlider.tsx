"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectFade, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import mandatory native Swiper core style modules
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

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
    imageSrc: "/assets/img/1.png" // Referenced file name from mockup mapping
  },
  {
    id: "project-2",
    index: 2,
    title: "India & Art (East Edit)",
    subtitle: "Bespoke Column Architecture",
    imageSrc: "/assets/img/2.png" // Replicated slide contexts
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
    title: "English Country",
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
  }
];

export default function LuxuryProjectSlider() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
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
    
    <section className="relative w-full h-screen overflow-hidden">
       <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif text-[#7d4b5d] tracking-wide text-center pt-4 mb-2">
        Our Projects
      </h2>
      
      {/* Immersive Master Full-Bleed Slider Component */}
      <Swiper
        modules={[Mousewheel, EffectFade, Pagination]}
        effect={'fade'}
        speed={800}
        // Critical UX Requirement Met:
        mousewheel={{
          releaseOnEdges: true, // Seamlessly releases mouse control to the page view only at slide 0 or slide.length
          sensitivity: 1,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        className="w-full h-full"
      >
        {projectSlides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            
            {/* Full Screen High-Definition Image Wrapper */}
            <div className="absolute inset-0 w-full min-h-screen">
              
              <Image
                src={slide.imageSrc}
                alt={slide.title}
                fill
                priority={slide.index === 1}
                sizes="100vw"
                className="object-cover transition-transform duration-1000 scale-100"
              />
              {/* Premium Luxury Overlay Shadow Matrix matching the picture reference */}
              
            </div>
            

            {/* Title & Floating Copy HUD */}
            <div className="absolute inset-0 flex flex-col justify-end items-center pb-44 px-6 z-20 text-center select-none">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-black tracking-wide leading-tight drop-shadow-md max-w-4xl transition-all duration-700 transform translate-y-0 opacity-100">
                {slide.title}
              </h2>
              {slide.subtitle && (
                <p className="text-black/60 font-mono text-xs md:text-sm tracking-widest mt-3 uppercase">
                  {slide.subtitle}
                </p>
              )}
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* Senior Architectural Interactive Progress Timeline HUD Layout */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 z-30 hidden sm:block">
        <div className="relative flex items-center justify-between">
          
          {/* Connecting Axis Dotted Vector Track */}
          <div className="absolute left-0 right-0 top-6 h-[1px] border-t border-dashed border-white/20 z-0" />
          
          {/* Active Progress Trailing Fill Tracker */}
          <div 
            className="absolute left-0 top-6 h-[1px] bg-white transition-all duration-500 ease-out z-0"
            style={{ 
              width: `${(activeIndex / (projectSlides.length - 1)) * 100}%` 
            }}
          />

          {/* Interactive Navigation Nodes */}
          {projectSlides.map((slide, idx) => {
            const isActive = activeIndex === idx;
            const isPassed = activeIndex >= idx;

            return (
              <button
                key={slide.id}
                onClick={() => jumpToSlide(idx)}
                className="flex flex-col items-center group relative z-10 cursor-pointer focus:outline-none"
                style={{ width: `${100 / projectSlides.length}%` }}
              >
                {/* Numeric Dial Ring */}
                <div 
                  className={`w-12 h-12 rounded-full border flex items-center justify-center font-serif text-sm transition-all duration-500 backdrop-blur-sm ${
                    isActive 
                      ? 'bg-white/20 border-white text-white scale-110 shadow-lg shadow-white/10' 
                      : isPassed 
                        ? 'bg-white text-[#5a2a42] border-white' 
                        : 'bg-black/40 border-white/30 text-white/50 group-hover:border-white/70 group-hover:text-white'
                  }`}
                >
                  {slide.index}
                </div>

                {/* Micro Label (Matches image blueprint spacing structure) */}
                <span 
                  className={`text-[10px] md:text-xs font-serif mt-3 tracking-wide whitespace-nowrap transition-all duration-300 ${
                    isActive ? 'text-white font-medium scale-105' : 'text-white/40 group-hover:text-white/80'
                  }`}
                >
                  {slide.title}
                </span>
              </button>
            );
          })}

        </div>
      </div>

      {/* Mobile-Only Micro-Pagination Strip */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 sm:hidden flex gap-2">
        {projectSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => jumpToSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/30'
            }`}
          />
        ))}
      </div>

    </section>
  );
}