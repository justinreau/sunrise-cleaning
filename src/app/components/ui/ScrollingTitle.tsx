import React, { useRef } from 'react';
import gsapFB from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from "@/lib/utils";

interface ScrollingTitleProps {
    text: string;
    direction?: 'left' | 'right';
    className?: string;
}

export function ScrollingTitle({ text, direction = 'left', className }: ScrollingTitleProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!trackRef.current) return;

        const width = trackRef.current.scrollWidth / 2;
        const duration = 20;

        gsapFB.to(trackRef.current, {
            x: direction === 'left' ? -width : 0,
            startAt: { x: direction === 'left' ? 0 : -width },
            duration: duration,
            ease: "linear",
            repeat: -1
        });
    }, { scope: containerRef });

    const repeatedText = Array(4).fill(text).map((t, i) => (
        <span key={i} className="flex items-center">
            <span className="px-[4vw] whitespace-nowrap">
                {t}
            </span>
            <span className="text-slate-300 opacity-50 font-light">/</span>
        </span>
    ));

    return (
        <div ref={containerRef} className="w-full overflow-hidden py-8 md:py-12 bg-white/50 backdrop-blur-sm border-y border-slate-100 mb-12">
            <div
                ref={trackRef}
                className={cn(
                    // FORCE TEAL COLOR: #00BBA7
                    "flex w-fit items-center text-[clamp(4rem,10vw,8rem)] leading-none font-display font-black uppercase text-[#00BBA7] tracking-tighter",
                    className
                )}
            >
                {repeatedText}
            </div>
        </div>
    );
}
