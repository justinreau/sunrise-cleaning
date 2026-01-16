import React, { useState } from 'react';
import content from "@/data/content.json";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import imgLogo from "figma:asset/f60cb104a0e2a87476a60f8a5108c622da55bfd8.png";
import { Button } from "@/app/components/ui/Button";

interface NavbarProps {
  currentView: string;
  setView: (view: string) => void;
}

export function Navbar({ currentView, setView }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setView(href);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/10 relative z-50 bg-secondary">
        {/* Logo */}
        <div className="flex items-center pr-12 md:border-r border-white/10 h-full py-2 md:py-4">
          <button onClick={() => handleNavClick('home')} className="block w-[100px] md:w-[126px]">
            <img src={imgLogo} alt={content.site.title} className="w-full" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
          {content.navigation.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item.href)}
              className={`transition-colors font-sans text-sm uppercase tracking-wider font-medium ${
                currentView === item.href ? 'text-primary' : 'text-white hover:text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-8 pl-12 border-l border-white/10 h-full py-4">
          <button className="text-white hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <button className="text-white hover:text-primary transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <Button 
            variant="primary" 
            className="px-6 py-3 text-xs"
            onClick={() => handleNavClick('contact')}
          >
            Get in touch
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-secondary z-[100] flex flex-col p-6 transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-16 border-b border-white/10 pb-6">
          <img src={imgLogo} alt="Logo" className="w-[100px]" />
          <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-primary transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-col gap-8 items-center justify-center flex-1">
          {content.navigation.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item.href)}
              className={`text-4xl font-script ${currentView === item.href ? 'text-primary' : 'text-white'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-6 items-center">
            <Button 
                variant="primary" 
                className="w-full py-4"
                onClick={() => handleNavClick('contact')}
            >
                Get in touch
            </Button>
            <div className="flex gap-4 text-white/50">
               {/* Could map social icons here too if needed */}
            </div>
        </div>
      </div>
    </>
  );
}