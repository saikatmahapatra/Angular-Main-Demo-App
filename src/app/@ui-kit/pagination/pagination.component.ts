import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, PaginatorModule],
  template: `
    <p>
      pagination works!
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class PaginationComponent {

}
