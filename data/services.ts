export type Service = {
  title: string;
  description: string;
  tags: string[];
  icon: 'ux' | 'product' | 'frontend';
};

export const services: Service[] = [
  {
    title: 'UX Design',
    description:
      'User flows, wireframes, and usability improvements focused on making products easy to understand and use.',
    tags: ['User Flows', 'Wireframes', 'Usability'],
    icon: 'ux',
  },
  {
    title: 'Product Design',
    description:
      'Clean interfaces, consistent components, and practical prototypes that bridge design and real product needs.',
    tags: ['UI Design', 'Design System', 'Prototypes'],
    icon: 'product',
  },
  {
    title: 'Frontend Development',
    description:
      'Turn designs into responsive, working products with React, Next.js, Angular, and modern frontend tooling.',
    tags: ['React', 'Next.js', 'Angular'],
    icon: 'frontend',
  },
];
