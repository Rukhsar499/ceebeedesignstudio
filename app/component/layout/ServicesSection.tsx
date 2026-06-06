"use client";

import React, { useState } from 'react';
import Image from "next/image";

interface ServiceItem {
    id: string;
    title: string;
    description: string;
}

const servicesData: ServiceItem[] = [
    {
        id: '01',
        title: 'Design & Consultation',
        description: 'A Curated Palette Of Warm Neutrals, Premium Finishes And Subtle Accents That Bring Harmony To Every Corner.',
    },
    {
        id: '02',
        title: 'Renovation Solutions',
        description: 'Expertly transforming existing spaces into modern, functional environments tailored completely to your lifestyle and needs.',
    },
    {
        id: '03',
        title: 'Turnkey Solutions',
        description: 'End-to-end management from concept to completion. We handle the design, sourcing, and execution while you relax.',
    },
    {
        id: '04',
        title: 'Commercial',
        description: 'Innovative and productive commercial spaces designed to reflect your brand identity and optimize workplace efficiency.',
    },
];

export default function ServicesSection() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="bg-[#fff] min-h-screen flex items-center justify-center p-4 md:p-12 lg:p-24 font-sans overflow-hidden">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* Left Column: Content & Accordion (Scroll Reveal from Left) */}
                <div className="flex flex-col justify-between h-full py-4 relative animate-[fade-in-up_1s_ease-out_forwards] motion-reduce:animate-none">
                    <div>
                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-serif text-[#4a283d] mb-12 tracking-wide">
                            Our Services
                        </h2>

                        {/* Accordion List Container */}
                        <div className="relative border-l border-[#d4c3bd] pl-6 md:pl-8 space-y-6">
                            {servicesData.map((service, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div
                                        key={service.id}
                                        className="relative group transition-all duration-500"
                                        style={{
                                            animationDelay: `${index * 150}ms`,
                                        }}
                                    >

                                        {/* Active Timeline Indicator Pin */}
                                        {isOpen && (
                                            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 bg-[#702d47] rounded-full border border-[#fcf9f4] animate-ping-once" />
                                        )}

                                        {/* Accordion Header Trigger */}
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full flex items-center justify-between text-left focus:outline-none py-2"
                                            aria-expanded={isOpen}
                                        >
                                            <div className="flex items-baseline gap-4">
                                                <span className={`text-sm md:text-base font-medium tracking-wider transition-colors duration-300 ${isOpen ? 'text-[#702d47]' : 'text-[#a18a81]'}`}>
                                                    {service.id}
                                                </span>
                                                <h3 className={`text-xl md:text-2xl font-medium tracking-wide transition-colors duration-300 ${isOpen ? 'text-[#702d47]' : 'text-[#2e2a27] group-hover:text-[#702d47]'}`}>
                                                    {service.title}
                                                </h3>
                                            </div>

                                            {/* Icon Indicator */}
                                            <span className="flex-shrink-0 ml-4 transition-transform duration-300">
                                                {isOpen ? (
                                                    <div className="w-6 h-6 rounded-full bg-[#702d47] flex items-center justify-center text-white text-lg font-light rotate-180 transition-transform duration-300">
                                                        &minus;
                                                    </div>
                                                ) : (
                                                    <div className="w-6 h-6 rounded-full border border-[#d4c3bd] flex items-center justify-center text-[#a18a81] text-lg font-light group-hover:border-[#702d47] group-hover:text-[#702d47] transition-colors duration-300">
                                                        &#43;
                                                    </div>
                                                )}
                                            </span>
                                        </button>

                                        {/* Accordion Body Content */}
                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="pl-9 pr-4 pb-4 transform transition-transform duration-300 translate-y-0">
                                                    <p className="text-[#615854] text-sm md:text-base leading-relaxed max-w-md mb-4">
                                                        {service.description}
                                                    </p>
                                                    <a
                                                        href="#"
                                                        className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-[#702d47] hover:underline group/link"
                                                    >
                                                        Know More <span className="ml-1 text-sm transition-transform group-hover/link:translate-x-1">&rarr;</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom Vector Line-Art */}
                    <div className="hidden lg:block opacity-20 mt-12 pt-8 border-t border-dashed border-[#d4c3bd]">
                       <Image
                        src="/assets/img/sofa.png"
                        alt="Logo"
                        width={800}
                        height={600}
                    />
                    </div>
                </div>

                {/* Right Column: Hero Showcase Image (Scroll Reveal from Right/Scale) */}
                <div className="w-full h-[400px] md:h-[550px] lg:h-[650px] relative overflow-hidden shadow-xl rounded-sm animate-[fade-in-left_1.2s_ease-out_forwards] motion-reduce:animate-none">
                    <Image
                        src="/assets/img/interior.jpeg"
                        alt="Logo"
                        width={800}
                        height={600}
                    />
                </div>

            </div>
        </section>
    );
}