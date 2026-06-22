import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonService } from '../../@core/services/common.service';

@Component({
    selector: 'app-leave-layout',
    templateUrl: './leave-layout.component.html',
    styleUrls: ['./leave-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LeaveLayoutComponent implements OnInit {

  constructor(private commonSvc: CommonService) { 
    this.commonSvc.setTitle('Leave');
  }

  ngOnInit(): void {
  }

}
