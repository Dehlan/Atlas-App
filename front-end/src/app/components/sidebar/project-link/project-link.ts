import { Component, DestroyRef, inject, signal, OnInit } from '@angular/core';
import { animate, NgmMotionDirective, type TargetAndTransition, type Transition } from '@scripttype/ng-motion';
import { ProjectService } from '../../../api-services/project-service';
import { IProjectLink } from '../../../interfaces/IProjectLink';
import { ProgressBar } from './progress-bar/progress-bar';

@Component({
  selector: 'app-project-link',
  imports: [ProgressBar, NgmMotionDirective],
  templateUrl: './project-link.html',
  styleUrl: './project-link.scss',
})
export class ProjectLink implements OnInit {
  private readonly ProjectService = inject(ProjectService);
  private readonly DestroyRef = inject(DestroyRef);
  public readonly Projects = signal<IProjectLink[]>([]);
  public readonly DisplayedProgress = signal<Record<number, number>>({});
  public readonly PercentageInitial: TargetAndTransition = { opacity: 0, y: 4 };
  public readonly PercentageAnimate: TargetAndTransition = { opacity: 1, y: 0 };
  public readonly PercentageTransition: Transition = { duration: 0.45, ease: 'easeOut' };
  public readonly ProgressAnimations: { stop: () => void }[] = [];

  public ngOnInit() {
    this.ProjectService.LoadProjectLinks().subscribe((data: IProjectLink[]) => {
      this.Projects.set(data);
      this.AnimateProgressNumbers(data);
    });

    this.DestroyRef.onDestroy(() => {
      this.ProgressAnimations.forEach((animation) => animation.stop());
    });
  }

  public ProgressFor(projectId: number): number {
    return this.DisplayedProgress()[projectId] ?? 0;
  }

  private AnimateProgressNumbers(projects: IProjectLink[]): void {
    this.ProgressAnimations.forEach((animation) => animation.stop());
    this.ProgressAnimations.length = 0;

    projects.forEach((project, index) => {
      const animation = animate(0, project.Progress, {
        duration: 0.8,
        delay: index * 0.08,
        ease: 'easeOut',
        onUpdate: (latest) => {
          this.DisplayedProgress.update((progress) => ({
            ...progress,
            [project.Id]: Math.round(latest),
          }));
        },
      });

      this.ProgressAnimations.push(animation);
    });
  }
}
