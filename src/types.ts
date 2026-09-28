export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  whatIsIncluded: string[];
  processSteps: { title: string; desc: string }[];
  requiredInfo: string[];
  options?: string[];
  faq: { q: string; a: string }[];
  relatedServices: string[];
}

export type CatalogCategory = 'all' | 'kovchezi' | 'urni' | 'cvetya' | 'prinadlezhnosti';

export interface CatalogItem {
  id: string;
  category: 'kovchezi' | 'urni' | 'cvetya' | 'prinadlezhnosti';
  title: string;
  description: string;
  materialOrDetails: string;
  priceNote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export type ActivePage =
  | 'home'
  | 'uslugi'
  | 'service-detail'
  | 'districts'
  | 'district-detail'
  | 'about'
  | 'process'
  | 'pricing'
  | 'catalog'
  | 'faq'
  | 'contact'
  | 'privacy'
  | 'cookies'
  | 'terms';

export interface SofiaDistrict {
  slug: string;
  name: string;
  fullName: string;
  shortDesc: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  overview: string;
  keyCemeteries: string[];
  keyHospitals: string[];
  coveragePoints: string[];
  servicesOffered: {
    title: string;
    description: string;
  }[];
  localProcessSteps: {
    step: string;
    title: string;
    desc: string;
  }[];
  importantNotes: string[];
  faq: {
    q: string;
    a: string;
  }[];
}
