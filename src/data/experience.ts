export interface Role {
  company: string
  title: string
  location: string
  start: string
  end: string
  highlights: string[]
  stack: string[]
  apps?: string[]
}

export const roles: Role[] = [
  {
    company: 'Capital One',
    title: 'Senior Full Stack Engineer',
    location: 'Remote',
    start: 'Jun 2023',
    end: 'Mar 2026',
    highlights: [
      'Built the Agent Call Data Ingest pipeline on AWS — Lambda (Python/Node), SQS/SNS, OpenSearch, S3 — moving millions of call events/day into searchable dashboards.',
      'Shipped six Angular 13–18 SPAs for agents and customers, translating Figma designs into pixel-accurate production UIs backed by NgRx.',
      'Built every surface to WCAG 2.1 AA and ADA standards — axe DevTools gating, keyboard-first flows, screen-reader passes on every release.',
      'Deployed services and SPAs via Docker, Kubernetes, and Jenkins on AWS; drove A/B experiments through Adobe Target and Optimizely.',
      'Wrote E2E tests with Cypress, static analysis via SonarQube, vulnerability scanning via Whitesource — zero production incidents in three years.',
    ],
    stack: [
      'Angular 13–18',
      'NgRx',
      'TypeScript',
      'Node.js',
      'Python',
      'AWS Lambda',
      'SQS/SNS',
      'OpenSearch',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'Figma',
      'WCAG 2.1 AA',
    ],
    apps: [
      'Agent Call Data Ingest',
      'Call-Agent Dashboard',
      'Call-Quality Dashboard',
      'Card Lock/Unlock',
      'Statement Reprints',
      'Memory Messages',
    ],
  },
  {
    company: 'State of Maryland',
    title: 'Senior Full Stack Engineer',
    location: 'Remote',
    start: 'May 2022',
    end: 'May 2023',
    highlights: [
      'Built Angular 13 SPAs integrated end-to-end with backend REST services powering multiple state programs.',
      'Designed reusable components and directives — shared design system translating Figma specs into WCAG 2.1 AA / ADA-compliant UI.',
      'Partnered with data science on in-house A/B testing; ran usability sessions with real users to validate UX decisions.',
    ],
    stack: [
      'Angular 13',
      'TypeScript',
      'NgRx',
      'Node.js',
      'REST APIs',
      'Bootstrap',
      'Angular Material',
      'Figma',
      'WCAG 2.1 AA',
    ],
  },
  {
    company: 'Capital One',
    title: 'Senior Full Stack Engineer',
    location: 'Virginia',
    start: 'May 2020',
    end: 'Apr 2022',
    highlights: [
      'Built React SPAs backed by Node.js services with strong cross-browser support (IE, Safari, Chrome, Firefox).',
      'Shipped a reusable React component library (buttons, inputs, dropdowns, toggles) adopted across multiple teams.',
      'Deployed on AWS via Docker + Jenkins CI/CD, with Mountebank performance tests, Cypress E2E, SonarQube, and Whitesource gating every release.',
    ],
    stack: [
      'React',
      'ES6+',
      'Node.js',
      'AWS',
      'Docker',
      'Jenkins',
      'Cypress',
      'Mountebank',
      'SonarQube',
    ],
  },
  {
    company: 'United Airlines',
    title: 'Full Stack Developer',
    location: 'Illinois',
    start: 'May 2018',
    end: 'May 2020',
    highlights: [
      'Built Angular 7/8 SPAs integrated with backend services and NgRx state management.',
      'Migrated application from Angular 7 to 8 while preserving backward compatibility with upstream APIs.',
      'Bundled and optimized builds with Webpack and Gulp across multiple deployment targets.',
    ],
    stack: ['Angular 7/8', 'TypeScript', 'NgRx', 'Node.js', 'PrimeNG', 'Webpack', 'Gulp'],
  },
  {
    company: 'Elegant Embedded Systems',
    title: 'UI Developer',
    location: 'Hyderabad, India',
    start: 'Aug 2015',
    end: 'Jan 2017',
    highlights: [
      'Wrote client-side JS for web-form flows, page navigation, and field validation.',
      'Built responsive UIs with HTML, CSS, jQuery, and media queries.',
      'Used jQuery plugins for drag-and-drop, autocomplete, and other interactive widgets.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'JSON', 'AJAX'],
  },
]

export const education = [
  {
    school: 'Southern Arkansas University',
    degree: 'M.S. in Computer and Information Sciences',
    location: 'Magnolia, AR',
    year: '2017',
  },
  {
    school: 'Jawaharlal Nehru Technological University',
    degree: 'B.E.',
    location: 'India',
    year: '2015',
  },
]
