import React from 'react';
import content from "@/data/content.json";
import { Button } from "@/app/components/ui/Button";

interface NotFoundProps {
  onBack: () => void;
}

export function NotFound({ onBack }: NotFoundProps) {
  const { notFound } = content;

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative px-6 py-20 bg-slate-50">
      <div className="relative w-full max-w-lg aspect-square flex items-center justify-center mb-8">
        <img src={notFound.image} alt="404" className="w-full h-full object-contain grayscale opacity-50" />
      </div>

      <h1 className="text-[clamp(100px,20vw,300px)] font-display text-slate-900 text-center leading-none tracking-tighter mix-blend-multiply opacity-20 absolute select-none pointer-events-none">
        404
      </h1>

      <div className="relative z-10 text-center flex flex-col items-center gap-8">
        <h2 className="text-4xl md:text-6xl font-display text-slate-900">
          Page not found
        </h2>
        <Button
          onClick={onBack}
          variant="primary"
          className="px-12 py-5"
        >
          {notFound.cta}
        </Button>
      </div>
    </div>
  );
}