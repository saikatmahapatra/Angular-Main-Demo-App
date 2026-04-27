import { Component, OnInit } from '@angular/core';
import { AppDemoService } from '../../services/app-demo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-angular-services',
    templateUrl: './angular-services.component.html',
    providers: [AppDemoService],
    standalone: false
})
export class AngularServicesComponent implements OnInit {
  subtitle = 'This is AngularServicesComponent. ';
  constructor(private mySvc: AppDemoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subtitle += this.mySvc.test();
  }

  goToTest() {
    this.router.navigate(['/angular-example/test/'], {queryParams: {cutomField1: 1234, cutomField2: 'abc', cutomField3: 'xyz'}});
  }

}
