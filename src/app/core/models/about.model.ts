export interface EducationInfo {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
}

export interface AboutHighlight {
  title: string;
  description: string;
}

export interface AboutData {
  name: string;
  displayName: string;
  role: string;
  email: string;
  phone: string;
  linkedin: string;
  linkedinHandle: string;
  summary: string;
  education: EducationInfo;
  highlights: AboutHighlight[];
}
