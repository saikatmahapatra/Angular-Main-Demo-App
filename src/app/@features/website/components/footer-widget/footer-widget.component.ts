import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { MyAppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-footer-widget',
  standalone: false,
  templateUrl: './footer-widget.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./footer-widget.component.scss']
})
export class FooterWidgetComponent {
  productName = MyAppConfig.productName;
  constructor(public router: Router) {}
}
