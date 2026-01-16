import React from 'react';
import content from "@/data/content.json";
import { ArrowUpRight } from "lucide-react";

export function ServiceShowcase() {
  return (
    <div className="py-[120px] flex flex-col gap-[120px]">
      <div className="text-center px-[clamp(20px,5vw,80px)]">
        <h1 className="text-[clamp(100px,20vw,400px)] text-primary font-display font-bold leading-[0.8] tracking-tighter">
          Services
        </h1>
      </div>

      <div className="flex flex-col gap-[160px]">
        {content.servicesPage.map((service: any, index: number) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-32 max-w-[1600px] mx-auto px-[clamp(20px,5vw,80px)] relative w-full`}
          >
            <div className="flex-1 relative w-full group">
              <div className={`relative w-full aspect-[4/3] rounded-tl-[200px] rounded-br-[200px] overflow-hidden shadow-2xl`}>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>

              <div className={`absolute top-10 ${index % 2 === 0 ? 'right-10' : 'left-10'} w-32 h-32 bg-primary rounded-full flex items-center justify-center border-4 border-white animate-spin-slow`}>
                <ArrowUpRight className="text-white w-12 h-12" />
              </div>
            </div>

            <div className="flex-1 flex flex-col items-start text-left gap-8">
              <span className="text-9xl font-display text-slate-100 absolute -z-10 -translate-y-1/2 select-none">
                0{index + 1}
              </span>
              <h2 className="text-7xl md:text-8xl font-display text-slate-900 leading-none relative z-10">
                {service.title}
              </h2>
              <p className="text-slate-600 font-sans text-xl leading-relaxed max-w-xl">
                {service.description}
              </p>

              {service.linkTo && (
                <div className="mt-12 pt-8 border-t border-slate-200 w-full">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Next Service</span>
                  <span className="text-4xl font-display text-slate-900 cursor-pointer hover:text-primary transition-colors flex items-center gap-4">
                    {service.linkTo} <ArrowUpRight />
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}