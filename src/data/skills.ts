export interface SkillGroup {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    items: [
      'Angular (v2–18)',
      'React (v18+)',
      'Vue.js (v3)',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3 / SCSS',
      'Tailwind CSS',
      'Angular Material',
      'PrimeNG',
      'Bootstrap',
      'NgRx',
    ],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'Java', 'J2EE', 'REST APIs', 'Microservices'],
  },
  {
    label: 'AWS',
    items: ['Lambda', 'EC2', 'ECS / Fargate', 'S3', 'SQS', 'SNS', 'OpenSearch', 'CloudWatch', 'IAM'],
  },
  {
    label: 'DevOps',
    items: ['Docker', 'Kubernetes', 'Jenkins (CI/CD)', 'Git', 'Bitbucket', 'Webpack', 'Gulp'],
  },
  {
    label: 'Testing',
    items: ['Jasmine', 'Karma', 'Cypress', 'Jest', 'Mocha', 'JUnit', 'Protractor'],
  },
  {
    label: 'A/B & Design',
    items: ['Adobe Target', 'Optimizely', 'Figma', 'Zeplin', 'SonarQube', 'Datadog', 'Splunk'],
  },
]
