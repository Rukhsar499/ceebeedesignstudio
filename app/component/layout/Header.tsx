"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-4 flex items-center justify-between ${
        isScrolled
          ? 'bg-gradient-to-r from-[#4a1c28] via-[#321019] to-[#d4bca3] shadow-lg backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      {/* Left Side: Logo */}
      <div 
        className="bg-white/90 p-2 rounded shadow-sm max-w-[120px] md:max-w-[140px] transition-transform duration-300 hover:scale-105"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <Image
          src="/logo.jpg"
          alt="Company Logo"
          width={140}
          height={100}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Right Side: Hamburger Menu */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="group flex flex-col justify-between w-7 h-5 focus:outline-none z-50"
        aria-label="Toggle Navigation Menu"
        data-aos="fade-down"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <span 
          className={`h-[2px] w-full bg-white rounded-full transition-all duration-300 origin-left ${
            isMenuOpen ? 'rotate-45 translate-x-[4px]' : ''
          }`} 
        />
        <span 
          className={`h-[2px] bg-white rounded-full transition-all duration-300 ${
            isMenuOpen ? 'w-0 opacity-0' : 'w-3/4 self-end group-hover:w-full'
          }`} 
        />
        <span 
          className={`h-[2px] w-full bg-white rounded-full transition-all duration-300 origin-left ${
            isMenuOpen ? '-rotate-45 translate-x-[4px]' : ''
          }`} 
        />
      </button>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed inset-0 bg-[#4a1c28]/95 flex flex-col items-center justify-center gap-6 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <a href="#" className="text-2xl text-white hover:text-[#d4bca3] transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#" className="text-2xl text-white hover:text-[#d4bca3] transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#" className="text-2xl text-white hover:text-[#d4bca3] transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
        <a href="#" className="text-2xl text-white hover:text-[#d4bca3] transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}