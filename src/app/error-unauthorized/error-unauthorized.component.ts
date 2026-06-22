import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../@core/services/common.service';

@Component({
    selector: 'app-error-unauthorized',
    templateUrl: './error-unauthorized.component.html',
    styleUrls: ['./error-unauthorized.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ErrorUnauthorizedComponent implements OnInit {

  constructor(private commonSvc: CommonService, private router: Router) { 
    this.commonSvc.setTitle('Error Unauthorized');
    
  }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/']);
  }

}
