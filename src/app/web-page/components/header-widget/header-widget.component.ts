import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-widget',
  standalone: false,
  templateUrl: './header-widget.component.html',
  styleUrls: ['./header-widget.component.scss']
})
export class HeaderWidgetComponent {
  constructor(public router: Router) {}
}
