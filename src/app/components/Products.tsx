import React, { useRef } from 'react';
import gsapFB from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import content from "@/data/content.json";
import { ArrowUpRight } from "lucide-react";

export function Products() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsapFB.from(".product-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%"
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-[120px] px-[clamp(20px,5vw,80px)] max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24">
        <h2 className="text-[clamp(60px,12vw,180px)] font-display text-primary leading-[0.8] tracking-tighter max-w-4xl">
          Explore our products
        </h2>
        <button className="hidden md:flex items-center gap-2 border-b border-slate-900 pb-1 text-lg uppercase tracking-widest hover:text-primary hover:border-primary transition-colors">
          See All <ArrowUpRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {content.products.map((product: any, index: number) => (
          <div key={index} className="product-card group cursor-pointer flex flex-col gap-6">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[40px] bg-slate-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                <ArrowUpRight size={20} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-display text-slate-900 leading-tight">{product.title}</h3>
              <div className="flex gap-4 items-center font-sans text-lg">
                <span className="text-primary font-bold">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-slate-400 line-through">{product.oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}