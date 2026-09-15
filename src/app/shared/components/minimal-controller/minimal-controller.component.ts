import {
  Component,
  inject,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { GameStateService } from '../../../core/services/game-state.service';
import { AnimationService } from '../../../core/services/animation.service';
import {
  ControllerButtonKey,
  NavigationSectionId,
} from '../../../core/models/navigation.model';

@Component({
  selector: 'app-minimal-controller',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './minimal-controller.component.html',
  styleUrl: './minimal-controller.component.css',
})
export class MinimalControllerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('controllerSvgContainer') controllerSvgContainer!: ElementRef<HTMLElement>;

  protected readonly gameState = inject(GameStateService);
  private readonly animationService = inject(AnimationService);
  private idleAnimation: any = null;

  ngAfterViewInit(): void {
    if (this.controllerSvgContainer?.nativeElement) {
      this.idleAnimation = this.animationService.startControllerIdle(
        this.controllerSvgContainer.nativeElement
      );
    }
  }

  ngOnDestroy(): void {
    if (this.idleAnimation) {
      this.idleAnimation.pause?.();
    }
  }

  isButtonActive(buttonKey: ControllerButtonKey): boolean {
    return this.gameState.hoveredButton()?.toUpperCase() === buttonKey.toUpperCase();
  }

  onButtonHover(buttonKey: ControllerButtonKey | null): void {
    this.gameState.setHoveredButton(buttonKey);
  }

  onButtonClick(event: Event, sectionId: NavigationSectionId): void {
    const target = event.currentTarget as HTMLElement | SVGElement;
    if (target) {
      this.animationService.animateButtonPulse(target);
    }
    this.gameState.navigate(sectionId);
  }
}
