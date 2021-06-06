import { Injectable } from '@angular/core';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


  public saveUsers(users: User[]) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  public getUsers(): any[] {
    const usersString = localStorage.getItem('users');
    if (!usersString) {
      return [];
    }

    try {
      const users = JSON.parse(usersString);
      return users;
    } catch (exception) {
      console.log('Users data are not valid: ', exception);
      return [];
    }

  }
}
