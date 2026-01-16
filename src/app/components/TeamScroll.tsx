import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Placeholder images for the team pills
const teamImages = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522075469751-3a3694c2d628?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
];

export function TeamScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const col1Ref = useRef<HTMLDivElement>(null);
    const col2Ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Pin the container while scrolling through the images
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=150%", // Scroll distance
                scrub: true,
                pin: true,
            }
        });

        // Animate Column 1 UP
        tl.to(col1Ref.current, {
            y: "-20%",
            ease: "none"
        }, 0);

        // Animate Column 2 DOWN (or slower/faster)
        // Actually, usually one starts lower and moves up, or vice versa. 
        // Let's make Col 2 move UP but from a different starting point or speed.
        // User requested "Opposite directions": Col 1 moves Up, Col 2 moves Down
        tl.to(col2Ref.current, {
            y: "20%",
            ease: "none"
        }, 0);

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="h-screen w-full flex items-center justify-center overflow-hidden bg-white py-20 px-[5%]">
            <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center h-full">

                {/* LEFT: Text Content */}
                <div className="flex flex-col justify-center h-full order-2 lg:order-1 relative z-10">
                    <h2 className="text-[clamp(80px,12vw,180px)] font-display font-bold text-primary leading-[0.8] mb-8">
                        The<br />Crew
                    </h2>
                    <div className="w-20 h-2 bg-accent mb-8" />
                    <p className="text-slate-600 text-xl font-sans max-w-md leading-relaxed">
                        Real people, real clean. We are a family of dedicated cleaners who take pride in every sparkle. No hidden contractors, just friendly faces.
                    </p>
                </div>

                {/* RIGHT: Scrolling Pills */}
                <div className="relative h-[120%] -my-[10%] w-full flex gap-6 order-1 lg:order-2 overflow-hidden mask-vertical">
                    {/* Column 1 */}
                    <div ref={col1Ref} className="flex flex-col gap-6 w-1/2 -mt-[20%]">
                        {teamImages.slice(0, 3).map((img, i) => (
                            <div key={i} className="w-full aspect-[2/3] rounded-[100px] overflow-hidden border border-slate-100 shadow-md">
                                <img src={img} className="w-full h-full object-cover" alt={`Team Member ${i}`} />
                            </div>
                        ))}
                        {/* Duplicate for loop illusion if needed, simplfied for now */}
                    </div>

                    {/* Column 2 */}
                    <div ref={col2Ref} className="flex flex-col gap-6 w-1/2 -mt-[50%]">
                        {teamImages.slice(3, 6).map((img, i) => (
                            <div key={i} className="w-full aspect-[2/3] rounded-[100px] overflow-hidden border border-slate-100 shadow-md">
                                <img src={img} className="w-full h-full object-cover" alt={`Team Member ${i + 3}`} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
