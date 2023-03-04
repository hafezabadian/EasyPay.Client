import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private router: Router ,private alertService: ToastrService) { }

  ngOnInit() {

  }

logout() {
localStorage.removeItem('token');
this.router.navigate(['/auth/login']);
this.alertService.info('با موفقیت خارج شدید');
}
}
