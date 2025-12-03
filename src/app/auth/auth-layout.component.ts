import { Component, OnInit } from '@angular/core';
import { MyAppConfig } from 'src/app/app.config';
import { CommonService } from '../@core/services/common.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  standalone: false
})
export class AuthLayoutComponent {
  productName = MyAppConfig.productName;
  constructor(private commonSvc: CommonService) {
    this.commonSvc.setTitle('Auth');
  }

}
