/**
 * Alert Message Service
 * This service is used to display alert messages in the application.
 * It uses the PrimeNG MessageService to display messages.
 * It also listens to route changes and clears messages unless the 'keepAfterRouteChange' flag is set to true.
 * Currently using PrimeNG Message. Its UI Library agnostic, so can be used with any UI library.
 */
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { MessageService } from 'primeng/api';
export interface AlertMessage {
  severity?: string;
  summary?: string;
  detail?: string;
  text?: any;
  id?: any;
  key?: string;
  life?: number;
  sticky?: boolean;
  closable?: boolean;
  data?: any;
  icon?: string;
  contentStyleClass?: string;
  styleClass?: string;
  closeIcon?: string;
};
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

  setAlert(msg: AlertMessage, keepAfterRouteChange = false) {
    if (!msg.key) {
      msg.key = 'appGlobalLayoutAlert'; // default key for alert messages
    }
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(msg);
    this.messageService.add(msg);
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  clearAlert(key?: string) {
    this.messageService.clear(key || 'appGlobalLayoutAlert');
    // clear by calling subject.next() without parameters
    this.subject.next({});
  }
}
