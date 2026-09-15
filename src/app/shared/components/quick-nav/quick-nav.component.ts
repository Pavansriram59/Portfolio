import {
  Component,
  ChangeDetectionStrategy,
  inject,
  output,
} from '@angular/core';
import { GameStateService } from '../../../core/services/game-state.service';
import {
  ControllerButtonKey,
  ControllerNavPoint,
  NavigationSectionId,
} from '../../../core/models/navigation.model';

@Component({
  selector: 'app-quick-nav',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full block',
  },
  templateUrl: './quick-nav.component.html',
  styleUrl: './quick-nav.component.css',
})
export class QuickNavComponent {
  readonly selectSection = output<NavigationSectionId>();

  protected readonly gameState = inject(GameStateService);

  isHovered(buttonKey: ControllerButtonKey): boolean {
    return this.gameState.hoveredButton() === buttonKey;
  }

  onHover(buttonKey: ControllerButtonKey | null): void {
    this.gameState.setHoveredButton(buttonKey);
  }

  onSelect(sectionId: NavigationSectionId): void {
    this.gameState.navigate(sectionId);
    this.selectSection.emit(sectionId);
  }

  getButtonTooltip(point: ControllerNavPoint): string {
    const shortcut =
      point.buttonKey === 'DPAD'
        ? 'D-Pad / WASD / Arrow keys'
        : point.buttonKey === 'START'
        ? 'Enter key'
        : `${point.buttonKey} key`;

    return `Open ${point.label} (${point.tagline}) [Shortcut: ${shortcut}]`;
  }
}
