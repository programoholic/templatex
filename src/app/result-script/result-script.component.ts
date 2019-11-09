import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-result-script',
  templateUrl: './result-script.component.html',
  styleUrls: ['./result-script.component.css']
})
export class ResultScriptComponent implements OnInit {

  code =`UPDATE employees 
  SET first_name='Markus', 
      last_name='Winand'
WHERE employee_id=123;`;
  constructor() { }

  ngOnInit() {
  }
  onHighlight(e:any){
    console.log(e);
  }
}
