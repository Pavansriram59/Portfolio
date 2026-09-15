import { Component, ChangeDetectionStrategy, inject, input } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { GameAudioService } from '../../../core/services/game-audio.service';
import { ABOUT_DATA } from '../../../core/data/about.data';

@Component({
  selector: 'app-header-controls',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full max-w-4xl block z-20',
  },
  templateUrl: './header-controls.component.html',
  styleUrl: './header-controls.component.css',
})
export class HeaderControlsComponent {
  readonly displayName = input<string>(ABOUT_DATA.displayName);

  protected readonly theme = inject(ThemeService);
  protected readonly audio = inject(GameAudioService);
}
