import React from 'react';
import content from "@/data/content.json";
import { ArrowUpRight } from "lucide-react";

export function GalleryGrid() {
  return (
    <div className="py-20 max-w-[1600px] mx-auto px-6">
      <div className="text-center mb-24">
         <h1 className="text-[120px] md:text-[290px] text-primary font-display leading-none opacity-90">Gallery</h1>
      </div>

      {/* Masonry-ish Grid layout manually constructed based on spans in data */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-32">
         {/* Item 1 */}
         <div className="flex flex-col gap-8 md:translate-y-20">
            <div className="aspect-[4/3] rounded-tl-[100px] rounded-br-[100px] overflow-hidden">
               <img src={content.gallery[0].image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-2xl font-script text-slate-900 text-center">{content.gallery[0].title}</h3>
         </div>

         {/* Item 2 */}
         <div className="flex flex-col gap-8">
            <div className="aspect-[4/3] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
               <img src={content.gallery[1].image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-2xl font-script text-slate-900 text-center">{content.gallery[1].title}</h3>
         </div>

         {/* Item 3 (Wide Center) */}
         <div className="col-span-1 md:col-span-2 flex flex-col items-center gap-8 py-20">
            <div className="w-full md:w-[80%] aspect-[16/7] rounded-[50px] overflow-hidden">
               <img src={content.gallery[2].image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-3xl font-script text-slate-900 text-center">{content.gallery[2].title}</h3>
         </div>

         {/* Item 4 */}
         <div className="flex flex-col gap-8">
            <div className="aspect-[3/4] rounded-tl-[100px] rounded-tr-[100px] overflow-hidden">
               <img src={content.gallery[3].image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-2xl font-script text-slate-900 text-center">{content.gallery[3].title}</h3>
         </div>

         {/* Item 5 */}
         <div className="flex flex-col gap-8 md:translate-y-32">
            <div className="aspect-[3/4] rounded-tl-[100px] rounded-br-[100px] overflow-hidden">
               <img src={content.gallery[4].image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-2xl font-script text-slate-900 text-center">{content.gallery[4].title}</h3>
         </div>
      </div>

      {/* Footer CTA Area */}
      <div className="mt-64 flex flex-col items-center justify-center text-center relative">
         <div className="relative z-10">
            <h2 className="text-[80px] md:text-[140px] font-display text-primary leading-none">
               Creative <span className="text-slate-900">cleaning</span>
            </h2>
            <h2 className="text-[80px] md:text-[140px] font-display text-primary leading-none">
               that turns your head
            </h2>
         </div>

         <div className="mt-12 w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-900 border border-primary flex items-center justify-center cursor-pointer group hover:bg-primary transition-colors">
            <div className="relative w-full h-full rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
               {/* Circular Text SVG could go here, simulating with rotation */}
               <ArrowUpRight className="w-12 h-12 text-white group-hover:scale-125 transition-transform" />
            </div>
         </div>
      </div>
    </div>
  );
}