// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, Zap, Palette, TrendingUp, Monitor, Sparkles } from 'lucide-react';
// import { Button } from '../components/Button';

// export const Home: React.FC = () => {
//   return (
//     <>
//       {/* 3D Hero Section */}
//       <section className="relative overflow-hidden pt-32 pb-32 lg:pt-48 lg:pb-48">
//         {/* Animated 3D Background Elements */}
//         <div className="absolute top-20 left-10 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px] animate-float"></div>
//         <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/20 rounded-full blur-[80px] animate-float-delayed"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-brand-500/10 to-accent-500/10 rounded-full blur-[120px] -z-10"></div>
        
//         {/* Floating geometric hints (CSS only) */}
//         <div className="absolute top-40 right-[15%] w-24 h-24 border border-white/5 rounded-2xl rotate-12 backdrop-blur-sm animate-float hidden lg:block"></div>
//         <div className="absolute bottom-40 left-[15%] w-32 h-32 border border-white/5 rounded-full backdrop-blur-sm animate-float-delayed hidden lg:block"></div>

//         <div className="container mx-auto px-6 text-center relative z-10">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-300 text-sm font-medium mb-8 backdrop-blur-md shadow-lg animate-fade-in-up">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
//             </span>
//             <span>The Next Generation of Creative Agencies</span>
//           </div>
          
//           <h1 className="text-6xl md:text-8xl font-display font-black text-white tracking-tight mb-8 leading-[1.1] drop-shadow-2xl">
//             AI-Powered <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-200 to-accent-400 text-glow">
//               Creative Revolution
//             </span>
//           </h1>
          
//           <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
//             We fuse advanced neural networks with human artistry to deliver professional branding, stunning visuals, and results-driven marketing at warp speed.
//           </p>
          
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
//             <Link to="/services">
//               <Button size="lg" variant="primary" className="text-lg px-10">
//                 Get Free Sample <Sparkles size={18} className="ml-2" />
//               </Button>
//             </Link>
//             <Link to="/portfolio">
//               <Button size="lg" variant="outline" className="text-lg px-10">
//                 View Portfolio
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Glass Features Grid */}
//       <section className="py-24 relative">
//         <div className="container mx-auto px-6">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: Zap, title: "Instant Visuals", desc: "Product photos & videos generated in seconds." },
//               { icon: Palette, title: "Pro Design", desc: "Logos, branding, and social creatives." },
//               { icon: TrendingUp, title: "Smart Growth", desc: "Data-driven strategy & campaign management." },
//               { icon: Monitor, title: "Tech Support", desc: "Optimization & maintenance for web assets." }
//             ].map((feature, idx) => (
//               <div key={idx} className="glass-card p-8 rounded-3xl relative overflow-hidden group">
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-brand-500/25 group-hover:-translate-y-2">
//                   <feature.icon size={28} />
//                 </div>
//                 <h3 className="text-2xl font-display font-bold text-white mb-3">{feature.title}</h3>
//                 <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Neon Social Proof */}
//       <section className="py-20 border-y border-white/5 bg-slate-900/30 backdrop-blur-sm">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-12">Powering Next-Gen Brands</h2>
//           <div className="flex flex-wrap justify-center items-center gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
//              {/* Text placeholders simulating logos with futuristic fonts */}
//             <div className="text-3xl font-display font-black text-white tracking-tighter">NEXUS</div>
//             <div className="text-3xl font-display font-black text-white tracking-tighter">VORTEX</div>
//             <div className="text-3xl font-display font-black text-white tracking-tighter">ELEVATE</div>
//             <div className="text-3xl font-display font-black text-white tracking-tighter">ZENITH</div>
//           </div>
//         </div>
//       </section>

//       {/* 3D Portfolio Preview */}
//       <section className="py-32 relative">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Selected Works</h2>
//               <p className="text-slate-400 text-lg max-w-md">Witness the fusion of algorithm and aesthetic.</p>
//             </div>
//             <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-brand-400 font-bold hover:text-white transition-colors group px-4 py-2 rounded-lg hover:bg-white/5">
//               View Full Gallery <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {[1, 2, 3].map((i) => (
//               <div key={i} className="group relative rounded-3xl overflow-hidden aspect-[4/5] glass-card border-0">
//                 <img 
//                   src={`https://picsum.photos/600/800?random=${i + 10}`} 
//                   alt="Portfolio Work" 
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
//                 <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                   <span className="text-brand-400 text-sm font-bold uppercase tracking-wider mb-2 block">AI & Branding</span>
//                   <h3 className="text-2xl font-display font-bold text-white group-hover:text-brand-200 transition-colors">Cyber Project {i}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="text-center md:hidden mt-12">
//              <Link to="/portfolio">
//               <Button variant="outline" fullWidth>View Full Portfolio</Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Holographic CTA */}
//       <section className="py-32 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-brand-900/20"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-brand-500/5 rounded-full blur-[100px]"></div>
        
//         <div className="container mx-auto px-6 text-center relative z-10">
//           <div className="glass-panel max-w-4xl mx-auto rounded-[3rem] p-12 md:p-20 border border-white/10 shadow-2xl relative overflow-hidden">
//              {/* Shimmer effect */}
//              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
             
