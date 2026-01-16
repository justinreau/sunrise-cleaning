import React, { useRef } from 'react';
import gsapFB from 'gsap';
import { useGSAP } from '@gsap/react';
import content from "@/data/content.json";

export function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current) return;
    const width = trackRef.current.scrollWidth / 2;
    gsapFB.to(trackRef.current, {
      x: -width,
      duration: 30,
      ease: "linear",
      repeat: -1
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full bg-white overflow-hidden border-y border-slate-200 py-12 md:py-20">
      <div ref={trackRef} className="flex whitespace-nowrap items-center">
        {[...content.marquee, ...content.marquee, ...content.marquee].map((text, i) => (
          <div key={i} className="flex items-center">
            <span className="text-[clamp(60px,8vw,120px)] font-display uppercase font-bold text-slate-900 px-8 tracking-tighter hover:text-primary transition-colors cursor-default">
              {text}
            </span>
            <div className="w-4 h-4 rounded-full bg-primary mx-4" />
          </div>
        ))}
      </div>
    </div>
  );
}