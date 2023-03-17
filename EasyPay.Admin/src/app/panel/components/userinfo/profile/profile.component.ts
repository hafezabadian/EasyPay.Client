import { User } from './../../../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(){
    this.route.data.subscribe(
      data => {
      this.user = data['userdata'];
      }
      )
  }

  genderstring(gen:boolean):string{
    return gen? 'مرد' : 'زن';
  }

}
