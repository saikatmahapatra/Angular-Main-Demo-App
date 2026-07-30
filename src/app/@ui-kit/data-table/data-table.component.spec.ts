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
});
