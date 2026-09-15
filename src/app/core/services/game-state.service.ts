import { Injectable, signal, computed, inject } from '@angular/core';
import { GameAudioService } from './game-audio.service';
import {
  ControllerButtonKey,
  ControllerNavPoint,
  NavigationSectionId,
} from '../models/navigation.model';
import { NAVIGATION_POINTS } from '../data/navigation.data';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  private readonly audio = inject(GameAudioService);

  /** Currently hovered controller button */
  readonly hoveredButton = signal<ControllerButtonKey | null>(null);

  /** Currently selected section (or null on homepage) */
  readonly activeSection = signal<NavigationSectionId | null>(null);

  /** Navigation destinations mapped to controller buttons */
  readonly navPoints: readonly ControllerNavPoint[] = NAVIGATION_POINTS;

  /** Dynamic active destination details based on hovered button */
  readonly activeDestination = computed(() => {
    const hovered = this.hoveredButton();
    if (!hovered) return null;

    return (
      this.navPoints.find(
        (p) => p.buttonKey.toUpperCase() === hovered.toUpperCase()
      ) ?? null
    );
  });

  constructor() {
    this.initKeyboardListeners();
  }

  setHoveredButton(buttonKey: ControllerButtonKey | null): void {
    if (this.hoveredButton() !== buttonKey) {
      this.hoveredButton.set(buttonKey);
      if (buttonKey) {
        this.audio.playHover();
      }
    }
  }

  navigate(sectionId: NavigationSectionId): void {
    this.audio.playSelect();
    this.activeSection.set(sectionId);
  }

  closeSection(): void {
    if (this.activeSection()) {
      this.audio.playClose();
      this.activeSection.set(null);
    }
  }

  private initKeyboardListeners(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      switch (e.key.toLowerCase()) {
        case 'a':
          this.setHoveredButton('A');
          this.navigate('projects');
          break;
        case 'b':
          this.setHoveredButton('B');
          this.navigate('experience');
          break;
        case 'x':
          this.setHoveredButton('X');
          this.navigate('skills');
          break;
        case 'y':
          this.setHoveredButton('Y');
          this.navigate('playground');
          break;
        case 'arrowup':
        case 'arrowdown':
        case 'arrowleft':
        case 'arrowright':
        case 'w':
        case 's':
        case 'd':
          this.setHoveredButton('DPAD');
          this.navigate('about');
          break;
        case 'enter':
        case 'escape':
          if (e.key === 'Escape') {
            this.closeSection();
          } else {
            this.setHoveredButton('START');
            this.navigate('contact');
          }
          break;
      }
    });
  }
}
