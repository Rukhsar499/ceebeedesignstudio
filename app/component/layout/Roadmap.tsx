"use client";

import React, { useEffect, useRef, useState } from 'react';

interface StepItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

const roadmapData: StepItem[] = [
  {
    id: "step-1",
    number: "1",
    title: "Client Meet & Brief",
    description: "\"We simply get to know you first; your likes, your design preferences, things that you definitely want as part of the design, your budget. This is going to be a collaborative effort, so we feel it is very important that we get to know each other.\""
  },
  {
    id: "step-2",
    number: "2",
    title: "Layout & 2D",
    description: "A 2D layout drawing is done on the basic floor plan of your space and adds a furniture layout which gives you a better understanding of which goes where, percentage of empty space. We visit the site and take measurements so that we can start work."
  },
  {
    id: "step-3",
    number: "3",
    title: "Budget & Detailed Schedule",
    description: "At this stage we create a detailed schedule of work both for the internal project team and for the clients and we also create an Expense sheet with the budget and requirement in mind."
  },
  {
    id: "step-4",
    number: "4",
    title: "Execution & Site Progress",
    description: "Our team of interior designers, skilled laborers, electricians starts their work on the project. The homeowners will be given updates about the progress on the site by the project coordinator and about other changes if any."
  },
  {
    id: "step-5",
    number: "5",
    title: "Approvals & Sign-offs",
    description: "All designs, plans and costing are approved by the homeowner at this stage, along with schedule of work and the advance payment is made."
  },
  {
    id: "step-6",
    number: "6",
    title: "Quality Inspection",
    description: "This is self-explanatory. We aim to have happy handovers every time. Transforming Spaces. Transforming Lives."
  },
  {
    id: "step-7",
    number: "7",
    title: "3D Visualizations",
    description: "3D takes the 2D Design to the next level—decorate the interior, optimizing the furniture arrangement and making decision super easy on a wide range of things like colour choices, finishes, furniture etc."
  },
  {
    id: "step-8",
    number: "8",
    title: "Final Handover",
    description: "The dream realized. Final finishing steps are completed with pristine precision, allowing you to walk straight into your curated luxury masterpiece."
  }
];

