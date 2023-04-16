import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCard } from '../content-card/content-card.component';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent{
  CricketerName: Content[];

  constructor(){

    this.CricketerName = [
      {
        id: 1,
        creator: "Lasith Malinga",
        description:"Srilankan Fast Bowler. Bowl with One of the deadliest speed",
        imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Lasith_Malinga_tossing_a_cricket_ball_at_practice.jpg/800px-Lasith_Malinga_tossing_a_cricket_ball_at_practice.jpg",
        type:"Right-Arm Fast Pace Bowler",
        tags:"Yorker King",
      },
      {
        id: 2,
        creator: "Dale Steyn",
        description:"South African fast pace bowler. One of the Greatest fast test bowler of all time.",
        imgURL:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Dale_Steyn_YM.jpg",
        type:"Right-hand Fast Bowler",
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
        type:"Left-hand batsman and wicketkeeper",
        tags:"Wingnut",
      },
      {
        id: 5,
        creator: "Shoaib Akhtar",
        description:"First Bowler to be recorded bowling at 100 MPH, Achieved twice in his career.",
        imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Khizer_Ahmed_and_mentor_Shoaib_Akhtar_%28cropped%29.jpg/800px-Khizer_Ahmed_and_mentor_Shoaib_Akhtar_%28cropped%29.jpg",
        type:"Opening Fast Pace Bowler",
        tags:"Rawalpindi Express",
      },
      {
        id: 6,
        creator: "Sachin Tendlukar",
        description:"GOAT of Cricket. Only player to complete 100 centuries, Highest number of runs in ODI and Test cricket format. ",
        imgURL:"https://www.sportsindiashow.com/wp-content/uploads/2019/05/sachin-tendulkar-1556110391.jpg",
        type:"Right Hand Batsman",
        tags:"Little Master",
      },
    ];
  }
}