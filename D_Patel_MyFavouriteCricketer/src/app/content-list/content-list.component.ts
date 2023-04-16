import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent{
  CricketerName: Content[];
 message? : string;
  constructor(){

    this.CricketerName = [
      {
        id: 1,
        creator: "Lasith Malinga",
        description:"Srilankan Fast Bowler. Bowl with One of the deadliest speed",
        imgURL:"",
        type:"Right-Arm Bowler",
        tags:"Yorker King",
      },
      {
        id: 2,
        creator: "Dale Steyn",
        description:"South African fast pace bowler. One of the Greatest fast test bowler of all time.",
        imgURL:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Dale_Steyn_YM.jpg",
        type:"Right-Arm Bowler",
        tags:"Steyn Gun",
      },
      {
        id: 3,
        creator: "Jos Buttler",
        description:"Holds World record of standing at 7th wicket in cricket, Buttler is a real gem and blessing of England team.",
        imgURL:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Jos_Buttler_2017.jpg",
        type:"Right-Hand Batsman",
        tags:"Captain Buttler",
      },
      {
        id: 4,
        creator: "Adam GilChrist",
        description:"The OG Wicket Keeper of 90's era. Attacking Batsman And all time great wicketkeeper of his time ",
        imgURL:"https://media.gettyimages.com/photos/former-australian-cricketer-adam-gilchrist-speaks-during-the-public-picture-id1399511992",
        type:"",
        tags:"Wingnut",
      },
      {
        id: 5,
        creator: "Shoaib Akhtar",
        description:"First Bowler to be recorded bowling at 100 MPH, Achieved twice in his career.",
        imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Khizer_Ahmed_and_mentor_Shoaib_Akhtar_%28cropped%29.jpg/800px-Khizer_Ahmed_and_mentor_Shoaib_Akhtar_%28cropped%29.jpg",
        type:"Right-Arm Bowler",
        tags:"Rawalpindi Express",
      },
      {
        id: 6,
        creator: "Sachin Tendlukar",
        description:"GOAT of Cricket. Only player to complete 100 centuries, Highest number of runs in ODI and Test cricket format. ",
        imgURL:"https://www.sportsindiashow.com/wp-content/uploads/2019/05/sachin-tendulkar-1556110391.jpg",
        type:"Right Hand Batsman",
        tags:"Little Master",
      },{
      id: 7,
      creator:"Rohit Sharma",
      description:"Super Sharma. Mumbai indian's and Indian team's Captain. Only player from india who hit fatsest 200 runs",
      imgURL:"https://th.bing.com/th/id/OIP.dYU2vx6l1Bf_eQULk6HTxwHaF6?pid=ImgDet&rs=1",
      type:"Right-Hand Batsman",
      tags:"Ro-HITMAN"
      },
    ];
  }
  findPlayerName(PlayerName: string): any{
    let PlayerNameList = this.CricketerName.filter(cricketer => cricketer.creator == PlayerName);
    if(PlayerNameList.toLocaleString().length>0){
      this.message = 'Player Found in the List';
      console.log(this.message);
    }else{
      this.message = 'Player does not found!';
      console.log(this.message);
    }
  }
}