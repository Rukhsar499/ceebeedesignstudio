"use client";

import React from 'react';

export default function HeroBanner() {
    return (
      <div className="w-full px-8 pt-4">
        <div className="relative w-full min-h-screen overflow-hidden rounded-[20px] font-sans text-white ">

            {/* BACKGROUND BANNER IMAGE WITH ZOOM LOOP */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 rounded-[40px]">
                <div
                    className="w-full h-full bg-cover bg-center animate-ken-burns rounded-2xl"
                    style={{
                        backgroundImage: "url('/assets/img/7.png')",
                    }}
                />
                <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
            </div>

            {/* HERO CONTENT LAYER */}
            <div className="relative z-10 w-full  min-h-screen md:px-12 flex flex-col justify-end pb-12 md:pb-24 lg:pb-32 rounded-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

                    {/* Main Title Heading (Left Side) */}
                    <div
                        className="lg:col-span-7 xl:col-span-8"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-tight tracking-wide drop-shadow-md">
                            Bringing Simplicity <br />
                            In The Furnishing Market
                        </h1>
                    </div>

                    {/* Context Blurb Card & CTA Button (Right Side) */}
                    <div
                        className="lg:col-span-5 xl:col-span-4 lg:justify-self-end w-full max-w-md"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                    >
                        <div className="bg-black/20 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-sm shadow-2xl transition-all duration-300 hover:border-white/20">
                            <p className="text-sm md:text-base text-gray-200 font-light leading-relaxed mb-6 tracking-wide">
                                Compatto Simplifies The Complex Process Of Furnishing All-Inclusive, Boutique & High-End Hotels, And Luxury Residences In Greece.
                            </p>

                            <button className="w-full group inline-flex items-center justify-center gap-2 bg-white text-gray-900 py-3 px-6 rounded-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#d4bca3] hover:text-white shadow-md">
                                <span>Start Your Furnishing Journey</span>
                                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    );
}