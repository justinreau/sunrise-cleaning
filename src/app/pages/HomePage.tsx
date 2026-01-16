
import React from 'react';
import { Hero } from "@/app/components/Hero";
import { Marquee } from "@/app/components/Marquee";
import { Services } from "@/app/components/Services";
import { Products } from "@/app/components/Products";
import { About } from "@/app/components/About";
import { Team } from "@/app/components/Team";
import { GalleryGrid } from "@/app/components/GalleryGrid";

export function HomePage() {
    return (
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
}
