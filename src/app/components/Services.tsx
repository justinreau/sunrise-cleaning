import React, { useRef } from 'react';
import gsapFB from 'gsap';
import content from "@/data/content.json";
import { ArrowUpRight } from "lucide-react";
import { Section, Container } from "@/app/components/layout/Layout"; // <--- Stone Mode Imports

export function Services() {
  const containerRef = useRef<HTMLElement>(null);

  const onEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 768) {
      const target = e.currentTarget;
      const img = target.querySelector('.service-bg');
      gsapFB.to(img, { opacity: 1, scale: 1.05, duration: 0.5, ease: "power2.out" });
      gsapFB.to(target, { scale: 1.02, duration: 0.3 });
    }
  };

  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 768) {
      const target = e.currentTarget;
      const img = target.querySelector('.service-bg');
      gsapFB.to(img, { opacity: 0.2, scale: 1, duration: 0.5 });
      gsapFB.to(target, { scale: 1, duration: 0.3 });
    }
  };

  return (
    <Section ref={containerRef}>
      <Container>

        {/* Header */}
        <div className="flex flex-col items-center mb-[clamp(40px,8vw,120px)] relative">
          <h2 className="text-[clamp(48px,15vw,240px)] font-display text-primary leading-none text-center relative z-10 font-bold">
            Ser vi ces
          </h2>
          <div className="w-[clamp(64px,8vw,120px)] h-[clamp(64px,8vw,120px)] rounded-full bg-primary flex items-center justify-center -mt-[clamp(24px,4vw,64px)] z-20 border-4 border-white relative">
            <ArrowUpRight className="text-slate-900 w-[clamp(24px,4vw,48px)] h-[clamp(24px,4vw,48px)]" />
          </div>
        </div>

        {/* List of Pills */}
        <div className="flex flex-col gap-4 md:gap-6 items-center w-full">
          {content.services.map((service, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center w-full md:w-[90%] lg:w-[80%] h-[100px] md:h-[160px] rounded-full overflow-hidden border border-slate-200 cursor-pointer transition-colors bg-white shadow-sm"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <div className="service-bg absolute inset-0 w-full h-full opacity-100 md:opacity-0 transition-opacity duration-500 z-0">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover brightness-[0.7] md:brightness-100" />
                <div className="absolute inset-0 bg-black/20 md:bg-transparent" />
              </div>

              <div className="relative z-10 flex items-center justify-between w-full px-8 md:px-24">
                <span className="hidden md:block text-slate-400 group-hover:text-white font-sans text-xl transition-colors">0{index + 1}</span>

                <h3 className="text-2xl md:text-5xl font-script text-white md:text-slate-900 group-hover:text-white transition-colors text-center w-full md:w-auto drop-shadow-md md:drop-shadow-none">
                  {service.title}
                </h3>

                <div className="hidden md:flex w-12 h-12 rounded-full border border-slate-300 group-hover:border-white items-center justify-center transition-colors">
                  <ArrowUpRight className="text-slate-400 group-hover:text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}