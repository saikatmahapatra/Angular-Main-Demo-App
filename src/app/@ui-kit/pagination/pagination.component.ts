import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, PaginatorModule],
  template: `
    <p-paginator 
      [rows]="itemPerPage()" 
      [first]="first()" 
      [totalRecords]="totalRecords()"
      [rowsPerPageOptions]="itemPerPageDropdown()" 
      [showCurrentPageReport]="showCurrentPageReport()" 
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
      (onPageChange)="handlePaginationEvent($event)">
    </p-paginator>

  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class PaginationComponent {
  // Pagination Config
  currentPageIndex = input<number>(0);
  first = input<number>(0);
  totalRecords = input<number>(0);
  itemPerPage = input<number>(10);
  itemPerPageDropdown = input<number[]>([10, 25, 50, 100]);
  handlePageChange = output<MouseEvent>();
  showCurrentPageReport = input<boolean>(true);

  handlePaginationEvent(event: any) {
    this.handlePageChange.emit(event);
  }
}
