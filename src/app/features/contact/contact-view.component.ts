import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ABOUT_DATA } from '../../core/data/about.data';
import { AboutData } from '../../core/models/about.model';

@Component({
  selector: 'app-contact-view',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.css',
})
export class ContactViewComponent {
  readonly data: AboutData = ABOUT_DATA;
}
