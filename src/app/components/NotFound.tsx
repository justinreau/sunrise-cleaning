import React from 'react';
import content from "@/data/content.json";
import { Button } from "@/app/components/ui/Button";

interface NotFoundProps {
  onBack: () => void;
}

export function NotFound({ onBack }: NotFoundProps) {
  const { notFound } = content;

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative px-6 py-20">
       <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center mb-12">
          <img src={notFound.image} alt="404" className="w-full h-full object-contain" />
       </div>
       
       <h1 className="text-6xl md:text-8xl font-script text-slate-900 text-center mb-12 relative z-10">
          {notFound.title}
       </h1>

       <Button 
         onClick={onBack}
         variant="primary"
         className="px-8 py-4 text-sm"
       >
          {notFound.cta}
       </Button>
    </div>
  );
}