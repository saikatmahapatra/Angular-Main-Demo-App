import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertMessageService } from '@core/services/alert-message.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(
    private readonly router: Router, 
    private readonly authService: AuthService, 
    private readonly alertMessageService: AlertMessageService
  ) { }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let routeMessage: string = '';
    const isTokenExpired = this.authService.isTokenExpired();

    this.authService.validateToken().subscribe({
      error: (error: HttpErrorResponse) => {
        this.alertMessageService.setAlert('info', 'JWT Token either expired or not matched. Please login to continue.', true);
        this.authService.clearStorageData();
      }
    });

    if (!isTokenExpired) {
      const isLoggedIn = this.authService.isLoggedIn();

      if (isLoggedIn) {
        return true;
      } else {
        routeMessage = "You must login to continue.";
      }
    } else {
      routeMessage = "Your session has expired."
    }

    if (routeMessage) this.alertMessageService.setAlert('error', routeMessage, false);
    //console.log(routeMessage);

    this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
  
}
