/// <reference types="jasmine" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';

import { UiKitDemoComponent } from './ui-kit-demo.component';

describe('UiKitDemoComponent', () => {
  let component: UiKitDemoComponent;
  let fixture: ComponentFixture<UiKitDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiKitDemoComponent],
      providers: [MessageService]
    })
      // Keep this suite focused on UiKitDemoComponent class state and behavior.
      .overrideComponent(UiKitDemoComponent, {
        set: { template: '' }
      })
      .compileComponents();

    fixture = TestBed.createComponent(UiKitDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize myForm with expected defaults', () => {
    expect(component.myForm.getRawValue()).toEqual({
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      age: null,
      bio: '',
      gender: '',
      country: '',
      skills: [],
      termsAccepted: false,
      dateRange: null
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

  it('should define employee columns in expected order', () => {
    expect(component.employeeColumns.map((column) => column.field)).toEqual([
      'name',
      'department',
      'location',
      'dob',
      'salary'
    ]);
    expect(component.employeeColumns.find((column) => column.field === 'salary')?.displayFormatter).toEqual(jasmine.any(Function));
  });

  it('should define employee data with unique ids and positive salaries', () => {
    const ids = component.employeeData.map((row: { id: number }) => row.id);
    const uniqueIds = new Set(ids);

    expect(uniqueIds.size).toBe(component.employeeData.length);
    expect(component.employeeData.every((row: { salary: number }) => row.salary > 0)).toBeTrue();
    expect(component.employeeData[0]).toEqual({
      id: 1,
      name: 'Luca Romano',
      department: 'Engineering',
      location: 'Rome',
      dob: '1990-01-01',
      salary: 82000,
      currency: 'EUR',
      projects: [
        { project: 'Atlas', role: 'Lead Engineer', allocation: '70%' },
        { project: 'Apollo', role: 'Reviewer', allocation: '30%' }
      ]
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

  it('should toggle modal visibility through open and close helpers', () => {
    component.openModal();
    expect(component.showModal).toBeTrue();

    component.closeModal();
    expect(component.showModal).toBeFalse();
  });
});
