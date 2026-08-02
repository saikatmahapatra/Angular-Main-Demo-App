import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertMessageService, AlertMessage } from '@core/services/alert-message.service';
import { ApiService } from '@core/services/api.service';
import { CommonService } from '@core/services/common.service';
import { FormValidationService } from '@core/services/form-validation.service';
import { MyAppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class ForgotPasswordFormComponent implements OnInit {

  submitted = false;
  loading = false;

  constructor(
    private readonly commonSvc: CommonService,
    private readonly alertMessageService: AlertMessageService,
    private readonly apiSvc: ApiService,
    private readonly fb: UntypedFormBuilder,
    private readonly formValidationSvc: FormValidationService,
    private readonly router: Router
  ) {
    this.commonSvc.setTitle('Forgot Password');
  }

  ngOnInit(): void {
  }

  fpForm = this.fb.group({
    action: ['forgotPassword'],
    email: ['', [Validators.required, this.formValidationSvc.notEmpty, this.formValidationSvc.validEmail]],
  });

  get f() { return this.fpForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    if (this.fpForm.valid) {
      const postData = this.fpForm.value;
      this.apiSvc.post(MyAppConfig.apiUrl.checkEmail, postData).subscribe({
        next: (response: any) => {
          if (response.status == 'success') {
            this.alertMessageService.setAlert('success', response.message);
            this.router.navigate(['auth/reset-password']);
          }
        },
        error: (err: HttpErrorResponse) => {
          this.loading = false;
          this.alertMessageService.setAlert('error', 'An error occurred while processing your request.');
        },
        complete: () => {
          this.loading = false;
        }
      });
    } else {
      this.loading = false;
      this.formValidationSvc.validateAllFormFields(this.fpForm);
    }

  }

}
