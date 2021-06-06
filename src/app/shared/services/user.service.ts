import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User = null;

  constructor(private localStorageService: LocalStorageService) { }

  getCurrentUser(): User {
    return this.currentUser;
  }

  updateUsersProfile(user: User, spentDinars: number, spentCoins: number) {
    const users = this.localStorageService.getUsers();
    const userIndex = users.findIndex(item => item.username === user.username);
    const updatedUser = this.updateUser(users[userIndex], spentDinars, spentCoins);
    this.updateUser(user, spentDinars, spentCoins);
    this.localStorageService.saveUsers([
             ...users,
             users[userIndex] = updatedUser
  ]);
    this.currentUser = updatedUser;
  }

  updateUser(user: User, spentDinars: number, spentCoins) {
    return {
      ...user,
      bitcoins: user.bitcoins - spentCoins,
      transactionNumber: user.transactionNumber + 1,
      transactionAmount: user.transactionAmount + spentDinars,
    };
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }
}
