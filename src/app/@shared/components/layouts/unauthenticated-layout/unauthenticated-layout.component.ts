import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-unauthenticated-layout',
    templateUrl: './unauthenticated-layout.component.html',
    styleUrls: ['./unauthenticated-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class UnauthenticatedLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
