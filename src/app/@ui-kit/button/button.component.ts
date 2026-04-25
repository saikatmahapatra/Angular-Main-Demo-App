import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

export type AppButtonSeverity = 'primary' | 'secondary' | 'success' | 'info' | 'danger' | 'contrast' | 'warn';
export type Variant = 'text' | 'raised' | 'outlined' | null | any;
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonModule, TooltipModule],
  template: `
    <p-button 
      [type]="type()"
      [label]="label()" 
      [icon]="icon()" 
      [severity]="severity()" 
      [disabled]="disabled()"
      [outlined]="outlined()"
      [rounded]="rounded()"
      [variant]="variant()"
      [raised]="raised()"
      [loading]="loading()"
      [styleClass]="class()"
      [title]="title()"
      [pTooltip]="tooltip()"
      [tooltipPosition]="tooltipPosition()"
      (onClick)="handleClick($event)">
      <ng-content></ng-content>
    </p-button>
  `
})
export class ButtonComponent {
  type = input<'button' | 'submit' | 'reset'>('button');
  label = input<string | undefined>(undefined);
  icon = input<string | undefined>(undefined);
  severity = input<AppButtonSeverity>('primary');
  variant = input<Variant>(null);
  disabled = input(false);
  outlined = input(false);
  rounded = input(false);
  raised = input(false);
  loading = input(false);
  class = input<string | undefined>('');
  title = input<string | undefined>('');
  tooltip = input<string | undefined>('');
  tooltipPosition = input<'top' | 'bottom' | 'left' | 'right'>('left');
  clickAction = output<MouseEvent>();
  toolTipText: string | undefined = undefined;

  // constructor() {
  //   this.toolTipText = this.showTooltip() ? this.title() || this.tooltip() : undefined;
  // }

  handleClick(event: MouseEvent) {
    if (!this.disabled()) {
      this.clickAction.emit(event);
    }
  }
}