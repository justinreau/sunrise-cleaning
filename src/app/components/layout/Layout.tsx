import React, { forwardRef } from 'react';
import { cn } from "@/lib/utils";

// 1. SECTION: The horizontal stripe
// Handles vertical padding and flow. 
export const Section = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((
    { className, children, ...props }, ref
) => (
    <section
        ref={ref}
        className={cn("w-full py-[clamp(60px,8vw,120px)] relative", className)}
        {...props}
    >
        {children}
    </section>
));
Section.displayName = "Section";

// 2. CONTAINER: The max-width constraint
// Handles the "1400px" rule so you never have to type it again.
export const Container = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((
    { className, children, ...props }, ref
) => (
    <div
        ref={ref}
        className={cn("w-full max-w-[1400px] mx-auto px-[clamp(20px,5vw,80px)]", className)}
        {...props}
    >
        {children}
    </div>
));
Container.displayName = "Container";

// 3. GRID: The 12-column brutalist engine
// Handles the gap and grid logic.
export const Grid = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((
    { className, children, ...props }, ref
) => (
    <div
        ref={ref}
        className={cn("grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12", className)}
        {...props}
    >
        {children}
    </div>
));
Grid.displayName = "Grid";
