// import React, { useState, useEffect } from 'react';
// import { NavLink as RouterNavLink, Outlet, useLocation } from 'react-router-dom';
// import { Menu, X, Cpu, Instagram, Mail, Phone, ChevronRight } from 'lucide-react';
// import { Button } from './Button';
// import { ChatWidget } from './ChatWidget';

// export const Layout: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [location]);

//   const navLinks = [
//     { label: 'Home', path: '/' },
//     { label: 'Services', path: '/services' },
//     { label: 'Portfolio', path: '/portfolio' },
//     { label: 'About', path: '/about' },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200 selection:bg-brand-500 selection:text-white">
//       {/* Floating Glass Navbar */}
//       <nav 
//         className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
//           scrolled ? 'top-4 px-4' : 'top-0 px-0'
//         }`}
//       >
//         <div className={`mx-auto max-w-7xl transition-all duration-500 ${
//           scrolled 
//             ? 'glass-panel rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-3 px-6' 
//             : 'bg-transparent py-6 px-6'
//         }`}>
//           <div className="flex justify-between items-center">
//             <RouterNavLink to="/" className="flex items-center gap-2 group">
//               <div className="relative w-10 h-10 flex items-center justify-center">
//                 <div className="absolute inset-0 bg-brand-500 rounded-xl rotate-45 opacity-20 group-hover:rotate-90 transition-transform duration-500"></div>
//                 <div className="absolute inset-0 bg-brand-500 rounded-xl rotate-45 blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
//                 <Cpu className="relative text-brand-400 w-6 h-6 z-10" />
//               </div>
//               <span className="text-2xl font-display font-bold text-white tracking-tight">
//                 AROS<span className="text-brand-400">.AI</span>
//               </span>
//             </RouterNavLink>

//             {/* Desktop Nav */}
//             <div className="hidden md:flex items-center gap-1">
//               <div className="flex items-center bg-slate-900/40 rounded-full border border-white/5 p-1 mr-4 backdrop-blur-sm">
//                 {navLinks.map((link) => (
//                   <RouterNavLink
//                     key={link.path}
//                     to={link.path}
//                     className={({ isActive }) =>
//                       `relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                         isActive 
//                           ? 'text-white bg-slate-800 shadow-inner' 
//                           : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
//                       }`
//                     }
//                   >
//                     {link.label}
//                   </RouterNavLink>
//                 ))}
//               </div>
//               <RouterNavLink to="/contact">
//                 <Button size="sm" variant="primary" className="shadow-lg shadow-brand-500/20">
//                   Get Started <ChevronRight size={14} className="ml-1" />
//                 </Button>
//               </RouterNavLink>
//             </div>

//             {/* Mobile Menu Toggle */}
//             <button 
//               className="md:hidden text-slate-300 hover:text-white p-2"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Nav Overlay */}
//         {isMenuOpen && (
//           <div className="md:hidden absolute top-full left-4 right-4 mt-2 glass-panel rounded-2xl p-6 flex flex-col gap-4 shadow-2xl animate-fade-in-up border border-white/10">
//             {navLinks.map((link) => (
//               <RouterNavLink
//                 key={link.path}
//                 to={link.path}
//                 className={({ isActive }) =>
//                   `text-lg font-medium py-3 px-4 rounded-xl transition-all ${
//                     isActive ? 'bg-brand-500/10 text-brand-400' : 'text-slate-300 hover:bg-slate-800/50'
//                   }`
//                 }
//               >
//                 {link.label}
//               </RouterNavLink>
//             ))}
//             <div className="h-px bg-slate-800 my-2"></div>
//             <RouterNavLink to="/contact">
//               <Button fullWidth variant="glow">Start Project</Button>
//             </RouterNavLink>
//           </div>
//         )}
//       </nav>

//       <main className="flex-grow">
//         <Outlet />
//       </main>

//       <ChatWidget />

//       <footer className="relative bg-slate-950 pt-20 pb-10 overflow-hidden">
//         {/* Footer Background Glow */}
//         <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-brand-900/20 to-transparent pointer-events-none"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-600/10 rounded-full blur-[100px]"></div>
//         <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-600/10 rounded-full blur-[100px]"></div>

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="grid md:grid-cols-4 gap-12 mb-12">
//             <div className="col-span-1 md:col-span-2">
//               <div className="flex items-center gap-2 text-2xl font-display font-bold text-white tracking-tighter mb-6">
//                 <Cpu className="text-brand-400 w-6 h-6" />
//                 AROS<span className="text-brand-400">.AI</span>
//               </div>
//               <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
//                 Pioneering the future of digital creativity. We blend neural networks with human artistry to forge brands that don't just exist—they dominate.
//               </p>
//               <div className="flex gap-4">
//                 <a href="#" className="w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white hover:border-brand-500 hover:-translate-y-1 transition-all duration-300 shadow-lg">
//                   <Instagram size={20} />
//                 </a>
//                 <a href="mailto:contact@aroscreative.com" className="w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white hover:border-brand-500 hover:-translate-y-1 transition-all duration-300 shadow-lg">
//                   <Mail size={20} />
//                 </a>
//               </div>
//             </div>
            
