import { Component, OnInit } from '@angular/core';
import { LandingPageService } from './landing-page.service';
import { UtilityService } from '../utility/utility.service';
import { SocketService} from '../utility/socket-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public viewCount: number = 1002;
  public userCount : number = 1002;
  public featureCount:any = '20.5k';
  public featureName:any = 'Available Features';
  public templCount:any =  '22.4k';
  public templName :string = 'Templates';
  public scriptCount: any= '60.4k';
  public scriptName : string = 'Generated Scripts';
  
  constructor(
  private _landingSrvc : LandingPageService,
  private _socketServc : SocketService
  ) { }

  ngOnInit() {
    this.initializeService();
  }
initializeService(){
  // this._socketServc.connectUser();
  this._socketServc.onNewUserConnected().subscribe((count:number)=>{
      this.userCount = count;
      console.log('got data',count);
  });
  this._landingSrvc.getMetaDetails().subscribe((result:any)=>{
       if(result.success){
          this.viewCount = result.data.viewCount;
          this.featureCount = result.data.featureCount;
          this.templCount = result.data.templCount;
          this.scriptCount = result.data.scriptCount;
       }
  })
}
}
