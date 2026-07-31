import { CommonModule } from '@angular/common';
import { Component, input, ChangeDetectionStrategy, ContentChild, TemplateRef } from '@angular/core';
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
      [value]="dataValue()"
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
            <div class="d-flex align-items-center gap-2">
              <span>{{ column.header }}</span>
              <p-sortIcon [field]="column.field"></p-sortIcon>
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
            </div>
          </th>
          } @else {
          <th>
            <div class="d-flex align-items-center gap-1">
              <span>{{ column.header }}</span>
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
            </div>
            
          </th>
          }
          }
          @if (actions() && actions().length > 0) {
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
          @if (actions() && actions().length > 0) {
          <td>
            <div class="d-flex gap-1">
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
          <td [attr.colspan]="columns().length + (expandableRows() ? 1 : 0) + (actions() && actions().length > 0 ? 1 : 0)">
            @if (expandedRowTemplate) {
            <ng-container
              [ngTemplateOutlet]="expandedRowTemplate"
              [ngTemplateOutletContext]="{ $implicit: rowData, rowData: rowData }">
            </ng-container>
            }
          </td>
        </tr>
      </ng-template>

      <ng-template pTemplate="emptymessage">
        <tr>
          <td [attr.colspan]="columns().length + (expandableRows() ? 1 : 0) + (actions() && actions().length > 0 ? 1 : 0)">{{ emptyMessage() }}</td>
        </tr>
      </ng-template>
    </p-table>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class DataTableComponent {
  dataValue = input<any[]>([]);
  columns = input<AppDataTableColumn[]>([]);
  caption = input<string>('');
  loading = input<boolean>(false);
  expandableRows = input<boolean>(false);
  sortMode = input<'single' | 'multiple'>('single');
  dataKey = input<string>('id');
  emptyMessage = input<string>('No data found');
  actions = input<AppDataTableAction[]>([]);
  tableStyle = input<{ [klass: string]: string }>({ 'min-width': '50rem' });
  size = input<'small' | 'large' | undefined>('small');
  expandedRowTableDataField = input<string>('');
  expandedRowTableColumns = input<AppDataTableColumn[]>([]);
  expandedRowEmptyMessage = input<string>('No expanded row data found');

  @ContentChild('expandedRow', { read: TemplateRef })
  expandedRowTemplate?: TemplateRef<unknown>;

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

  resolveExpandedRows(rowData: Record<string, unknown>): Record<string, unknown>[] {
    const dataField = this.expandedRowTableDataField();
    const source: unknown = dataField ? rowData?.[dataField] : rowData;

    if (Array.isArray(source)) {
      return source.filter((item): item is Record<string, unknown> => typeof item === 'object' && item !== null);
    }

    if (typeof source === 'object' && source !== null) {
      return [source as Record<string, unknown>];
    }

    if (source === undefined || source === null) {
      return [];
    }

    return [{ value: source }];
  }

  resolveExpandedColumns(rowData: Record<string, unknown>): AppDataTableColumn[] {
    const configuredColumns = this.expandedRowTableColumns();
    if (configuredColumns.length > 0) {
      return configuredColumns;
    }

    const firstRow = this.resolveExpandedRows(rowData)[0];
    if (!firstRow) {
      return [];
    }

    return Object.keys(firstRow).map((key) => ({
      field: key,
      header: this.toTitleCase(key)
    }));
  }

  private toTitleCase(value: string): string {
    return value
      .replace(/([A-Z])/g, ' $1')
      .replace(/[_-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/^./, (first) => first.toUpperCase());
  }

}
