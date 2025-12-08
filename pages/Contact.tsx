// import React, { useState } from 'react';
// import { Mail, Phone, Clock, Send } from 'lucide-react';
// import { Button } from '../components/Button';

// export const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     business: '',
//     email: '',
//     phone: '',
//     service: 'Starter Package',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Thank you! We've received your request and will contact you shortly.");
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="pb-24 pt-32">
//       <div className="container mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Contact Info */}
//           <div className="relative">
//              {/* Decor */}
//              <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-500/10 rounded-full blur-[60px] pointer-events-none"></div>

//             <h1 className="text-5xl font-display font-black text-white mb-8 tracking-tight">Let's Create <br />Something <span className="text-brand-400">Iconic.</span></h1>
//             <p className="text-xl text-slate-400 mb-12 font-light leading-relaxed">
//               Ready to transform your digital presence? We combine elite human creativity with AI speed.
//             </p>

//             <div className="space-y-8 mb-12">
//               <div className="glass-panel p-6 rounded-2xl flex items-start gap-5 hover:bg-white/5 transition-colors border border-white/5">
//                 <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center text-brand-400 flex-shrink-0 border border-brand-500/20">
//                   <Mail size={24} />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
//                   <p className="text-slate-400">aroscreativeagency@gmail.com</p>
//                   <p className="text-sm text-slate-500 mt-1">Responds within 2-4 hours</p>
//                 </div>
//               </div>
              
//               <div className="glass-panel p-6 rounded-2xl flex items-start gap-5 hover:bg-white/5 transition-colors border border-white/5">
//                 <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center text-brand-400 flex-shrink-0 border border-brand-500/20">
//                   <Phone size={24} />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
//                   <p className="text-slate-400">+1 (555) 123-4567</p>
//                   <p className="text-sm text-slate-500 mt-1">Mon-Fri, 9am - 6pm</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-gradient-to-r from-brand-900/40 to-slate-900/40 border border-brand-500/20 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden">
//                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl"></div>
//               <h4 className="font-bold text-white text-xl mb-3">Not ready to commit?</h4>
//               <p className="text-slate-400 mb-6 text-sm">Experience our quality first. Start with our FREE SAMPLE OFFER - no strings attached!</p>
//               <Button size="md" variant="glow" onClick={() => window.location.hash = '#/services#free-sample'}>Get Free Sample</Button>
//             </div>
//           </div>

//           {/* Form */}
//           <div className="glass-panel p-8 md:p-10 rounded-3xl shadow-2xl relative">
//             <h2 className="text-3xl font-bold text-white mb-8">Send a Message</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Your Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900"
//                     placeholder="John Doe"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Business Name</label>
//                   <input
//                     type="text"
//                     name="business"
//                     required
//                     value={formData.business}
//                     onChange={handleChange}
//                     className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900"
//                     placeholder="Acme Corp"
//                   />
//                 </div>
//               </div>
              
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900"
//                     placeholder="john@example.com"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900"
//                     placeholder="(555) 000-0000"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Interested Service</label>
//                 <div className="relative">
//                   <select
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                     className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all appearance-none cursor-pointer"
//                   >
//                     <option className="bg-slate-900">Starter Package (₹3,999)</option>
//                     <option className="bg-slate-900">Standard Package (₹7,999)</option>
//                     <option className="bg-slate-900">Premium Package (₹14,999)</option>
//                     <option className="bg-slate-900">Free Sample Request</option>
//                     <option className="bg-slate-900">Custom Inquiry</option>
//                   </select>
//                   <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Message</label>
//                 <textarea
//                   name="message"
//                   rows={4}
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900 resize-none"
//                   placeholder="Tell us about your project goals..."
//                 ></textarea>
//               </div>

//               <Button type="submit" fullWidth size="lg" variant="primary">
//                  Send Message <Send size={18} className="ml-2" />
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState } from 'react';
import { Mail, Phone, Send, Loader2, CheckCircle, Instagram, Clock } from 'lucide-react';
import { Button } from '../components/Button';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    serviceInterest: 'AI Creative Services',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // -------------------------------------------------------------------------
    // IMPORTANT: Replace these with your actual EmailJS credentials
    // Create an account at https://www.emailjs.com/
    // -------------------------------------------------------------------------
    // const serviceId = 'service_51vjej7';
    // const templateId = 'template_p9u8csa';
    // const publicKey = '6HFeju5VXj2feg34S';
 const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // const templateParams = {
    //   to_name: "AROS Agency",
    //   from_name: formData.name,
    //   from_email: formData.email,
    //   business_name: formData.businessName,
    //   phone: formData.phone,
    //   service_type: formData.serviceInterest,
    //   message: formData.message,
    // };
