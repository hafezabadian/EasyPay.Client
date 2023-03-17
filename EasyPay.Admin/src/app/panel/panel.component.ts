import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import '../../assets/vendors/js/chartist.min.js';
import { CommonService } from '../services/common.service';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  loadApi : any;

  constructor(
    private authService:AuthService,
    private commonservice: CommonService
    ) { }

  ngOnInit() {
    this.loadApi = new Promise(resolve => {
      this.commonservice.loadScript("../../../../assets/vendors/js/screenfull.min.js");
      this.commonservice.loadScript("../../../../assets/js/app-sidebar.js");
      this.commonservice.loadScript("../../../../assets/js/notification-sidebar.js");
      this.commonservice.loadScript("../../../../assets/js/customizer.js");
    })
  }

  loggedIn(){
    return this.authService.loggedIn();
  }



}
