import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  styles: ``,
})
export class PaginationComponent {

}
