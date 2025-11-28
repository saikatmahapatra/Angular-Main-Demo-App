import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { CheckCapsLockDirective } from './directives/check-caps-lock.directive';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { MaskPipe } from './pipes/mask.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DefaultLayoutComponent } from './components/layouts/default-layout/default-layout.component';
import { UnauthenticatedLayoutComponent } from './components/layouts/unauthenticated-layout/unauthenticated-layout.component';
import { AuthenticatedLayoutComponent } from './components/layouts/authenticated-layout/authenticated-layout.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { AlertMessageComponent } from './components/@ui-component-lib/alert-message/alert-message.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FileUploadComponent } from './components/@ui-component-lib/file-upload/file-upload.component';
import { StatusIndicatorDirective } from './directives/status-indicator.directive';
import { ThemeSwitchComponent } from './components/theme-switch/theme-switch.component';
import { IconComponent } from './components/@ui-component-lib/icon/icon.component';
//import { CookieConsentComponent } from './components/cookie-consent/cookie-consent.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { PrimeNgModule } from '../prime-ng.module';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { LanguageSwitchComponent } from './components/language-switch/language-switch.component';
import { ButtonComponent } from './components/@ui-component-lib/button/button.component';
import { DataTableComponent } from './components/@ui-component-lib/data-table/data-table.component';
import { ChartsComponent } from './components/@ui-component-lib/charts/charts.component';
import { InputComponent } from './components/@ui-component-lib/input/input.component';
import { SelectComponent } from './components/@ui-component-lib/select/select.component';
import { RadioComponent } from './components/@ui-component-lib/radio/radio.component';
import { CheckboxComponent } from './components/@ui-component-lib/checkbox/checkbox.component';
import { TranslateLangModule } from '../translate-language.module';


const data = [
  HighlightDirective,
  ExponentialStrengthPipe,
  MaskPipe,
  OrderByPipe,
  CheckCapsLockDirective,
  HeaderComponent,
  FooterComponent,
  ValidationErrorComponent,
  DefaultLayoutComponent,
  UnauthenticatedLayoutComponent,
  AuthenticatedLayoutComponent,
  AlertMessageComponent,
  SidebarComponent,
  LoaderComponent,
  SearchInputComponent,
  FileUploadComponent,
  StatusIndicatorDirective,
  ThemeSwitchComponent,
  IconComponent,
  ScrollToTopComponent,
  BreadcrumbComponent,
  LanguageSwitchComponent,
  ButtonComponent,
  DataTableComponent,
  ChartsComponent,
  InputComponent,
  SelectComponent,
  RadioComponent,
  CheckboxComponent
];

@NgModule({
  imports: [
    RouterModule,
    TranslateLangModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    PrimeNgModule
  ],
  declarations: [
    ...data
  ],
  providers: [],
  exports: [
    ...data
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}
