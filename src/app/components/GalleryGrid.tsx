import React from 'react';
import content from "@/data/content.json";

export function GalleryGrid() {
   const images = content.gallery;

   return (
      <div className="py-[120px] max-w-[1600px] mx-auto px-[clamp(20px,5vw,80px)]">
         <div className="text-center mb-[100px]">
            <h1 className="text-[clamp(100px,20vw,350px)] text-primary font-display leading-[0.8] tracking-tighter opacity-90">
               Gallery
            </h1>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 flex flex-col gap-6">
               <div className="aspect-[16/10] rounded-tl-[150px] rounded-br-[150px] overflow-hidden">
                  <img src={images[0].image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 className="text-3xl font-display">{images[0].title}</h3>
            </div>

            <div className="md:col-span-4 flex flex-col gap-6 md:mt-32">
               <div className="aspect-[3/4] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                  <img src={images[1].image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 className="text-3xl font-display">{images[1].title}</h3>
            </div>

            <div className="md:col-span-12 py-12">
               <div className="w-full aspect-[21/9] rounded-[50px] overflow-hidden relative group">
                  <img src={images[2].image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <h3 className="absolute bottom-12 left-12 text-6xl text-white font-display">{images[2].title}</h3>
               </div>
            </div>
         </div>

         <div className="mt-40 flex flex-col items-center justify-center text-center">
            <div className="relative">
               <h2 className="text-[clamp(60px,10vw,140px)] font-display text-slate-900 leading-[0.9] tracking-tight">
                  Creative cleaning <br />
                  <span className="text-primary italic">that turns heads.</span>
               </h2>
            </div>
         </div>
      </div>
   );
}