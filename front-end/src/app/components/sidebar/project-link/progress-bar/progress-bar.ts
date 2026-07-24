import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.scss',
})
export class ProgressBar implements OnInit {
  public readonly Progress = input<number>(0);
  public readonly Color = input<string>('#fff');

  ngOnInit() {
    // Animation triggers on component load via motion library
  }
}
