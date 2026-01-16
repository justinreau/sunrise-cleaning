import React from 'react';
import content from "@/data/content.json";
import { ArrowUpRight } from "lucide-react";

export function BlogGrid() {
   const { featured, posts } = content.blog;

   return (
      <div className="py-[120px] max-w-[1600px] mx-auto px-[clamp(20px,5vw,80px)]">

         <h1 className="text-[clamp(100px,20vw,350px)] text-primary font-display leading-[0.8] tracking-tighter mb-24 text-center">
            Journal
         </h1>

         <div className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full aspect-[4/3] rounded-tl-[150px] rounded-br-[150px] overflow-hidden shadow-2xl">
               <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col gap-8">
               <div className="inline-flex gap-4">
                  <span className="px-4 py-1 border border-slate-900 rounded-full text-xs font-bold uppercase tracking-widest">Featured</span>
                  <span className="px-4 py-1 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-widest">Tips</span>
               </div>
               <h2 className="text-6xl md:text-8xl font-display text-slate-900 leading-[0.9]">
                  {featured.title}
               </h2>
               <div className="text-slate-600 font-sans text-xl space-y-4">
                  {featured.content.map((p: any, i: number) => (
                     <p key={i} className="leading-relaxed">{p}</p>
                  ))}
               </div>
               <button className="mt-4 text-lg font-bold uppercase tracking-widest border-b border-slate-900 self-start pb-1">Read Article</button>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20">
            {posts.map((post: any, index: number) => (
               <div key={index} className="group cursor-pointer flex flex-col gap-6">
                  <div className="aspect-[3/4] rounded-[60px] overflow-hidden relative shadow-lg">
                     <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={20} />
                     </div>
                  </div>

                  <div className="flex flex-col gap-4">
                     <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                        <span className="text-sm font-bold uppercase tracking-widest text-slate-500">{post.date}</span>
                        <span className="text-sm font-bold uppercase tracking-widest text-primary">{post.tag}</span>
                     </div>
                     <h3 className="text-4xl font-display text-slate-900 leading-[0.95] group-hover:text-primary transition-colors">
                        {post.title}
                     </h3>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}