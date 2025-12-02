import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '@core/services/alert.service';
import { CommonService } from '../@core/services/common.service';

@Component({
    selector: 'app-dashboard-layout',
    templateUrl: './dashboard-layout.component.html',
    styleUrls: ['./dashboard-layout.component.scss'],
    standalone: false
})
export class DashboardLayoutComponent implements OnInit {
  constructor(private commonSvc: CommonService,) {
    this.commonSvc.setTitle('Dashboard');
  }
  ngOnInit(): void {
    
  }

}
