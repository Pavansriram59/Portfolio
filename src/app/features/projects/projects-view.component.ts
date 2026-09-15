import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { GameStateService } from '../../core/services/game-state.service';

@Component({
  selector: 'app-projects-view',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects-view.component.html',
  styleUrl: './projects-view.component.css',
})
export class ProjectsViewComponent {
  protected readonly gameState = inject(GameStateService);
}
