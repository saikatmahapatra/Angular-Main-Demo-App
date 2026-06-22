import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { MyAppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-logo',
  standalone: false,
  templateUrl: './logo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  className = input<string>('logo');
  productName = input<string | undefined>(MyAppConfig.productName);
}
