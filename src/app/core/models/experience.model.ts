export interface WorkMetric {
  label: string;
  value: string;
}

export interface WorkProject {
  name: string;
  period: string;
  highlights: string[];
  metrics: WorkMetric[];
  technologies: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  projects: WorkProject[];
}
