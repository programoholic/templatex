import { Injectable } from "@angular/core";
import {Router,Route,CanActivate, CanActivateChild, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AppAuthGuard implements CanActivate,CanActivateChild,CanLoad{

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.checkLogin(url);
        // return true;
      }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        return true;
    }

    canLoad(route : Route): boolean {
        return true;
    }

    checkLogin(url){
        if (Cookie.get('isUserAdmin')) { return true; }
        this.router.navigate(['/HOME/CS_LANDING_PAGE_E']);
        return false;

    }

}