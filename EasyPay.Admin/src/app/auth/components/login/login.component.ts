import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnurl: any;
  model: any = {};

  constructor(
    private authService : AuthService ,
    private router: Router,
    private alertService: ToastrService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param => this.returnurl = param['return'] || '/panel')
  }

  login(){
   this.authService.login(this.model).subscribe(Response =>{
   this.router.navigate([this.returnurl]);
   this.alertService.success('خوش آمدید');
  },
   error => {
    console.log(error);
    this.alertService.error(error);
   });
  }

}
