import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  standalone: false,
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  constructor(public router: Router) {}
}
