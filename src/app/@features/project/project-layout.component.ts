import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonService } from '../../@core/services/common.service';

@Component({
    selector: 'app-project-layout',
    templateUrl: './project-layout.component.html',
    styleUrls: ['./project-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProjectLayoutComponent implements OnInit {

  constructor(private commonSvc: CommonService,) { 
    this.commonSvc.setTitle('Project');
  }

  ngOnInit(): void {
  }

}
