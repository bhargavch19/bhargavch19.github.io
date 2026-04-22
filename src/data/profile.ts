export const profile = {
  name: 'Bhargav Chellu',
  title: 'Senior Frontend Developer',
  tagline: 'Angular, React, TypeScript, AWS — nine years shipping at enterprise scale.',
  location: 'Charlotte, NC',
  email: 'thisisbhargavc@gmail.com',
  phone: '+1 (510) 458-1091',
  github: 'https://github.com/bhargavch19',
  linkedin: 'https://www.linkedin.com/in/bhargavch19/',
  snippetsRepo: 'https://github.com/bhargavch19/UI-Code-Snippets',
  resumeHref: 'resume.pdf',
  photoHref: 'profile.jpg',
  availability: 'Open to new opportunities',
  stats: [
    { label: 'Years shipping', value: 9, suffix: '+' },
    { label: 'Employers', value: 5 },
    { label: 'Code snippets', value: 105 },
    { label: 'Base', value: 'Charlotte, NC' },
  ],
  bio: [
    "I'm a senior frontend developer with nine-plus years of experience designing and delivering scalable single-page applications. My day-to-day is Angular (versions 2 through 18) and React, backed by TypeScript, Node.js, and AWS. Most recently I spent three years at Capital One rebuilding call-center tooling and customer-facing flows at enterprise scale.",
    "Outside of work I ship side projects — a React-Native accountability app, a Next.js party-games platform, and an ongoing batch of UI experiments in this repo. I care about pixel-correct design translation, measurable performance, and code other engineers can read a year from now.",
  ],
} as const
