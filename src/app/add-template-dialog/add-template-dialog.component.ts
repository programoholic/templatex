import { Component, OnInit,AfterViewInit, Inject } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AddTemplateDialogService } from './add-template-dialog.service';
import * as XLSX from 'xlsx';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-template-dialog',
  templateUrl: './add-template-dialog.component.html',
  styleUrls: ['./add-template-dialog.component.css']
})
export class AddTemplateDialogComponent implements OnInit,AfterViewInit {
  public addTemplateMetaInfoForm:FormGroup;
  public addTemplateScriptForm :FormGroup;
  public addTemplateFileForm : FormGroup;
  constructor(
    private _fb : FormBuilder,
    private _addTemplSrvc : AddTemplateDialogService,
    public dialogRef: MatDialogRef<AddTemplateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
       this.createForm();
   }
 createForm(){
   this.addTemplateMetaInfoForm = this._fb.group({
      name : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      description : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(100)]],
   });
   this.addTemplateScriptForm = this._fb.group({
    templateScript : ['',[Validators.required]],
   });
   this.addTemplateFileForm = this._fb.group({
    templateFile : ['',[Validators.required]]
   });
 }
  ngOnInit() {
  }
  ngAfterViewInit(){
    if()
  }
  parseTemplateScript(e:any){
    console.log('inside add',e);
    let input = e;
    let reader = new FileReader();
    reader.onload = () => {
      // this 'text' is the content of the file
      var text = reader.result;
      this.addTemplateScriptForm.patchValue({
        templateScript: text
      });
      console.log('content is',text);
  }
  reader.readAsText(input[0]);

  }
  parseTemplateFile(e:any){
    console.log('inside add',e);
    // let input = e;
  //   reader.onload = () => {
  //     // this 'text' is the content of the file
  //     var text = reader.result;
  //     this.addTemplateScriptForm.patchValue({
  //       templateScript: text
  //     });
  //     console.log('content is',text);
  // }
  // reader.readAsText(input[0]);
  const reader: FileReader = new FileReader();
  reader.onload = (e: any) => {
    /* read workbook */
    const bstr: string = e.target.result;
    const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
    /* grab first sheet */
    const wsname: string = wb.SheetNames[0];
    const ws: XLSX.WorkSheet = wb.Sheets[wsname];
    /* save data */
    let templateFile = <any>(XLSX.utils.sheet_to_json(ws,{
      blankrows: false,
      defval: '',
    }));
    console.log('data',templateFile);
    if(templateFile.length>0){
      this.addTemplateFileForm.patchValue({
        templateFile: JSON.stringify(templateFile,undefined, 4)
      });
    }
   
  };
  reader.readAsBinaryString(e[0]);
  }
  saveTemplate(){
     const paylod = {
      name : this.addTemplateMetaInfoForm.value.name,
      description : this.addTemplateMetaInfoForm.value.description,//"this is the default entry in the collection to create it",
      created_at : "",
      updated_by : "MYRIAD_OWNER",
      scriptFileName : "addCol.txt",
      scriptFileContent :this.addTemplateScriptForm.value.templateScript,
      templateFileName : "addCOl.xlsx",
      templateFileContent : this.addTemplateFileForm.value.templateFile,
      activeFlag : true,
     };

  this._addTemplSrvc.saveTemplate(paylod).subscribe((result)=>{
       alert('success');
  },(err)=>{
    alert(err);
  })
  }
}
