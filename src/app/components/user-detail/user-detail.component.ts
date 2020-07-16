import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.type';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private _userService: UserService, private ruteActiva: ActivatedRoute) {

    this._userService.getUserById(this.ruteActiva.snapshot.params.id)
      .subscribe((resp: any) => {
        this.user = resp;
      });
  }

  ngOnInit(): void {
  }

}
