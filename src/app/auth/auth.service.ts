import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from '../shared/services/snackbar.service';
import { RegistrationData } from '../shared/models/registration-user-data';
import { MatDialog } from '@angular/material/dialog';
import { GuidingComponent } from '../guiding/guiding.component';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { UserService } from '../shared/services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private snackbar: SnackbarService,
              private router: Router,
              private dialog: MatDialog,
              private localStorageService: LocalStorageService,
              private userService: UserService) { }

  logout(): void {
    this.userService.setCurrentUser(null);
    this.router.navigate(['./login']);
  }

  singIn(user: RegistrationData) {
    const users = this.localStorageService.getUsers();
    if (users.find(item => item.email === user.email)) {
      this.snackbar.openSnackBar('Ovaj mail je zauzet', 'error-snackbar');
      return;
    }

    if (users.find(item => item.username === user.username)) {
      this.snackbar.openSnackBar('Ovo korisnicko ime je zauzeto', 'error-snackbar');
      return;
    }

    const newUser = {
      ...user,
      bitcoins: 10,
      transactionNumber: 0,
      transactionAmount: 0,
    };
    users.push(newUser);
    this.localStorageService.saveUsers(users);
    this.userService.setCurrentUser(newUser);

    this.snackbar.openSnackBar('Uspesno ste se registrovali', 'success-snackbar');
    this.dialog.open(GuidingComponent);
    this.router.navigate(['./payment']);
  }

  login(user: any) {
    const users = this.localStorageService.getUsers();

    const existingUser = users.find(item =>
      item.password === user.password && item.username === user.username
    );

    if (!existingUser) {
      this.snackbar.openSnackBar('Uneli ste neispravno korisnicko ime ili sifru', 'error-snackbar');
    }

    this.userService.setCurrentUser(existingUser);
    this.router.navigate(['./payment']);
  }
}
