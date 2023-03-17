import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  scriptsLinks = [
    "assets/vendors/js/chartist.min.js",
    "assets/js/dashboard-ecommerce.js",
    "assets/vendors/js/core/jquery-3.3.1.min.js",
    "assets/vendors/js/core/popper.min.js",
    "assets/vendors/js/core/bootstrap.min.js",
    "assets/vendors/js/perfect-scrollbar.jquery.min.js",
    "assets/vendors/js/prism.min.js",
    "assets/vendors/js/jquery.matchHeight-min.js",
    "assets/vendors/js/screenfull.min.js",
    "assets/vendors/js/pace/pace.min.js",
    "assets/js/app-sidebar.js",
    "assets/js/notification-sidebar.js",
    "assets/js/customizer.js"
  ];
  cssLinks = [
    "node_modules/ngx-toastr/toastr.css",
    "src/assets/fonts/feather/style.min.css",
    "src/assets/fonts/simple-line-icons/style.css",
    "src/assets/fonts/font-awesome/css/font-awesome.min.css",
    "src/assets/vendors/css/perfect-scrollbar.min.css",
    "src/assets/vendors/css/prism.min.css",
    "src/assets/vendors/css/chartist.min.css",
    "src/assets/css/app.css",
    "src/styles.css"
  ];

  constructor(private commonservice: CommonService) { }

  ngOnInit() {
    //this.loadScript("../../../../assets/vendors/js/chartist.min.js");
    this.commonservice.loadScript("../../../../assets/js/dashboard-ecommerce.js");
    this.commonservice.loadChart();
  }
 

}
