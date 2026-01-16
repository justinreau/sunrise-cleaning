import React from 'react';
import content from "@/data/content.json";

export function Team() {
  // Use first member as featured
  const featuredMember = content.team[0];
  const otherMembers = content.team.slice(1);

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
      
      {/* 
         Desktop: 2 Columns
         Left: Sticky Content (Title + Featured Member Details)
         Right: Scrollable/Grid of Images
      */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Column */}
        <div className="lg:w-1/3 flex flex-col gap-12 lg:sticky lg:top-32 h-fit">
           <h2 className="text-[20vw] lg:text-[180px] font-display text-primary leading-none opacity-90">
             Team
           </h2>

           <div className="flex flex-col gap-4">
              <span className="text-primary font-sans font-bold uppercase tracking-widest text-sm">
                Our expert
              </span>
              <h3 className="text-5xl font-script text-slate-900">
                {featuredMember.name}
              </h3>
              <p className="text-slate-500 font-sans leading-relaxed text-lg">
                {featuredMember.description}
              </p>
           </div>
           
           {/* Featured Member Image for Mobile only */}
           <div className="lg:hidden w-full aspect-[3/4] rounded-[50px] overflow-hidden">
              <img src={featuredMember.image} className="w-full h-full object-cover" />
           </div>
        </div>

        {/* Right Column - Image Collage */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
           
           {/* Featured Member Image for Desktop - Large */}
           <div className="hidden lg:block col-span-1 md:col-span-1 row-span-2 aspect-[3/5] rounded-full overflow-hidden border border-slate-100 shadow-xl">
              <img src={featuredMember.image} className="w-full h-full object-cover" />
           </div>

           {/* Other Members */}
           <div className="flex flex-col gap-8 md:pt-20">
              {otherMembers.map((member, index) => (
                <div key={index} className="group relative">
                   <div className="aspect-[3/4] rounded-full overflow-hidden border border-slate-100 shadow-md">
                      <img src={member.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                   </div>
                   <div className="mt-4 text-center">
                      <h4 className="text-xl font-script text-slate-900">{member.name}</h4>
                   </div>
                </div>
              ))}
           </div>

        </div>

      </div>
    </section>
  );
}