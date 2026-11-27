import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CommonService } from '@core/services/common.service';
import { NavigationService } from '@core/services/navigation.service';
import { LayoutService } from '@shared/services/layout.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class DefaultLayoutComponent {
  constructor(public layoutService: LayoutService) { 
    
  }
}
