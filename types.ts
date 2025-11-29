export interface ServicePackage {
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  description: string;
  challenge?: string;
  solution?: string;
  results: string;
  servicesUsed: string[];
}

export enum ProjectCategory {
  ALL = 'All Work',
  AI_VISUALS = 'AI Product Visuals',
  BRANDING = 'Logo & Branding',
  ADS = 'Ad Creatives',
  SOCIAL = 'Social Media Posts',
  VIDEO = 'Video Content'
}

export interface NavLink {
  label: string;
  path: string;
}

export interface AISampleResult {
  caption: string;
  hashtags: string;
  visualPrompt: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}