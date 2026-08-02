import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { MessageService } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})

export class AlertMessageService {
  private readonly subject = new Subject<any>();
  private keepAfterRouteChange = false;

  constructor(
    private readonly router: Router,
    private readonly messageService: MessageService
  ) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear alert message
          this.clearAlert();
        }
      }
    });
  }

  setAlert(severity: string, message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ severity: severity, summary: severity, text: message });
    this.messageService.add({ severity: severity, summary: severity, detail: message });
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  clearAlert() {
    // clear by calling subject.next() without parameters
    this.subject.next({});
  }
}
