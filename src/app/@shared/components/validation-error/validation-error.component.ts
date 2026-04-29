import { Component, OnInit, input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormValidationService } from '@core/services/form-validation.service';
@Component({
    selector: 'app-validation-error',
    templateUrl: './validation-error.component.html',
    styleUrls: ['./validation-error.component.scss'],
    providers: [FormValidationService],
    standalone: false
})
export class ValidationErrorComponent implements OnInit {

  control = input<AbstractControl>();

  constructor(private formValidationSvc: FormValidationService) { }

  ngOnInit() {
  }

  // update form control value & validity

  //get err message
  get errorMessage() {
    const control = this.control();
    if (!control) return null;
    const fG = control.parent;
    for (const validationRule in control.errors) {
      if (control.errors.hasOwnProperty(validationRule)) {
        if ((control.touched) && control.errors[validationRule]) {
          return this.formValidationSvc.getValidatorErrorMessage(validationRule, control.errors[validationRule]);
        }
      }
    }
    return null;
  }

}
