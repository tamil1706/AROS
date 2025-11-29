import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  // Base styles including 3D press effect
  const baseStyles = "relative inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-[0.98]";
  
  const variants = {
    primary: "bg-gradient-to-b from-brand-400 to-brand-600 text-white shadow-[0_10px_20px_-10px_rgba(14,165,233,0.5)] border-t border-white/20 hover:shadow-[0_15px_30px_-10px_rgba(14,165,233,0.6)] hover:brightness-110",
    glow: "bg-black text-white border border-brand-500/50 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] hover:border-brand-400",
    secondary: "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 hover:border-slate-600 shadow-lg",
    outline: "border border-slate-700 text-slate-300 hover:border-brand-500 hover:text-brand-400 bg-transparent hover:bg-brand-500/5",
    ghost: "text-slate-400 hover:text-white hover:bg-slate-800/50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {/* Glossy highlight for 3D effect */}
      {(variant === 'primary' || variant === 'glow') && (
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-xl pointer-events-none"></div>
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};