export default function LuxuryRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgPath, setSvgPath] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Dynamically calculate the snake line path connecting the center of each step's number badge
  useEffect(() => {
    const calculatePath = () => {
      if (!containerRef.current) return;
      
      const elements = containerRef.current.querySelectorAll('[data-roadmap-badge]');
      if (elements.length < 2) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      let pathString = "";

      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        // Extract center coordinate of badge relative to the container frame
        const x = rect.left + rect.width / 2 - containerRect.left;
        const y = rect.top + rect.height / 2 - containerRect.top;

        if (index === 0) {
          pathString += `M ${x} ${y}`;
        } else {
          // Grab previous coordinates to formulate smooth S-curves (Cubic Bezier)
          const prevRect = elements[index - 1].getBoundingClientRect();
          const prevY = prevRect.top + prevRect.height / 2 - containerRect.top;
          const midY = prevY + (y - prevY) / 2;
          
          // Inject elegant horizontal waving curves between offsets
          pathString += ` C ${elements[index - 1].getBoundingClientRect().left + prevRect.width / 2 - containerRect.left} ${midY}, ${x} ${midY}, ${x} ${y}`;
        }
      });

      setSvgPath(pathString);
    };

    calculatePath();
    window.addEventListener('resize', calculatePath);
    return () => window.removeEventListener('resize', calculatePath);
  }, []);

  // Track scrolling inside the window/parent viewport to draw the path line dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the roadmap section has passed through the view frame
      const totalHeight = rect.height;
      const visiblePassed = windowHeight / 2 - rect.top;
      
      const progress = Math.min(Math.max(visiblePassed / totalHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-auto min-h-screen bg-gradient-to-tr from-[#f5eae4]/90 via-[#fffbf9]/95 to-[#ebdcd5]/90 py-32 px-4 md:px-12 lg:px-24 font-sans selection:bg-[#5a2a42]/10 overflow-hidden">
      
      {/* Background Soft Premium Gradient Blush */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#ebdcd5]/40 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-[#f5eae4]/30 to-transparent blur-3xl pointer-events-none" />

      {/* Main Decorative Title */}
      <div className="text-center w-full mb-32">
        <h2 
          data-aos="fade-down"
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#5a2a42] tracking-wide max-w-3xl mx-auto leading-tight"
        >
          The Roadmap to Your New Space
        </h2>
      </div>

      {/* Roadmap Container */}
      <div ref={containerRef} className="relative max-w-5xl mx-auto w-full flex flex-col gap-12 md:gap-4">
        
        {/* Dynamic SVG Snake Line Layer */}
        {svgPath && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" aria-hidden="true">
            {/* Master Guided Path Shadow (Light Neutral Track) */}
            <path 
              d={svgPath} 
              fill="none" 
              stroke="#5a2a42" 
              strokeWidth="1.5" 
              strokeDasharray="4 6"
              className="opacity-20"
            />
            {/* The Active "Snake" Drawing Line (Animates on Scroll) */}
            <path 
              d={svgPath} 
              fill="none" 
              stroke="#5a2a42" 
              strokeWidth="2" 
              strokeDasharray="1000"
              strokeDashoffset={1000 - scrollProgress * 1000}
              className="transition-all duration-300 ease-out opacity-75"
            />
          </svg>
        )}

        {/* Dynamic Alternating Timeline Loop */}
        {roadmapData.map((step, index) => {
          // Alternates pattern based on configuration (Odd or Even indices)
          const isLeft = index % 2 === 0;

          return (
            <div
              key={step.id}
              className={`w-full flex flex-col md:flex-row items-center relative z-10 ${
                isLeft ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Central Pivot Reference Anchor */}
              <div 
                className={`absolute hidden md:flex left-1/2 -translate-x-1/2 items-center justify-center`}
                style={{
                  // Strategic layout shifts matching the subtle asymmetry of your mockup image
                  left: index === 0 ? '50%' : index === 1 ? '16%' : index === 2 ? '68%' : index === 3 ? '22%' : index === 4 ? '62%' : index === 5 ? '20%' : index === 6 ? '70%' : '30%'
                }}
              >
                <div 
                  data-roadmap-badge
                  className="w-12 h-12 rounded-full bg-[#f9f5f0] border border-[#5a2a42]/30 flex items-center justify-center font-serif text-[#5a2a42] text-lg shadow-sm transition-all duration-500 group-hover:scale-110"
                >
                  {step.number}
                </div>
              </div>

              {/* Layout Content Card */}
              <div 
                data-aos={isLeft ? "fade-right" : "fade-left"}
                data-aos-delay={index * 50}
                className={`w-full md:w-[45%] bg-white/60 backdrop-blur-sm border border-[#ebdcd5] p-8 rounded-none transition-all duration-300 hover:shadow-xl hover:bg-white/90 group ${
                  // Fallback alignment overrides for structured responsive stacks
                  index === 0 ? 'md:mx-auto text-center' : ''
                }`}
                style={{
                  // Adapts alignment gracefully when horizontal structure matches the absolute layout anchors
                  marginLeft: index === 0 ? 'auto' : !isLeft ? '0' : 'none',
                  marginRight: index === 0 ? 'auto' : isLeft ? '0' : 'none',
                }}
              >
                {/* Mobile Number Badge Layout */}
                <div className="flex items-center gap-3 mb-4 md:hidden">
                  <span className="w-8 h-8 rounded-full bg-[#5a2a42]/10 flex items-center justify-center font-serif text-[#5a2a42] text-sm">
                    {step.number}
                  </span>
                  <div className="h-[1px] flex-1 bg-[#5a2a42]/20" />
                </div>

                <h3 className="text-xl md:text-2xl font-serif text-[#331826] mb-3 tracking-wide">
                  {step.title}
                </h3>
                
                <p className="text-[#5c4d54]/90 text-sm md:text-base leading-relaxed font-light font-sans">
                  {step.description}
                </p>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}