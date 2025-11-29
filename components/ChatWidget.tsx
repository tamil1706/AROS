import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';
import { chatWithAI } from '../services/gemini';
import { ChatMessage } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Greetings. I am Aros, your advanced creative interface. How may I assist in elevating your brand today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await chatWithAI(userMsg.text, messages);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I am encountering a neural network error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/15551234567?text=Hi, I was chatting with your AI bot and would like to speak to a human.`, '_blank');
  };

  return (
    <>
      {/* 3D Orb Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.5)] ${
          isOpen 
            ? 'bg-slate-800 text-white rotate-90 border border-slate-600' 
            : 'bg-gradient-to-br from-brand-400 to-brand-700 text-white hover:scale-110 hover:shadow-[0_0_30px_rgba(14,165,233,0.8)] border-t border-white/30'
        }`}
      >
        {isOpen ? <X size={28} /> : (
          <div className="relative">
            <MessageCircle size={30} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
        )}
      </button>

      {/* Glass Panel Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[550px] max-h-[calc(100vh-8rem)] glass-panel rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up border border-white/10">
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-brand-900/50 to-slate-900/50 border-b border-white/5 flex items-center justify-between backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-accent-600 flex items-center justify-center shadow-lg">
                <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
                <Bot size={20} className="text-white relative z-10" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base tracking-wide">AROS AI</h3>
                <span className="flex items-center gap-1.5 text-xs text-brand-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
                  Online & Active
                </span>
              </div>
            </div>
            <button 
              onClick={openWhatsApp}
              className="text-xs bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/20 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 font-medium"
              title="Connect on WhatsApp"
            >
              <MessageCircle size={14} /> Human Support
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-950/30">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-lg backdrop-blur-sm ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-br from-brand-500 to-brand-600 text-white rounded-tr-sm border border-brand-400/20' 
                      : 'bg-slate-800/80 text-slate-200 rounded-tl-sm border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/60 border border-white/5 p-4 rounded-2xl rounded-tl-sm flex gap-2 items-center">
                  <Sparkles size={14} className="text-brand-400 animate-pulse" />
                  <span className="text-xs text-brand-300">Processing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-slate-900/80 border-t border-white/5 flex gap-3 backdrop-blur-xl">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-500/50 focus:bg-slate-900/80 transition-all shadow-inner placeholder:text-slate-600"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-brand-500 hover:bg-brand-400 text-white p-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-brand-500/25 active:scale-95"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};