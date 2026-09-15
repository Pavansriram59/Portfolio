import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ABOUT_DATA } from '../../core/data/about.data';
import { AboutData } from '../../core/models/about.model';

@Component({
  selector: 'app-about-view',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-view.component.html',
  styleUrl: './about-view.component.css',
})
export class AboutViewComponent {
  readonly data: AboutData = ABOUT_DATA;
}
