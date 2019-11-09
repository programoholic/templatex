import { Injectable } from '@angular/core';
import { UtilityService } from '../utility/utility.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemplateManagementService {

  constructor(
    private _utilSrvc : UtilityService,
    private _http: HttpClient
  ) { }
  
  getAllTemplates(){
    const url = "manage/templates";
    let requestObj = this._utilSrvc.constructRequestObject(url,"POST",{});
    return this._http.get(requestObj.url,requestObj);
  }
  deleteTemplate(payload){
    const url = "manage/templates/update";
    let requestObj = this._utilSrvc.constructRequestObject(url,"PUT",payload);
    return this._http.put(requestObj.url,requestObj.body,requestObj);
  }
}
