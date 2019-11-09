import { Component, OnInit} from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
   
  public loginForm:FormGroup;
  public invalid :boolean =false;
  constructor(
    private _fb : FormBuilder,
    private _loginSrvc: LoginService,
    public dialogRef: MatDialogRef<LoginComponent>,
    private _snackBar: MatSnackBar
  ) { 
      this.createForm();
  }

  public createForm(){
    this.loginForm =  this._fb.group({
      email : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })
  }
  ngOnInit() {
  }
  loginUser(values){
      console.log('values are',values);
      this._loginSrvc.loginUserAsAdmin(values).subscribe((result:any)=>{
           if(!result.success){
             this.invalid = true;
             setTimeout(()=>{
              this.invalid =false;
             },5000);
           } else{
            this.dialogRef.close();
            this._snackBar.open("Logged in successfully as Admin!!", "Close", {
              duration: 5000,
            });
           }
           
      },(error)=>{

      })
  }
}
