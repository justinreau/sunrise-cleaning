import React, { useState } from 'react';
import content from "@/data/content.json";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';

export function FloatingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = content.navigation;

  const isActive = (href: string) => {
    if (href === 'home') return location.pathname === '/';
    return location.pathname === `/${href}`;
  };

  const PortalOverlay = (): JSX.Element | null => {
    if (typeof document === 'undefined') return null;
    return createPortal(
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[9999] bg-primary flex flex-col p-6 text-slate-900"
      >
        <div className="flex justify-between items-center mb-12">
          <span className="font-display text-2xl font-bold tracking-tight">MENU</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-14 h-14 rounded-full border border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          {navItems.map((item, i) => (
            <Link
              key={item.label}
              to={item.href === 'home' ? '/' : `/${item.href}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-left text-[clamp(3rem,10vw,6rem)] font-display font-bold leading-none hover:pl-8 transition-all duration-300 border-b border-slate-900/10 pb-4"
            >
              <span className="text-base font-sans font-normal mr-8 opacity-50 align-top">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </motion.div>,
      document.body
    ) as unknown as JSX.Element;
  };

  return (
    <>
      <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto bg-white/80 backdrop-blur-xl rounded-full p-2 pl-8 pr-2 shadow-2xl border border-white/20 flex items-center justify-between w-[90%] md:w-auto md:min-w-[600px] gap-8">

          <Link to="/" className="font-display font-bold text-2xl tracking-tighter text-slate-900">
            {content.site.title.toUpperCase()}
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href === 'home' ? '/' : `/${item.href}`}
                className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${isActive(item.href)
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-colors md:hidden" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <Link to="/contact" className="hidden md:flex px-8 py-3 bg-primary rounded-full text-slate-900 font-bold uppercase tracking-wider text-sm hover:bg-slate-900 hover:text-white transition-colors">
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <AnimatePresence>{mobileMenuOpen && <PortalOverlay />}</AnimatePresence>
    </>
  );
}