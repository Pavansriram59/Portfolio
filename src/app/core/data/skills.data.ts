export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Front-end Engineering',
    description: 'Core frontend frameworks and languages powering reactive, scalable web interfaces.',
    skills: ['Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'RxJS', 'Signals'],
  },
  {
    title: 'Enterprise Architecture & UI',
    description: 'Component architecture, complex data grids, and business intelligence modules.',
    skills: ['Micro Frontends (MFE)', 'AG Grid Tables', 'Power BI Integration', 'Standalone Architecture', 'Lazy Loading'],
  },
  {
    title: 'Programming Languages & Backend',
    description: 'Backend web services, general programming, and relational database systems.',
    skills: ['Express.js', 'Node.js', 'Python', 'C', 'C++', 'MySQL', 'REST APIs'],
  },
  {
    title: 'Developer Tools & AI Workflows',
    description: 'Toolchains, version control, and AI-accelerated developer productivity.',
    skills: ['GitHub Copilot', 'MCP Servers', 'Azure Boards', 'Git & GitHub', 'Postman', 'Figma', 'VS Code'],
  },
];
