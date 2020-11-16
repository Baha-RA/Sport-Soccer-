import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  addMatch: any={};
  addMatchForm:FormGroup;
  constructor(private formBuilder: FormBuilder ,
    private matchService:MatchService,
    private router : Router) { }

  ngOnInit(): void {
    this.addMatchForm = this.formBuilder.group({
        teamOne: [''],
        teamTwo: [''],
        scoreOne: [''],
        scoreTwo: ['']
      }
    )
  }
  addMatches() {
    console.log('Here we Goo !! ',this.addMatch);
    this.matchService.addMatch(this.addMatch).subscribe(
      ()=>{
        console.log('Match added sucessfuly');
        this.router.navigate(['addMatch']); // navigate selon le path 
      }
    )
  }
}


