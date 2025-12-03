import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-footer',
  standalone: false,
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent {
  constructor(public router: Router) {}
}
