import content from "@/data/synthesized_content.json";
import { Star } from "lucide-react";

export function Testimonials() {
    return (
        <section className="py-[120px] px-[5%] bg-surface">
            <div className="container mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-[clamp(40px,8vw,80px)] font-display font-bold text-slate-900 tracking-tighter mb-4">
                        Kind Words
                    </h2>
                    <p className="text-slate-500 max-w-xl">
                        See what your neighbors are saying about the Sunrise sparkle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Duplicating the single testimonial for now to fill the grid layout */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-100 flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex gap-1 text-accent">
                                {[...Array(5)].map((_, starI) => <Star key={starI} size={20} fill="currentColor" />)}
                            </div>
                            <p className="text-slate-700 text-lg leading-relaxed font-medium">
                                "{content.testimonials[0].quote}"
                            </p>
                            <div className="mt-auto pt-6 border-t border-slate-50 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-200" /> {/* Avatar Placeholder */}
                                <div>
                                    <h4 className="font-bold text-slate-900">{content.testimonials[0].author}</h4>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider">{content.testimonials[0].role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
