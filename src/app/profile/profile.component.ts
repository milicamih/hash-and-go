import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  transactionsAmount: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
    this.transactionsAmount = 100 * (10 - this.user.bitcoins) / 10;
  }

}
