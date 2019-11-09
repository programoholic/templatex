import { Injectable } from '@angular/core';
import { HttpHeaders,HttpParams } from '@angular/common/http';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  public BASE_URL = window.location.origin+"/api/v1/";

  constructor() {
    // this.constructRequestObject("1","POST","f")
   }
  
  public constructRequestObject(url:string,method:"POST"|"GET"|"PUT"|"DELETE"|"OPTIONS",payload:object){
    let headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json',        
    });
    const requestOptions = {
      headers: headers,
      body : payload,
      method : method,
      url : this.BASE_URL+url,
      withCredentials:true
    };
    
    return requestOptions;
  }
public xlsxToJsonConvertor(file):Promise<any>{
  debugger
  console.log('file',file);
  let data;
  return new Promise((reject,resolve)=>{
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
  
      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
  
      /* save data */
      data = <any>(XLSX.utils.sheet_to_json(ws, {
        blankrows: false,
        defval: '',
      }));
      resolve(data);
    };
    try{
      reader.readAsBinaryString(file);
    } catch(err){
       reject(err);
    }
  })
  
}
public josnToXLSfile(json:any[]){
  /* generate worksheet */
const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(json);
/* generate workbook and add the worksheet */
const wb: XLSX.WorkBook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
/* save to file */
XLSX.writeFile(wb, 'SheetJS.xlsx');
}
}
