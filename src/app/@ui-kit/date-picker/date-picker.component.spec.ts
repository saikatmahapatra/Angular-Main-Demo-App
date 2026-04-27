import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerComponent } from './date-picker.component';

describe('DatePickerComponent', () => {
  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePickerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to single selection mode', () => {
    expect(component.selectionMode()).toBe('single');
  });

  it('should propagate value changes through control value accessor', () => {
    const onChange = jasmine.createSpy('onChange');
    const selectedRange = [new Date('2026-04-01'), new Date('2026-04-27')];

    component.registerOnChange(onChange);
    component.onModelChange(selectedRange);

    expect(component.value).toEqual(selectedRange);
    expect(onChange).toHaveBeenCalledWith(selectedRange);
  });

  it('should update disabled state', () => {
    component.setDisabledState(true);

    expect(component.disabled).toBeTrue();
  });
});