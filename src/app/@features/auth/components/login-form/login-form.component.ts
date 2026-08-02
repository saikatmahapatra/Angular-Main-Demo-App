import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { FormValidationService } from '@core/services/form-validation.service';
import { CommonService } from '@core/services/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertMessageService } from '@core/services/alert-message.service';


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
    private commonSvc: CommonService,
    private fb: UntypedFormBuilder,
    private authSvc: AuthService,
    private route: ActivatedRoute,
    private alertMessageService: AlertMessageService,
    private router: Router,
    private formValidationSvc: FormValidationService
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
          this.alertMessageService.setAlert('error', 'Error Occured');
          this.loading = false;
        },
        complete: () => { 
          this.loading = false; 
          this.alertMessageService.setAlert('success', 'You have been logged out');
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
          this.alertMessageService.setAlert('success', 'Redirecting...');
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate([returnUrl]);
        },
        error: () => { this.loading = false; 
          this.alertMessageService.setAlert('error', 'Error Occured');
        },
        complete: () => { this.loading = false; }
      });

    } else {
      this.loading = false;
      this.formValidationSvc.validateAllFormFields(this.loginForm);
    }

  }
}
