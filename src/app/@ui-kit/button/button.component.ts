import { Component, input, output, computed, ChangeDetectionStrategy } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

export type AppButtonSeverity = 'primary' | 'secondary' | 'success' | 'info' | 'danger' | 'contrast' | 'warn';
export type Variant = 'text' | 'raised' | 'outlined' | null | any;

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonModule, TooltipModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      pButton
      [type]="type()"
      [rounded]="rounded()"
      [severity]="severity()"
      [outlined]="outlined() || variant() === 'outlined'"      
      [raised]="raised() || variant() === 'raised'"
      [text]="text() || variant() === 'text'"
      [loading]="loading()"
      [class]="class()"
      [pTooltip]="tooltip()"
      [tooltipPosition]="tooltipPosition()"
      (click)="handleClick($event)"
      [disabled]="disabled()">
      @if (icon() && iconPosition() === 'left') {
        <span class="mr-2" [class]="icon()" pButtonIcon></span>
      }
      <ng-content></ng-content>
      @if (icon() && iconPosition() === 'right') {
        <span class="ml-2" [class]="icon()" pButtonIcon></span>
      }
    </button>
  `
})
export class ButtonComponent {
  type = input<'button' | 'submit' | 'reset'>('button');
  icon = input<string | undefined>(undefined);
  iconPosition = input<'left' | 'right'>('left');
  severity = input<AppButtonSeverity>('primary');
  variant = input<Variant>(null);
  disabled = input(false);
  outlined = input(false);
  rounded = input(false);
  raised = input(false);
  text = input(false);
  loading = input(false);
  class = input<string | undefined>('');
  tooltip = input<string | undefined>('');
  tooltipPosition = input<'top' | 'bottom' | 'left' | 'right'>('right');
  clickAction = output<MouseEvent>();

  handleClick(event: MouseEvent) {
    if (!this.disabled()) {
      this.clickAction.emit(event);
    }
  }
}