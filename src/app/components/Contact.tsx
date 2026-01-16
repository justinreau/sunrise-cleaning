import React from 'react';
import content from "@/data/content.json";
import { Button } from "@/app/components/ui/Button";

export function Contact() {
   const { site } = content;

   return (
      <div className="py-[120px] max-w-[1600px] mx-auto px-[clamp(20px,5vw,80px)]">
         <div className="text-center mb-[100px]">
            <h1 className="text-[clamp(100px,20vw,350px)] text-primary font-display leading-[0.8] tracking-tighter">
               Contact
            </h1>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
               <div>
                  <h3 className="text-xl uppercase tracking-widest font-bold mb-4">Phone</h3>
                  <p className="text-4xl md:text-6xl font-display text-slate-900">{site.phone}</p>
               </div>
               <div>
                  <h3 className="text-xl uppercase tracking-widest font-bold mb-4">Email</h3>
                  <p className="text-3xl md:text-5xl font-display text-slate-900 break-all">{site.email}</p>
               </div>
               <div>
                  <h3 className="text-xl uppercase tracking-widest font-bold mb-4">Address</h3>
                  {site.address.map((line: any, i: number) => (
                     <p key={i} className="text-2xl md:text-3xl text-slate-600">{line}</p>
                  ))}
               </div>
            </div>

            <form className="flex flex-col gap-8 bg-slate-50 p-8 md:p-16 rounded-[60px]" onSubmit={(e) => e.preventDefault()}>
               <input className="bg-transparent border-b border-slate-300 py-4 text-2xl outline-none focus:border-primary placeholder:text-slate-400" placeholder="Name" />
               <input className="bg-transparent border-b border-slate-300 py-4 text-2xl outline-none focus:border-primary placeholder:text-slate-400" placeholder="Email" />
               <textarea className="bg-transparent border-b border-slate-300 py-4 text-2xl outline-none focus:border-primary placeholder:text-slate-400 min-h-[150px] resize-none" placeholder="Message" />
               <Button className="mt-8 py-6 text-lg uppercase tracking-widest">Send Message</Button>
            </form>
         </div>
      </div>
   );
}