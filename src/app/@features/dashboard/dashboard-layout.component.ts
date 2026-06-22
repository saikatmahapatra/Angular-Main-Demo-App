import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '@core/services/alert.service';
import { CommonService } from '../../@core/services/common.service';

@Component({
    selector: 'app-dashboard-layout',
    templateUrl: './dashboard-layout.component.html',
    styleUrls: ['./dashboard-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DashboardLayoutComponent implements OnInit {
  constructor(private commonSvc: CommonService,) {
    this.commonSvc.setTitle('Dashboard');
  }
  ngOnInit(): void {
    
  }

}
