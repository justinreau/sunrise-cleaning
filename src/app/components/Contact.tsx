import React from 'react';
import content from "@/data/content.json";
import { Button } from "@/app/components/ui/Button";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  const { site } = content;

  return (
    <div className="py-20 max-w-[1400px] mx-auto px-6 min-h-[80vh] flex flex-col justify-center">
      <div className="text-center mb-20">
         <h1 className="text-[100px] md:text-[200px] text-primary font-display leading-none opacity-90">Contact</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
         {/* Contact Info */}
         <div className="flex flex-col gap-12">
            <div className="space-y-4">
               <h3 className="text-4xl font-script text-slate-900">Get in touch</h3>
               <p className="text-slate-500 leading-relaxed max-w-md">
                 Have a question or want to book an appointment? We're here to help you look and feel your best.
               </p>
            </div>

            <div className="space-y-8">
               <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all text-slate-900 group-hover:text-white">
                     <Phone size={20} />
                  </div>
                  <div>
                     <p className="text-sm text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                     <p className="text-xl text-slate-900">{site.phone}</p>
                  </div>
               </div>

               <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all text-slate-900 group-hover:text-white">
                     <Mail size={20} />
                  </div>
                  <div>
                     <p className="text-sm text-slate-400 uppercase tracking-widest mb-1">Email</p>
                     <p className="text-xl text-slate-900">{site.email}</p>
                  </div>
               </div>

               <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all text-slate-900 group-hover:text-white">
                     <MapPin size={20} />
                  </div>
                  <div>
                     <p className="text-sm text-slate-400 uppercase tracking-widest mb-1">Location</p>
                     {site.address.map((line, i) => (
                        <p key={i} className="text-xl text-slate-900">{line}</p>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* Form */}
         <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-200">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                     <label className="text-sm uppercase tracking-widest text-slate-500">Name</label>
                     <input type="text" className="bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-300" placeholder="Your name" />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="text-sm uppercase tracking-widest text-slate-500">Phone</label>
                     <input type="tel" className="bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-300" placeholder="Your phone" />
                  </div>
               </div>
               
               <div className="flex flex-col gap-2">
                  <label className="text-sm uppercase tracking-widest text-slate-500">Email</label>
                  <input type="email" className="bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-300" placeholder="Your email" />
               </div>

               <div className="flex flex-col gap-2">
                  <label className="text-sm uppercase tracking-widest text-slate-500">Message</label>
                  <textarea className="bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors resize-none h-32 placeholder:text-slate-300" placeholder="How can we help?" />
               </div>

               <div className="mt-4">
                  <Button variant="primary" className="w-full py-4 text-sm">Send Message</Button>
               </div>
            </form>
         </div>
      </div>
    </div>
  );
}