import { Component, input, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [CommonModule, FormsModule, TextareaModule],
  template: `
    <div class="flex flex-col gap-2">
      @if(label() !== '') {
      <label [for]="textareaId()" class="form-label">
        {{ label() }}
      </label>
      }
      <textarea
        [id]="textareaId()"
        [name]="name()"
        pTextarea
        [placeholder]="placeholder()"
        [disabled]="disabled"
        [(ngModel)]="value" 
        (ngModelChange)="onModelChange($event)"
        (blur)="onBlur()"
        [rows]="rows()"
        [cols]="cols()"
        [attr.minlength]="minLength() !== null ? minLength() : null"
        [attr.maxlength]="maxLength() !== null ? maxLength() : null"
        [attr.min]="min() !== null ? min() : null"
        [attr.max]="max() !== null ? max() : null"
        class="w-100"></textarea>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  providers: [
    {
      // This is the magic token that tells Angular Forms this component can act as an input
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true
    }
  ]
})
export class TextAreaComponent implements ControlValueAccessor {
  // Component Inputs
  label = input<string>('');
  name = input<string>('');
  placeholder = input<string>('');
  textareaId = input<string>(`app-text-area-${Math.random().toString(36).substring(2, 9)}`);
  // Internal State
  value: string = '';
  disabled: boolean = false;
  minLength = input<number | null>(null);
  maxLength = input<number | null>(null);
  min = input<number | null>(null);
  max = input<number | null>(null);
  rows = input<number>(3);
  cols = input<number>(30);

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
