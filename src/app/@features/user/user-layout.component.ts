import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonService } from '../../@core/services/common.service';

@Component({
    selector: 'app-user-layout',
    templateUrl: './user-layout.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class UserLayoutComponent implements OnInit {

  constructor(private commonSvc: CommonService) { 
    this.commonSvc.setTitle('Employee');
    
  }

  ngOnInit() {
  }

}
