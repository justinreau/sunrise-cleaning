import React, { useRef } from 'react';
import gsapFB from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import content from "@/data/content.json";

// Using one of the new Unsplash images
const imgImage = "https://images.unsplash.com/photo-1556579573-1629c871d914?auto=format&fit=crop&w=800&q=80";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const part1Ref = useRef<HTMLHeadingElement>(null);
  const part2Ref = useRef<HTMLHeadingElement>(null);
  const part3Ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const tl = gsapFB.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });
    
    // Only animate split text on desktop where they are refs
    if (window.innerWidth >= 768) {
        tl.from(part1Ref.current, { x: "-50%", opacity: 0, duration: 1, ease: "power3.out" })
          .from(part2Ref.current, { y: "50%", opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")
          .from(part3Ref.current, { x: "50%", opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8");
    }

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-[clamp(60px,8vw,120px)] overflow-hidden flex flex-col items-center justify-center relative min-h-fit md:min-h-[80vh]">
      
      {/* 
        Mobile Layout: Asymmetric Images + Stacked Text 
        Hidden on Desktop
      */}
      <div className="md:hidden w-full px-[clamp(20px,5vw,80px)] mb-12">
        <div className="flex w-full gap-4 h-[300px] mb-8">
            {/* Left Image: Rounded Top-Left */}
            <div className="w-1/2 h-full rounded-tl-[80px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] overflow-hidden bg-slate-100">
                <img src={imgImage} className="w-full h-full object-cover" alt="About Left" />
            </div>
            
            {/* Right Image: Rounded Top-Right */}
            <div className="w-1/2 h-full rounded-tr-[80px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] overflow-hidden bg-slate-100 mt-8">
                <img src={imgImage} className="w-full h-full object-cover" alt="About Right" />
            </div>
        </div>

        <div className="text-center">
            <h2 className="text-[clamp(48px,15vw,120px)] font-display text-primary leading-none opacity-90 mb-4">
                {content.about.titleParts.join("")}
            </h2>
            <p className="text-slate-600 font-sans text-lg leading-relaxed px-4">
                {content.about.description}
            </p>
        </div>
      </div>


      {/* 
        Desktop Layout: Floating Absolute Text & Images 
        Hidden on Mobile
      */}
      <div className="hidden md:block relative w-full max-w-[1400px] h-[600px] px-4">
        
        {/* Images floating */}
        <div className="absolute top-[20%] left-[5%] w-[clamp(150px,20vw,300px)] aspect-square rounded-full overflow-hidden opacity-80 pointer-events-none">
           <img src={imgImage} className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-[20%] right-[10%] w-[clamp(200px,25vw,400px)] aspect-[4/3] rounded-[50px] overflow-hidden opacity-80 pointer-events-none">
           <img src={imgImage} className="w-full h-full object-cover" />
        </div>

        {/* Abo - Left Offset */}
        <h2 
          ref={part1Ref}
          className="absolute top-[20%] left-[25%] -translate-y-1/2 text-[clamp(80px,15vw,250px)] font-display text-primary leading-none z-10 opacity-90"
        >
          {content.about.titleParts[0]}
        </h2>

        {/* ut - Center */}
        <h2 
          ref={part2Ref}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(80px,15vw,250px)] font-display text-primary leading-none z-20 opacity-90"
        >
          {content.about.titleParts[1]}
        </h2>

        {/* us - Right Offset */}
        <h2 
          ref={part3Ref}
          className="absolute bottom-[20%] right-[25%] text-[clamp(80px,15vw,250px)] font-display text-primary leading-none z-0 opacity-90"
        >
          {content.about.titleParts[2]}
        </h2>
      </div>
      
      {/* Desktop Description */}
      <p className="hidden md:block mt-12 text-center text-slate-600 max-w-lg font-sans text-xl px-6 relative z-30">
        {content.about.description}
      </p>
    </section>
  );
}