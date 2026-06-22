import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, ToolbarModule],
  template: `
    <p>
      toolbar works!
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class ToolbarComponent {

}
