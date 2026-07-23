import { NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

export type ButtonTheme = 'primary' | 'secondary' | 'nav';
export type ButtonSize = 'default' | 'sm' | 'xs';

@Component({
  selector: 'app-button',
  imports: [NgTemplateOutlet, RouterLink],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  host: {
    "[class.disabled]": "Disabled()",
  }
})
export class Button {
  public readonly ElementRef = inject(ElementRef);
  public IsFlex = input<boolean>(false);
  public Href = input<string | undefined>(undefined);
  public IsRouterLink = input<boolean>(true);
  public Theme = input<ButtonTheme>('primary');
  public Size = input<ButtonSize>('default');
  public Disabled = input<boolean>(false);
  public Click = output<void>();
  public FullWidth = input<boolean>(false);
  public MaxWidth = input<string | undefined>(undefined);

  public OnClick(): void {
    if (!this.Disabled()) {
      this.Click.emit();
    }
  }
}
