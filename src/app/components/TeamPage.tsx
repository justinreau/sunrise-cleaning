import React from 'react';
import content from "@/data/content.json";
import { ArrowUpRight } from "lucide-react";

export function TeamPage() {
  const { team, teamBanner } = content;

  return (
    <div className="py-20 max-w-[1600px] mx-auto px-6">
       <div className="text-center mb-24">
         <h1 className="text-[100px] md:text-[290px] text-primary font-display leading-none opacity-90">Our team</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 mb-32">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col gap-6 group">
             <div className="aspect-[500/571] relative overflow-hidden rounded-[30px] shadow-sm">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
             </div>
             <div className="flex flex-col gap-2">
                <span className="text-slate-500 font-sans">{member.role}</span>
                <h3 className="text-4xl text-primary font-script">{member.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[300px]">
                   {member.description}
                </p>
             </div>
          </div>
        ))}
      </div>

      {/* Banner Section */}
      <div className="relative w-full rounded-[50px] md:rounded-[150px] overflow-hidden min-h-[500px] flex items-center">
         {/* Background Image */}
         <div className="absolute inset-0">
            <img src={teamBanner.image} alt="Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" /> 
         </div>

         {/* Content */}
         <div className="relative z-10 w-full px-6 md:px-20 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Hand Image Overlay */}
             <div className="hidden md:block absolute left-[20%] top-[20%] w-[30%] opacity-80 mix-blend-lighten pointer-events-none">
                 <img src={teamBanner.overlayImage} alt="Decor" className="w-full" />
             </div>

             <div className="flex-1 max-w-xl relative">
                <h2 className="text-5xl md:text-6xl text-white font-script leading-tight mb-8">
                   {teamBanner.headline}
                </h2>
             </div>

             <div className="flex-1 flex flex-col md:flex-row items-center gap-8 justify-end">
                <p className="text-white/80 text-lg md:text-xl max-w-sm text-center md:text-left">
                   {teamBanner.subheadline}
                </p>
                <a href="#" className="w-32 h-32 rounded-full bg-primary flex items-center justify-center group hover:bg-white transition-colors shrink-0">
                    <ArrowUpRight className="w-10 h-10 text-white group-hover:text-primary transition-colors" />
                </a>
             </div>
         </div>
      </div>
    </div>
  );
}