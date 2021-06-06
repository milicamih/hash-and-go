import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {User} from '../shared/models/user.model';
import {Router} from '@angular/router';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
  }

  logout(): void {
    this.authService.logout();
  }

  goToProfile(): void {
    this.router.navigate(['/account']);
  }

}
