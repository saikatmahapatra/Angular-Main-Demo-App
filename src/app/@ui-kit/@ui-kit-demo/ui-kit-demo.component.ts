import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { FormValidationService } from '@core/services/form-validation.service';
import { MessageService } from 'primeng/api';
import { SharedModule } from '@shared/shared.module';
import { APP_UI_KIT } from '..';
import { AppDataTableAction } from '../data-table/data-table.component';

@Component({
  selector: 'app-ui-kit-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule, APP_UI_KIT],
  templateUrl: './ui-kit-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./ui-kit-demo.component.scss']
})
export class UiKitDemoComponent {
  showModal = false;

  constructor(
    private fb: UntypedFormBuilder,
    private formValidationSvc: FormValidationService,
    private messageService: MessageService
  ) { }

  // Form example
  myForm = this.fb.group({
    firstname: ['', [Validators.required, this.formValidationSvc.notEmpty]],
    lastname: ['', [Validators.required, this.formValidationSvc.notEmpty]],
    email: ['', [Validators.required, this.formValidationSvc.validEmail]],
    age: [null as number | null, [Validators.required, Validators.min(18), Validators.max(65)]],
    mobile: ['', [Validators.required, this.formValidationSvc.phoneNumber]],
    bio: ['', [Validators.required, Validators.maxLength(250), this.formValidationSvc.notEmpty]],
    gender: ['', [Validators.required]],
    country: ['', [Validators.required]],
    skills: [[] as string[], [this.formValidationSvc.minLengthArray]],
    termsAccepted: [false, [Validators.requiredTrue]],
    dateRange: [null as Date[] | null, [Validators.required]]
  });

  readonly genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' }
  ];

  readonly countryOptions = [
    { label: 'Bangladesh', value: 'bd' },
    { label: 'India', value: 'in' },
    { label: 'United States', value: 'us' },
    { label: 'Germany', value: 'de' }
  ];

  readonly skillOptions = [
    { label: 'Angular', value: 'angular' },
    { label: 'TypeScript', value: 'typescript' },
    { label: 'PrimeNG', value: 'primeng' },
    { label: 'RxJS', value: 'rxjs' }
  ];

  get f() {
    return this.myForm.controls;
  }

  onFormSubmit() {
    if (this.myForm.valid) {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Form submitted successfully',
        life: 3000,
        key: 'app-alert-toast'
      });
      console.log('UI Kit form submitted', this.myForm.value);
      return;
    }

    this.formValidationSvc.validateAllFormFields(this.myForm);
    this.messageService.add({
      severity: 'warn',
      summary: 'Validation',
      detail: 'Please review the highlighted fields',
      life: 3000,
      key: 'app-alert-toast'
    });
  }
  // Form example ends here

  // Data table
  readonly employeeColumns = [
    { field: 'name', header: 'Name', sortable: true },
    { field: 'department', header: 'Department', sortable: true },
    { field: 'location', header: 'Location', sortable: true },
    { field: 'salary', header: 'Salary', sortable: true }
  ];

  readonly employeeData = [
    { id: 1, name: 'Arif Rahman', department: 'Engineering', location: 'Dhaka', salary: 82000 },
    { id: 2, name: 'Nadia Islam', department: 'Finance', location: 'Chattogram', salary: 76000 },
    { id: 3, name: 'Samir Roy', department: 'Product', location: 'Khulna', salary: 91000 }
  ];

  readonly employeeActions: AppDataTableAction[] = [
    {
      icon: 'pi pi-eye',
      severity: 'info',
      tooltip: 'View',
      onClick: (row) => console.log('View', row)
    },
    {
      icon: 'pi pi-pencil',
      severity: 'success',
      tooltip: 'Edit',
      onClick: (row) => console.log('Edit', row)
    },
    {
      icon: 'pi pi-trash',
      severity: 'danger',
      tooltip: 'Delete',
      onClick: (row) => console.log('Delete', row)
    }
  ];
  // Data table ends here

  // Data visualization chart
  readonly chartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue',
        backgroundColor: ['#0ea5e9', '#14b8a6', '#f59e0b', '#ef4444'],
        borderColor: '#0f172a',
        data: [45000, 62000, 58000, 79000]
      }
    ]
  };

  readonly chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#334155'
        }
      }
    },
    scales: {
      y: {
        ticks: {
          color: '#334155'
        }
      },
      x: {
        ticks: {
          color: '#334155'
        }
      }
    }
  };

  // Data visualization chart ends here

  saveItem() {
    console.log('Item saved!');
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
