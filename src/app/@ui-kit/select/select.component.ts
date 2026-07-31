import { CommonModule } from '@angular/common';
import { Component, forwardRef, input, output, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';

export interface AppSelectOption {
  [key: string]: unknown;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectModule, MultiSelectModule],
  template: `
    <div class="d-flex flex-column gap-2">
      @if (label() !== '') {
      <label [for]="inputId()" class="form-label">{{ label() }}</label>
      }

      @if (multiple()) {
      <p-multiselect
        [inputId]="inputId()"
        [name]="name()"
        [options]="options()"
        [optionLabel]="optionLabel()"
        [optionValue]="optionValue()"
        [placeholder]="placeholder()"
        [display]="'chip'"
        [filter]="filter()"
        [selectionLimit]="selectionLimit()"
        [showClear]="showClear()"
        [disabled]="disabled"
        [(ngModel)]="value"
        (ngModelChange)="onModelChange($event)"
        (onBlur)="onBlur()"
        styleClass="w-100" />
      } @else {
      <p-select
        [inputId]="inputId()"
        [name]="name()"
        [options]="options()"
        [optionLabel]="optionLabel()"
        [optionValue]="optionValue()"
        [placeholder]="placeholder()"
        [filter]="filter()"
        [showClear]="showClear()"
        [disabled]="disabled"
        [(ngModel)]="value"
        (ngModelChange)="onModelChange($event)"
        (onBlur)="onBlur()"
        styleClass="w-100" />
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  label = input<string>('');
  name = input<string>('');
  placeholder = input<string>('Select an option');
  inputId = input<string>(`app-select-${Math.random().toString(36).substring(2, 9)}`);
  multiple = input<boolean>(false);
  filter = input<boolean>(false);
  showClear = input<boolean>(true);
  selectionLimit = input<number | null>(null);
  options = input<AppSelectOption[]>([]);
  optionLabel = input<string>('label');
  optionValue = input<string>('value');
  onChange = output<unknown>();

  value: unknown = null;
  disabled = false;

  private propagateChange: (value: unknown) => void = () => { };
  private onTouched: () => void = () => { };

  onModelChange(val: unknown): void {
    this.value = val;
    this.propagateChange(val);
    this.onChange.emit(val);
  }

  onBlur(): void {
    this.onTouched();
  }

  writeValue(val: unknown): void {
    this.value = val;
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
