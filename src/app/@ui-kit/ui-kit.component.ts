import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-kit',
  standalone: false,
  templateUrl: './ui-kit.component.html',
  styleUrls: ['./ui-kit.component.scss']
})
export class UiKitComponent {
  username: string = '';
  age: number | null = null;
  saveItem() {
    console.log('Item saved!');
  }
}
