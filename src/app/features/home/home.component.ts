import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { GameStateService } from '../../core/services/game-state.service';
import { AnimationService } from '../../core/services/animation.service';
import { HeaderControlsComponent } from '../../shared/components/header-controls/header-controls.component';
import { MinimalControllerComponent } from '../../shared/components/minimal-controller/minimal-controller.component';
import { QuickNavComponent } from '../../shared/components/quick-nav/quick-nav.component';
import { SectionModalComponent } from '../../shared/components/section-modal/section-modal.component';
import { NavigationSectionId } from '../../core/models/navigation.model';
import { ABOUT_DATA } from '../../core/data/about.data';

// Feature Views
import { AboutViewComponent } from '../about/about-view.component';
import { ProjectsViewComponent } from '../projects/projects-view.component';
import { ExperienceViewComponent } from '../experience/experience-view.component';
import { SkillsViewComponent } from '../skills/skills-view.component';
import { PlaygroundViewComponent } from '../playground/playground-view.component';
import { ContactViewComponent } from '../contact/contact-view.component';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderControlsComponent,
    MinimalControllerComponent,
    QuickNavComponent,
    SectionModalComponent,
    AboutViewComponent,
    ProjectsViewComponent,
    ExperienceViewComponent,
    SkillsViewComponent,
    PlaygroundViewComponent,
    ContactViewComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('heroTitle') heroTitle!: ElementRef<HTMLElement>;
  @ViewChild('heroSubtitle') heroSubtitle!: ElementRef<HTMLElement>;
  @ViewChild('heroTagline') heroTagline!: ElementRef<HTMLElement>;
  @ViewChild('heroController') heroController!: ElementRef<HTMLElement>;
  @ViewChild('heroFooter') heroFooter!: ElementRef<HTMLElement>;

  protected readonly gameState = inject(GameStateService);
  private readonly animationService = inject(AnimationService);
  protected readonly resume = ABOUT_DATA;

  ngAfterViewInit(): void {
    this.animationService.runHeroEntrance({
      title: this.heroTitle?.nativeElement,
      subtitle: this.heroSubtitle?.nativeElement,
      tagline: this.heroTagline?.nativeElement,
      controller: this.heroController?.nativeElement,
      footerHint: this.heroFooter?.nativeElement,
    });
  }

  protected onSelect(sectionId: NavigationSectionId): void {
    this.gameState.navigate(sectionId);
  }

  protected getSectionTitle(sectionId: NavigationSectionId): string {
    const point = this.gameState.navPoints.find((p) => p.id === sectionId);
    return point ? point.label : 'Information';
  }

  protected getSectionTag(sectionId: NavigationSectionId): string {
    const point = this.gameState.navPoints.find((p) => p.id === sectionId);
    return point ? point.buttonName : 'NAV';
  }
}
