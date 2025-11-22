import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() btnType: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';
  @Input() label: string = 'Button';
  @Input() size: 'small' | 'medium' | 'large' | 'normal' = 'normal';
  @Input() iconClass: string = '';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() fullWidth: boolean = false;
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() rounded: boolean = false;
  @Input() outlined: boolean = false;
  @Input() raised: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
