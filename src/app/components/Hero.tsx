import React, { useRef } from 'react';
import gsapFB from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import content from "@/data/content.json";
import imgHeroImage from "figma:asset/57464ea0ced16ab88df8e6260a7bc289477c4446.png";
import { Button } from "@/app/components/ui/Button";

gsapFB.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLImageElement>(null);

  // Single Animation Timeline for all viewports
  // We use ScrollTrigger defaults that work responsively
  useGSAP(() => {
    const tl = gsapFB.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".hero-title-left", { y: 100, opacity: 0, duration: 1 })
      .from(".hero-title-right", { y: 100, opacity: 0, duration: 1 }, "-=0.8")
      .from(".hero-image", { scale: 1.1, opacity: 0, duration: 1.2 }, "-=0.8")
      .from(".hero-desc", { y: 50, opacity: 0, duration: 0.8 }, "-=0.6");

    if (imageInnerRef.current) {
        gsapFB.to(imageInnerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            y: -50,
            scale: 1.1,
            ease: "none"
        });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] py-[clamp(60px,8vw,120px)] overflow-hidden flex flex-col justify-center">
      
      {/* 
        Grid Layout
        Mobile: 1 Column
        Desktop: 12 Columns
        Standard Max Width Container
      */}
      <div className="w-full max-w-[1400px] mx-auto px-[clamp(20px,5vw,80px)] grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
        
        {/* Left Title */}
        <div className="hero-title-left col-span-1 md:col-span-3 order-1 md:order-1 text-left z-10">
           <h1 className="text-[clamp(48px,10vw,240px)] leading-[0.85] text-primary font-display font-bold">
             {content.hero.headlineLeft}
           </h1>
        </div>

        {/* Right Title */}
        <div className="hero-title-right col-span-1 md:col-span-3 order-2 md:order-3 text-left md:text-right z-10">
           <h1 className="text-[clamp(48px,10vw,240px)] leading-[0.85] text-primary font-display font-bold">
             {content.hero.headlineRight}
           </h1>
        </div>

        {/* Hero Image */}
        {/* 
           Mobile: Row 3 (Below text). Stadium Shape.
           Desktop: Col 4-9 (Center). Pill/Architectural Shape.
           Order 3 on mobile. Order 2 on desktop.
        */}
        <div className="hero-image col-span-1 md:col-span-6 order-3 md:order-2 flex justify-center w-full">
            <div className="
                relative 
                w-full max-w-[500px] md:max-w-none 
                aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/3.5]
                rounded-[100px] md:rounded-tl-[150px] md:rounded-tr-[150px] md:rounded-br-[150px] 
                overflow-hidden 
                border border-slate-200 
                bg-white shadow-2xl
                transition-all duration-500
            ">
                <img 
                    ref={imageInnerRef}
                    src={imgHeroImage} 
                    alt="Hero" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>

        {/* Description - Absolute Desktop / Flow Mobile */}
        {/* 
           We can make this part of the grid too to strictly solve "splintering".
           Mobile: Order 4.
           Desktop: Absolute position (breaking grid) OR Grid placement?
           Let's use Absolute for Desktop to keep the "floating" asymmetrical look, 
           but relative flow for mobile.
        */}
        <div className="hero-desc col-span-1 md:col-span-12 order-4 md:order-4 flex justify-center md:justify-end md:absolute md:top-[60%] md:right-0 md:w-auto md:h-auto pointer-events-none md:pointer-events-auto mt-8 md:mt-0">
             <div className="flex flex-col gap-6 items-center md:items-end text-center md:text-right max-w-xs z-20">
                <p className="text-slate-600 text-base font-sans leading-relaxed">
                    {content.hero.description}
                </p>
                <Button variant="outline" className="pointer-events-auto px-8 py-3 text-sm border-slate-300 text-slate-800 hover:text-white hover:bg-slate-800 bg-white/50 backdrop-blur-sm">
                    {content.hero.cta}
                </Button>
             </div>
        </div>

      </div>
    </section>
  );
}