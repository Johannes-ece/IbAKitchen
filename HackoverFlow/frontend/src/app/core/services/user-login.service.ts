import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor() { }

  private isLoggedIn: boolean = false;
  private username: string = '';
  private userid: string = '';

  login(username: string,userid:string): void {
    this.isLoggedIn = true;
    this.username = username;
    this.userid = userid;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.username = '';
  }

  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }

  getUsername(): string {
    return this.username;
  }
}
