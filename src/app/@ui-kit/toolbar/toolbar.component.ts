import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  styles: ``,
})
export class ToolbarComponent {

}
