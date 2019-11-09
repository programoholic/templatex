import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from '../utility/utility.service';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(
    private _utilSrvc : UtilityService,
    private _http: HttpClient
  ) { }

  getMetaDetails(){
    const url = "analytics/metainfo";
    let requestObj = this._utilSrvc.constructRequestObject(url,"GET",{});
    return this._http.get(requestObj.url,requestObj);
  }
}
