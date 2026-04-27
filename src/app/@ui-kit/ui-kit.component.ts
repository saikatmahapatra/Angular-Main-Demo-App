import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-kit',
  standalone: false,
  templateUrl: './ui-kit.component.html',
  styleUrls: ['./ui-kit.component.scss']
})
export class UiKitComponent {
  myForm = {
    firstname: '' as string,
    lastname: '' as string,
    email: '' as string,
    mobile: '' as string,
    age: null as number | null,
    bio: '' as string,
    gender: '' as string, // radio button
    country: '' as string, // select dropdown
    skills: [] as string[], // multi-select
    terms1Accepted: false as boolean, // checkbox
    terms2Accepted: true as boolean, // checkbox
    terms3Accepted: false as boolean // checkbox
  }

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

  saveItem() {
    console.log('Item saved!');
  }
}
