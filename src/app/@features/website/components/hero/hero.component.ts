import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

}
