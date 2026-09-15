export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ResumeProject {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  metrics: ProjectMetric[];
  technologies: string[];
  role: string;
}
