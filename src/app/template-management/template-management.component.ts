import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { trigger } from '@angular/animations';
import { fadeIn, fadeOut } from '../utility/animation/animation';
import { AddTemplateDialogComponent } from '../add-template-dialog/add-template-dialog.component';
import { TemplateManagementService } from './template-management.service';
import { DeleteTemplateDialogComponent } from '../delete-template-dialog/delete-template-dialog.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-template-management',
  templateUrl: './template-management.component.html',
  styleUrls: ['./template-management.component.css'],
  animations: [
    trigger('fadeIn',fadeIn()),
    trigger('fadeOut',fadeOut())
]
})
export class TemplateManagementComponent implements OnInit {
  public templates: any[] = [];
  public pageLength: number =0;
  public pageSize: number = 7;
  public pageSizeOptions: number[] = [3,7,12,25];
  public pagedTemplate: any[]= [];
  constructor(
    private _dialog : MatDialog,
    private _TempltMngmntSrvc :TemplateManagementService
  ) { }

  ngOnInit() {
     this.getAllTemplates();
  }

  getAllTemplates(){
    this._TempltMngmntSrvc.getAllTemplates().subscribe((result:any)=>{
       this.templates = result.data;
       this.pageLength = this.templates.length;       
       this.pagedTemplate = this.templates.slice(0, this.pageSize);
    },(err)=>{
      console.log('error',err);
    })   
  }
openCreateDialog(){
  const dialogRef = this._dialog.open(AddTemplateDialogComponent, {
    width: '70%',
    data : {template : {}, view  : 'create'},     
    // height: '50%'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    // this.animal = result;
    this.getAllTemplates();    
  });
}

deleteTemplate(template){
   const dialogRef = this._dialog.open(DeleteTemplateDialogComponent,{
    data: template
   });
   dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    // this.animal = result;
    this.getAllTemplates();
  });
}
OnPageChange(event: PageEvent){
  let startIndex = event.pageIndex * event.pageSize;
  let endIndex = startIndex + event.pageSize;
  if(endIndex > this.pageLength){
    endIndex = this.pageLength;
  }
  this.pagedTemplate = this.templates.slice(startIndex, endIndex);
}
openActionDialog(viewName:string, template){
  const dialogRef = this._dialog.open(AddTemplateDialogComponent, {
    width: '70%',
    data : {template : template, view  : viewName}, 
    // height: '50%'
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    // this.animal = result;
    this.getAllTemplates();    
  });
}
}
