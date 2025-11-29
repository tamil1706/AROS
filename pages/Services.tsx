import React, { useState } from 'react';
import { Check, Loader2, Sparkles, Camera, PenTool, BarChart3, Settings, Cpu, MessageCircle, CreditCard, Lock, Zap } from 'lucide-react';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { generateSampleContent } from '../services/gemini';
import { AISampleResult } from '../types';

export const Services: React.FC = () => {
  // Demo Gen State
  const [demoState, setDemoState] = useState<{
    isLoading: boolean;
    result: AISampleResult | null;
    error: string | null;
    businessName: string;
    productType: string;
    vibe: string;
  }>({
    isLoading: false,
    result: null,
    error: null,
    businessName: '',
    productType: '',
    vibe: ''
  });

  // Payment Modal State
  const [selectedPackage, setSelectedPackage] = useState<{name: string, price: string} | null>(null);
  const [paymentStep, setPaymentStep] = useState<'form' | 'processing' | 'success'>('form');
  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', phone: '' });

  const handleGenerateSample = async (e: React.FormEvent) => {
    e.preventDefault();
    setDemoState(prev => ({ ...prev, isLoading: true, error: null, result: null }));
    
    try {
      const result = await generateSampleContent(demoState.businessName, demoState.productType, demoState.vibe);
      setDemoState(prev => ({ ...prev, isLoading: false, result }));
    } catch (err) {
      setDemoState(prev => ({ ...prev, isLoading: false, error: "Failed to generate sample. Please check your API key or try again." }));
    }
  };

  const handlePackageSelect = (name: string, price: string) => {
    setSelectedPackage({ name, price });
    setPaymentStep('form');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep('processing');
    setTimeout(() => {
      setPaymentStep('success');
    }, 2000);
  };

  const handleWhatsAppRedirect = () => {
    if (!selectedPackage) return;
    const message = `Hi! I've placed an order for the ${selectedPackage.name} (${selectedPackage.price}). My name is ${customerInfo.name}. Please help me complete the payment.`;
    const url = `https://wa.me/15551234567?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pb-24 pt-24">
      {/* Header */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-brand-900/20 blur-[100px] -z-10 rounded-full"></div>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Comprehensive creative solutions combining human expertise with AI efficiency.
          </p>
        </div>
      </div>

      {/* Services List with Glass Cards */}
      <section className="py-12 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Camera, title: "AI Creative Services", desc: "Revolutionary content creation including product photo generation, 8-second AI video reels, 3D renders, and visual enhancements." },
            { icon: PenTool, title: "Graphic Design", desc: "Professional branding, logo design, social media posts, ad creatives, and carousel designs tailored to your identity." },
            { icon: BarChart3, title: "Digital Marketing", desc: "Data-driven content strategy, caption writing, hashtag research, Instagram management, and campaign planning." },
            { icon: Settings, title: "Technical Support", desc: "Website optimization, ongoing maintenance, and updates to keep your digital presence running smoothly." }
          ].map((service, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-3xl flex gap-6 hover:bg-white/5 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0 text-brand-400 shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                <service.icon size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Holographic Pricing Tiers */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-white text-center mb-16">Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <div className="glass-card rounded-3xl p-8 flex flex-col relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
              <h3 className="text-xl font-bold text-slate-300 mb-2">Starter</h3>
              <div className="text-4xl font-display font-bold text-white mb-6">₹3,999<span className="text-lg text-slate-500 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['5 Social Media Posts', '1 AI Video (8 secs)', 'Custom Logo Design', 'Captions & Hashtags'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                    <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                      <Check size={12} className="text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" fullWidth onClick={() => handlePackageSelect('Starter', '₹3,999')}>Choose Starter</Button>
            </div>

            {/* Standard - Featured */}
            <div className="glass-card rounded-3xl p-8 relative transform scale-105 z-10 flex flex-col border-brand-500/30 shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)]">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-400 to-transparent"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-600 to-accent-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-lg flex items-center gap-1">
                <Zap size={12} fill="currentColor" /> POPULAR
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Standard</h3>
              <div className="text-5xl font-display font-bold text-white mb-6 text-glow">₹7,999<span className="text-lg text-slate-500 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['10 Social Media Posts', '2 AI Reels', '5 Ad Creatives', 'Basic Strategy', 'Priority Support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200 text-sm">
                    <div className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/40">
                      <Check size={12} className="text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="primary" fullWidth onClick={() => handlePackageSelect('Standard', '₹7,999')} className="shadow-brand-500/50">Choose Standard</Button>
            </div>

            {/* Premium */}
            <div className="glass-card rounded-3xl p-8 flex flex-col relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
              <h3 className="text-xl font-bold text-slate-300 mb-2">Premium</h3>
              <div className="text-4xl font-display font-bold text-white mb-6">₹14,999<span className="text-lg text-slate-500 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['15 Social Media Posts', '4 AI Reels', 'Full Branding Package', 'Comprehensive Strategy', 'Web Maintenance'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                    <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                      <Check size={12} className="text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" fullWidth onClick={() => handlePackageSelect('Premium', '₹14,999')}>Choose Premium</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment/Checkout Modal */}
      <Modal 
        isOpen={!!selectedPackage} 
        onClose={() => setSelectedPackage(null)}
        title={selectedPackage ? `Get ${selectedPackage.name} Package` : 'Checkout'}
        maxWidth="md"
      >
        {selectedPackage && (
          <div>
            {paymentStep === 'form' && (
              <form onSubmit={handlePaymentSubmit} className="space-y-5">
                <div className="bg-slate-950/50 p-5 rounded-xl border border-white/5 mb-6">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-400">Package Total</span>
                    <span className="text-2xl font-bold text-white">{selectedPackage.price}</span>
                  </div>
                  <div className="text-xs text-brand-400 flex items-center gap-1.5 mt-2">
                    <Lock size={12} /> SSL Secure Encrypted Transaction
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900"
                    value={customerInfo.name}
                    onChange={e => setCustomerInfo({...customerInfo, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5 ml-1">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900"
                    value={customerInfo.email}
                    onChange={e => setCustomerInfo({...customerInfo, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5 ml-1">Phone</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900"
                    value={customerInfo.phone}
                    onChange={e => setCustomerInfo({...customerInfo, phone: e.target.value})}
                  />
                </div>

                <div className="pt-6">
                  <Button fullWidth type="submit" size="lg" variant="glow">
                    Confirm & Pay {selectedPackage.price}
                  </Button>
                  <p className="text-center text-xs text-slate-500 mt-4">
                    Order details will be sent to your WhatsApp for final verification.
                  </p>
                </div>
              </form>
            )}

            {paymentStep === 'processing' && (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-500/20 blur-xl rounded-full"></div>
                  <Loader2 className="animate-spin text-brand-400 mb-6 relative z-10" size={64} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Connecting Securely...</h3>
                <p className="text-slate-400">Please do not close this window</p>
              </div>
            )}

            {paymentStep === 'success' && (
              <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mb-8 border border-green-500/20 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
                  <Check size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Order Initiated!</h3>
                <p className="text-slate-400 mb-8 max-w-xs leading-relaxed">
                  Your request for the <strong>{selectedPackage.name}</strong> package is ready. Please click below to finalize details with our agent.
                </p>
                <button 
                  onClick={handleWhatsAppRedirect}
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-xl flex items-center gap-3 transition-all shadow-lg shadow-[#25D366]/20 w-full justify-center group"
                >
                  <MessageCircle size={24} className="group-hover:scale-110 transition-transform" /> 
                  Finalize on WhatsApp
                </button>
                <button 
                  onClick={() => setSelectedPackage(null)}
                  className="text-slate-500 hover:text-slate-300 text-sm mt-6 underline decoration-slate-700 underline-offset-4"
                >
                  Close window
                </button>
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* Free Sample / Gemini Demo - Terminal Style */}
      <section className="py-24 container mx-auto px-6" id="free-sample">
        <div className="glass-panel rounded-3xl p-1 md:p-1 relative overflow-hidden border border-brand-500/20 shadow-[0_0_50px_-20px_rgba(14,165,233,0.3)]">
          <div className="bg-slate-950/80 rounded-[22px] p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold mb-6 border border-brand-500/20">
                  <Sparkles size={14} /> FREE AI GENERATOR
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Test Drive AROS</h2>
                <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                  Enter your business details below. Our AI will instantly hallucinate a viral marketing concept tailored to your brand identity.
                </p>
                
                <form onSubmit={handleGenerateSample} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Business Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all placeholder:text-slate-700"
                      placeholder="e.g. Lunar Coffee Co."
                      value={demoState.businessName}
                      onChange={(e) => setDemoState({...demoState, businessName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Product/Service</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all placeholder:text-slate-700"
                      placeholder="e.g. Cold Brew Coffee"
                      value={demoState.productType}
                      onChange={(e) => setDemoState({...demoState, productType: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Desired Vibe</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all placeholder:text-slate-700"
                      placeholder="e.g. Minimalist, Energetic, Luxury"
                      value={demoState.vibe}
                      onChange={(e) => setDemoState({...demoState, vibe: e.target.value})}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    fullWidth 
                    size="lg"
                    variant="glow"
                    disabled={demoState.isLoading}
                    className="mt-4"
                  >
                    {demoState.isLoading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="animate-spin" size={20} /> Neural Processing...
                      </span>
                    ) : "Generate AI Concept"}
                  </Button>
                  {demoState.error && (
                     <p className="text-red-400 text-sm mt-4 bg-red-500/10 p-3 rounded-lg border border-red-500/20">{demoState.error}</p>
                  )}
                </form>
              </div>

              {/* Output Console */}
              <div className="bg-[#0c0c0c] rounded-2xl p-8 border border-slate-800 flex flex-col h-full min-h-[400px] shadow-inner relative overflow-hidden font-mono">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-accent-500"></div>
                 <h3 className="text-sm font-bold text-slate-500 mb-6 flex items-center gap-2 uppercase tracking-widest">
                   <Cpu size={16} className="text-brand-500" /> System Output
                 </h3>
                 
                 {demoState.result ? (
                   <div className="space-y-8 animate-fade-in relative z-10">
                     <div>
                       <h4 className="text-xs uppercase text-brand-500 font-bold mb-3 tracking-wider">[ Generated Caption ]</h4>
                       <p className="text-slate-200 text-lg leading-relaxed border-l-2 border-brand-500 pl-4">"{demoState.result.caption}"</p>
                       <p className="text-brand-400 text-sm mt-4 opacity-80">{demoState.result.hashtags}</p>
                     </div>
                     <div className="bg-slate-900/50 p-5 rounded-lg border border-white/5">
                       <h4 className="text-xs uppercase text-accent-500 font-bold mb-3 tracking-wider">[ Visual Prompt ]</h4>
                       <p className="text-slate-400 text-sm italic leading-relaxed">
                         &gt; {demoState.result.visualPrompt}
                       </p>
                     </div>
                     <div className="pt-6 border-t border-slate-900 text-center">
                       <p className="text-xs text-slate-600 mb-4">Want to bring this visual to life?</p>
                       <Button size="sm" variant="outline" onClick={() => handlePackageSelect('Starter', '₹3,999')}>Buy Starter Package</Button>
                     </div>
                   </div>
                 ) : (
                   <div className="flex-grow flex flex-col items-center justify-center text-slate-700">
                     {demoState.isLoading ? (
                       <div className="space-y-6 text-center">
                          <div className="w-16 h-16 border-4 border-slate-800 border-t-brand-500 rounded-full animate-spin mx-auto shadow-[0_0_30px_rgba(14,165,233,0.2)]"></div>
                          <p className="text-brand-500 animate-pulse">Running generative models...</p>
                       </div>
                     ) : (
                       <>
                          <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center mb-6">
                             <Sparkles size={32} className="opacity-20" />
                          </div>
                          <p className="text-center max-w-xs text-sm">Awaiting input parameters to initialize generation sequence.</p>
                       </>
                     )}
                   </div>
                 )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};