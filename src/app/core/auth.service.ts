import { Injectable } from "@angular/core";


@Injectable()
export class AuthService{
  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor() { }
  
  login() {
    window.location.replace('/api/v1/login/auth/google');
  }
  logout() {
    window.location.replace('/api/v1/logout');
    }
}