import React from 'react';
import content from "@/data/content.json";
import { Section, Container, Grid } from "@/app/components/layout/Layout"; // <--- Stone Mode

export function Team() {
   const featuredMember = content.team[0];
   const otherMembers = content.team.slice(1);

   return (
      <Section>
         <Container>
            {/* Stone Mode: Using strict 12-col grid instead of flexbox */}
            <Grid>

               {/* Left Column: Sticky Title & Featured Info (Span 4) */}
               <div className="col-span-12 lg:col-span-4 flex flex-col gap-12 lg:sticky lg:top-32 h-fit">
                  <h2 className="text-[20vw] lg:text-[180px] font-display text-primary leading-none opacity-90 font-bold">
                     Team
                  </h2>

                  <div className="flex flex-col gap-4">
                     <span className="text-primary font-sans font-bold uppercase tracking-widest text-sm">
                        Our expert
                     </span>
                     <h3 className="text-5xl font-script text-slate-900">
                        {featuredMember.name}
                     </h3>
                     <p className="text-slate-500 font-sans leading-relaxed text-lg text-balance">
                        {featuredMember.description}
                     </p>
                  </div>

                  {/* Mobile Featured Image */}
                  <div className="lg:hidden w-full aspect-[3/4] rounded-[50px] overflow-hidden">
                     <img src={featuredMember.image} className="w-full h-full object-cover" alt={featuredMember.name} />
                  </div>
               </div>

               {/* Right Column: Image Grid (Span 8) */}
               <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">

                  {/* Desktop Featured Image - Large */}
                  <div className="hidden lg:block col-span-1 md:col-span-1 row-span-2 aspect-[3/5] rounded-full overflow-hidden border border-slate-100 shadow-xl">
                     <img src={featuredMember.image} className="w-full h-full object-cover" alt={featuredMember.name} />
                  </div>

                  {/* Other Members */}
                  <div className="flex flex-col gap-8 md:pt-20">
                     {otherMembers.map((member, index) => (
                        <div key={index} className="group relative cursor-pointer">
                           <div className="aspect-[3/4] rounded-full overflow-hidden border border-slate-100 shadow-md">
                              <img src={member.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={member.name} />
                           </div>
                           <div className="mt-4 text-center">
                              <h4 className="text-xl font-script text-slate-900">{member.name}</h4>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

            </Grid>
         </Container>
      </Section>
   );
}