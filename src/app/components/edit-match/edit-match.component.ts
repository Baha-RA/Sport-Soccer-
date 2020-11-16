import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  id: any;
  match: any ;
  matchForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private matchService: MatchService,
    private activatedrourter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.matchForm = this.formBuilder.group({
      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: [''],
      logo1: [''],
      logo2: ['']
    })
    this.id=this.activatedrourter.snapshot.paramMap.get('id');
    this.matchService.getMatcheById(this.id).subscribe(
      data=>{
        console.log('data from DB',data);
        this.match=data ; 
        
      }
    )
  }
  

  validateEditMatch() {
    this.matchService.editMatch(this.match).subscribe(
      ()=>{
        this.router.navigate(['Admin']);
      }
    )

  }

}
