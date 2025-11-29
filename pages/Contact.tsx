import React, { useState } from 'react';
import { Mail, Phone, Clock, Send } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    service: 'Starter Package',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We've received your request and will contact you shortly.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pb-24 pt-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="relative">
             {/* Decor */}
             <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-500/10 rounded-full blur-[60px] pointer-events-none"></div>

            <h1 className="text-5xl font-display font-black text-white mb-8 tracking-tight">Let's Create <br />Something <span className="text-brand-400">Iconic.</span></h1>
            <p className="text-xl text-slate-400 mb-12 font-light leading-relaxed">
              Ready to transform your digital presence? We combine elite human creativity with AI speed.
            </p>

            <div className="space-y-8 mb-12">
              <div className="glass-panel p-6 rounded-2xl flex items-start gap-5 hover:bg-white/5 transition-colors border border-white/5">
                <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center text-brand-400 flex-shrink-0 border border-brand-500/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                  <p className="text-slate-400">contact@aroscreative.com</p>
                  <p className="text-sm text-slate-500 mt-1">Responds within 2-4 hours</p>
                </div>
              </div>
              
              <div className="glass-panel p-6 rounded-2xl flex items-start gap-5 hover:bg-white/5 transition-colors border border-white/5">
                <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center text-brand-400 flex-shrink-0 border border-brand-500/20">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                  <p className="text-sm text-slate-500 mt-1">Mon-Fri, 9am - 6pm</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-brand-900/40 to-slate-900/40 border border-brand-500/20 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl"></div>
              <h4 className="font-bold text-white text-xl mb-3">Not ready to commit?</h4>
              <p className="text-slate-400 mb-6 text-sm">Experience our quality first. Start with our FREE SAMPLE OFFER - no strings attached!</p>
              <Button size="md" variant="glow" onClick={() => window.location.hash = '#/services#free-sample'}>Get Free Sample</Button>
            </div>
          </div>

          {/* Form */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl shadow-2xl relative">
            <h2 className="text-3xl font-bold text-white mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Business Name</label>
                  <input
                    type="text"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Interested Service</label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option className="bg-slate-900">Starter Package (₹3,999)</option>
                    <option className="bg-slate-900">Standard Package (₹7,999)</option>
                    <option className="bg-slate-900">Premium Package (₹14,999)</option>
                    <option className="bg-slate-900">Free Sample Request</option>
                    <option className="bg-slate-900">Custom Inquiry</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900 resize-none"
                  placeholder="Tell us about your project goals..."
                ></textarea>
              </div>

              <Button type="submit" fullWidth size="lg" variant="primary">
                 Send Message <Send size={18} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};