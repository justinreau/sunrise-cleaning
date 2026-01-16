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
  const titleLeftRef = useRef<HTMLHeadingElement>(null);
  const titleRightRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const tl = gsapFB.timeline({ defaults: { ease: "power3.out" } });

    tl.from(imageInnerRef.current, { scale: 1.4, duration: 1.5, ease: "expo.out" })
      .from([titleLeftRef.current, titleRightRef.current], {
        y: 150,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1
      }, "-=1.2")
      .from(".hero-desc", { y: 20, opacity: 0, duration: 0.8 }, "-=0.8");

    if (imageInnerRef.current) {
      gsapFB.to(imageInnerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: 100,
        scale: 1.1,
        ease: "none"
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] pt-[120px] pb-[60px] overflow-hidden flex flex-col justify-center">
      <div className="w-full max-w-[1600px] mx-auto px-[clamp(20px,5vw,80px)] grid grid-cols-1 md:grid-cols-12 grid-rows-[auto_auto_auto] md:grid-rows-1 items-center relative gap-y-12 md:gap-y-0">

        {/* HERO IMAGE */}
        <div className="col-span-1 row-start-2 md:col-start-4 md:col-end-10 md:row-start-1 flex justify-center w-full z-0">
          <div className="relative w-full aspect-[3/4] md:aspect-[3/3.8] rounded-[100px] md:rounded-tl-[200px] md:rounded-tr-[200px] md:rounded-br-[200px] md:rounded-bl-[200px] overflow-hidden bg-slate-100">
            <img
              ref={imageInnerRef}
              src={imgHeroImage}
              alt="Hero"
              className="w-full h-full object-cover origin-center"
            />
          </div>
        </div>

        {/* LEFT TITLE */}
        <div className="hero-title-left col-span-1 row-start-1 md:col-start-1 md:col-end-7 md:row-start-1 text-center md:text-right z-10 pointer-events-none mix-blend-hard-light md:mix-blend-normal">
          <h1 ref={titleLeftRef} className="text-[clamp(80px,14vw,280px)] leading-[0.8] text-primary font-display font-bold tracking-tighter">
            {content.hero.headlineLeft}
          </h1>
        </div>

        {/* RIGHT TITLE */}
        <div className="hero-title-right col-span-1 row-start-3 md:col-start-7 md:col-end-13 md:row-start-1 text-center md:text-left z-10 pointer-events-none mix-blend-hard-light md:mix-blend-normal md:-ml-12">
          <h1 ref={titleRightRef} className="text-[clamp(80px,14vw,280px)] leading-[0.8] text-primary font-display font-bold tracking-tighter">
            {content.hero.headlineRight}
          </h1>
        </div>

        {/* DESCRIPTION */}
        <div className="hero-desc hidden md:flex absolute bottom-[10%] right-[5%] flex-col items-end text-right gap-6 z-20 max-w-xs">
          <p className="text-slate-600 text-lg font-sans leading-relaxed">
            {content.hero.description}
          </p>
          <Button variant="outline" className="px-10 py-4 text-sm border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-white/80 backdrop-blur-md">
            {content.hero.cta}
          </Button>
        </div>

        {/* Mobile Description */}
        <div className="md:hidden row-start-4 col-span-1 flex flex-col items-center text-center gap-6 mt-8">
          <p className="text-slate-600 text-base font-sans leading-relaxed max-w-xs">
            {content.hero.description}
          </p>
          <Button variant="primary" className="px-10 py-4 text-sm">
            {content.hero.cta}
          </Button>
        </div>

      </div>
    </section>
  );
}