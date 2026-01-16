import React, { useRef } from 'react';
import gsapFB from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import content from "@/data/content.json";

const imgImage = "https://images.unsplash.com/photo-1556579573-1629c871d914?auto=format&fit=crop&w=800&q=80";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftImgRef = useRef<HTMLDivElement>(null);
  const rightImgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsapFB.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      }
    });

    if (window.innerWidth >= 768) {
      tl.from(".about-part-1", { x: "-100%", opacity: 0 }, 0)
        .from(".about-part-2", { y: "100%", opacity: 0 }, 0)
        .from(".about-part-3", { x: "100%", opacity: 0 }, 0);

      gsapFB.to(leftImgRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });

      gsapFB.to(rightImgRef.current, {
        y: 50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2
        }
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-[100px] relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">

      <div className="hidden md:block relative w-full max-w-[1600px] h-[600px]">
        <div ref={leftImgRef} className="absolute top-[10%] left-[10%] w-[25vw] max-w-[400px] aspect-square rounded-full overflow-hidden opacity-90 z-0">
          <img src={imgImage} className="w-full h-full object-cover" />
        </div>
        <div ref={rightImgRef} className="absolute bottom-[0%] right-[10%] w-[30vw] max-w-[500px] aspect-[4/3] rounded-[100px] overflow-hidden opacity-90 z-0">
          <img src={imgImage} className="w-full h-full object-cover" />
        </div>

        <h2 className="about-part-1 absolute top-[15%] left-[20%] text-[clamp(100px,20vw,400px)] font-display text-primary leading-none z-10 mix-blend-multiply">
          {content.about.titleParts[0]}
        </h2>
        <h2 className="about-part-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(100px,20vw,400px)] font-display text-primary leading-none z-10 mix-blend-multiply">
          {content.about.titleParts[1]}
        </h2>
        <h2 className="about-part-3 absolute bottom-[15%] right-[20%] text-[clamp(100px,20vw,400px)] font-display text-primary leading-none z-10 mix-blend-multiply">
          {content.about.titleParts[2]}
        </h2>
      </div>

      <div className="md:hidden flex flex-col gap-8 px-6">
        <h2 className="text-[120px] font-display text-primary leading-[0.8] text-center">
          {content.about.titleParts.join("")}
        </h2>
        <div className="w-full aspect-square rounded-[40px] overflow-hidden">
          <img src={imgImage} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="mt-20 max-w-2xl text-center px-6 relative z-20">
        <p className="text-slate-600 text-xl font-sans leading-relaxed">
          {content.about.description}
        </p>
      </div>
    </section>
  );
}