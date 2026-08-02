import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertMessageService } from '@core/services/alert-message.service';
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
