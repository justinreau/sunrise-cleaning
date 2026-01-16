import React, { useRef } from 'react';
import gsapFB from 'gsap';
import content from "@/data/content.json";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  const onEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 768) {
      const target = e.currentTarget;
      const img = target.querySelector('.service-bg');
      const arrow = target.querySelector('.service-arrow');
      gsapFB.to(img, { opacity: 1, scale: 1, duration: 0.4, ease: "power4.out" });
      gsapFB.to(target, { scale: 1.02, backgroundColor: "transparent", duration: 0.3 });
      gsapFB.to(arrow, { rotation: 45, scale: 1.2, duration: 0.3 });
    }
  };

  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 768) {
      const target = e.currentTarget;
      const img = target.querySelector('.service-bg');
      const arrow = target.querySelector('.service-arrow');
      gsapFB.to(img, { opacity: 0, scale: 1.2, duration: 0.4, ease: "power4.out" });
      gsapFB.to(target, { scale: 1, backgroundColor: "#FFFFFF", duration: 0.3 });
      gsapFB.to(arrow, { rotation: 0, scale: 1, duration: 0.3 });
    }
  };

  return (
    <section ref={containerRef} className="py-[clamp(80px,10vw,160px)] px-[clamp(20px,5vw,80px)] max-w-[1600px] mx-auto">
      <div className="flex flex-col items-center mb-[clamp(60px,10vw,140px)] relative">
        <h2 className="text-[clamp(60px,18vw,300px)] font-display text-primary leading-[0.8] text-center relative z-10 tracking-tighter">
          Ser vi ces
        </h2>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(80px,10vw,150px)] h-[clamp(80px,10vw,150px)] rounded-full bg-primary flex items-center justify-center z-20 border-[6px] border-white rotate-12">
          <ArrowUpRight className="text-slate-900 w-[40%] h-[40%]" />
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full items-center">
        {content.services.map((service: any, index: number) => (
          <div
            key={index}
            className="group relative flex items-center w-full md:w-[95%] lg:w-[90%] h-[120px] md:h-[180px] rounded-full overflow-hidden border border-slate-200 cursor-pointer bg-white transition-colors"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            <div className="service-bg absolute inset-0 w-full h-full opacity-0 scale-110 origin-center z-0 pointer-events-none">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover brightness-[0.8]" />
            </div>

            <div className="relative z-10 flex items-center justify-between w-full px-8 md:px-20 mix-blend-difference md:mix-blend-normal">
              <span className="hidden md:block text-slate-400 group-hover:text-white font-display text-xl md:text-2xl transition-colors duration-300">
                0{index + 1}
              </span>
              <h3 className="text-3xl md:text-6xl font-display text-slate-900 md:group-hover:text-white transition-colors duration-300 text-center flex-1">
                {service.title}
              </h3>
              <div className="service-arrow w-12 h-12 md:w-16 md:h-16 rounded-full border border-slate-300 group-hover:border-white/50 flex items-center justify-center transition-colors bg-white group-hover:bg-transparent">
                <ArrowUpRight className="text-slate-900 group-hover:text-white w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}