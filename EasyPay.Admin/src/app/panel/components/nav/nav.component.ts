import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  username:string | undefined;

  constructor(
    private router: Router,
    private alertService: ToastrService,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.getUsername();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
    this.alertService.info('با موفقیت خارج شدید');
  }

  // return username from decodedtoken
  getUsername(){
    //this.username = this.authService.getName();
    this.username = this.authService.getDecodedToken().unique_name;
  }
}
