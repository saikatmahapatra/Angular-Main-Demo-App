import { Component, OnInit } from '@angular/core';
import { event } from 'jquery';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss'],
    standalone: true
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onFileSelected(event: any) {
    console.log("File Upload", event.target.files);
  }

}
