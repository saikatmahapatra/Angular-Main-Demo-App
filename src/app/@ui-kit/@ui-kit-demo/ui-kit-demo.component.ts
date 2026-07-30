import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { FormValidationService } from '@core/services/form-validation.service';
import { MessageService } from 'primeng/api';
import { SharedModule } from '@shared/shared.module';
import { APP_UI_KIT } from '..';
import { AppDataTableAction, AppDataTableColumn } from '../data-table/data-table.component';

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
  readonly employeeColumns: AppDataTableColumn[] = [
    {
      field: 'name',
      header: 'Name',
      sortable: true,
      filterable: true,
      //filterMatchMode: 'startsWith',
      //filterPlaceholder: 'Name starts with...'
    },
    {
      field: 'department',
      header: 'Department',
      sortable: true,
      filterable: false,
      filterType: 'text',
      //filterMatchMode: 'contains',
      //filterPlaceholder: 'Search department'
    },
    {
      field: 'location',
      header: 'Location',
      sortable: true,
      filterable: true,
      // filterDisplay: 'row',
      // filterPlaceholder: 'Filter location'
    },
    {
      field: 'dob',
      header: 'Date of Birth',
      sortable: true,
      filterable: true,
      filterType: 'date',
      // filterDisplay: 'row',
      // filterPlaceholder: 'Filter location'
    },
    {
      field: 'salary',
      header: 'Salary',
      sortable: true,
      filterable: true,
      filterType: 'numeric',
      displayFormatter: (value, rowData) => `${value ?? ''} ${String(rowData['currency'] ?? '')}`.trim(),
      // filterMatchMode: 'equals'
    }
  ];

  readonly employeeData = [
    { id: 1, name: 'Luca Romano', department: 'Engineering', location: 'Rome', dob: '1990-01-01', salary: 82000, currency: 'EUR' },
    { id: 2, name: 'Giulia Conti', department: 'Finance', location: 'Turin', dob: '1988-05-12', salary: 76000, currency: 'EUR' },
    { id: 3, name: 'Matteo Bianchi', department: 'Product', location: 'Naples', dob: '1992-09-23', salary: 90000, currency: 'EUR' },
    { id: 4, name: 'Chiara Greco', department: 'Marketing', location: 'Turin', dob: '1995-03-15', salary: 68000, currency: 'EUR' },
    { id: 5, name: 'Davide Ricci', department: 'Sales', location: 'Florence', dob: '1985-07-30', salary: 72000, currency: 'EUR' },
    { id: 6, name: 'Sofia Gallo', department: 'HR', location: 'Bologna', dob: '1991-11-05', salary: 75000, currency: 'EUR' },
    { id: 7, name: 'Alessandro Rinaldi', department: 'Engineering', location: 'Genoa', dob: '1989-02-18', salary: 88000, currency: 'EUR' },
    { id: 8, name: 'Francesca Moretti', department: 'Finance', location: 'Turin', dob: '1993-06-10', salary: 79000, currency: 'EUR' },
    { id: 9, name: 'Elena Ferrari', department: 'Product', location: 'Verona', dob: '1994-12-22', salary: 85000, currency: 'EUR' },
    { id: 10, name: 'Marco De Luca', department: 'Marketing', location: 'Bari', dob: '1990-04-08', salary: 70000, currency: 'EUR' }
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
