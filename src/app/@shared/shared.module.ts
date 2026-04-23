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
import { UnauthenticatedLayoutComponent } from './components/layouts/unauthenticated-layout/unauthenticated-layout.component';
import { AuthenticatedLayoutComponent } from './components/layouts/authenticated-layout/authenticated-layout.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { StatusIndicatorDirective } from './directives/status-indicator.directive';
import { ThemeSwitchComponent } from './components/theme-switch/theme-switch.component';
//import { CookieConsentComponent } from './components/cookie-consent/cookie-consent.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { LanguageSwitchComponent } from './components/language-switch/language-switch.component';
import { TranslateLangModule } from '../translate-language.module';
import { AppMenuitemComponent } from './components/sidebar/menuitem.component';
import { ThemeConfigComponent } from './components/theme-config/theme-config.component';
import { LogoComponent } from './components/logo/logo.component';
import { APP_UI_COMPONENTS } from '../@app-ui-lib';


const data = [
  HighlightDirective,
  ExponentialStrengthPipe,
  MaskPipe,
  OrderByPipe,
  CheckCapsLockDirective,
  HeaderComponent,
  FooterComponent,
  ValidationErrorComponent,
  UnauthenticatedLayoutComponent,
  AuthenticatedLayoutComponent,
  SidebarComponent,
  AppMenuitemComponent,
  LoaderComponent,
  SearchInputComponent,
  StatusIndicatorDirective,
  ThemeSwitchComponent,
  ScrollToTopComponent,
  BreadcrumbComponent,
  LanguageSwitchComponent,
  ThemeConfigComponent,
  LogoComponent
];

@NgModule({
  imports: [
    RouterModule,
    TranslateLangModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    ...APP_UI_COMPONENTS
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
