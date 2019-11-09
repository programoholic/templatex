import { Injectable } from '@angular/core';
import { UtilityService } from '../utility/utility.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public secretKey = "ANIS_WASE_2015_BATCH_MAVERICK";
  constructor(
    private _utilSrvc : UtilityService,
    private _http: HttpClient
  ) { }

  loginUserAsAdmin(payload){
    const url = "login/admin";
    debugger
    let requestObj = this._utilSrvc.constructRequestObject(url,"POST",payload);
    // const encryptTag = this.encrypt('emailpwd'); 
    const encryptedPwd = this.encrypt('username:'+payload.email+'|p|password:'+payload.password);

    let headerss = new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json',
      'logToken': `${encryptedPwd}`
    });
    //  headers.append(this.encrypt('password'),this.encrypt(payload.password));   
     payload = {
       username : 'A9En9YgcgnXmhYp5xJs'+Math.random()+'GJUxjvuYOHa+01+E/tjDePM8=', //hellowdummypassword
       password : '22U38LMwOaItDOEJIiR1'+Math.random()+'CAHcrs9RQ4a+qL0/p0eyO4c='
     };
     requestObj.body = payload;  
     requestObj.headers = headerss;  
     console.log('headers are',requestObj.headers);  
     return this._http.post(requestObj.url,requestObj.body,{headers:headerss});
  }
  encrypt(value : string) : string{
    return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  logoutAdmin(){
    const url = "logout";
    let requestObj = this._utilSrvc.constructRequestObject(url,"GET",{});    
    return this._http.get(requestObj.url,requestObj);   
  }
}
