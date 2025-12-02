import { Component, VERSION, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';
import { LoaderService } from './@core/services/loader.service';
import { Meta, Title } from "@angular/platform-browser";
import { MyAppConfig } from 'src/app/app.config';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {
  product = MyAppConfig.productName || 'App';
  loading = false;

  constructor(
    private router: Router,
    private loader: LoaderService,
    private titleService: Title,
    private meta: Meta
  ) {
    //this.titleService.setTitle(this.product);

    this.router.events.subscribe((event: Event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      switch (true) {
        case event instanceof NavigationStart: {
          this.loader.show();
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loader.hide();
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit() {
    if (MyAppConfig.production) {
      this.meta.addTags([
        { name: 'description', content: 'some description' }
      ]);
    }
  }
}
