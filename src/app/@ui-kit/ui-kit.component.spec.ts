/// <reference types="jasmine" />

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitComponent } from './ui-kit.component';

describe('UiKitComponent', () => {
  let component: UiKitComponent;
  let fixture: ComponentFixture<UiKitComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [UiKitComponent]
    })
      // Keep this suite focused on UiKitComponent class state and behavior.
      .overrideComponent(UiKitComponent, {
        set: { template: '' }
      })
      .compileComponents();

    fixture = TestBed.createComponent(UiKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize myForm with expected defaults', () => {
    expect(component.myForm).toEqual({
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      age: null,
      bio: '',
      gender: '',
      country: '',
      skills: [],
      termsAccepted: false
    });
  });

  it('should provide expected gender options', () => {
    expect(component.genderOptions).toEqual([
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' }
    ]);
  });

  it('should provide expected country options', () => {
    expect(component.countryOptions).toEqual([
      { label: 'Bangladesh', value: 'bd' },
      { label: 'India', value: 'in' },
      { label: 'United States', value: 'us' },
      { label: 'Germany', value: 'de' }
    ]);
  });

  it('should provide expected skill options', () => {
    expect(component.skillOptions).toEqual([
      { label: 'Angular', value: 'angular' },
      { label: 'TypeScript', value: 'typescript' },
      { label: 'PrimeNG', value: 'primeng' },
      { label: 'RxJS', value: 'rxjs' }
    ]);
  });

  it('should define sortable employee columns in expected order', () => {
    expect(component.employeeColumns).toEqual([
      { field: 'name', header: 'Name', sortable: true },
      { field: 'department', header: 'Department', sortable: true },
      { field: 'location', header: 'Location', sortable: true },
      { field: 'salary', header: 'Salary', sortable: true }
    ]);
  });

  it('should define employee data with unique ids and positive salaries', () => {
    const ids = component.employeeData.map((row) => row.id);
    const uniqueIds = new Set(ids);

    expect(uniqueIds.size).toBe(component.employeeData.length);
    expect(component.employeeData.every((row) => row.salary > 0)).toBeTrue();
    expect(component.employeeData[0]).toEqual({
      id: 1,
      name: 'Arif Rahman',
      department: 'Engineering',
      location: 'Dhaka',
      salary: 82000
    });
  });

  it('should define chart data labels and one revenue dataset', () => {
    expect(component.chartData.labels).toEqual(['Q1', 'Q2', 'Q3', 'Q4']);
    expect(component.chartData.datasets.length).toBe(1);
    expect(component.chartData.datasets[0].label).toBe('Revenue');
    expect(component.chartData.datasets[0].data).toEqual([45000, 62000, 58000, 79000]);
  });

  it('should define chart options for axes and legend colors', () => {
    expect(component.chartOptions.maintainAspectRatio).toBeFalse();
    expect(component.chartOptions.plugins.legend.labels.color).toBe('#334155');
    expect(component.chartOptions.scales.x.ticks.color).toBe('#334155');
    expect(component.chartOptions.scales.y.ticks.color).toBe('#334155');
  });

  it('should log confirmation when saveItem is called', () => {
    spyOn(console, 'log');

    component.saveItem();

    expect(console.log).toHaveBeenCalledWith('Item saved!');
  });
});
