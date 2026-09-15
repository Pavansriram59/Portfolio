import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EXPERIENCE_DATA } from '../../core/data/experience.data';
import { WorkExperience } from '../../core/models/experience.model';

@Component({
  selector: 'app-experience-view',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience-view.component.html',
  styleUrl: './experience-view.component.css',
})
export class ExperienceViewComponent {
  readonly experiences: readonly WorkExperience[] = EXPERIENCE_DATA;
}
