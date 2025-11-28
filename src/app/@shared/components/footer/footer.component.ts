import { Component, OnInit } from '@angular/core';
import { MyAppConfig } from 'src/app/app.config';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  appVersion = '';
  buildTimestamp = '';
  constructor() { }

  ngOnInit() {
    this.appVersion = MyAppConfig.version;
    this.buildTimestamp = MyAppConfig.timestamp;
  }

}
