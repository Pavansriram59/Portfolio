import { Injectable } from '@angular/core';
import { animate, createTimeline, stagger } from 'animejs';

export interface HeroEntranceElements {
  title?: Element | null;
  subtitle?: Element | null;
  tagline?: Element | null;
  controller?: Element | null;
  footerHint?: Element | null;
}

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  /**
   * Check if user prefers reduced motion
   */
  prefersReducedMotion(): boolean {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Hero Homepage Entrance Animation Sequence
   */
  runHeroEntrance(elements: HeroEntranceElements): void {
    if (this.prefersReducedMotion()) {
      Object.values(elements).forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }
      });
      return;
    }

    const tl = createTimeline({ defaults: { ease: 'outExpo' } });

    if (elements.title) {
      tl.add(elements.title, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
      });
    }

    if (elements.subtitle) {
      tl.add(
        elements.subtitle,
        {
          opacity: [0, 1],
          translateY: [12, 0],
          duration: 600,
        },
        '-=600'
      );
    }

    if (elements.tagline) {
      tl.add(
        elements.tagline,
        {
          opacity: [0, 1],
          translateY: [10, 0],
          duration: 600,
        },
        '-=450'
      );
    }

    if (elements.controller) {
      tl.add(
        elements.controller,
        {
          opacity: [0, 1],
          scale: [0.94, 1],
          translateY: [30, 0],
          duration: 900,
        },
        '-=500'
      );
    }

    if (elements.footerHint) {
      tl.add(
        elements.footerHint,
        {
          opacity: [0, 1],
          translateY: [8, 0],
          duration: 600,
        },
        '-=400'
      );
    }
  }

  /**
   * Subtle floating / breathing idle animation for the game controller
   */
  startControllerIdle(element: Element | null | undefined): any {
    if (this.prefersReducedMotion() || !element) return null;

    return animate(element, {
      translateY: [-6, 6],
      duration: 3500,
      ease: 'inOutSine',
      loop: true,
      alternate: true,
    });
  }

  /**
   * Physical tactile button click pulse feedback
   */
  animateButtonPulse(target: Element | null | undefined): void {
    if (this.prefersReducedMotion() || !target) return;

    animate(target, {
      opacity: [0.6, 1],
      duration: 200,
      ease: 'outQuad',
    });
  }

  /**
   * Modal entrance transition
   */
  runModalEnter(
    backdrop: Element | null | undefined,
    container: Element | null | undefined
  ): void {
    if (this.prefersReducedMotion()) {
      if (backdrop instanceof HTMLElement) backdrop.style.opacity = '1';
      if (container instanceof HTMLElement) {
        container.style.opacity = '1';
        container.style.transform = 'none';
      }
      return;
    }

    if (backdrop) {
      animate(backdrop, {
        opacity: [0, 1],
        duration: 250,
        ease: 'linear',
      });
    }

    if (container) {
      animate(container, {
        opacity: [0, 1],
        scale: [0.95, 1],
        translateY: [15, 0],
        duration: 350,
        ease: 'outCubic',
      });
    }
  }

  /**
   * Kinetic wave synthesizer loop
   */
  runKineticWave(
    elements: NodeListOf<Element> | Element[],
    mode: string,
    amplitude: number,
    duration: number,
    barCount: number
  ): any {
    if (!elements || (elements instanceof NodeList && elements.length === 0)) {
      return null;
    }

    if (mode === 'Sine Wave') {
      return animate(elements, {
        height: [
          { value: `${amplitude}px` },
          { value: '14px' },
          { value: `${amplitude * 0.5}px` },
          { value: '18px' },
        ],
        delay: stagger(duration / barCount, { start: 0 }),
        duration,
        loop: true,
        alternate: true,
        ease: 'inOutSine',
      });
    }

    if (mode === 'Ripple Echo') {
      return animate(elements, {
        height: [
          { value: '10px' },
          { value: `${amplitude * 1.1}px` },
          { value: '10px' },
        ],
        delay: stagger(40, { from: 'center' }),
        duration: duration * 0.9,
        loop: true,
        ease: 'inOutQuad',
      });
    }

    // Harmonics Mode
    return animate(elements, {
      height: () => `${Math.floor(15 + Math.random() * amplitude)}px`,
      delay: stagger(30),
      duration: duration * 0.7,
      loop: true,
      alternate: true,
      ease: 'outExpo',
    });
  }

  /**
   * Kinetic shockwave pulse
   */
  triggerKineticShockwave(
    elements: NodeListOf<Element> | Element[],
    onComplete?: () => void
  ): void {
    if (!elements || (elements instanceof NodeList && elements.length === 0)) {
      onComplete?.();
      return;
    }

    animate(elements, {
      scaleY: [1, 2.2, 0.4, 1],
      delay: stagger(25, { from: 'center' }),
      duration: 450,
      ease: 'outBack',
      onComplete: () => {
        onComplete?.();
      },
    });
  }
}
