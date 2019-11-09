import { Injectable } from '@angular/core';
import { UtilityService } from '../utility/utility.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddTemplateDialogService {

  constructor(
    private _utilSrvc : UtilityService,
    private _http: HttpClient
  ) { }
  saveTemplate(templateDetails){
    const url = "manage/templates/add";
    let requestObj = this._utilSrvc.constructRequestObject(url,"POST",templateDetails);
    return this._http.post(requestObj.url,requestObj.body,requestObj);
  }
}
