import React, { useRef } from 'react';
import gsapFB from 'gsap';
import { useGSAP } from '@gsap/react';
import content from "@/data/content.json";

export function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Calculate total width or just assume standard infinite loop logic
    // GSAP's horizontalLoop helper is great, but we can do a simple to animation
    // if the content is duplicated enough.
    
    if (!trackRef.current) return;

    // Get the width of the first set of items
    const width = trackRef.current.scrollWidth / 2;

    gsapFB.to(trackRef.current, {
      x: -width,
      duration: 20,
      ease: "linear",
      repeat: -1
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full bg-white overflow-hidden py-[clamp(40px,5vw,80px)] border-y border-slate-200">
      <div ref={trackRef} className="flex whitespace-nowrap">
        {/* Render twice for seamless loop */}
        {[...content.marquee, ...content.marquee].map((text, i) => (
          <div key={i} className="flex items-center">
            <span className="text-[clamp(3rem,8vw,8rem)] font-display text-transparent uppercase px-[clamp(20px,4vw,60px)] opacity-50 hover:opacity-100 transition-opacity [-webkit-text-stroke:1px_#cbd5e1]">
              {text}
            </span>
            <span className="text-[clamp(2rem,6vw,5rem)] text-primary">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}