export interface PosterCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export type PageName = 'home' | 'about' | 'contact' | 'plans' | 'gallery' | 'admin';