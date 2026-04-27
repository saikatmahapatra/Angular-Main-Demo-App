import { CommonModule } from '@angular/common';
import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule, CheckboxModule],
  template: `
    <div class="flex align-items-center gap-2">
      <p-checkbox
        [binary]="true"
        [inputId]="inputId()"
        [name]="name()"
        [disabled]="disabled"
        [(ngModel)]="value"
        (ngModelChange)="onModelChange($event)"
        (onBlur)="onBlur()" />
      @if (label() !== '') {
      <label [for]="inputId()">{{ label() }}</label>
      }
    </div>
  `,
  styleUrl: './checkbox.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {
  label = input<string>('');
  name = input<string>('');
  inputId = input<string>(`app-checkbox-${Math.random().toString(36).substring(2, 9)}`);

  value = false;
  disabled = false;

  private onChange: (value: boolean) => void = () => { };
  private onTouched: () => void = () => { };

  onModelChange(val: boolean): void {
    this.value = val;
    this.onChange(val);
  }

  onBlur(): void {
    this.onTouched();
  }

  writeValue(val: boolean | null): void {
    this.value = !!val;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
