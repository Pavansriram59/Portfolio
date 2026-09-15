import { Injectable, signal, effect } from '@angular/core';

const STORAGE_KEY = 'portfolio-theme';
const DARK_CLASS = 'dark';

/**
 * ThemeService — manages light/dark mode with Signal-based reactivity.
 *
 * Theme preference is persisted to localStorage and applied as a
 * `dark` class on the `<html>` element, which activates the CSS
 * custom property overrides defined in styles.css.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  /** Signal holding the current dark-mode state */
  readonly isDark = signal<boolean>(this.#loadPreference());

  constructor() {
    // Reactively apply the class whenever isDark changes
    effect(() => {
      const html = document.documentElement;
      if (this.isDark()) {
        html.classList.add(DARK_CLASS);
      } else {
        html.classList.remove(DARK_CLASS);
      }
      this.#savePreference(this.isDark());
    });
  }

  /** Toggle between light and dark mode */
  toggle(): void {
    this.isDark.update((v) => !v);
  }

  /** Set a specific theme */
  setDark(value: boolean): void {
    this.isDark.set(value);
  }

  // ---- Private helpers ----

  #loadPreference(): boolean {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== null) return stored === 'dark';
      // Fall back to OS preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  }

  #savePreference(isDark: boolean): void {
    try {
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    } catch {
      // localStorage not available (e.g. private browsing with strict settings)
    }
  }
}
