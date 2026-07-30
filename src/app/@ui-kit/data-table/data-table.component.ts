import { CommonModule } from '@angular/common';
import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

export interface AppDataTableColumn {
  field: string;
  displayFormatter?: (value: unknown, rowData: Record<string, unknown>) => string;
  header: string;
  sortable?: boolean;
  filterable?: boolean;
  filterMatchMode?: 'contains' | 'startsWith' | 'endsWith' | 'equals' | 'notEquals' | 'in';
  filterPlaceholder?: string;
  filterMaxLength?: number;
  filterType?: 'text' | 'numeric' | 'date' | 'boolean';
  filterOptions?: { label: string; value: any }[];
  filterDisplay?: 'menu' | 'row' | 'column';
}

export interface AppDataTableAction {
  label?: string;
  icon?: string;
  severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'help' | 'contrast';
  tooltip?: string;
  onClick: (rowData: any) => void;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, TooltipModule],
  template: `
    <p-table
      [value]="value()"
      [dataKey]="dataKey()"
      [rowHover]="true"
      [loading]="loading()"
      [sortMode]="sortMode()"
      [tableStyle]="tableStyle()"
      [size]="size()"
      >

      
      @if (caption() !== '') {
        <ng-template pTemplate="caption">
          <div class="font-semibold">{{ caption() }}</div>
        </ng-template>
      }

      <ng-template pTemplate="header">
        <tr>
          @if (expandableRows()) {
          <th style="width: 3rem"></th>
          }
          @for (column of columns(); track column.field) {
          @if (column.sortable !== false) {
          <th [pSortableColumn]="column.field">
            <div class="flex align-items-center gap-2">
              <span>{{ column.header }}</span>
              <p-sortIcon [field]="column.field"></p-sortIcon>
            </div>
            @if (column.filterable === true) {
              <p-columnFilter
                [field]="column.field"
                [display]="resolveFilterDisplay(column.filterDisplay)"
                [type]="column.filterType ?? 'text'"
                [matchMode]="column.filterMatchMode ?? 'contains'"
                [placeholder]="column.filterPlaceholder ?? ''"
                [maxConstraints]="2"
                [showOperator]="true"
                [showMatchModes]="true"
                [showAddButton]="true"
                [showClearButton]="true"
                [showApplyButton]="true">
              </p-columnFilter>
            }
          </th>
          } @else {
          <th>
            <div>{{ column.header }}</div>
            @if (column.filterable === true) {
              <p-columnFilter
                [field]="column.field"
                [display]="resolveFilterDisplay(column.filterDisplay)"
                [type]="column.filterType ?? 'text'"
                [matchMode]="column.filterMatchMode ?? 'contains'"
                [placeholder]="column.filterPlaceholder ?? ''"
                [maxConstraints]="2"
                [showOperator]="true"
                [showMatchModes]="true"
                [showAddButton]="true"
                [showClearButton]="true"
                [showApplyButton]="true">
              </p-columnFilter>
            }
          </th>
          }
          }
          @if (actions().length > 0) {
          <th style="width: auto">Actions</th>
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
          <td>{{ resolveCell(rowData, column) }}</td>
          }
          @if (actions().length > 0) {
          <td>
            <div class="flex gap-2">
              @for (action of actions(); track $index) {
              <button
                pButton
                pRipple
                type="button"
                [text]="true"
                [rounded]="true"
                [severity]="action.severity ?? 'primary'"
                [icon]="action.icon ?? ''"
                [label]="action.label ?? ''"
                [pTooltip]="action.tooltip ?? ''"
                (click)="action.onClick(rowData)">
              </button>
              }
            </div>
          </td>
          }
        </tr>
      </ng-template>

      <ng-template pTemplate="expandedrow" let-rowData>
        <tr>
          <td [attr.colspan]="columns().length + (expandableRows() ? 1 : 0) + (actions().length > 0 ? 1 : 0)">
            <div class="p-3 surface-50 border-round-sm">
              <div class="font-medium mb-2">Row details</div>
              <pre class="m-0">{{ rowData | json }}</pre>
            </div>
          </td>
        </tr>
      </ng-template>

      <ng-template pTemplate="emptymessage">
        <tr>
          <td [attr.colspan]="columns().length + (expandableRows() ? 1 : 0) + (actions().length > 0 ? 1 : 0)">{{ emptyMessage() }}</td>
        </tr>
      </ng-template>
    </p-table>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class DataTableComponent {
  caption = input<string>('');
  loading = input<boolean>(false);
  expandableRows = input<boolean>(true);
  sortMode = input<'single' | 'multiple'>('single');
  dataKey = input<string>('id');
  emptyMessage = input<string>('No data found');
  value = input<any[]>([]);
  columns = input<AppDataTableColumn[]>([]);
  actions = input<AppDataTableAction[]>([]);
  tableStyle = input<{ [klass: string]: string }>({ 'min-width': '50rem' });
  size = input<'small' | 'large' | undefined>('small');

  resolveCell(rowData: Record<string, unknown>, column: AppDataTableColumn): string {
    const value = rowData?.[column.field];
    if (column.displayFormatter) {
      return column.displayFormatter(value, rowData);
    }
    if (value === undefined || value === null) {
      return '';
    }
    return String(value);
  }

  resolveFilterDisplay(display?: AppDataTableColumn['filterDisplay']): 'menu' | 'row' {
    if (display === 'row' || display === 'column') {
      return 'row';
    }
    return 'menu';
  }

}
