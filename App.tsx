
import React from 'react';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-slate-800 text-white min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-2 sm:p-4">
        <div className="w-full max-w-4xl h-[calc(100vh-100px)] sm:h-[calc(100vh-120px)] flex flex-col bg-slate-900/80 rounded-2xl shadow-2xl border border-slate-700 backdrop-blur-sm">
          <ChatInterface />
        </div>
      </main>
    </div>
  );
};

export default App;
