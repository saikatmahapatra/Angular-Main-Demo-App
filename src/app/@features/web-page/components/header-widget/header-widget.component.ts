import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { MyAppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-header-widget',
  standalone: false,
  templateUrl: './header-widget.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./header-widget.component.scss']
})
export class HeaderWidgetComponent {
  productName = MyAppConfig.productName;
  constructor(public router: Router) {}
}
