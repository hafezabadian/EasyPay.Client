import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private authService : AuthService , private router: Router, private alertService: ToastrService,private ngxLoader: NgxUiLoaderService) { }

  ngOnInit() {
  }

  login(){
   this.authService.login(this.model).subscribe(Response =>{
   this.router.navigate(['/panel']);
   this.alertService.success('خوش آمدید');
  },
   error => {
    console.log(error);
    this.alertService.error(error);
   });
  }

}
