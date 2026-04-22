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
    title: 'Senior Frontend Developer',
    location: 'Remote',
    start: 'Jun 2023',
    end: 'Mar 2026',
    highlights: [
      'Built responsive SPAs with Angular 13–18, translating Figma designs into production-ready, pixel-accurate code.',
      'Managed complex state with NgRx across multi-step workflows and data-heavy dashboards.',
      'Shipped containerized deployments on AWS via Docker, Kubernetes, and Jenkins pipelines.',
      'Drove A/B tests with Adobe Target and Optimizely for customer-facing flows.',
      'Wrote end-to-end tests with Cypress; static analysis via SonarQube; vulnerability scanning via Whitesource.',
    ],
    stack: ['Angular 13–18', 'TypeScript', 'NgRx', 'Node.js', 'SCSS', 'AWS', 'Docker', 'Kubernetes', 'Jenkins'],
    apps: [
      'Call-Agent Dashboard',
      'Call-Quality Dashboard',
      'Agent Call Data Ingest',
      'Card Lock/Unlock',
      'Statement Reprints',
      'Memory Messages',
    ],
  },
  {
    company: 'State of Maryland',
    title: 'Senior Frontend Developer',
    location: 'Remote',
    start: 'May 2022',
    end: 'May 2023',
    highlights: [
      'Built Angular 13 SPAs integrating with backend REST APIs for several state programs.',
      'Developed reusable components and directives that improved maintainability across modules.',
      'Collaborated with data-science teams on in-house A/B testing to drive UX decisions.',
      'Ran usability sessions to validate UI improvements with real users.',
    ],
    stack: ['Angular 13', 'TypeScript', 'NgRx', 'SASS', 'Bootstrap', 'Angular Material'],
  },
  {
    company: 'Capital One',
    title: 'Senior Frontend Developer',
    location: 'Virginia',
    start: 'May 2020',
    end: 'Apr 2022',
    highlights: [
      'Built React SPAs with strong cross-browser support (IE, Safari, Chrome, Firefox).',
      'Shipped a reusable React component library (buttons, inputs, dropdowns, toggles).',
      'Deployed on AWS via Docker + Jenkins CI/CD across environments.',
      'Drove quality with Cypress E2E, Mountebank performance tests, SonarQube, and Whitesource.',
    ],
    stack: ['React', 'ES6+', 'SASS', 'Node.js', 'AWS', 'Docker', 'Jenkins', 'Cypress'],
  },
  {
    company: 'United Airlines',
    title: 'UI Developer',
    location: 'Illinois',
    start: 'May 2018',
    end: 'May 2020',
    highlights: [
      'Built Angular 7/8 SPAs with NgRx state management.',
      'Migrated application from Angular 7 to 8 while preserving backward compatibility.',
      'Bundled builds with Webpack and Gulp.',
    ],
    stack: ['Angular 7/8', 'TypeScript', 'NgRx', 'PrimeNG', 'Webpack', 'Gulp'],
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
