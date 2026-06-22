import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, AccordionModule],
  template: `
    <p>
      accordion works!
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class AccordionComponent {

}
