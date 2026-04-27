import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-kit',
  standalone: false,
  templateUrl: './ui-kit.component.html',
  styleUrls: ['./ui-kit.component.scss']
})
export class UiKitComponent {
  myForm = {
    username: '' as string,
    age: null as number | null,
    bio: '' as string,
    gender: '' as string, // radio button
    country: '' as string, // select dropdown
    skills: [] as string[], // multi-select
    terms1Accepted: false as boolean, // checkbox
    terms2Accepted: true as boolean, // checkbox
    terms3Accepted: false as boolean // checkbox
  }
  saveItem() {
    console.log('Item saved!');
  }
}
