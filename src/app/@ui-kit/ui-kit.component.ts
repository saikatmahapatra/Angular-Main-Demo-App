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
    bio: '' as string
  }
  saveItem() {
    console.log('Item saved!');
  }
}
