import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  signal,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { AnimationService } from '../../core/services/animation.service';

@Component({
  selector: 'app-playground-view',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './playground-view.component.html',
  styleUrl: './playground-view.component.css',
})
export class PlaygroundViewComponent implements AfterViewInit, OnDestroy {
  @ViewChild('barsContainer') barsContainer!: ElementRef<HTMLElement>;

  private readonly animationService = inject(AnimationService);

  readonly barCount = 20;
  readonly bars: readonly number[] = Array.from({ length: this.barCount }, (_, i) => i);
  readonly modes: readonly string[] = ['Sine Wave', 'Ripple Echo', 'Harmonics'];

  readonly currentMode = signal<string>('Sine Wave');
  readonly amplitude = signal<number>(85);
  readonly duration = signal<number>(800);

  private animationInstance: any = null;

  ngAfterViewInit(): void {
    this.startAnimation();
  }

  ngOnDestroy(): void {
    if (this.animationInstance) {
      this.animationInstance.pause?.();
    }
  }

  setMode(mode: string): void {
    this.currentMode.set(mode);
    this.startAnimation();
  }

  onAmplitudeChange(e: Event): void {
    const val = Number((e.target as HTMLInputElement).value);
    this.amplitude.set(val);
    this.startAnimation();
  }

  onDurationChange(e: Event): void {
    const val = Number((e.target as HTMLInputElement).value);
    this.duration.set(val);
    this.startAnimation();
  }

  triggerPulse(): void {
    const el = this.barsContainer?.nativeElement;
    if (!el) return;

    const bars = el.querySelectorAll('.kinetic-bar');
    this.animationService.triggerKineticShockwave(bars, () => {
      this.startAnimation();
    });
  }

  private startAnimation(): void {
    const el = this.barsContainer?.nativeElement;
    if (!el) return;

    if (this.animationInstance) {
      this.animationInstance.pause?.();
    }

    const bars = el.querySelectorAll('.kinetic-bar');
    this.animationInstance = this.animationService.runKineticWave(
      bars,
      this.currentMode(),
      this.amplitude(),
      this.duration(),
      this.barCount
    );
  }
}
