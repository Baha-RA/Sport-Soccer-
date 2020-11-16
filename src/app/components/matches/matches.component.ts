import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  allMatches: any;
  constructor(private matchService : MatchService) {
    
  }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      data=>{
        this.allMatches=data;
      }
    )

    //this.allMatches = [
      //{ id: 1, teamOne: 'EST', teamTwo: 'CA', scoreOne: 2, scoreTwo: 1 },
      //{ id: 2, teamOne: 'ST', teamTwo: 'ESS', scoreOne: 2, scoreTwo: 11 },
     // { id: 3, teamOne: 'bl', teamTwo: 'ac', scoreOne: 2, scoreTwo: 12 },
     // { id: 4, teamOne: 'bl', teamTwo: 'ac', scoreOne: 12, scoreTwo: 12 }
    //]

  }
}