import React, { useRef } from 'react';
import { cn } from "@/lib/utils";
import gsapFB from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsapFB.registerPlugin(ScrollTrigger);

// 1. SECTION HEADER (The "Teal Slide-In")
export function SectionHeader({ children, className }: { children: React.ReactNode, className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        gsapFB.from(textRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="w-full py-8 mb-12 overflow-hidden">
            <h2
                ref={textRef}
                className={cn(
                    "text-[clamp(3.5rem,8vw,8rem)] leading-none font-display font-black uppercase text-[#00BBA7] tracking-tighter whitespace-nowrap",
                    className
                )}
            >
                {children}
            </h2>
        </div>
    );
}

// 2. CARD HEADING (For items inside grids)
export function CardHeading({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h3 className={cn("text-3xl md:text-5xl font-display font-black uppercase text-slate-900 tracking-tight", className)}>
            {children}
        </h3>
    );
}

// 3. BODY TEXT (Standard paragraphs)
export function BodyText({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <p className={cn("text-lg md:text-xl text-slate-500 font-sans leading-relaxed", className)}>
            {children}
        </p>
    );
}

// 4. LABEL (Small uppercase tags)
export function Label({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <span className={cn("text-sm font-bold uppercase tracking-widest text-[#00BBA7] mb-2 block", className)}>
            {children}
        </span>
    );
}
