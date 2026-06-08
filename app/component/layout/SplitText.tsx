"use client";

import { useEffect, useRef } from "react";

interface SplitTextProps {
  text: string;
}

export default function SplitText({ text }: SplitTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("animate-text");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <h1
  ref={ref}
  className="text-5xl md:text-7xl font-bold flex flex-wrap justify-center"
>
  {"Hello CeeBee".split("").map((char, index) => (
    <span
      key={index}
      className="char inline-block opacity-0 blur-md translate-y-10"
      style={{
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</h1>
  );
}