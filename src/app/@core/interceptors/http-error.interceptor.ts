import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertMessageService, AlertMessage } from '@core/services/alert-message.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private readonly authSvc: AuthService,
    private readonly router: Router,
    private readonly alertMessageService: AlertMessageService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let handled = false;
    let errorMessage: AlertMessage;
    return next.handle(request).pipe(
      catchError((returnedError) => {
        if (returnedError.error instanceof ErrorEvent) {
          errorMessage = { severity: 'error', summary: 'Error', detail: `Error: ${returnedError.error.message}` };
        } else if (returnedError instanceof HttpErrorResponse) {
          errorMessage = { severity: 'error', summary: 'Error', detail: `Error Status ${returnedError.status}: ${returnedError.message}` };
          handled = this.handleServerSideError(returnedError);
        }
        //console.setAlert('error', "ERROR HttpErrorInterceptor : ", errorMessage ? errorMessage : returnedError);
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
    let errorMessage: AlertMessage;
    switch (error.status) {
      case 400:
        {
          errorMessage = { severity: 'error', summary: 'Error', detail: (error?.error?.message ? error.error.message : 'We are unable to process your request at this moment. Please try after sometime.') };
          this.alertMessageService.setAlert(errorMessage);
          handled = true;
          break;
        }

      case 401:
        {
          if (this.router.url != '/login') {
            this.authSvc.clearStorageData();
            errorMessage = { severity: 'error', summary: 'Error', detail: 'Please login to continue.' };
            this.alertMessageService.setAlert(errorMessage);
            handled = true;
          }
          break;
        }

      case 403:
        {
          this.authSvc.clearStorageData();
          errorMessage = { severity: 'error', summary: 'Error', detail: 'Please login to continue.' };
          this.alertMessageService.setAlert(errorMessage);
          handled = true;
          break;
        }

      default:
        {
          errorMessage = { severity: 'error', summary: 'Error', detail: error.message };
          this.alertMessageService.setAlert(errorMessage);
          break;
        }
    }
    return handled;
  }
}
