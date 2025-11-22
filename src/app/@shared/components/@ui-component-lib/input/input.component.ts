import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

// Token that allows Angular to recognize this component as a custom form control.
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  // IMPORTANT: Register the custom value accessor here.
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class InputComponent implements ControlValueAccessor {

  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() placeholder: string = '';
  //@Input() formControlName: string = '';
  @Input() disabled: boolean = false
  @Input() value: string = '';
  @Input() cssClass: string = '';
  @Input() readonly: boolean = false;
  @Input() required: boolean = true;

  // PrimeNg specific inputs can be added here as needed

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.valueChange.emit(inputElement.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

  // Internal value storage
  private innerValue: any = '';

  // Function to call when the value changes (provided by the Forms API)
  private onChange: (value: any) => void = () => { };

  // Function to call when the control is touched (provided by the Forms API)
  private onTouched: () => void = () => { };

  // --- ControlValueAccessor Implementation ---

  // 1. Write value from the model to the view (used by Reactive Forms `setValue`)
  writeValue(value: any): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  // 2. Register a function to call when the control value changes (model -> view)
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  // 3. Register a function to call when the control is blurred (mark as touched)
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // 4. Set the control's disabled state
  setDisabledState?(isDisabled: boolean): void {
    // You can set a property here to disable the native input element
    // e.g., this.isDisabled = isDisabled;
  }

  // --- Internal Component Logic ---

  /**
   * Called when the native input's value changes.
   * Updates the internal value and notifies the Forms API.
   * @param event The native input event.
   */
  handleInput(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    this.innerValue = newValue;
    // Notify Forms API of the change
    this.onChange(newValue);
  }

  /**
   * Called when the native input is blurred.
   * Notifies the Forms API that the control has been touched.
   */
  handleBlur(): void {
    this.onTouched();
  }
}
