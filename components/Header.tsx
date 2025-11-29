
import React from 'react';

const BotIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8" />
    <rect x="4" y="12" width="16" height="8" rx="2" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M12 12v-2" />
    <path d="M12 20v-4" />
    <path d="M9 12a3 3 0 0 0-3-3" />
    <path d="M9 12a3 3 0 0 1-3-3" />
    <path d="M15 12a3 3 0 0 0 3-3" />
    <path d="M15 12a3 3 0 0 1 3-3" />
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/50 border-b border-slate-700 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
        <BotIcon />
        <h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          MY NLP Chatbot
        </h1>
      </div>
    </header>
  );
};

export default Header;