const templateParams = {
  from_name: formData.name,
  from_email: formData.email,
  phone: formData.phone,
  business_name: formData.businessName,
  service_type: formData.serviceInterest,
  message: formData.message
};
    try {
      // Simulation mode: If credentials are standard placeholders, simulate a delay
      // if (serviceId === 'service_51vjej7') {
      //    await new Promise(resolve => setTimeout(resolve, 2000));
      //    console.warn("EmailJS credentials not configured. Simulating success.");
      //    setStatus('success');
      // } else {
      //    await emailjs.send(serviceId, templateId, templateParams, publicKey);
      //    setStatus('success');
      // }
await emailjs.send(serviceId, templateId, templateParams, publicKey);
setStatus('success');

      setFormData({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        serviceInterest: 'AI Creative Services',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div className="container mx-auto px-6 text-center mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-500/20 blur-[100px] rounded-full -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tight">Get In Touch</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
          Ready to transform your digital presence? Let's start with a free sample or discuss your custom needs.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info Side */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:bg-white/5 transition-colors">
               <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-brand-400 shrink-0">
                     <Mail size={20} />
                   </div>
                   <div>
                     <p className="text-slate-500 text-sm mb-1">Email Us</p>
                     <a href="mailto:aroscreativeagency@gmail.com" className="text-white hover:text-brand-400 transition-colors">aroscreativeagency@gmail.com </a>
                   </div>
                 </div>
                 
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-brand-400 shrink-0">
                     <Phone size={20} />
                   </div>
                   <div>
                     <p className="text-slate-500 text-sm mb-1">Call Us</p>
                     <p className="text-white">+91 8667786493</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-brand-400 shrink-0">
                     <Instagram size={20} />
                   </div>
                   <div>
                     <p className="text-slate-500 text-sm mb-1">Follow Us</p>
                     <a href="https://www.instagram.com/aros_creative_agency?igsh=MTBmN2VodGc2M3R4aA==" className="text-white hover:text-brand-400 transition-colors">aros_creative_agency</a>
                   </div>
                 </div>
               </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden bg-brand-900/10 border-brand-500/20">
               <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-400 shrink-0 animate-pulse">
                   <Clock size={20} />
                 </div>
                 <div>
                   <h4 className="text-white font-bold mb-1">Response Time</h4>
                   <p className="text-slate-400 text-sm">We typically respond within 2-4 hours during business days. Our AI agents monitor urgent requests 24/7.</p>
                 </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-card p-8 md:p-10 rounded-[2.5rem] relative">
            <div className="absolute top-0 right-0 p-10 opacity-20 pointer-events-none">
              <Send size={120} className="text-white" />
            </div>

            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-in-up">
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-6 border border-green-500/20 shadow-[0_0_40px_rgba(74,222,128,0.3)]">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-slate-400 max-w-xs mb-8">
                  Thank you for reaching out. A member of our team will get back to you shortly.
                </p>
                <Button variant="outline" onClick={() => setStatus('idle')}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900"
                      placeholder="Company Ltd"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Interested Service</label>
                  <div className="relative">
                    <select
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900 appearance-none cursor-pointer"
                    >
                      <option>AI Creative Services</option>
                      <option>Graphic Design</option>
                      <option>Digital Marketing</option>
                      <option>Technical Support</option>
                      <option>Full Package</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all focus:bg-slate-900 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  fullWidth 
                  size="lg" 
                  variant="glow"
                  disabled={status === 'sending'}
                  className="mt-2"
                >
                  {status === 'sending' ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin" size={20} /> Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send size={18} />
                    </span>
                  )}
                </Button>
                
                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
            <div className="inline-block glass-panel px-8 py-4 rounded-full border border-brand-500/30">
                <span className="text-slate-300">Not ready to commit? </span>
                <a href="#/" className="text-brand-400 font-bold hover:text-white transition-colors ml-1">Start with a FREE SAMPLE offer</a>
            </div>
        </div>
      </div>
    </div>
  );
};