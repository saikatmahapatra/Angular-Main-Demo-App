import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: false,
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  className = input<string>('logo');
  productName = input<string>('Angular Demo App');
}
