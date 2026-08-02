import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertMessageService } from '@core/services/alert-message.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private readonly authSvc: AuthService,
    private readonly router: Router,
    private readonly alertMessageService: AlertMessageService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let handled = false;
    return next.handle(request).pipe(
      catchError((returnedError) => {
        if (returnedError.error instanceof ErrorEvent) {
          this.alertMessageService.setAlert({ severity: 'error', summary: 'Error', detail: `Error: ${returnedError.error.message}` });
        } else if (returnedError instanceof HttpErrorResponse) {
          this.alertMessageService.setAlert({ severity: 'error', summary: 'Error', detail: `Error Status ${returnedError.status}: ${returnedError.message}` });
          handled = this.handleServerSideError(returnedError);
        }
        if (!handled) {
          return throwError(returnedError);
        } else {
          return of(returnedError);
        }
      })
    );
  }

  private handleServerSideError(error: HttpErrorResponse): boolean {
    let handled: boolean = false;
    let errorMessage: any;
    switch (error.status) {
      case 400:
        {
          this.alertMessageService.setAlert({ severity: 'error', summary: 'Error', detail: (error?.error?.message ? error.error.message : 'We are unable to process your request at this moment. Please try after sometime.') });
          handled = true;
          break;
        }

      case 401:
        {
          if (this.router.url != '/login') {
            this.authSvc.clearStorageData();
            this.alertMessageService.setAlert({ severity: 'error', summary: 'Error', detail: 'Please login to continue.' });
            handled = true;
          }
          break;
        }

      case 403:
        {
          this.authSvc.clearStorageData();
          this.alertMessageService.setAlert({ severity: 'error', summary: 'Error', detail: 'Please login to continue.' });
          handled = true;
          break;
        }

      default:
        {
          this.alertMessageService.setAlert({ severity: 'error', summary: 'Error', detail: error.message });
          break;
        }
    }
    return handled;
  }
}
