import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../@shared/shared.module';
import { AngularDemoRoutingModule } from './app-demo-routing.module';
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
import { AddToCartComponent } from './components/form-input-binding/add-to-cart/add-to-cart.component';
import { SumDigitPipePipe } from './pipes/custom-pipes/sum-digit-pipe.pipe';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridTableExampleComponent } from './components/ag-grid-table-example/ag-grid-table-example.component';
import { TranslationDemoComponent } from './components/translation-demo/translation-demo.component';
import { PrimeNgUiKitComponent } from './components/prime-ng-ui-kit/prime-ng-ui-kit.component';
import { PrimeNgModule } from '../prime-ng.module';
//import { KoreAiComponent } from './kore-ai/kore-ai.component';
import { TranslateLangModule } from '../translate-language.module';
import { AppDemoLayoutComponent } from './app-demo-layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    AngularDemoRoutingModule,
    AgGridModule,
    TranslateLangModule,
    PrimeNgModule
  ],
  declarations: [
    AppDemoLayoutComponent,
    AngularDirectiveComponent,
    PipesComponent,
    FormInputBindingComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    AngularServicesComponent,
    TemplateDataBindingComponent,
    TestComponent,
    ChildComponent,
    ParentComponent,
    EmployeeComponent,
    TransferFundComponent,
    AddToCartComponent,
    SumDigitPipePipe,
    ContentCardComponent,
    AgGridTableExampleComponent,
    TranslationDemoComponent,
    PrimeNgUiKitComponent,
    //KoreAiComponent,
  ],
  exports: [
    SumDigitPipePipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppDemoModule { }
