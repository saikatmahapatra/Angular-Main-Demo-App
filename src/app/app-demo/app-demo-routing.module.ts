import { NgModule } from '@angular/core';
// import ActivateRoute, ParamMap for query string related things
import { AppDemoLayoutComponent } from './app-demo-layout.component';
import { Routes, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { TemplateDataBindingComponent } from './components/template-data-binding/template-data-binding.component';
import { AngularDirectiveComponent } from './components/angular-directive/angular-directive.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormInputBindingComponent } from './components/form-input-binding/form-input-binding.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { AngularServicesComponent } from './components/angular-services/angular-services.component';
import { TestComponent } from './components/test/test.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { EmployeeComponent } from './components/observable-in-angular/employee.component';
import { TransferFundComponent } from './components/transfer-fund/transfer-fund.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { AgGridTableExampleComponent } from './components/ag-grid-table-example/ag-grid-table-example.component';
import { TranslationDemoComponent } from './components/translation-demo/translation-demo.component';
import { PrimeNgUiKitComponent } from './components/prime-ng-ui-kit/prime-ng-ui-kit.component';
//import { KoreAiComponent } from './kore-ai/kore-ai.component';

const routes: Routes = [{
  path: '',
  component: AppDemoLayoutComponent,
  children: [
    { path: '', redirectTo: 'prime-ng', pathMatch: 'full' },
    { path: 'test', component: TestComponent },
    { path: 'template-basic', component: TemplateDataBindingComponent },
    { path: 'types-of-angular-directive', component: AngularDirectiveComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'user-input-binding', component: FormInputBindingComponent },
    { path: 'template-driven-form', component: TemplateDrivenFormComponent },
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'angular-services', component: AngularServicesComponent },
    { path: 'test', component: TestComponent },
    { path: 'child-comp', component: ChildComponent },
    { path: 'parent-comp', component: ParentComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'tranfer-fund', component: TransferFundComponent },
    { path: 'content-projection', component: ContentCardComponent },
    { path: 'ag-grid', component: AgGridTableExampleComponent },
    { path: 'translate', component: TranslationDemoComponent},
    //{ path: 'kore-ai', component: KoreAiComponent},
    { path: 'prime-ng', component: PrimeNgUiKitComponent}
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class AngularDemoRoutingModule { }
