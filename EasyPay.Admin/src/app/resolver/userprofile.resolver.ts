import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { empty, Observable, of, map } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../panel/Service/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileResolver implements Resolve<User | null> {

  constructor(private router: Router,
              private alertService: ToastrService,
              private userService: UserService,
              private authService: AuthService) {}

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): 
    Observable<User | null> {
    return this.userService.getUser(this.authService.getDecodedToken().nameid).pipe(
      catchError(err => {
        this.alertService.error('خطا دردریافت اطلاعات', 'خطا');
        this.router.navigate(['/panel/userinfo/profile']);
        return of(null);
      })
    )
  }
}
