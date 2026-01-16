import React, { useState, useEffect } from 'react';
import gsapFB from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/app/components/Navbar";
import { FloatingHeader } from "@/app/components/FloatingHeader";
import { Hero } from "@/app/components/Hero";
import { Marquee } from "@/app/components/Marquee";
import { Services } from "@/app/components/Services";
import { Products } from "@/app/components/Products";
import { About } from "@/app/components/About";
import { Team } from "@/app/components/Team";
import { Steps } from "@/app/components/Steps";
import { ServiceShowcase } from "@/app/components/ServiceShowcase";
import { BlogGrid } from "@/app/components/BlogGrid";
import { GalleryGrid } from "@/app/components/GalleryGrid";
import { Newsletter } from "@/app/components/Newsletter";
import { TeamPage } from "@/app/components/TeamPage";
import { NotFound } from "@/app/components/NotFound";
import { Contact } from "@/app/components/Contact";
import "@/styles/fonts.css";

// Register GSAP ScrollTrigger globally
gsapFB.registerPlugin(ScrollTrigger);

export default function App() {
  const [currentView, setView] = useState('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="bg-background min-h-screen text-slate-900 selection:bg-primary selection:text-white overflow-x-hidden flex flex-col">
      
      {/* 
        Using FloatingHeader instead of Navbar for the "Awwwards" look requested.
        The original Navbar is still available if needed: <Navbar currentView={currentView} setView={setView} />
      */}
      <FloatingHeader currentView={currentView} setView={setView} />
      
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <Hero />
            <Marquee />
            <Services />
            <Products />
            <About />
            <Team />
          </>
        )}

        {currentView === 'services' && (
          <>
             <Steps />
             <ServiceShowcase />
          </>
        )}

        {currentView === 'blog' && (
          <BlogGrid />
        )}

        {currentView === 'gallery' && (
          <GalleryGrid />
        )}

        {currentView === 'team' && (
          <TeamPage />
        )}

        {currentView === 'contact' && (
           <Contact />
        )}

        {/* Hidden/Fallback 404 Route */}
        {currentView === 'notFound' && (
           <NotFound onBack={() => setView('home')} />
        )}
      </main>

      {currentView !== 'notFound' && <Newsletter />}
    </div>
  );
}