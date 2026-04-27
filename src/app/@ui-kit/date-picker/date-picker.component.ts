import { CommonModule } from '@angular/common';
import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

export type AppDatePickerSelectionMode = 'single' | 'multiple' | 'range';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePickerModule],
  template: `
    <div class="flex flex-column gap-2">
      @if (label() !== '') {
      <label [for]="inputId()" class="form-label">{{ label() }}</label>
      }

      <p-datepicker
        [inputId]="inputId()"
        [name]="name()"
        [placeholder]="placeholder()"
        [selectionMode]="selectionMode()"
        [showIcon]="showIcon()"
        [showButtonBar]="showButtonBar()"
        [showTime]="showTime()"
        [timeOnly]="timeOnly()"
        [dateFormat]="dateFormat()"
        [readonlyInput]="readonlyInput()"
        [disabled]="disabled"
        [minDate]="minDate()"
        [maxDate]="maxDate()"
        [numberOfMonths]="numberOfMonths()"
        [appendTo]="appendTo()"
        [attr.aria-label]="ariaLabel()"
        [(ngModel)]="value"
        (ngModelChange)="onModelChange($event)"
        (onBlur)="onBlur()"
        [styleClass]="styleClass()">
      </p-datepicker>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent implements ControlValueAccessor {
  label = input<string>('');
  name = input<string>('');
  placeholder = input<string>('Select date');
  inputId = input<string>(`app-date-picker-${Math.random().toString(36).substring(2, 9)}`);
  selectionMode = input<AppDatePickerSelectionMode>('single');
  showIcon = input<boolean>(true);
  showButtonBar = input<boolean>(false);
  showTime = input<boolean>(false);
  timeOnly = input<boolean>(false);
  readonlyInput = input<boolean>(true);
  dateFormat = input<string>('dd/mm/yy');
  numberOfMonths = input<number>(1);
  minDate = input<Date | null>(null);
  maxDate = input<Date | null>(null);
  appendTo = input<any>('body');
  styleClass = input<string>('w-100');
  ariaLabel = input<string>('');

  value: Date | Date[] | null = null;
  disabled = false;

  private onChange: (value: Date | Date[] | null) => void = () => { };
  private onTouched: () => void = () => { };

  onModelChange(value: Date | Date[] | null): void {
    this.value = value;
    this.onChange(value);
  }

  onBlur(): void {
    this.onTouched();
  }

  writeValue(value: Date | Date[] | null): void {
    this.value = value;
  }

  registerOnChange(fn: (value: Date | Date[] | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}