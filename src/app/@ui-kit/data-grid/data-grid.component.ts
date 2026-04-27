import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

export interface AppDataGridColumn {
  field: string;
  header: string;
  sortable?: boolean;
}

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  template: `
    <p-table
      [value]="value()"
      [dataKey]="dataKey()"
      [rowHover]="true"
      [loading]="loading()"
      [sortMode]="sortMode()"
      [tableStyle]="tableStyle()">

      <ng-template pTemplate="caption">
        @if (caption() !== '') {
        <div class="font-semibold">{{ caption() }}</div>
        }
      </ng-template>

      <ng-template pTemplate="header">
        <tr>
          @if (expandableRows()) {
          <th style="width: 3rem"></th>
          }
          @for (column of columns(); track column.field) {
          @if (column.sortable !== false) {
          <th [pSortableColumn]="column.field">
            {{ column.header }}
            <p-sortIcon [field]="column.field"></p-sortIcon>
          </th>
          } @else {
          <th>
            {{ column.header }}
          </th>
          }
          }
        </tr>
      </ng-template>

      <ng-template pTemplate="body" let-rowData let-expanded="expanded">
        <tr>
          @if (expandableRows()) {
          <td>
            <button
              pButton
              pRipple
              type="button"
              [pRowToggler]="rowData"
              [text]="true"
              [rounded]="true"
              [plain]="true"
              [icon]="expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'">
            </button>
          </td>
          }
          @for (column of columns(); track column.field) {
          <td>{{ resolveCell(rowData, column.field) }}</td>
          }
        </tr>
      </ng-template>

      <ng-template pTemplate="expandedrow" let-rowData>
        <tr>
          <td [attr.colspan]="columns().length + (expandableRows() ? 1 : 0)">
            <div class="p-3 surface-50 border-round-sm">
              <div class="font-medium mb-2">Row details</div>
              <pre class="m-0">{{ rowData | json }}</pre>
            </div>
          </td>
        </tr>
      </ng-template>

      <ng-template pTemplate="emptymessage">
        <tr>
          <td [attr.colspan]="columns().length + (expandableRows() ? 1 : 0)">{{ emptyMessage() }}</td>
        </tr>
      </ng-template>
    </p-table>
  `,
  styles: ``,
})
export class DataGridComponent {
  caption = input<string>('');
  loading = input<boolean>(false);
  expandableRows = input<boolean>(true);
  sortMode = input<'single' | 'multiple'>('single');
  dataKey = input<string>('id');
  emptyMessage = input<string>('No data found');
  value = input<any[]>([]);
  columns = input<AppDataGridColumn[]>([]);
  tableStyle = input<{ [klass: string]: string }>({ 'min-width': '50rem' });

  resolveCell(rowData: Record<string, unknown>, field: string): string {
    const value = rowData?.[field];
    if (value === undefined || value === null) {
      return '';
    }
    return String(value);
  }

}
