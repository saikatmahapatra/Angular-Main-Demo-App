import { CommonModule } from '@angular/common';
import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

export interface AppRadioOption {
  label: string;
  value: string | number | boolean;
}

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [CommonModule, FormsModule, RadioButtonModule],
  template: `
    <div class="flex flex-column gap-2">
      @if (label() !== '') {
      <label class="form-label">{{ label() }}</label>
      }

      <div class="flex flex-wrap gap-3">
        @for (option of options(); track $index) {
        <div class="flex align-items-center gap-2">
          <p-radiobutton
            [inputId]="getOptionId($index)"
            [name]="name()"
            [value]="option.value"
            [disabled]="disabled"
            [(ngModel)]="value"
            (ngModelChange)="onModelChange($event)"
            (onBlur)="onBlur()" />
          <label [for]="getOptionId($index)">{{ option.label }}</label>
        </div>
        }
      </div>
    </div>
  `,
  styles: ``,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true
    }
  ]
})
export class RadioButtonComponent implements ControlValueAccessor {
  label = input<string>('');
  name = input<string>(`app-radio-${Math.random().toString(36).substring(2, 9)}`);
  options = input<AppRadioOption[]>([]);

  value: string | number | boolean | null = null;
  disabled = false;

  private onChange: (value: string | number | boolean | null) => void = () => { };
  private onTouched: () => void = () => { };

  getOptionId(index: number): string {
    return `${this.name()}-${index}`;
  }

  onModelChange(val: string | number | boolean | null): void {
    this.value = val;
    this.onChange(val);
  }

  onBlur(): void {
    this.onTouched();
  }

  writeValue(val: string | number | boolean | null): void {
    this.value = val;
  }

  registerOnChange(fn: (value: string | number | boolean | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
