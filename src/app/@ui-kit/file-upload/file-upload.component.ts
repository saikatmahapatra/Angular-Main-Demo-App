import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { event } from 'jquery';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    
    `
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onFileSelected(event: any) {
    console.log("File Upload", event.target.files);
  }

}
