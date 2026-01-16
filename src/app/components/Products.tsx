import React from 'react';
import content from "@/data/content.json";

export function Products() {
  return (
    <section className="py-[clamp(60px,8vw,120px)] px-[clamp(20px,5vw,80px)] max-w-[1400px] mx-auto">
      <h2 className="text-[clamp(36px,5vw,72px)] font-script text-slate-900 mb-[clamp(40px,8vw,80px)] text-left md:text-center">
        Explore our products
      </h2>
      
      {/* 
         Mobile: 2 columns (tight grid)
         Tablet: 2 columns
         Desktop: 4 columns
      */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2vw,32px)]">
        {content.products.map((product, index) => (
          <div key={index} className="group cursor-pointer flex flex-col h-full">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[30px] md:rounded-[30px] mb-4 md:mb-6 shadow-sm border border-slate-100 bg-white">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col items-start transition-transform duration-300 group-hover:-translate-y-2 mt-auto">
              <h3 className="text-lg md:text-2xl font-script text-slate-900 mb-1 md:mb-2 leading-tight">{product.title}</h3>
              <div className="flex gap-2 md:gap-4 items-center font-sans w-full flex-wrap">
                <span className="text-primary text-base md:text-lg font-bold">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-slate-400 text-xs md:text-sm line-through decoration-slate-400">{product.oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}