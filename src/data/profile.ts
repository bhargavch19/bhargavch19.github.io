export const profile = {
  name: 'Bhargav Chellu',
  title: 'Full Stack Engineer',
  tagline:
    'Ten-plus years shipping production systems for Capital One, United Airlines, and State of Maryland. Vue, React, Node.js, Python — Lambda, SQS, OpenSearch. Pipelines that move, UIs that respond.',
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
    { label: 'Years full stack', value: 10, suffix: '+' },
    { label: 'Apps in production', value: 15, suffix: '+' },
    { label: 'AWS services in play', value: 6 },
    { label: 'On-time delivery', value: 100, suffix: '%' },
  ],
  bio: [
    "I'm a full-stack engineer with ten-plus years of experience designing and delivering scalable systems. My day-to-day spans Vue, React, Node.js, and Python on top of AWS — Lambda, SQS, SNS, OpenSearch, S3. Most recently I spent three years at Capital One rebuilding call-center tooling and data-ingestion pipelines at enterprise scale.",
    "Outside of work I ship side projects — a React-Native accountability app, a Next.js party-games platform, and an ongoing batch of UI experiments in this repo. I care about pixel-correct design translation, measurable performance, and code other engineers can read a year from now.",
  ],
} as const
