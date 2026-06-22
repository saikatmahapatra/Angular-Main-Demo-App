import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-angular-directive',
    templateUrl: './angular-directive.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AngularDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
