import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  
  const variants = {
    primary: "bg-primary text-slate-900 border border-primary hover:bg-slate-900 hover:text-white hover:border-slate-900",
    outline: "bg-transparent text-slate-900 border border-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-900",
    ghost: "bg-transparent text-slate-900 hover:text-primary"
  };

  return (
    <button 
      className={`rounded-full transition-all duration-300 font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}