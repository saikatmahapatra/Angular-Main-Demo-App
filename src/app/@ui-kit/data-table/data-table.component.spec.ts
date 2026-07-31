import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableComponent } from './data-table.component';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataTableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use displayFormatter only for cell display', () => {
    const renderedValue = component.resolveCell(
      { salary: 82000, currency: 'EUR' },
      {
        field: 'salary',
        header: 'Salary',
        displayFormatter: (value, rowData) => `${value} ${String(rowData['currency'])}`
      }
    );

    expect(renderedValue).toBe('82000 EUR');
  });

  it('should resolve expanded rows from configured data field when source is array', () => {
    fixture.componentRef.setInput('expandedRowTableDataField', 'projects');
    fixture.detectChanges();

    const rows = component.resolveExpandedRows({
      id: 1,
      projects: [
        { project: 'Atlas', status: 'active' },
        { project: 'Mercury', status: 'planned' }
      ]
    });

    expect(rows.length).toBe(2);
    expect(rows[0]['project']).toBe('Atlas');
  });

  it('should derive expanded columns from first expanded row when no columns configured', () => {
    fixture.componentRef.setInput('expandedRowTableDataField', 'details');
    fixture.detectChanges();

    const columns = component.resolveExpandedColumns({
      details: [{ releaseName: 'Q3 Milestone', owner_name: 'Platform Team' }]
    });

    expect(columns.map((column) => column.field)).toEqual(['releaseName', 'owner_name']);
    expect(columns.map((column) => column.header)).toEqual(['Release Name', 'Owner name']);
  });
});
