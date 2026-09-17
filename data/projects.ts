export type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: 'J Coin',
    description: 'A modern cryptocurrency landing page with responsive design.',
    image: '/img/project/p1.png',
    url: 'https://trusting-fermat-862f07.netlify.app/',
    tags: ['Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing interface with search, filter, and detail views.',
    image: '/img/project/p2.png',
    url: 'https://fl-real-estate.vercel.app/',
    tags: ['React', 'REST API'],
  },
  {
    title: 'Accommodation Booking',
    description: 'Booking UI with listings, availability, and reservation flow.',
    image: '/img/project/p3.png',
    url: 'https://fl-accom.vercel.app/',
    tags: ['Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Deeply Zone',
    description: 'Creative landing experience with modern layout and animation.',
    image: '/img/project/p4.png',
    url: 'https://fl-deeplyzone.vercel.app/',
    tags: ['Next.js', 'Framer Motion'],
  },
  {
    title: 'Customer Management',
    description: 'A clean admin dashboard with search, filter, and CRUD.',
    image: '/img/project/p5.png',
    url: 'https://elegant-minsky-47a98f.netlify.app/',
    tags: ['React', 'REST API'],
  },
  {
    title: 'Analytics Dashboard',
    description: 'Interactive dashboard with charts, filters, and responsive layout.',
    image: '/img/project/p6.png',
    url: 'https://pedantic-easley-c3d2c6.netlify.app/',
    tags: ['Next.js', 'Chart.js'],
  },
  {
    title: 'E-commerce UI',
    description: 'A modern e-commerce interface with product listing and cart.',
    image: '/img/project/p7.png',
    url: 'https://dazzling-leakey-4ee9b4.netlify.app/',
    tags: ['React', 'TypeScript'],
  },
  {
    title: 'SaaS Landing Page',
    description: 'Modern and minimal landing page for a productivity tool.',
    image: '/img/project/p8.png',
    url: 'https://blissful-booth-a78f28.netlify.app/',
    tags: ['Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Account Management',
    description: 'Authentication flow with login, register, and account settings.',
    image: '/img/project/p9.png',
    url: 'https://fantastic-mochi-9975a4.netlify.app/',
    tags: ['React', 'Form Validation'],
  },
  {
    title: 'Evermoon',
    description: 'Community product site with content sections and responsive pages.',
    image: '/img/project/p10.png',
    url: 'https://fl-evermoon.vercel.app/',
    tags: ['Next.js', 'TypeScript'],
  },
  {
    title: 'Blog Platform',
    description: 'A minimal blog platform with markdown support.',
    image: '/img/project/p11.png',
    url: 'https://mystifying-ptolemy-83c3f3.netlify.app/',
    tags: ['Next.js', 'MDX'],
  },
  {
    title: 'Bruno Showcase',
    description: 'Personal showcase site with clean sections and fast loading.',
    image: '/img/project/p12.png',
    url: 'https://bruno-nu.vercel.app/',
    tags: ['React', 'REST API'],
  },
];
