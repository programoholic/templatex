import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from '../utility/utility.service';

@Injectable({
  providedIn: 'root'
})
export class ScriptGeneratorService {

  constructor(
    private _http : HttpClient,
    private _utilSrvc : UtilityService
  ) { }

  getFeatures(){
    const url = 'scripts/features';
    const requestObj = this._utilSrvc.constructRequestObject(url,"GET",{});
    return this._http.get(requestObj.url,requestObj);
  }
}
