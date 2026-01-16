import React, { useState } from 'react';
import content from "@/data/content.json";
import { Button } from "@/app/components/ui/Button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { createPortal } from 'react-dom';

interface FloatingHeaderProps {
  currentView: string;
  setView: (view: string) => void;
}

export function FloatingHeader({ currentView, setView }: FloatingHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = content.navigation;

  const handleNavClick = (href: string) => {
    setView(href);
    setMobileMenuOpen(false);
  };

  // Helper to render portal content safely
  const PortalOverlay = () => {
    if (typeof document === 'undefined') return null;
    
    return createPortal(
      <motion.div 
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[9999] bg-secondary flex flex-col p-6"
      >
        {/* Close Button Header */}
        <div className="flex justify-start mb-12">
            <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-200 transition-colors"
            >
                <X size={24} className="text-slate-900" />
            </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col flex-1">
            {navItems.map((item) => (
                <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-[clamp(2rem,8vw,4rem)] font-script text-slate-900 py-4 md:py-6 border-b border-slate-200 hover:text-primary hover:pl-4 transition-all duration-300"
                >
                {item.label}
                </button>
            ))}
        </nav>

        {/* Bottom Info */}
        <div className="mt-auto pt-8 border-t border-slate-200 text-slate-500 font-sans text-sm">
            <p className="mb-2 uppercase tracking-widest text-xs font-bold text-slate-900">Get in touch</p>
            <p>{content.site.email}</p>
            <p>{content.site.phone}</p>
        </div>
      </motion.div>,
      document.body
    );
  };

  return (
    <>
      {/* 
        Header Container
        - Z-Index 50 to stay above standard content
        - Fixed positioning for "floating" effect
        - Uses strict layout constraints (max-w-[1400px] equivalent logic)
      */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto bg-white/90 backdrop-blur-md rounded-full p-2 pl-4 md:pl-6 pr-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-slate-900/5 flex items-center justify-between w-full md:w-auto md:min-w-[600px] max-w-[1400px]">
          
          {/* Mobile: Hamburger (Left) */}
          <div className="md:hidden flex-1 flex justify-start">
            <button 
                className="w-10 h-10 flex items-center justify-center text-slate-900 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(true)}
            >
                <Menu size={24} />
            </button>
          </div>

          {/* Logo (Center) - width auto to not stretch */}
          <button 
             onClick={() => handleNavClick('home')}
             className="font-display font-bold text-xl tracking-tight text-slate-900 shrink-0 md:mr-8"
          >
             {content.site.title.toUpperCase()}
          </button>

          {/* Desktop Nav (Center/Right) */}
          <div className="hidden md:flex bg-[#F4F5F7] rounded-full px-2 py-1.5 gap-1 shrink-0">
             {navItems.map((item) => (
               <button
                 key={item.label}
                 onClick={() => handleNavClick(item.href)}
                 className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                   currentView === item.href 
                     ? 'bg-white shadow-sm text-slate-900' 
                     : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                 }`}
               >
                 {item.label}
               </button>
             ))}
          </div>

          {/* Action / Spacer (Right) */}
          <div className="flex-1 md:flex-none flex justify-end">
            <Button 
                variant="primary"
                className="hidden md:block bg-slate-800 hover:bg-slate-700 text-white border-none rounded-full px-6 py-3 text-xs md:text-sm font-bold tracking-wider shrink-0 ml-4"
                onClick={() => handleNavClick('contact')}
            >
                BOOK NOW
            </Button>
            {/* Empty div for mobile flex balance if needed, or keeping it empty ensures center logo remains centered relative to container */}
             <div className="md:hidden w-10" />
          </div>

        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && <PortalOverlay />}
      </AnimatePresence>
    </>
  );
}