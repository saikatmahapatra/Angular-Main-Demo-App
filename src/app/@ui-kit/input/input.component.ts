import { Component, input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule],
  template: `
    <div class="flex flex-col gap-2">
      @if(label() !== '') {
      <label [for]="inputId()" class="form-label">
        {{ label() }}
      </label>
      }
      <input 
        [id]="inputId()"
        pInputText 
        [type]="type()"
        [placeholder]="placeholder()"
        [disabled]="disabled"
        [(ngModel)]="value" 
        (ngModelChange)="onModelChange($event)"
        (blur)="onBlur()"
        [attr.minlength]="minLength() !== null ? minLength() : null"
        [attr.maxlength]="maxLength() !== null ? maxLength() : null"
        [attr.min]="min() !== null ? min() : null"
        [attr.max]="max() !== null ? max() : null"
        class="w-100" />
    </div>
  `,
  styles: ``,
  providers: [
    {
      // This is the magic token that tells Angular Forms this component can act as an input
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  // Component Inputs
  label = input<string>('');
  placeholder = input<string>('');
  type = input<'text' | 'password' | 'email' | 'number'>('text');
  inputId = input<string>(`app-input-${Math.random().toString(36).substring(2, 9)}`);
  // Internal State
  value: string = '';
  disabled: boolean = false;
  minLength = input<number | null>(null);
  maxLength = input<number | null>(null);
  min = input<number | null>(null);
  max = input<number | null>(null);

  // Callbacks provided by Angular Forms
  private onChange: (value: any) => void = () => { };
  private onTouched: () => void = () => { };

  // --- UI Event Handlers ---

  onModelChange(val: string): void {
    this.value = val;
    this.onChange(val); // Notify Angular Forms the value changed
  }

  onBlur(): void {
    this.onTouched(); // Notify Angular Forms the input was interacted with
  }

  // --- ControlValueAccessor Implementation ---

  // 1. Writes a new value to the element from the form model
  writeValue(val: any): void {
    this.value = val !== undefined && val !== null ? val : '';
  }

  // 2. Registers a callback function that is called when the control's value changes in the UI
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // 3. Registers a callback function that is called by the forms API on initialization to update the form model on blur
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // 4. Function that is called by the forms API when the control status changes to or from 'DISABLED'
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
