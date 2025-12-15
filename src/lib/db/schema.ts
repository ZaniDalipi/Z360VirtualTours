// Database schema types for Z360 Virtual Tours

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Tour {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  categoryId: string;
  embedUrl: string;
  embedType: 'matterport' | 'cloudpano' | '3dvista' | 'kuula' | 'panoee' | 'teliportme' | 'custom' | 'iframe';
  thumbnailUrl: string;
  images: string[];
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  client: {
    name: string;
    logo?: string;
    website?: string;
  };
  features: string[];
  tags: string[];
  isFeatured: boolean;
  isPublished: boolean;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  image: string;
  features: string[];
  pricing?: {
    startingAt: number;
    currency: string;
  };
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  clientCompany: string;
  clientImage?: string;
  content: string;
  rating: number;
  tourId?: string;
  isActive: boolean;
  createdAt: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceInterest?: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  createdAt: string;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  description: string;
  logo: string;
  favicon: string;
  contact: {
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
    twitter?: string;
  };
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    keywords: string[];
  };
}

export interface Place {
  id: string;
  name: string;
  slug: string;
  description: string;
  categoryId: string;
  type: 'business' | 'landmark' | 'venue' | 'attraction';
  tourId?: string;
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  contact?: {
    phone?: string;
    email?: string;
    website?: string;
  };
  hours?: {
    [key: string]: string;
  };
  images: string[];
  rating?: number;
  reviewCount?: number;
  isVerified: boolean;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Database {
  users: User[];
  categories: Category[];
  tours: Tour[];
  services: Service[];
  testimonials: Testimonial[];
  contactSubmissions: ContactSubmission[];
  places: Place[];
  settings: SiteSettings;
}
