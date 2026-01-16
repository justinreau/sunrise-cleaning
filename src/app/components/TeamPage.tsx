import React from 'react';
import content from "@/data/content.json";

export function TeamPage() {
   const { team, teamBanner } = content;

   return (
      <div className="py-[120px] max-w-[1600px] mx-auto px-[clamp(20px,5vw,80px)]">
         <div className="text-center mb-24">
            <h1 className="text-[clamp(100px,20vw,350px)] text-primary font-display leading-[0.8] tracking-tighter">Our team</h1>
         </div>

         <div className="relative w-full h-[600px] rounded-[60px] overflow-hidden mb-32 group">
            <img src={teamBanner.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-12">
               <h2 className="text-white font-display text-5xl md:text-7xl max-w-4xl leading-tight">
                  {teamBanner.headline}
               </h2>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
            {team.map((member: any, index: number) => (
               <div key={index} className="flex flex-col gap-6 group cursor-pointer">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-[200px] shadow-xl border border-slate-100">
                     <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                     />
                  </div>
                  <div className="text-center">
                     <h3 className="text-4xl text-slate-900 font-display mb-2">{member.name}</h3>
                     <span className="text-primary font-bold uppercase tracking-widest text-sm">{member.role}</span>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}