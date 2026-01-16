import React from 'react';
import content from "@/data/content.json";

export function Steps() {
  return (
    <div className="py-20 relative">
      <h2 className="text-7xl font-script text-slate-900 text-center mb-16">Steps</h2>
      
      {/* Horizontal Line behind */}
      <div className="absolute top-[55%] left-0 w-full h-[1px] bg-slate-200 -z-0 hidden md:block" />

      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto px-4 gap-8 md:gap-4 relative z-10">
        {content.steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center gap-6">
            <div className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden border border-primary p-2 bg-white shadow-md">
               <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
               </div>
            </div>
            <h3 className="text-3xl font-script text-slate-900">{step.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}