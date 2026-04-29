import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  styles: ``,
})
export class AccordionComponent {

}
