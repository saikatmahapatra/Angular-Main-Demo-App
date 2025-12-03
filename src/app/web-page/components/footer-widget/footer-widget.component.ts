import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-widget',
  standalone: false,
  templateUrl: './footer-widget.component.html',
  styleUrls: ['./footer-widget.component.scss']
})
export class FooterWidgetComponent {
  constructor(public router: Router) {}
}
