import React from 'react';
import { Bot, Users, Clock, MapPin } from 'lucide-react';
import aboutlogo from '../components/assets/aboutlogo.png';
export const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Story Section */}
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              AROS Creative Agency was founded on a simple principle: deliver exceptional creative work using the latest AI technology, making professional branding accessible to every business.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We recognized that small and medium businesses often struggle to afford top-tier agency services. By leveraging generative AI for visual production and combining it with expert human strategy, we bridge that gap—offering Fortune 500 quality at accessible rates.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-500/20 rounded-2xl blur-2xl"></div>
            <img 
              src={aboutlogo}
              alt="Team at work" 
              className="relative rounded-2xl shadow-2xl border border-slate-700 w-full"
            />
          </div>
        </div>
      </div>

      {/* Differentiators */}
      <div className="bg-slate-900 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-6 text-brand-500">
                <Bot size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Efficiency</h3>
              <p className="text-slate-400">
                We combine human creativity with AI technology to deliver faster turnaround times without compromising quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-6 text-brand-500">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Full-Service Solution</h3>
              <p className="text-slate-400">
                From initial concept to final execution, we handle every aspect of your digital presence.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-6 text-brand-500">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Local Business Experts</h3>
              <p className="text-slate-400">
                We specialize in helping businesses stand out in crowded digital spaces.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-white text-center mb-16">Our Process</h2>
        <div className="grid md:grid-cols-5 gap-8">
           {[
             { step: "01", title: "Consultation", desc: "Understand your needs" },
             { step: "02", title: "AI Creation", desc: "Generate stunning visuals" },
             { step: "03", title: "Human Polish", desc: "Refine and perfect" },
             { step: "04", title: "Strategy", desc: "Plan for maximum impact" },
             { step: "05", title: "Delivery", desc: "Implement and track" }
           ].map((item, idx) => (
             <div key={idx} className="relative pt-6">
               <div className="text-6xl font-black text-slate-800 absolute -top-4 left-0 -z-10 opacity-50">{item.step}</div>
               <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
               <p className="text-slate-400 text-sm">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>

      {/* Stats/Why Choose Us */}
      <div className="border-t border-slate-800 bg-slate-900/50 py-16">
         <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <Clock className="text-brand-500" size={32} />
              <div>
                <div className="text-2xl font-bold text-white">7-10 Days</div>
                <div className="text-slate-400 text-sm">Average Delivery</div>
              </div>
            </div>
            <div className="h-12 w-px bg-slate-700 hidden md:block"></div>
            {/* <div className="flex items-center gap-4">
              <Users className="text-brand-500" size={32} />
              <div>
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-slate-400 text-sm">Happy Clients</div>
              </div>
            </div> */}
            <div className="h-12 w-px bg-slate-700 hidden md:block"></div>
            <div className="flex items-center gap-4">
              <Bot className="text-brand-500" size={32} />
              <div>
                <div className="text-2xl font-bold text-white">10k+</div>
                <div className="text-slate-400 text-sm">Assets Generated</div>
              </div>
            </div>
         </div>
      </div>
    </div>
  );
};