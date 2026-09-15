export type NavigationSectionId =
  | 'about'
  | 'projects'
  | 'experience'
  | 'skills'
  | 'playground'
  | 'contact';

export type ControllerButtonKey = 'DPAD' | 'A' | 'B' | 'X' | 'Y' | 'START';

export interface ControllerNavPoint {
  id: NavigationSectionId;
  label: string;
  tagline: string;
  buttonKey: ControllerButtonKey;
  buttonName: string;
  description: string;
}
