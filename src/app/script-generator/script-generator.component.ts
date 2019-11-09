import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { GridOptions } from 'ag-grid-community';
import { ResultScriptComponent } from '../result-script/result-script.component';
import { MatDialog } from '@angular/material/dialog';
import * as XLSX from 'xlsx';
import { ScriptGeneratorService } from './script-generator.service';
import { UtilityService } from '../utility/utility.service';
import { MatSnackBar } from '@angular/material/snack-bar';
type AOA = any[][];
@Component({
  selector: 'app-script-generator',
  templateUrl: './script-generator.component.html',
  styleUrls: ['./script-generator.component.css']
})
export class ScriptGeneratorComponent implements OnInit {
  panelOpenState = false;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  columnDefs :any = [];
  defaultColDef:any = {};
  public dataGridOptions : GridOptions = {};
  private gridApi;
  private gridColumnApi
  private rowData = [];
  public data;
  public selected:any;
  constructor(
    private _dialog :  MatDialog,
    private _scrptStvc : ScriptGeneratorService,
    private _utilSrvc : UtilityService,
    private _snackBar : MatSnackBar
  ) { }

  ngOnInit() {
   
  this._scrptStvc.getFeatures().subscribe((result:any)=>{
    this.options = result.data;
  });

    // this.filteredOptions = this.myControl.valueChanges
    // .pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );

    this.columnDefs = [];
    this.defaultColDef= {
      resizable: true,
      filter : true,
      sortable: true,
      editable : true
  };
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  public onGridReady(params:any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
        this.rowData = 
        [{"athlete":"Michael Phelps","age":23,"country":"United States","year":2008,"date":"24/08/2008","sport":"Swimming","gold":8,"silver":0,"bronze":0,"total":8},{"athlete":"Michael Phelps","age":19,"country":"United States","year":2004,"date":"29/08/2004","sport":"Swimming","gold":6,"silver":0,"bronze":2,"total":8},{"athlete":"Michael Phelps","age":27,"country":"United States","year":2012,"date":"12/08/2012","sport":"Swimming","gold":4,"silver":2,"bronze":0,"total":6},{"athlete":"Natalie Coughlin","age":25,"country":"United States","year":2008,"date":"24/08/2008","sport":"Swimming","gold":1,"silver":2,"bronze":3,"total":6}];
        this.dataGridOptions.api.sizeColumnsToFit();
      }
  
  generateScript(){
    const dialogRef = this._dialog.open(ResultScriptComponent, {
      width: '70%',
      // height: '50%'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
      // this.getAllTemplates();    
    });
  }    
  parseTemplateFile(e:any){
     console.log('data',e[0]);
    //  this._utilSrvc.xlsxToJsonConvertor(e[0]).then((json)=>{
    //      this.data =json;
    //      if(this.data.length>0)
    //         this.populateDataInTable(this.data);
    //  })
    //  .catch((err)=>{
    //    this._snackBar.open('Failed to parse File.. please try again later','Close',{
    //      duration : 5000
    //    });
    //  })
    //  ;
    //   /* wire up file reader */
    // const target: DataTransfer = <DataTransfer>(e.target);
    // if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <any>(XLSX.utils.sheet_to_json(ws,{
        blankrows: false,
        defval: '',
      }));
      console.log('data',this.data);
      if(this.data.length>0)
      this.populateDataInTable(this.data);
    };
    reader.readAsBinaryString(e[0]);
  } 
  populateDataInTable(json){
    let headers = Object.keys(json[0]);
    let headersArr = [];
    headers.forEach((colName)=>{
      if(colName.includes("_EMPTY")){

      }else{
        let obj = {
          headerName : colName,
          field : colName
        };
    headersArr.push(obj);        
      }
    });
    this.dataGridOptions.api.setColumnDefs(headersArr);
    this.dataGridOptions.api.setRowData(json);
    this.dataGridOptions.api.sizeColumnsToFit();
  }
}
