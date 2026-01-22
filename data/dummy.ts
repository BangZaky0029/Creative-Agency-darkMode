import { Layout, Smartphone, PenTool, Zap, Globe, Video } from 'lucide-react';

// Types
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: any;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

// Data
export const services: Service[] = [
  {
    id: 1,
    title: 'Brand Identity',
    description: 'We craft memorable visual identities that resonate with your audience and stand the test of time.',
    icon: PenTool,
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'User-centric interfaces designed for clarity, engagement, and conversion across all devices.',
    icon: Layout,
  },
  {
    id: 3,
    title: 'Web Development',
    description: 'High-performance websites built with modern technologies to ensure speed and scalability.',
    icon: Globe,
  },
  {
    id: 4,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions that provide seamless user experiences.',
    icon: Smartphone,
  },
  {
    id: 5,
    title: 'Motion Graphics',
    description: 'Bringing your story to life with dynamic animations and compelling video content.',
    icon: Video,
  },
  {
    id: 6,
    title: 'Digital Strategy',
    description: 'Data-driven insights to position your brand effectively in the competitive digital landscape.',
    icon: Zap,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Neon Horizon',
    category: 'Digital Product',
    image: 'https://picsum.photos/800/600?random=1',
    year: '2023',
  },
  {
    id: 2,
    title: 'Apex Architecture',
    category: 'Branding',
    image: 'https://picsum.photos/800/800?random=2',
    year: '2023',
  },
  {
    id: 3,
    title: 'Flow Finance',
    category: 'Web Design',
    image: 'https://picsum.photos/800/600?random=3',
    year: '2024',
  },
  {
    id: 4,
    title: 'Zenith Fitness',
    category: 'Mobile App',
    image: 'https://picsum.photos/800/800?random=4',
    year: '2024',
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: '01',
    title: 'Discovery',
    description: 'We dive deep into your business goals, target audience, and market landscape to build a solid foundation.',
  },
  {
    id: '02',
    title: 'Strategy',
    description: 'We formulate a comprehensive roadmap, defining the creative direction and technical approach.',
  },
  {
    id: '03',
    title: 'Creation',
    description: 'Our designers and developers bring the vision to life through iterative cycles and rapid prototyping.',
  },
  {
    id: '04',
    title: 'Launch',
    description: 'We execute the deployment with precision and provide ongoing support to ensure sustained growth.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Elena Fisher',
    role: 'CMO',
    company: 'TechFlow',
    quote: 'Kroma transformed our digital presence completely. Their attention to detail and design aesthetic is unmatched in the industry.',
    avatar: 'https://picsum.photos/100/100?random=10',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'StartUp Inc',
    quote: 'Working with the Kroma team was seamless. They understood our vision immediately and delivered a product that exceeded expectations.',
    avatar: 'https://picsum.photos/100/100?random=11',
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'Product Lead',
    company: 'Innovate',
    quote: 'The ROI we saw after launching our new platform was incredible. Professional, creative, and technical experts.',
    avatar: 'https://picsum.photos/100/100?random=12',
  },
];