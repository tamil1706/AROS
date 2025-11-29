
import React from 'react';

const BotIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8" />
    <rect x="4" y="12" width="16" height="8" rx="2" />
    <path d="M2 12h2" /><path d="M20 12h2" /><path d="M12 12v-2" />
    <path d="M12 20v-4" /><path d="M9 12a3 3 0 0 0-3-3" /><path d="M9 12a3 3 0 0 1-3-3" />
    <path d="M15 12a3 3 0 0 0 3-3" /><path d="M15 12a3 3 0 0 1 3-3" />
  </svg>
);

const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex items-start gap-3 justify-start">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400">
          <BotIcon />
        </div>
      <div className="bg-slate-700 rounded-2xl rounded-bl-none px-5 py-4 flex items-center space-x-2">
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