//             <div>
//               <h4 className="text-white font-bold mb-6 tracking-wide">Services</h4>
//               <ul className="space-y-4 text-slate-400">
//                 <li><RouterNavLink to="/services" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-500 rounded-full"></span> AI Product Visuals</RouterNavLink></li>
//                 <li><RouterNavLink to="/services" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-500 rounded-full"></span> Graphic Design</RouterNavLink></li>
//                 <li><RouterNavLink to="/services" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-500 rounded-full"></span> Digital Marketing</RouterNavLink></li>
//                 <li><RouterNavLink to="/services" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-500 rounded-full"></span> Web Support</RouterNavLink></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-white font-bold mb-6 tracking-wide">Contact</h4>
//               <ul className="space-y-4 text-slate-400">
//                 <li className="flex items-center gap-3 group">
//                   <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center group-hover:bg-brand-500/20 group-hover:text-brand-400 transition-all">
//                     <Mail size={16} />
//                   </div>
//                   contact@aroscreative.com
//                 </li>
//                 <li className="flex items-center gap-3 group">
//                   <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center group-hover:bg-brand-500/20 group-hover:text-brand-400 transition-all">
//                     <Phone size={16} />
//                   </div>
//                   +1 (555) 123-4567
//                 </li>
//                 <li className="flex items-center gap-3 group">
//                   <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center group-hover:bg-brand-500/20 group-hover:text-brand-400 transition-all">
//                     <Instagram size={16} />
//                   </div>
//                   @aroscreative
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
//             <p>&copy; {new Date().getFullYear()} AROS Creative Agency. All rights reserved.</p>
//             <div className="flex gap-6">
//               <a href="#" className="hover:text-slate-300">Privacy Policy</a>
//               <a href="#" className="hover:text-slate-300">Terms of Service</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };
import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Instagram, Mail, Phone, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { ChatWidget } from './ChatWidget';
import { BackgroundEffect } from './BackgroundEffect';

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200 selection:bg-brand-500 selection:text-white relative font-sans">
      {/* Animated 3D Smoke Background */}
      <BackgroundEffect />
      
      {/* Noise Overlay for Film Grain Texture */}
      <div className="noise-overlay"></div>

      {/* Floating Glass Navbar */}
      <nav 
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'top-4 px-4' : 'top-0 px-0'
        }`}
      >
        <div className={`mx-auto max-w-7xl transition-all duration-500 ${
          scrolled 
            ? 'glass-panel rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-3 px-6' 
            : 'bg-transparent py-6 px-6'
        }`}>
          <div className="flex justify-between items-center">
            <RouterNavLink to="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-500 rounded-xl rotate-45 opacity-20 group-hover:rotate-90 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-brand-500 rounded-xl rotate-45 blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <Cpu className="relative text-brand-400 w-6 h-6 z-10" />
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-tight">
                AROS<span className="text-brand-400">.AI</span>
              </span>
            </RouterNavLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              <div className="flex items-center bg-slate-900/40 rounded-full border border-white/5 p-1 mr-4 backdrop-blur-sm">
                {navLinks.map((link) => (
                  <RouterNavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive 
                          ? 'text-white bg-slate-800 shadow-inner' 
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      }`
                    }
                  >
                    {link.label}
                  </RouterNavLink>
                ))}
              </div>
              <RouterNavLink to="/contact">
                <Button size="sm" variant="primary" className="shadow-lg shadow-brand-500/20">
                  Get Started <ChevronRight size={14} className="ml-1" />
                </Button>
              </RouterNavLink>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-slate-300 hover:text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 glass-panel rounded-2xl p-6 flex flex-col gap-4 shadow-2xl animate-fade-in-up border border-white/10 z-50">
            {navLinks.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium py-3 px-4 rounded-xl transition-all ${
                    isActive ? 'bg-brand-500/10 text-brand-400' : 'text-slate-300 hover:bg-slate-800/50'
                  }`
                }
              >
                {link.label}
              </RouterNavLink>
            ))}
            <div className="h-px bg-slate-800 my-2"></div>
            <RouterNavLink to="/contact">
              <Button fullWidth variant="glow">Start Project</Button>
            </RouterNavLink>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <ChatWidget />

      <footer className="relative bg-slate-950/50 backdrop-blur-sm pt-20 pb-10 overflow-hidden border-t border-white/5">
        {/* Footer Background Glow */}
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-brand-900/20 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-600/10 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 text-2xl font-display font-bold text-white tracking-tighter mb-6">
                <Cpu className="text-brand-400 w-6 h-6" />
                AROS<span className="text-brand-400">.AI</span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
                Pioneering the future of digital creativity. We blend neural networks with human artistry to forge brands that don't just exist—they dominate.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white hover:border-brand-500 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <Instagram size={20} />
                </a>
                <a href="mailto:contact@aroscreative.com" className="w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white hover:border-brand-500 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Services</h4>
              <ul className="space-y-4 text-slate-400">
                <li><RouterNavLink to="/services" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-500 rounded-full"></span> AI Product Visuals</RouterNavLink></li>
                <li><RouterNavLink to="/services" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-500 rounded-full"></span> Graphic Design</RouterNavLink></li>
                <li><RouterNavLink to="/services" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-500 rounded-full"></span> Digital Marketing</RouterNavLink></li>
                <li><RouterNavLink to="/services" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-500 rounded-full"></span> Web Support</RouterNavLink></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Contact</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center group-hover:bg-brand-500/20 group-hover:text-brand-400 transition-all">
                    <Mail size={16} />
                  </div>
                  contact@aroscreative.com
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center group-hover:bg-brand-500/20 group-hover:text-brand-400 transition-all">
                    <Phone size={16} />
                  </div>
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center group-hover:bg-brand-500/20 group-hover:text-brand-400 transition-all">
                    <Instagram size={16} />
                  </div>
                  @aroscreative
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} AROS Creative Agency. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};