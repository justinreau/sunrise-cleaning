import React, { useState, useEffect } from 'react';
import gsapFB from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from '@studio-freight/react-lenis';
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

gsapFB.registerPlugin(ScrollTrigger);

export default function App() {
  const [currentView, setView] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <div className="bg-background min-h-screen text-slate-900 selection:bg-primary selection:text-white overflow-x-hidden flex flex-col">

        <FloatingHeader currentView={currentView} setView={setView} />

        <main className="flex-1 relative z-10">
          {currentView === 'home' && (
            <>
              <Hero />
              <Marquee />
              <Services />
              <Products />
              <About />
              <Team />
              <GalleryGrid />
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

          {currentView === 'about' && (
            <About />
          )}

          {currentView === 'contact' && (
            <Contact />
          )}

          {currentView === 'notFound' && (
            <NotFound onBack={() => setView('home')} />
          )}
        </main>

        {currentView !== 'notFound' && <Newsletter />}
      </div>
    </ReactLenis>
  );
}