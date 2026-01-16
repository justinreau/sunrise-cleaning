import React, { useRef } from 'react';
import gsapFB from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import content from "@/data/content.json";

export function Steps() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsapFB.from(".step-line", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%"
      }
    });

    gsapFB.from(".step-item", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%"
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="py-[120px] relative overflow-hidden max-w-[1600px] mx-auto px-[clamp(20px,5vw,80px)]">
      <h2 className="text-[clamp(80px,15vw,250px)] font-display text-primary leading-[0.8] text-center mb-24 tracking-tighter">
        Process
      </h2>

      <div className="step-line absolute top-[55%] left-0 w-full h-[2px] bg-slate-200 hidden md:block -z-10" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {content.steps.map((step: any, index: number) => (
          <div key={index} className="step-item flex flex-col items-center gap-8 group">
            <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full border border-slate-200 bg-white p-2 transition-transform duration-500 group-hover:-translate-y-4 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-transparent transition-colors">
                  <span className="text-6xl font-display text-white">0{index + 1}</span>
                </div>
              </div>
            </div>
            <h3 className="text-4xl font-display text-slate-900 uppercase tracking-widest">{step.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}