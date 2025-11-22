import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class InputComponent implements OnInit {

  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() formControlName: string = '';  
  @Input() disabled: boolean = false
  @Input() value: string = '';
  @Input() cssClass: string = '';
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;

  // PrimeNg specific inputs can be added here as needed

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.valueChange.emit(inputElement.value);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
