import React from 'react';
import content from "@/data/content.json";
import { Facebook, Instagram, Twitter, Dribbble } from "lucide-react";
import imgLogo from "figma:asset/f60cb104a0e2a87476a60f8a5108c622da55bfd8.png";

export function Newsletter() {
  const socialIcons: Record<string, React.ReactNode> = {
    "Facebook": <Facebook size={20} />,
    "Instagram": <Instagram size={20} />,
    "Twitter": <Twitter size={20} />,
    "Dribbble": <Dribbble size={20} />
  };

  return (
    <div className="py-20 border-t border-slate-200 mt-32">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16">
        
        {/* Subscribe Column */}
        <div className="md:col-span-5 flex flex-col gap-8">
           <h3 className="text-3xl font-script text-slate-900">Subscribe to our newsletter</h3>
           <div className="flex flex-col gap-4">
              <div className="relative">
                 <input 
                   type="email" 
                   placeholder="Email here..." 
                   className="w-full bg-transparent border border-slate-300 rounded-full px-8 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary"
                 />
                 <button className="absolute right-2 top-2 bottom-2 bg-primary text-slate-900 rounded-full px-8 font-semibold uppercase text-sm hover:bg-slate-900 hover:text-white transition-colors">
                    Subscribe
                 </button>
              </div>
              <div className="flex items-center gap-3 text-slate-500 text-sm">
                 <div className="w-4 h-4 rounded-full border border-slate-300" />
                 <span>Lorem ipsum dolor sit amet comited</span>
              </div>
           </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2 md:col-start-7 flex flex-col gap-6">
           <h3 className="text-xl font-script text-slate-900">Quick links</h3>
           <div className="flex flex-col gap-3">
              <a href="#" className="text-slate-500 hover:text-primary transition-colors">About us</a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors">Services</a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors">Blog</a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors">Contact us</a>
           </div>
        </div>

        {/* Get in Touch */}
        <div className="md:col-span-3 flex flex-col gap-6">
           <h3 className="text-xl font-script text-slate-900">Get in touch</h3>
           <div className="flex flex-col gap-1 text-slate-900">
              <span className="font-bold text-lg">{content.site.phone}</span>
              <a href={`mailto:${content.site.email}`} className="text-slate-500 hover:text-primary">{content.site.email}</a>
           </div>
           <div className="text-slate-500">
              {content.site.address.map((line, i) => (
                 <p key={i}>{line}</p>
              ))}
           </div>
        </div>

        {/* Socials */}
        <div className="md:col-span-1 flex flex-col items-end gap-6 text-slate-900">
           {content.site.socials.map((social, index) => (
             <a key={index} href={social.url} className="hover:text-primary" aria-label={social.platform}>
               {socialIcons[social.platform] || social.platform}
             </a>
           ))}
        </div>
      </div>

      {/* Giant Logo */}
      <div className="mt-32 px-6">
         <div className="w-full opacity-100">
            {/* Logo forced to black for light mode visibility */}
            <img src={imgLogo} alt={content.site.title} className="w-full h-auto brightness-0" />
         </div>
         <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-slate-400 mt-8 uppercase tracking-widest border-t border-slate-100 pt-8 gap-4 md:gap-0">
            <span>Copyright © 2024 designed by ThemeTechMount</span>
            <div className="flex gap-8">
               <a href="#">Changelog</a>
               <a href="#">Style guide</a>
               <a href="#">Licenses</a>
            </div>
         </div>
      </div>
    </div>
  );
}