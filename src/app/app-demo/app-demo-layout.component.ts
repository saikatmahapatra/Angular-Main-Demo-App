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
    { link: '/uikit/test', text: 'Test Component' },
    { link: '/uikit/template-basic', text: 'Template Basic (Data, Event Binding etc)' },
    { link: '/uikit/types-of-angular-directive', text: 'Directive' },
    { link: '/uikit/pipes', text: 'Pipes' },
    { link: '/uikit/user-input-binding', text: 'Data Binding' },
    { link: '/uikit/template-driven-form', text: 'Template Driven Form' },
    { link: '/uikit/reactive-form', text: 'Reactive Form' },
    { link: '/uikit/angular-services', text: 'Use of Service' },
    { link: '/uikit/parent-comp', text: 'Parent-Child Component' },
    { link: '/uikit/employee', text: 'Observable (RxJS Operators)' },
    { link: '/uikit/tranfer-fund', text: 'Routing Basic' },
    { link: '/uikit/content-projection', text: 'Content Projection' },
    { link: '/uikit/ag-grid', text: 'AG Grid Demo' },
    { link: '/uikit/translate', text: 'i18n Translation' },
    { link: '/uikit/kore-ai', text: 'Kore.ai poc' },
    { link: '/uikit/prime-ng', text: 'PrimeNG Theme' }
  ];

  constructor(private commonSvc: CommonService) {
    this.commonSvc.setTitle('Angular Concepts Example');
  }
}
