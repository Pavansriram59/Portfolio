import { ControllerNavPoint } from '../models/navigation.model';

export const NAVIGATION_POINTS: ControllerNavPoint[] = [
  {
    id: 'projects',
    label: 'Projects',
    tagline: 'Personal projects in development (Coming soon)',
    buttonKey: 'A',
    buttonName: 'A Button',
    description: 'Personal projects and open-source explorations are in development.',
  },
  {
    id: 'experience',
    label: 'Experience',
    tagline: 'Career chronology and roles',
    buttonKey: 'B',
    buttonName: 'B Button',
    description: 'Engineering history, architectural impact, and milestones.',
  },
  {
    id: 'about',
    label: 'About',
    tagline: 'Background and philosophy',
    buttonKey: 'DPAD',
    buttonName: 'D-Pad',
    description: 'Design philosophy, engineering principles, and personal background.',
  },
  {
    id: 'skills',
    label: 'Skills',
    tagline: 'Technical stack and abilities',
    buttonKey: 'X',
    buttonName: 'X Button',
    description: 'Frontend frameworks, reactivity models, and developer toolchains.',
  },
  {
    id: 'playground',
    label: 'Playground',
    tagline: 'Interactive kinetic experiments',
    buttonKey: 'Y',
    buttonName: 'Y Button',
    description: 'Creative code experiments, kinetic physics, and interactive demos.',
  },
  {
    id: 'contact',
    label: 'Contact',
    tagline: 'Get in touch and collaborate',
    buttonKey: 'START',
    buttonName: 'Menu Button',
    description: 'Direct communication channels, email, and social networks.',
  },
];
