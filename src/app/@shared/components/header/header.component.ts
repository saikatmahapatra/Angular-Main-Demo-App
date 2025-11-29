import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent {

  constructor(public layoutService: LayoutService) {

  }

  toggleMenu() {
    
  }

  toggleDarkMode() {

  }
}
