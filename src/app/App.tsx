import React, { useEffect } from 'react';
import gsapFB from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from '@studio-freight/react-lenis';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// Components
import { FloatingHeader } from "@/app/components/FloatingHeader";
import { Newsletter } from "@/app/components/Newsletter";
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
import { TeamPage } from "@/app/components/TeamPage";
import { Contact } from "@/app/components/Contact";
import { NotFound } from "@/app/components/NotFound";
import "@/styles/fonts.css";

gsapFB.registerPlugin(ScrollTrigger);

// 1. Define the Home Page Wrapper (Internal to avoid missing file error)
const HomePage = () => (
  <>
    <Hero />
    <Marquee />
    <Services />
    <Products />
    <About />
    <Team />
    <GalleryGrid />
  </>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate(); // Hook to help with navigation logic if needed

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <div className="bg-background min-h-screen text-slate-900 selection:bg-primary selection:text-white overflow-x-hidden flex flex-col">
        <ScrollToTop />

        {/* FIX 1: Pass currentView prop so the header knows where we are */}
        <FloatingHeader currentView={pathname.replace('/', '') || 'home'} />

        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<><Steps /><ServiceShowcase /></>} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/blog" element={<BlogGrid />} />
            <Route path="/gallery" element={<GalleryGrid />} />
            <Route path="/contact" element={<Contact />} />

            {/* FIX 2: Add missing About route */}
            <Route path="/about" element={<About />} />

            {/* FIX 3: Pass onBack prop so the button works */}
            <Route path="*" element={<NotFound onBack={() => window.location.href = '/'} />} />
          </Routes>
        </main>

        <Newsletter />
      </div>
    </ReactLenis>
  );
}