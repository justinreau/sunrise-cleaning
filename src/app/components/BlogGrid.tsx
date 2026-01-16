import React from 'react';
import content from "@/data/content.json";

export function BlogGrid() {
  const { featured, posts } = content.blog;

  return (
    <div className="py-20 max-w-[1400px] mx-auto px-6">
      
      {/* Featured Header Section */}
      <div className="mb-32 relative">
         <div className="relative w-full aspect-[21/9] rounded-tl-[150px] rounded-br-[150px] rounded-tr-[150px] overflow-hidden mb-12 shadow-lg">
            <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
         </div>
         
         <div className="flex flex-col md:flex-row gap-12 items-start">
            <h1 className="text-6xl md:text-8xl font-script text-slate-900 flex-1 leading-tight">
               Cleaning Tips
            </h1>
            <div className="flex-1 text-slate-600 font-sans space-y-6">
               <h2 className="text-4xl text-primary font-script mb-6">{featured.title}</h2>
               {featured.content.map((p, i) => (
                 <p key={i} className="leading-relaxed border-l-4 border-primary pl-6">{p}</p>
               ))}
            </div>
         </div>
      </div>

      {/* Grid Section */}
      <div className="text-center mb-20">
         <h2 className="text-[100px] md:text-[200px] text-primary font-display leading-none opacity-90">Articles</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="group cursor-pointer flex flex-col gap-6">
            <div className="aspect-[4/5] rounded-[50px] overflow-hidden relative shadow-md">
               <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            <div className="flex gap-4">
               <span className="px-6 py-2 rounded-full border border-slate-900 text-white bg-slate-900 text-sm font-medium">
                  {post.date}
               </span>
               <span className="px-6 py-2 rounded-full border border-slate-900 text-slate-900 text-sm font-medium">
                  {post.tag}
               </span>
            </div>

            <h3 className="text-3xl font-script text-slate-900 leading-tight group-hover:text-primary transition-colors">
               {post.title}
            </h3>
          </div>
        ))}
      </div>

    </div>
  );
}