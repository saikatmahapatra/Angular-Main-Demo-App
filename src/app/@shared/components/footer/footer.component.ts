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
  appVersion = MyAppConfig.version;
  buildTimestamp = MyAppConfig.timestamp;
  
  constructor() { }
}
