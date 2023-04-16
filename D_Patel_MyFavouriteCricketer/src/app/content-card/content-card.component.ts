import { Component, Input, OnInit } from '@angular/core';
import { ContentListComponent } from '../content-list/content-list.component';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCard{
  
  @Input() CricketerName? :Content;
  constructor(){

    }

    display_CricketerName(){
      console.log("Id:- " + this.CricketerName?.id + `/n Name of Cricketer:- `+ this.CricketerName?.creator);
    }
    ngOnInit():void{
      
    }
}