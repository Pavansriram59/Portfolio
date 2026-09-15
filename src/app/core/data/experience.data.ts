import { WorkExperience } from '../models/experience.model';

export const EXPERIENCE_DATA: WorkExperience[] = [
  {
    role: 'Software Engineer',
    company: 'Accenture',
    location: 'India',
    period: 'Jul 2024 – Present',
    current: true,
    projects: [
      {
        name: 'My Integrated Solutions Platform',
        period: 'Jul 2024 – Present',
        highlights: [
          'Engineered scalable Angular UI architecture across multiple applications, improving performance by 30% using lazy loading, standalone components, and optimized change detection strategies.',
          'Built and optimized complex AG Grid-based data tables, reducing data load time by up to 40% and enhancing user interaction efficiency.',
          'Integrated Power BI reports and implemented micro frontend (MFE) communication, enabling seamless data flow across modules and improving real-time analytics accessibility.',
          'Accelerated development and automated workflows by leveraging AI-assisted coding (GitHub Copilot) and MCP server integration with Azure Boards, boosting productivity by 80% and reducing manual effort in user story execution.',
        ],
        metrics: [
          { label: 'UI Performance', value: '+30% Faster' },
          { label: 'Data Load Time', value: '-40% Reduction' },
          { label: 'Workflow Productivity', value: '+80% Boost' },
        ],
        technologies: [
          'Angular',
          'TypeScript',
          'Micro Frontends (MFE)',
          'AG Grid',
          'Power BI',
          'Azure Boards',
          'MCP Servers',
          'GitHub Copilot',
        ],
      },
      {
        name: 'Cognitive Brain POC',
        period: '2024 – 2025',
        highlights: [
          'Designed and developed an Angular-based chatbot UI for agentic AI workflows, improving user interaction and task execution efficiency.',
          'Optimized backend performance by consolidating multiple API calls into a single endpoint, reducing response time by 45%.',
          'Contributed to multi-agent workflow architecture, streamlining automation processes and reducing manual intervention across tasks.',
        ],
        metrics: [
          { label: 'API Response Time', value: '-45% Latency' },
          { label: 'Workflow Automation', value: 'Multi-Agent AI' },
          { label: 'Interface UX', value: 'Agentic Chat UI' },
        ],
        technologies: [
          'Angular',
          'TypeScript',
          'Agentic AI',
          'REST APIs',
          'Multi-Agent Workflows',
          'Tailwind CSS',
        ],
      },
    ],
  },
];
