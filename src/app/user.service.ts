import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn = false;
  public username;



  constructor() {

    this.isUserLoggedIn = false;
  }
  setUserLoggedIn() {
    this.isUserLoggedIn = true;
    this.username = 'admin';
  }
  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
}
