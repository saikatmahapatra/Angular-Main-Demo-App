import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './auth-layout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { SharedModule } from '../@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwoFactorAuthComponent } from './components/login-form/two-factor-auth/two-factor-auth.component';
import { PrimeNgModule } from '../prime-ng.module';
import { TranslateLangModule } from '../translate-language.module';

@NgModule({
  declarations: [
    AuthLayoutComponent, LoginFormComponent, ForgotPasswordFormComponent, ResetPasswordFormComponent, TwoFactorAuthComponent
  ],
  imports: [
    CommonModule,
    TranslateLangModule,
    AuthRoutingModule,
    PrimeNgModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
