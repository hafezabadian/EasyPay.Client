import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private alertService:ToastrService, private authService: AuthService, private router: Router) {
  };
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.loggedIn()){
        return true;
      } else {
        this.alertService.error('شما به این صفحه دسترسی ندارید','دسترسی غیر مجاز');
        this.router.navigate(['/auth/login'],{
          queryParams: {
            return: state.url,
          }
        });
        return false;
      }
  }
  
}
