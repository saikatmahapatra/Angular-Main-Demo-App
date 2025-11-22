import { Component, EventEmitter, Input, Output } from '@angular/core';
import { min } from 'lodash';

@Component({
  selector: 'app-form-control',
  standalone: false,
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent {
  @Input() label: string = '';
  @Input() type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color' | 'select' | 'textarea' = 'text';
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input('readonly') readonlyAttr: boolean = false;
  @Input() minlength: number | null = null;
  @Input() maxlength: number | null = null;
  @Input() pattern: string = '';
  @Input() size: number | null = null;
  @Input() autocomplete: string = 'off';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.valueChange.emit(inputElement.value);
  }
}
