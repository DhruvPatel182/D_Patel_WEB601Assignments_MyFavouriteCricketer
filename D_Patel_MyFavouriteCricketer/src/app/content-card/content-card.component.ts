import { Component,OnInit,Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentListComponent } from '../content-list/content-list.component';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() CricketerName? :Content;
  constructor(){

    }

    display_CricketerName(){
      console.log("Id:- " + this.CricketerName?.id + `/n Name of Cricketer:- `+ this.CricketerName?.creator);
    }
    ngOnInit():void{
      
    }
}
