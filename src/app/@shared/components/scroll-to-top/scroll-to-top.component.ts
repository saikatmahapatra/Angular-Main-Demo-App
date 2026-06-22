import { Component, HostListener, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-scroll-to-top',
    templateUrl: './scroll-to-top.component.html',
    styleUrls: ['./scroll-to-top.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ScrollToTopComponent implements OnInit {
  show = false;

  @HostListener('window:scroll', ['$event']) onScroll($event: Event): void {
    if ($event) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

  scrollToTo() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
