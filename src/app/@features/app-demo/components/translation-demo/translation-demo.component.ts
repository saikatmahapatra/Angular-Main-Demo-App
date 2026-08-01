import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE_LIST } from '@utils/const/common.constant';

@Component({
    selector: 'app-translation-demo',
    templateUrl: './translation-demo.component.html',
    styleUrls: ['./translation-demo.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TranslationDemoComponent implements OnInit {
  user!: { firstName: string; lastName: string; };
  pageContent!: any;
  welcome!: string;

  constructor(private tranlateSvc: TranslateService) {
  }

  ngOnInit(): void {
    // hardcoded example
    this.user = { firstName: 'Saikat', lastName: 'Mahapatra' };

    // synchronous. Also interpolate the 'firstName' parameter with a value.
    this.welcome = this.tranlateSvc.instant('welcomeMessage', { firstName: this.user.firstName });

    // asynchronous - gets translations then completes.
    this.tranlateSvc.get(['login'])
      .subscribe(data => {
        this.pageContent = data;
      });
  }
}
