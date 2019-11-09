import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { LoginService } from '../login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css'],
})
export class AppBarComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private _loginSrvc : LoginService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }
  login(){
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '550px',
      // height:'300px'
      // hasBackdrop:false,
      backdropClass: 'backdropBackground'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  logout(){
// this._loginSrvc.logoutAdmin().subscribe((result)=>{
//       this.snackBar.open("Logout Successfully!!!","Close",{duration:5000});
// })
window.location.replace('/api/v1/logout');
  }
  performAction(){
    if(Cookie.get('isUserAdmin')){
      this.logout();
    }
    else{
      this.login();
    }
  }
  getTitle(){
    try{
      let x = Cookie.get('isUserAdmin');
      if(x){
        return "Logout";
      } else{
        return "Login as Admin";
      }
    }
    catch(err){
      return "Login as admin";
    }
  }
}
