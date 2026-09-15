import {
  Component,
  input,
  output,
  AfterViewInit,
  ViewChild,
  ElementRef,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { AnimationService } from '../../../core/services/animation.service';

@Component({
  selector: 'app-section-modal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section-modal.component.html',
  styleUrl: './section-modal.component.css',
})
export class SectionModalComponent implements AfterViewInit {
  @ViewChild('backdrop') backdrop!: ElementRef<HTMLElement>;
  @ViewChild('modalContainer') modalContainer!: ElementRef<HTMLElement>;

  readonly title = input.required<string>();
  readonly tag = input.required<string>();
  readonly close = output<void>();

  private readonly animationService = inject(AnimationService);

  ngAfterViewInit(): void {
    this.animationService.runModalEnter(
      this.backdrop?.nativeElement,
      this.modalContainer?.nativeElement
    );

    if (this.modalContainer?.nativeElement) {
      this.modalContainer.nativeElement.focus();
    }
  }
}
