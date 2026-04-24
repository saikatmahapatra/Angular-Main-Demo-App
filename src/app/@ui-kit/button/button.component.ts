import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

export type AppButtonSeverity = 'primary' | 'secondary' | 'success' | 'info' | 'danger' | 'contrast';

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
  disabled = input(false);
  outlined = input(false);

  action = output<MouseEvent>();

  handleClick(event: MouseEvent) {
    if (!this.disabled()) {
      this.action.emit(event);
    }
  }
}