import { Component } from '@angular/core';
import { CommonService } from '../@core/services/common.service';

@Component({
  selector: 'app-app-demo-layout',
  standalone: false,
  templateUrl: './app-demo-layout.component.html',
  styleUrl: './app-demo-layout.component.scss',
})
export class AppDemoLayoutComponent {
  title = 'Angular4';
  subtitle = 'Fundamental of Angular 2';

  menuLinks = [
    { link: '/demo/test', text: 'Test Component' },
    { link: '/demo/template-basic', text: 'Template Basic (Data, Event Binding etc)' },
    { link: '/demo/types-of-angular-directive', text: 'Directive' },
    { link: '/demo/pipes', text: 'Pipes' },
    { link: '/demo/user-input-binding', text: 'Data Binding' },
    { link: '/demo/template-driven-form', text: 'Template Driven Form' },
    { link: '/demo/reactive-form', text: 'Reactive Form' },
    { link: '/demo/angular-services', text: 'Use of Service' },
    { link: '/demo/parent-comp', text: 'Parent-Child Component' },
    { link: '/demo/employee', text: 'Observable (RxJS Operators)' },
    { link: '/demo/tranfer-fund', text: 'Routing Basic' },
    { link: '/demo/content-projection', text: 'Content Projection' },
    { link: '/demo/ag-grid', text: 'AG Grid Demo' },
    { link: '/demo/translate', text: 'NGX-Translation (i18n)' },
    { link: '/demo/kore-ai', text: 'Kore.ai poc' },
    { link: '/demo/prime-ng', text: 'PrimeNG Theme' }
  ];

  constructor(private commonSvc: CommonService) {
    this.commonSvc.setTitle('Angular Concepts Example');
  }
}