//             <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8">Ready to upgrade your reality?</h2>
//             <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
//               Stop competing with yesterday's tools. Embrace the future of creative production.
//             </p>
//             <Link to="/services">
//               <Button size="lg" variant="glow" className="text-lg px-12 py-5 shadow-brand-500/50">
//                 Start with a Free Sample
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Palette, TrendingUp, Monitor, Sparkles, Play } from 'lucide-react';
import { Button } from '../components/Button';
import afterlogo from '../components/assets/11_AROS.png';
export const Home: React.FC = () => {
  return (
    <>
      {/* 3D Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        {/* Animated 3D Background Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/20 rounded-full blur-[80px] animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-brand-500/10 to-accent-500/10 rounded-full blur-[120px] -z-10"></div>
        
        {/* Floating geometric hints (CSS only) */}
        <div className="absolute top-40 right-[15%] w-24 h-24 border border-white/5 rounded-2xl rotate-12 backdrop-blur-sm animate-float hidden lg:block"></div>
        <div className="absolute bottom-40 left-[15%] w-32 h-32 border border-white/5 rounded-full backdrop-blur-sm animate-float-delayed hidden lg:block"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-300 text-sm font-medium mb-8 backdrop-blur-md shadow-lg animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                <span>The Next Generation of Creative Agencies</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-black text-white tracking-tight mb-8 leading-[1.1] drop-shadow-2xl">
                AI-Powered <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-200 to-accent-400 text-glow">
                  Creative Revolution
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-10 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We fuse advanced neural networks with human artistry to deliver professional branding, stunning visuals, and results-driven marketing at warp speed.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <Link to="/services">
                  <Button size="lg" variant="primary" className="text-lg px-8">
                    Get Free Sample <Sparkles size={18} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Before/After Comparison */}
            <div className="lg:w-1/2 w-full relative animate-fade-in-up delay-200">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_-10px_rgba(14,165,233,0.4)] glass-card group aspect-video">
                
                {/* Background: Raw / Before (Grayscale/Dull) */}
                <img 
                  src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" 
                  alt="Before Processing" 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-75 brightness-75 blur-[1px]"
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur text-slate-400 text-[10px] font-bold px-2 py-1 rounded border border-white/10 z-10">
                  Before
                </div>

                {/* Foreground: AI Enhanced / After (Color) - Animated Mask */}
                {/* This div's clip-path is animated to reveal the enhanced image */}
                <div className="absolute inset-0 w-full h-full animate-scan-clip">
                  <img 
                    src={afterlogo} 
                    alt="AI Enhanced" 
                    className="absolute inset-0 w-full h-full object-cover saturate-150 contrast-110"
                  />
                </div>
                
                {/* Scanner Line - Animates with the clip mask */}
                <div className="absolute top-0 bottom-0 w-1 bg-brand-400 shadow-[0_0_20px_rgba(56,189,248,0.8)] z-20 animate-scan-line"></div>
                
                <div className="absolute top-4 right-4 bg-brand-500/90 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg z-20">
                 After
                </div>

                {/* Interactive Hint */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30">
                    <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></div>
                        <span className="text-[10px] text-brand-200 tracking-wider font-mono">AROS_Creative_Agencies</span>
                    </div>
                </div>
              </div>

              {/* Decorative elements behind */}
              <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-brand-500/20 rounded-xl blur-2xl rotate-12 animate-float"></div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-accent-500/20 rounded-full blur-3xl animate-float-delayed"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Glass Features Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Instant Visuals", desc: "Product photos & videos generated in seconds." },
              { icon: Palette, title: "Pro Design", desc: "Logos, branding, and social creatives." },
              { icon: TrendingUp, title: "Smart Growth", desc: "Data-driven strategy & campaign management." },
              { icon: Monitor, title: "Tech Support", desc: "Optimization & maintenance for web assets." }
            ].map((feature, idx) => (
              <div key={idx} className="glass-card p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-brand-500/25 group-hover:-translate-y-2">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neon Social Proof */}
      <section className="py-20 border-y border-white/5 bg-slate-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-12">Powering Next-Gen Brands</h2>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             {/* Text placeholders simulating logos with futuristic fonts */}
            <div className="text-3xl font-display font-black text-white tracking-tighter">NEXUS</div>
            <div className="text-3xl font-display font-black text-white tracking-tighter">VORTEX</div>
            <div className="text-3xl font-display font-black text-white tracking-tighter">ELEVATE</div>
            <div className="text-3xl font-display font-black text-white tracking-tighter">ZENITH</div>
          </div>
        </div>
      </section>

      {/* 3D Portfolio Preview */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Selected Works</h2>
              <p className="text-slate-400 text-lg max-w-md">Witness the fusion of algorithm and aesthetic.</p>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-brand-400 font-bold hover:text-white transition-colors group px-4 py-2 rounded-lg hover:bg-white/5">
              View Full Gallery <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden aspect-[4/5] glass-card border-0">
                <img 
                  src={`https://picsum.photos/600/800?random=${i + 10}`} 
                  alt="Portfolio Work" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-brand-400 text-sm font-bold uppercase tracking-wider mb-2 block">AI & Branding</span>
                  {/* <h3 className="text-2xl font-display font-bold text-white group-hover:text-brand-200 transition-colors">Cyber Project {i}</h3> */}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center md:hidden mt-12">
             <Link to="/portfolio">
              <Button variant="outline" fullWidth>View Full Portfolio</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Holographic CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-brand-900/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-brand-500/5 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="glass-panel max-w-4xl mx-auto rounded-[3rem] p-12 md:p-20 border border-white/10 shadow-2xl relative overflow-hidden">
             {/* Shimmer effect */}
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
             
            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8">Ready to upgrade your reality?</h2>
            <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
              Stop competing with yesterday's tools. Embrace the future of creative production.
            </p>
            <Link to="/services">
              <Button size="lg" variant="glow" className="text-lg px-12 py-5 shadow-brand-500/50">
                Start with a Free Sample
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};