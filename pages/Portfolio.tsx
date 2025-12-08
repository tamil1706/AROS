import React, { useState } from 'react';
import { ProjectCategory, Project } from '../types';
import { Modal } from '../components/Modal';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, CheckCircle2, ChevronRight } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>(ProjectCategory.ALL);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Neon Pulse Energy",
      category: ProjectCategory.AI_VISUALS,
      image: "../components/assets/04_AROS.png",
      description: "High-energy product visuals generated completely by AI for a new energy drink brand.",
      challenge: "The client needed 20+ unique product shots in diverse environments (space, jungle, urban neon) within 48 hours for a launch campaign.",
      solution: "Used fine-tuned stable diffusion models to generate hyper-realistic product placements without a physical photoshoot.",
      results: "300% increase in engagement",
      servicesUsed: ["AI Visuals", "Social Strategy"]
    },
       {
      id: 8,
      title: "Neon Pulse Energy",
      category: ProjectCategory.AI_VISUALS,
      image: "../components/assets/02_AROS.png",
      description: "High-energy product visuals generated completely by AI for a new energy drink brand.",
      challenge: "The client needed 20+ unique product shots in diverse environments (space, jungle, urban neon) within 48 hours for a launch campaign.",
      solution: "Used fine-tuned stable diffusion models to generate hyper-realistic product placements without a physical photoshoot.",
      results: "300% increase in engagement",
      servicesUsed: ["AI Visuals", "Social Strategy"]
    },
    {
      id: 2,
      title: "EcoHome Rebrand",
      category: ProjectCategory.BRANDING,
      image: "../components/assets/07_AROS.png",
      description: "Complete visual identity overhaul for a sustainable furniture startup.",
      challenge: "Creating a brand identity that felt modern and tech-forward but still organic and grounded in sustainability.",
      solution: "Developed a color palette and logo suite that blends geometric precision with earthy tones.",
      results: "Featured in design blogs",
      servicesUsed: ["Logo Design", "Brand Guidelines"]
    },
    {
      id: 7,
      title: "EcoHome Rebrand",
      category: ProjectCategory.BRANDING,
      image: "../components/assets/08_AROS.png",
      description: "Complete visual identity overhaul for a sustainable furniture startup.",
      challenge: "Creating a brand identity that felt modern and tech-forward but still organic and grounded in sustainability.",
      solution: "Developed a color palette and logo suite that blends geometric precision with earthy tones.",
      results: "Featured in design blogs",
      servicesUsed: ["Logo Design", "Brand Guidelines"]
    },
      {
      id: 9,
      title: "EcoHome Rebrand",
      category: ProjectCategory.BRANDING,
      image: "../components/assets/06_AROS.png",
      description: "Complete visual identity overhaul for a sustainable furniture startup.",
      challenge: "Creating a brand identity that felt modern and tech-forward but still organic and grounded in sustainability.",
      solution: "Developed a color palette and logo suite that blends geometric precision with earthy tones.",
      results: "Featured in design blogs",
      servicesUsed: ["Logo Design", "Brand Guidelines"]
    },
    {
      id: 3,
      title: "TechFlow SaaS Ads",
      category: ProjectCategory.ADS,
      image: "../components/assets/10_AROS.png",
      description: "Conversion-focused ad creatives for a B2B software company.",
      challenge: " Outdated visual identity failed to reflect the brand’s premium quality, causing them to blend in with competitors.",
      solution: "Crafted a modern, distinct design system that repositioned the brand and instantly boosted market authority.",
      results: "2.5x ROAS",
      servicesUsed: ["Ad Creative", "Copywriting"]
    },
    {
      id: 4,
      title: "Urban Coffee Social",
      category: ProjectCategory.SOCIAL,
      image:"../components/assets/insta.png",
      description: "Monthly social media management and content creation.",
      challenge: "Growing a local follower base in a saturated coffee market.",
      solution: "Implemented a 'Beans to Cup' storytelling strategy and localized hashtag research.",
      results: "10k new followers in 3 months",
      servicesUsed: ["Social Media", "Photography"]
    },
    {
      id: 5,
      title: "Luxe Fashion Reels",
      category: ProjectCategory.VIDEO,
      image: "../components/assets/05_AROS.png",
      description: "AI-enhanced video reels for a luxury clothing boutique.",
      challenge: "Client had static images but needed dynamic video content for TikTok/Reels.",
      solution: "Animated static fashion shots using AI video interpolation to create slow-motion movement effects.",
      results: "Viral reach on TikTok",
      servicesUsed: ["AI Video", "Editing"]
    },
    {
      id: 6,
      title: "Future Fitness",
      category: ProjectCategory.AI_VISUALS,
      image: "../components/assets/09_AROS.png",
      description: "Futuristic gym concepts created with generative AI.",
      challenge: "Visualizing a gym concept that doesn't exist yet for investor pitch decks.",
      solution: "Generated photorealistic interior renders of the gym equipment and layout.",
      results: "Pre-launch signup goal exceeded",
      servicesUsed: ["AI Visuals", "Web Design"]
    },
  ];

  const filteredProjects = activeFilter === ProjectCategory.ALL 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="pb-24 pt-24">
      <div className="container mx-auto px-6 mb-16">
        <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 text-center tracking-tight">Case Studies</h1>
        <p className="text-xl text-slate-400 text-center max-w-2xl mx-auto mb-16 font-light">
          A showcase of our best work using AI and human creativity to solve real business problems.
        </p>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {Object.values(ProjectCategory).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === cat 
                  ? 'bg-brand-600 text-white shadow-[0_0_20px_rgba(14,165,233,0.4)] scale-105' 
                  : 'bg-slate-900/50 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5 backdrop-blur-md'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full hover:shadow-[0_20px_40px_-10px_rgba(14,165,233,0.3)]">
              <div className="relative h-72 overflow-hidden shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-white font-bold px-8 py-3 bg-brand-500 hover:bg-brand-400 rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    View Case Study
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/10 shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
                <div className="mt-auto pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.servicesUsed.map((tech, i) => (
                      <span key={i} className="text-xs text-brand-200 bg-brand-500/10 px-2.5 py-1 rounded-md border border-brand-500/20">{tech}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-green-400 text-sm font-bold flex items-center gap-1.5 shadow-green-500/20">
                       📈 {project.results}
                    </p>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="text-sm text-slate-500 hover:text-white font-medium md:hidden flex items-center"
                    >
                      Details <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        maxWidth="2xl"
      >
        {selectedProject && (
          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden aspect-video relative shadow-2xl border border-white/10">
               <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
               <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="glass-panel p-6 rounded-2xl bg-white/5">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Lightbulb size={20} className="text-yellow-400" /> The Challenge
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedProject.challenge || "To deliver high-quality creative assets under strict deadlines while maintaining brand consistency."}
                </p>
              </div>
              <div className="glass-panel p-6 rounded-2xl bg-white/5">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-400" /> The Solution
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedProject.solution || "Leveraged generative AI workflows combined with expert human curation to produce stunning results efficiently."}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-900/40 to-slate-900/40 p-8 rounded-2xl border border-brand-500/20 text-center">
               <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Impact Delivered</h4>
               <div className="text-4xl font-display font-black text-white text-glow">{selectedProject.results}</div>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button variant="ghost" onClick={() => setSelectedProject(null)}>Close</Button>
              <Link to="/contact">
                <Button variant="glow">Start a Project Like This</Button>
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};