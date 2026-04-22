export interface Project {
  name: string
  tagline: string
  description: string
  status: 'Shipping' | 'Prototype' | 'Research'
  stack: string[]
  highlights: string[]
  href?: string
}

export const projects: Project[] = [
  {
    name: 'Kept',
    tagline: 'Promise-keeping accountability, without the shame.',
    description:
      'A React-Native app where you log daily commitments, invite witnesses, and build streaks that pause on a miss instead of resetting. Local-first storage (AsyncStorage is the source of truth), on-device behavioral intelligence, and a dead-man\'s-switch safety check for long absences.',
    status: 'Shipping',
    stack: [
      'React Native 0.81',
      'Expo 54',
      'TypeScript',
      'Zustand',
      'TanStack Query',
      'Supabase',
      'Reanimated 4',
    ],
    highlights: [
      '1,374 passing tests',
      'Local-first architecture — cloud is a sync layer, not the truth',
      'On-device behavioral intelligence & wrapped insights',
      'Witness-notification + group-challenge subsystems',
    ],
  },
  {
    name: 'Party Pack',
    tagline: 'Multiplayer party games, synchronized across a room.',
    description:
      'Next.js 16 app for hosting real-time party evenings — host runs the flow from their device, guests join with a QR code, and games play in sync with live scoring and a synchronized final reveal (confetti and all). Ephemeral 6-character room codes, no guest auth.',
    status: 'Prototype',
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind v4',
      'Supabase (Postgres + Realtime)',
      'Framer Motion',
      'Zod',
    ],
    highlights: [
      'Realtime multiplayer via Supabase subscriptions',
      'Server actions for authoritative state mutations',
      'JSONB-backed game-registry pattern for adding new games',
      'Five-game sequence finishing in a confetti reveal',
    ],
  },
  {
    name: 'UI Code Snippets',
    tagline: 'A growing reference library of production UI patterns.',
    description:
      'This repo — the source of the snippet gallery on this page. Angular, React, vanilla JS, and CSS patterns I\'ve actually shipped in production, kept in one browsable place for reuse and reference.',
    status: 'Shipping',
    stack: ['Angular', 'React', 'TypeScript', 'JavaScript', 'CSS'],
    highlights: [
      '100+ snippets across five stacks',
      'Battle-tested against enterprise browser matrices',
      'Organized for copy-paste reuse',
    ],
    href: 'https://github.com/bhargavch19/UI-Code-Snippets',
  },
]
