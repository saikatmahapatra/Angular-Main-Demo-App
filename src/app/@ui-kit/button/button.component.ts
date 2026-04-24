import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

export type AppButtonSeverity = 'primary' | 'secondary' | 'success' | 'info' | 'danger' | 'contrast' | 'warn';
export type Variant = 'text' | 'raised' | 'outlined' | null | any;
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonModule],
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
  class = input<string | undefined>(undefined);
  click = output<MouseEvent>();

  handleClick(event: MouseEvent) {
    if (!this.disabled()) {
      this.click.emit(event);
    }
  }
}