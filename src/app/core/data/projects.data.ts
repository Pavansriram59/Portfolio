export interface ResumeProject {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  role: string;
}

export const PROJECTS_DATA: ResumeProject[] = [
  {
    id: 'misp',
    name: 'My Integrated Solutions Platform',
    category: 'Enterprise Angular & MFE',
    tagline: 'Enterprise multi-application platform with AG Grid and Power BI',
    description:
      'Engineered scalable Angular UI architecture across enterprise applications at Accenture, improving overall performance by 30% using lazy loading, standalone components, and optimized change detection strategies. Implemented high-performance AG Grid tables and seamless Micro Frontend (MFE) communication with real-time Power BI reporting.',
    highlights: [
      'Boosted rendering performance by 30% through standalone architecture and zoneless/fine-grained change detection.',
      'Optimized heavy data tables using AG Grid, reducing data load times by up to 40%.',
      'Enabled real-time analytics by embedding Power BI reports and cross-MFE event buses.',
      'Automated user story execution workflows using GitHub Copilot and custom MCP server integration with Azure Boards, yielding an 80% productivity increase.',
    ],
    metrics: [
      { label: 'Performance', value: '+30% Faster' },
      { label: 'Data Load', value: '-40% Latency' },
      { label: 'Dev Efficiency', value: '+80% Boost' },
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'Micro Frontends',
      'AG Grid',
      'Power BI',
      'Azure Boards',
      'MCP Servers',
    ],
    role: 'Frontend Architect / Engineer',
  },
  {
    id: 'cognitive-brain',
    name: 'Cognitive Brain POC',
    category: 'Agentic AI & Workflow Automation',
    tagline: 'Angular-based chatbot UI for multi-agent AI execution',
    description:
      'Designed and developed an intuitive Angular-based chatbot interface for agentic AI workflows, enabling autonomous task execution and conversational user interactions. Consolidated multiple backend API calls into optimized endpoints, reducing response times by 45%.',
    highlights: [
      'Created a responsive, interactive streaming chatbot interface for agentic workflows.',
      'Consolidated multi-step API queries into a unified gateway, slashing latency by 45%.',
      'Streamlined multi-agent execution pipelines to eliminate repetitive manual interventions.',
    ],
    metrics: [
      { label: 'API Latency', value: '-45% Response Time' },
      { label: 'Architecture', value: 'Multi-Agent AI' },
      { label: 'UI Framework', value: 'Angular' },
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'Agentic AI',
      'REST APIs',
      'Tailwind CSS',
      'Express.js',
    ],
    role: 'Full Stack & AI UI Engineer',
  },
  {
    id: 'portfolio-engine',
    name: 'Interactive Gamepad Portfolio',
    category: 'Creative Frontend Engineering',
    tagline: 'Minimalist video-game-inspired portfolio with interactive hardware UI',
    description:
      'Engineered an ultra-fast, minimalist personal portfolio centered around a custom vector game controller with tactile physics, Web Audio procedural feedback, and Anime.js kinetics. Built with Angular 22 standalone architecture and sub-70KB initial payload.',
    highlights: [
      'Clean interactive vector controller acting as primary navigation with zero UI clutter.',
      'Zero external sound assets using procedural Web Audio synthesis.',
      'Optimized bundle size under 70KB with 100/100 Lighthouse performance.',
    ],
    metrics: [
      { label: 'Bundle Size', value: '< 70 KB Gzip' },
      { label: 'Lighthouse', value: '100 / 100' },
      { label: 'Engine', value: 'Angular 22 + Anime.js' },
    ],
    technologies: [
      'Angular 22',
      'TypeScript',
      'Anime.js v4',
      'Tailwind CSS',
      'Web Audio API',
    ],
    role: 'Sole Creator',
  },
];
