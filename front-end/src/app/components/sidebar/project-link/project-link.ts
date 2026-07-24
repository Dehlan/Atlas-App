import { Component, inject, input, signal, OnInit } from '@angular/core';
import { ProjectService } from '../../../api-services/project-service';
import { IProjectLink } from '../../../interfaces/IProjectLink';
import { ProgressBar } from './progress-bar/progress-bar';

@Component({
  selector: 'app-project-link',
  imports: [ProgressBar],
  templateUrl: './project-link.html',
  styleUrl: './project-link.scss',
})
export class ProjectLink implements OnInit {
  private ProjectService = inject(ProjectService);
  public readonly Projects = signal<IProjectLink[]>([]);

  ngOnInit() {
    this.ProjectService.LoadProjectLinks().subscribe((data: IProjectLink[]) => {
      this.Projects.set(data);
    });
  }
}
