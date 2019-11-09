import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { TemplateManagementService } from '../template-management/template-management.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteTemplateService } from './delete-template.service';
@Component({
  selector: 'app-delete-template-dialog',
  templateUrl: './delete-template-dialog.component.html',
  styles: []
})
export class DeleteTemplateDialogComponent implements OnInit {

  templateObj :any ={};
  constructor(
    public dialogRef: MatDialogRef<DeleteTemplateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _templSrvc : DeleteTemplateService,
    public _snackBar : MatSnackBar
  ) { 
    this.templateObj = data;
  }

  ngOnInit() {
  }
  deleteTempl(){
   console.log('template obj',this.templateObj);
   this._templSrvc.deleteTemplate(this.templateObj).subscribe((result:any)=>{
    if(result.success){
      this.dialogRef.close();
      this._snackBar.open("Template Deleted Successfully","Close",{ duration:5000});
  } else{
   this._snackBar.open("Failed to Delete Template. Try again later!!!","Close",{ duration:5000});
  } 
   },(err)=>{
       console.log('er is ',err);
       this._snackBar.open("Failed to Delete Template. Try again later!!!","Close",{ duration:5000});   
    })
  }
}
