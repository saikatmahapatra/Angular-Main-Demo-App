import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CommonService } from 'src/app/@core/services/common.service';
import { NavigationService } from 'src/app/@core/services/navigation.service';

@Component({
    selector: 'app-authenticated-layout',
    templateUrl: './authenticated-layout.component.html',
    styleUrls: ['./authenticated-layout.component.scss'],
    standalone: false
})
export class AuthenticatedLayoutComponent {
  containerClass: string = '';
}
