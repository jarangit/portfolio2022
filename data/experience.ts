export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  summary: string;
  highlights: string[];
};

export const workExperience: ExperienceItem[] = [
  {
    period: '2023 - Present',
    title: 'Full Stack Developer',
    company: 'Coforge (AIS my2.0-3.0 Project)',
    summary:
      'Full stack developer on the AIS my2.0-3.0 project, working across front-end and back-end to deliver performant and user-friendly web applications.',
    highlights: [
      'Develop and maintain both front-end and back-end of web applications, ensuring seamless integration, performance, and user experience using technologies like HTML, CSS, JavaScript, Node.js, and databases',
    ],
  },
  {
    period: '2022 - 2023',
    title: 'Frontend Developer',
    company: 'Kos Design',
    summary:
      'Working on web applications, dashboards, and landing pages using React, Next.js, and modern frontend tooling. Focused on clean code, responsive design, and user experience.',
    highlights: [
      'Build responsive web interfaces with React, Redux, TypeScript, Tailwind CSS, and Next.js',
      'Collaborate with designers to create functional user interfaces',
      'Implement responsive design and ensure cross-browser compatibility',
      'Optimize web applications for performance and SEO',
    ],
  },
  {
    period: '2020 - 2022',
    title: 'Frontend Developer',
    company: 'Freelancer',
    summary:
      'Delivered websites and frontend tasks for clients, from landing pages to small web applications.',
    highlights: [
      'Built responsive web interfaces',
      'Integrated with REST APIs',
      'Fixed UI issues and improved performance',
      'Communicated directly with clients',
    ],
  },
  {
    period: '2019 - 2020',
    title: 'Frontend Developer',
    company: 'Appbit Studio',
    summary:
      'Developed and maintained WordPress websites with a focus on performance and usability.',
    highlights: [
      'Developed and maintained WordPress websites',
      'Created and customized themes and plugins',
      'Optimized sites for performance and speed',
      'Implemented SEO best practices',
    ],
  },
];

export const education = [
  {
    period: '2014 - 2018',
    title: 'Suan Sunandha Rajabhat University',
    detail: 'Major: Business Computer',
  },
  {
    period: '2008 - 2014',
    title: 'Nawaminthrachinuthit Suankularb Wittayalai Pathumthani School',
    detail: 'Major: Math and Science',
  },
];

export const personalDetails = [
  { label: 'Birthdate', value: '3 October 1996' },
  { label: 'Phone', value: '098-284-6339' },
  { label: 'Email', value: 'jaran.dch@gmail.com' },
  { label: 'Job Status', value: 'Full time' },
];
