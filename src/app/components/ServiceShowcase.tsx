import React from 'react';
import content from "@/data/content.json";
import { ArrowUpRight } from "lucide-react";

export function ServiceShowcase() {
  return (
    <div className="py-[clamp(60px,8vw,120px)] flex flex-col gap-[clamp(40px,5vw,120px)]">
       {/* Intro Header */}
       <div className="text-center px-[clamp(20px,5vw,80px)]">
          <h1 className="text-[clamp(48px,10vw,240px)] text-primary font-display font-bold leading-none opacity-90">Services</h1>
       </div>

       <div className="flex flex-col gap-[clamp(60px,8vw,120px)]">
         {content.servicesPage.map((service, index) => (
           <div 
             key={index} 
             className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 max-w-[1400px] mx-auto px-6 relative`}
           >
             {/* Image Side */}
             <div className="flex-1 relative w-full">
               <div className={`relative w-full aspect-[4/3] rounded-tl-[150px] rounded-br-[150px] rounded-tr-[150px] overflow-hidden shadow-lg`}>
                 <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
               </div>
               
               {/* Floating Link Button */}
               <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0 translate-x-[50%]' : 'left-0 -translate-x-[50%]'} hidden md:flex w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary items-center justify-center p-2 cursor-pointer hover:scale-105 transition-transform z-10 shadow-xl`}>
                 <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-white">
                    {/* Using a generic image or the specific one if available for the button, keeping it simple with icon/text or just the image background */}
                    <div className="absolute inset-0 bg-primary/20 z-10" />
                    <img src={service.image} className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" />
                    <ArrowUpRight className="text-slate-900 w-10 h-10 relative z-20" />
                 </div>
               </div>
             </div>

             {/* Text Side */}
             <div className="flex-1 flex flex-col items-start text-left">
               <h2 className="text-6xl md:text-8xl font-script text-slate-900 mb-8">{service.title}</h2>
               <p className="text-slate-600 font-sans text-lg leading-relaxed mb-8">
                 {service.description}
               </p>
               
               {/* Next Service Link Text */}
               {service.linkTo && (
                 <div className="mt-8 text-right w-full">
                   <span className="text-slate-400 block text-sm mb-2">Next</span>
                   <span className="text-4xl md:text-6xl font-script text-slate-900 cursor-pointer hover:text-primary transition-colors">
                     {service.linkTo}
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