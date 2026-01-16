import React, { useRef } from 'react';
import gsapFB from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import content from "@/data/content.json";
import imgHeroImage from "figma:asset/57464ea0ced16ab88df8e6260a7bc289477c4446.png";
import { Button } from "@/app/components/ui/Button";
import { Section, Container, Grid } from "@/app/components/layout/Layout"; // <--- IMPORT THIS

gsapFB.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageInnerRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsapFB.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".hero-title-left", { y: 100, opacity: 0, duration: 1 })
      .from(".hero-title-right", { y: 100, opacity: 0, duration: 1 }, "-=0.8")
      .from(".hero-image", { scale: 1.1, opacity: 0, duration: 1.2 }, "-=0.8")
      .from(".hero-desc", { y: 50, opacity: 0, duration: 0.8 }, "-=0.6");

    if (imageInnerRef.current && containerRef.current) {
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
    // <--- USE SECTION (Replaces <section ...>)
    <Section ref={containerRef} className="min-h-[100dvh] flex flex-col justify-center overflow-hidden">

      {/* <--- USE CONTAINER (Replaces max-w-1400 div) */}
      <Container>

        {/* <--- USE GRID (Replaces grid-cols-12 div) */}
        <Grid className="items-center relative gap-4">

          {/* Left Title: Now Align RIGHT (Towards center) */}
          <div className="hero-title-left col-span-1 md:col-span-4 order-1 md:order-1 text-left md:text-right z-10 relative">
            <h1 className="text-[clamp(48px,11vw,240px)] leading-[0.8] text-primary font-display font-bold tracking-tighter mix-blend-multiply">
              {content.hero.headlineLeft}
            </h1>
          </div>

          {/* Hero Image: Squeezed to Span 4 (Center) */}
          <div className="hero-image col-span-1 md:col-span-4 order-3 md:order-2 flex justify-center w-full relative z-0">
            <div className="
                  relative 
                  w-full max-w-[500px] md:max-w-none 
                  aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/3.5]
                  rounded-[100px] md:rounded-tl-[150px] md:rounded-tr-[150px] md:rounded-br-[150px] 
                  overflow-hidden 
                  border-[3px] border-slate-900 
                  bg-white shadow-2xl
              ">
              <img
                ref={imageInnerRef}
                src={imgHeroImage}
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Title: Now Align LEFT (Towards center) */}
          <div className="hero-title-right col-span-1 md:col-span-4 order-2 md:order-3 text-left md:text-left z-10 relative">
            <h1 className="text-[clamp(48px,11vw,240px)] leading-[0.8] text-primary font-display font-bold tracking-tighter mix-blend-multiply">
              {content.hero.headlineRight}
            </h1>
          </div>

          {/* Description (Keep as is) */}
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

        </Grid>
      </Container>
    </Section>
  );
}