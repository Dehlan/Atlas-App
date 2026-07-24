import { Component, input } from '@angular/core';
import { NgmMotionDirective, type TargetAndTransition, type Transition } from '@scripttype/ng-motion';

@Component({
  selector: 'app-progress-bar',
  imports: [NgmMotionDirective],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.scss',
})
export class ProgressBar {
  public readonly Progress = input<number>(0);
  public readonly Color = input<string>('#fff');

  public readonly Initial: TargetAndTransition = { opacity: 0, width: '0%' };
  public readonly Transition: Transition = { duration: 0.8, ease: 'easeOut' };

  public Animate(): TargetAndTransition {
    return { opacity: 1, width: `${this.Progress()}%` };
  }
}
