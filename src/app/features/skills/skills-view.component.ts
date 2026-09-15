import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SKILLS_DATA } from '../../core/data/skills.data';
import { SkillCategory } from '../../core/models/skills.model';

@Component({
  selector: 'app-skills-view',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills-view.component.html',
  styleUrl: './skills-view.component.css',
})
export class SkillsViewComponent {
  readonly categories: readonly SkillCategory[] = SKILLS_DATA;
}
