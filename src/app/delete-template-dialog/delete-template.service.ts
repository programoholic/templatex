import { Injectable } from '@angular/core';
import { UtilityService } from '../utility/utility.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteTemplateService {

  constructor(
    private _utilSrvc : UtilityService,
    private _http : HttpClient
  ) { }

  public deleteTemplate(templateObject){
    console.log('templ',templateObject)
    const url = `manage/templates/delete/${templateObject._id}`;
    let requestObj = this._utilSrvc.constructRequestObject(url,"DELETE",templateObject);
    return this._http.delete(requestObj.url,requestObj); 
  }
}
