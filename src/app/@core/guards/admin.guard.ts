import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthService } from '@core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard  {
  constructor(private router: Router, private authService: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const result = new Subject<boolean>();
    this.authService.validateRolePermissions().subscribe(res => {
      if (res?.data?.roleId === '1') {
        result.next(true);
        result.complete();
      } else {
        result.next(false);
        result.complete();
        this.router.navigate(['unauthorized']);
      }
    },
      error => {
        result.next(false);
        result.complete();
        this.router.navigate(['unauthorized']);
      });
    return result.asObservable();
  }
}
