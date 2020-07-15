import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(public _router: Router) {

    this.user = this._router.getCurrentNavigation().extras.state?.user;
    console.log(this.user);
  }

  ngOnInit(): void {
  }

}
