import React from 'react';
import content from "@/data/content.json";
import { ArrowUpRight } from "lucide-react";
import { Section, Container, Grid } from "@/app/components/layout/Layout";
import { Button } from "@/app/components/ui/Button";

export function BlogGrid() {
   const { featured, posts } = content.blog;

   // DOUBLE THE DATA: Concatenate posts to create 6 items (2 rows of 3)
   const gridPosts = [...posts, ...posts];

   return (
      <Section>
         <Container>

            {/* Featured Header Section (Kept as is) */}
            <div className="mb-32 relative">
               <div className="relative w-full aspect-[21/9] rounded-tl-[100px] md:rounded-tl-[150px] rounded-br-[100px] md:rounded-br-[150px] rounded-tr-[50px] rounded-bl-[50px] overflow-hidden mb-12 shadow-lg">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
               </div>

               <div className="flex flex-col md:flex-row gap-12 items-start">
                  <h1 className="text-6xl md:text-8xl font-display font-black text-slate-900 flex-1 leading-[0.85] tracking-tighter">
                     Cleaning <span className="text-primary">Tips</span>
                  </h1>
                  <div className="flex-1 text-slate-600 font-sans space-y-6">
                     <h2 className="text-3xl md:text-4xl text-slate-900 font-bold mb-6">{featured.title}</h2>
                     {featured.content.map((p, i) => (
                        <p key={i} className="leading-relaxed border-l-4 border-primary pl-6 text-lg">{p}</p>
                     ))}
                  </div>
               </div>
            </div>

            {/* Section Title */}
            <div className="text-center mb-20">
               <h2 className="text-[clamp(60px,10vw,200px)] text-primary font-display font-black leading-none opacity-90">
                  Articles
               </h2>
            </div>

            {/* 2x3 Grid Section */}
            {/* Uses the Stone Mode 'Grid' (12 cols). We span 4 cols to get 3 items per row. */}
            <Grid className="gap-y-20">
               {gridPosts.map((post, index) => (
                  <div
                     key={index}
                     className="col-span-1 md:col-span-4 group cursor-pointer flex flex-col gap-6 transition-transform duration-500 ease-out hover:-translate-y-3"
                  >
                     {/* Image Card with Zoom Effect */}
                     <div className="aspect-[4/5] rounded-[40px] overflow-hidden relative shadow-md bg-slate-100">
                        <img
                           src={post.image}
                           alt={post.title}
                           className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />

                        {/* Optional: Date Badge overlay */}
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-slate-900 border border-white/50">
                           {post.date}
                        </div>
                     </div>

                     {/* Tags & Meta */}
                     <div className="flex gap-3">
                        <span className="px-4 py-1 rounded-full border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest bg-white">
                           {post.tag}
                        </span>
                     </div>

                     {/* Title & Button */}
                     <div className="flex flex-col gap-6 h-full justify-between">
                        <h3 className="text-3xl font-display font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors">
                           {post.title}
                        </h3>

                        {/* The New "Learn More" Button */}
                        <div className="mt-auto pt-4 border-t border-slate-100 flex justify-start">
                           <Button
                              variant="ghost"
                              className="pl-0 text-slate-900 hover:text-primary hover:pl-2 transition-all group/btn flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
                           >
                              Learn More
                              <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                           </Button>
                        </div>
                     </div>
                  </div>
               ))}
            </Grid>

         </Container>
      </Section>
   );
}