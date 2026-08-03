import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(public router: Router) {}
}
