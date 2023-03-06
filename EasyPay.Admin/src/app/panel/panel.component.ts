import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/services/auth.service';
import '../../assets/vendors/js/chartist.min.js';
declare let Chartist :any;

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  refreshed=false;
  username:string | undefined;

  constructor(
    private router: Router,
    private alertService: ToastrService,
    private authService:AuthService
    ) { }

  ngOnInit() {
    this.loadScript("../../assets/vendors/js/chartist.min.js");
    this.loadScript("../../assets/js/dashboard-ecommerce.js");
    this.getUsername();
  }

  // return username from decodedtoken
  getUsername(){
    //this.username = this.authService.getName();
    this.username = this.authService.getDecodedToken().unique_name;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
    this.alertService.info('با موفقیت خارج شدید');
  }
  
  loggedIn(){
    return this.authService.loggedIn();
  }

  // load scripts in component html body
  public loadScript(src:string) {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = src;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
