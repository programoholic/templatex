import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.css']
})
export class SideNavMenuComponent implements OnInit {
	public menuFlag:boolean = false ;

	constructor() { }

	ngOnInit() {}

	@Output() 
	slideMenu: EventEmitter<any> = new EventEmitter();
	openMenu(status){
		this.menuFlag = !status;
		this.slideMenu.emit(this.menuFlag);
	}
	userIsAdmin(){
      if(Cookie.get('isUserAdmin')){
		  return true;
	  } else {
		  return false;
	  }
	}
}
