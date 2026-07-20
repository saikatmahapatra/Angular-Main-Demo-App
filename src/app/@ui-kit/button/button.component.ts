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
      [severity]="severity()"
      [disabled]="disabled()"
      [outlined]="isOutlined()"
      [rounded]="rounded()"
      [raised]="isRaised()"
      [text]="isText()"
      [loading]="loading()"
      [class]="class()"
      [title]="title()"
      [pTooltip]="tooltip()"
      [tooltipPosition]="tooltipPosition()"
      (click)="handleClick($event)">
      @if (icon()) {
        <span [class]="icon()" pButtonIcon></span>
      }
      @if (label()) {
        <span pButtonLabel>{{ label() }}</span>
      }
      <ng-content></ng-content>
    </button>
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
  text = input(false);
  loading = input(false);
  class = input<string | undefined>('');
  title = input<string | undefined>('');
  tooltip = input<string | undefined>('');
  tooltipPosition = input<'top' | 'bottom' | 'left' | 'right'>('right');
  clickAction = output<MouseEvent>();

  isOutlined = computed(() => this.outlined() || this.variant() === 'outlined');
  isRaised = computed(() => this.raised() || this.variant() === 'raised');
  isText = computed(() => this.text() || this.variant() === 'text');

  handleClick(event: MouseEvent) {
    if (!this.disabled()) {
      this.clickAction.emit(event);
    }
  }
}