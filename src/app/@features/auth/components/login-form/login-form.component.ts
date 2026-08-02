import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { FormValidationService } from '@core/services/form-validation.service';
import { CommonService } from '@core/services/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertMessageService, AlertMessage } from '@core/services/alert-message.service';


@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    providers: [AuthService, FormValidationService],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LoginFormComponent implements OnInit {
  submitted = false;
  loading = false;

  constructor(
    private readonly commonSvc: CommonService,
    private readonly fb: UntypedFormBuilder,
    private readonly authSvc: AuthService,
    private readonly route: ActivatedRoute,
    private readonly alertMessageService: AlertMessageService,
    private readonly router: Router,
    private readonly formValidationSvc: FormValidationService
  ) {
    this.commonSvc.setTitle('Login');
  }

  loginForm = this.fb.group({
    userName: ['', [Validators.required, this.formValidationSvc.notEmpty]],
    password: ['', [Validators.required, this.formValidationSvc.notEmpty]]
  })

  ngOnInit(): void {
    if (this.authSvc.isLoggedIn()) {
      this.router.navigate(['/']);
    }
    if (this.router.url === '/auth/logout') {
      this.loading = true;
      this.authSvc.logoutSessionToken().subscribe({
        next: (response: any) => {
        },
        error: (err: HttpErrorResponse) => {
          const message: AlertMessage = { severity: 'error', summary: 'Error', detail: 'An error occurred while logging out.' };
          this.alertMessageService.setAlert(message);
          this.loading = false;
        },
        complete: () => { 
          this.loading = false; 
          const message: AlertMessage = { severity: 'success', summary: 'Success', detail: 'You have been logged out.' };
          this.alertMessageService.setAlert(message);
          this.authSvc.clearStorageData();
        }
      });

    }
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    if (this.loginForm.valid) {
      const postData = this.loginForm.value;
      this.authSvc.authenticate(postData).subscribe({
        next: (response: any) => {
          const message: AlertMessage = { severity: 'success', summary: 'Success', detail: 'Redirecting...' };
          this.alertMessageService.setAlert(message);
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate([returnUrl]);
        },
        error: () => { this.loading = false; 
          const message: AlertMessage = { severity: 'error', summary: 'Error', detail: 'An error occurred while logging in.' };
          this.alertMessageService.setAlert(message);
        },
        complete: () => { this.loading = false; }
      });

    } else {
      this.loading = false;
      this.formValidationSvc.validateAllFormFields(this.loginForm);
    }

  }
}
