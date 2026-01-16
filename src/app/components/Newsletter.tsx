import React from 'react';
import content from "@/data/content.json";
import { ArrowRight } from "lucide-react";
import imgLogo from "figma:asset/f60cb104a0e2a87476a60f8a5108c622da55bfd8.png";

export function Newsletter() {
   return (
      <div className="bg-slate-50 pt-[120px] border-t border-slate-200 mt-20">
         <div className="max-w-[1600px] mx-auto px-[clamp(20px,5vw,80px)]">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
               <div className="flex flex-col gap-8">
                  <h3 className="text-[clamp(40px,6vw,80px)] font-display text-slate-900 leading-none">
                     Subscribe to our <span className="text-primary">newsletter</span>
                  </h3>
                  <div className="relative max-w-lg">
                     <input
                        type="email"
                        placeholder="Email address"
                        className="w-full bg-transparent border-b-2 border-slate-300 py-6 text-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
                     />
                     <button className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <ArrowRight size={24} />
                     </button>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-12">
                  <div>
                     <h4 className="text-lg font-bold uppercase tracking-widest mb-6">Menu</h4>
                     <div className="flex flex-col gap-4 text-slate-500 text-lg">
                        <a href="#" className="hover:text-primary transition-colors">About</a>
                        <a href="#" className="hover:text-primary transition-colors">Services</a>
                        <a href="#" className="hover:text-primary transition-colors">Team</a>
                        <a href="#" className="hover:text-primary transition-colors">Contact</a>
                     </div>
                  </div>
                  <div>
                     <h4 className="text-lg font-bold uppercase tracking-widest mb-6">Socials</h4>
                     <div className="flex flex-col gap-4 text-slate-500 text-lg">
                        {content.site.socials.map((s: any, i: number) => (
                           <a key={i} href={s.url} className="hover:text-primary transition-colors">{s.platform}</a>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            <div className="w-full overflow-hidden flex justify-center pb-12 opacity-100">
               <img src={imgLogo} alt="Logo" className="w-full h-auto max-h-[400px] object-contain brightness-0 opacity-10" />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-slate-200 text-slate-400 text-sm uppercase tracking-widest">
               <p>© 2026 Sunrise Cleaning. All rights reserved.</p>
               <p>Designed by Justin Reau</p>
            </div>

         </div>
      </div>
   );
}