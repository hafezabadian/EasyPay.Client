import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  constructor(private authService : AuthService, private router : Router , private alertService: ToastrService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(()=>{
      console.log('success');
      this.router.navigate(['/login']);
      this.alertService.success('ثبت نام با موفقیت انحام شد');
    },
    error =>{
      console.log(error);
        this.alertService.error(error,'خطا');
      });
  }
}
