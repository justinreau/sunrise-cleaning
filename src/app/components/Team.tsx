import React from 'react';
import content from "@/data/content.json";

export function Team() {
   const featured = content.team[0];
   const allMembers = content.team;

   return (
      <section className="py-[120px] px-[clamp(20px,5vw,80px)] max-w-[1600px] mx-auto">
         <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            <div className="lg:w-1/3 flex flex-col gap-12 lg:sticky lg:top-32 h-fit">
               <h2 className="text-[clamp(100px,20vw,200px)] font-display text-primary leading-[0.8] tracking-tighter">
                  Team
               </h2>
               <div className="flex flex-col gap-6">
                  <span className="inline-block px-4 py-1 rounded-full border border-primary text-primary w-fit uppercase tracking-widest text-xs font-bold">
                     Our Experts
                  </span>
                  <h3 className="text-5xl font-display text-slate-900">
                     {featured.name}
                  </h3>
                  <p className="text-slate-500 font-sans leading-relaxed text-xl">
                     {featured.description}
                  </p>
               </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-20">
               {allMembers.map((member: any, index: number) => (
                  <div key={index} className={`group flex flex-col gap-6 ${index % 2 !== 0 ? 'md:translate-y-20' : ''}`}>
                     <div className="aspect-[3/4] rounded-full overflow-hidden border border-slate-100 shadow-lg relative">
                        <img
                           src={member.image}
                           className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        />
                     </div>
                     <div className="text-center">
                        <h4 className="text-3xl font-display text-slate-900">{member.name}</h4>
                        <p className="text-primary font-sans mt-2">{member.role}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}