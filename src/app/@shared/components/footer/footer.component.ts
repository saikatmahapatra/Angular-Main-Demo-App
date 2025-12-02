import { Component } from '@angular/core';
import { MyAppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  productName = MyAppConfig.productName;
  version = MyAppConfig.version + '-' + MyAppConfig.env;
  buildTimestamp = MyAppConfig.timestamp;
  constructor() { }
}
