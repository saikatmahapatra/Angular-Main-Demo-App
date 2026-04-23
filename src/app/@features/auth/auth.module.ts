import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './auth-layout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { SharedModule } from '../../@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwoFactorAuthComponent } from './components/login-form/two-factor-auth/two-factor-auth.component';
import { TranslateLangModule } from '../../translate-language.module';
import { SignupComponent } from './components/signup/signup.component';
import { APP_UI_COMPONENTS } from 'src/app/@app-ui-lib';

@NgModule({
  declarations: [
    AuthLayoutComponent, LoginFormComponent, ForgotPasswordFormComponent, ResetPasswordFormComponent, TwoFactorAuthComponent, SignupComponent
  ],
  imports: [
    CommonModule,
    TranslateLangModule,
    AuthRoutingModule,
    ...APP_UI_COMPONENTS,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
