import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LayoutService } from '@shared/services/layout.service';
import { MenuItem } from 'primeng/api';
import { MyAppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class HeaderComponent {
  product = MyAppConfig.productName;
  items!: MenuItem[];
  
  constructor(public layoutService: LayoutService) {
  }

  // toggleDarkMode() {
  //   this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
  // }
}
