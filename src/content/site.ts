// All site copy and links live here, so editing words never means touching layout.
// Anything in [brackets] is a placeholder still to be written.

export const site = {
  // Undecided: "Evergreen Software Consulting" or "Evergreen Software Solutions".
  name: 'Evergreen Software Consulting',
  shortName: 'Evergreen',
  description:
    'Senior full-stack engineer on Vancouver Island. Product builds, AI-assisted workflows, and the backend work underneath them.',
};

export const hero = {
  tagline: 'Senior full-stack engineer helping small teams ship [what].',
  sub: 'Eight-plus years building web products end to end, from the database to the button. Based on Vancouver Island, working remotely.',
  cta: 'Get in touch',
};

export const services = [
  {
    title: 'Full-stack product builds',
    body: 'React and TypeScript on the front, Node and Postgres behind it. I can take a feature from rough idea to deployed and monitored.',
  },
  {
    title: 'AI and agentic workflows',
    body: 'Putting Claude and similar tools to work inside real engineering processes, with review checkpoints so people stay in charge of what ships.',
  },
  {
    title: 'Backend, APIs and AWS',
    body: 'APIs, data models and the infrastructure that keeps them running. Untangling the slow or fragile parts of an existing system.',
  },
  {
    title: '[Fourth area, or delete this one]',
    body: '[One sentence on what you do and what the client gets.]',
  },
];

export const proof = [
  {
    title: 'ticket2pr',
    href: 'https://github.com/c4rlz/ticket2pr',
    linkLabel: 'View on GitHub',
    body: 'A CLI that turns a ticket into an implementation plan you review, then into a draft pull request. The plan checkpoint is the point: catching a wrong approach takes two minutes there instead of an afternoon in a 400-line diff.',
    tags: ['TypeScript', 'Claude Code', 'GitHub CLI'],
  },
  {
    title: 'Garden Within',
    href: 'https://github.com/c4rlz/garden-within',
    linkLabel: 'View on GitHub',
    body: 'A cycle-aware journaling app I designed and built solo, with auth, rate limiting and an installable PWA.',
    tags: ['Next.js', 'React', 'Prisma', 'Postgres'],
  },
  {
    title: '[Past project or outcome, anonymized if needed]',
    body: '[What the problem was, what you did, and what changed. A number helps if you have one.]',
    tags: [] as string[],
  },
];

export const about = {
  paragraphs: [
    "I'm Carly. I've spent over eight years as a software developer, most recently as a senior developer at Moz. I like the whole stack, and I like it best when the work has a clear purpose and room to do it properly.",
    'I live on Vancouver Island and work remotely. [How you like to work: e.g. async-first, clear outcomes over long meetings, small teams.]',
  ],
};

export const contact = {
  intro:
    'Have a project or a gap on your team? Send me a note with a line or two about it and I’ll reply within a couple of working days.',
  // Leave empty until the domain email exists; the email link is hidden while it's blank.
  email: '',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/carly-ewasiuk/' },
    { label: 'GitHub', href: 'https://github.com/c4rlz' },
  ],
  // Optional intro-call booking link (e.g. Cal.com). Hidden while blank.
  bookingUrl: '',
};
