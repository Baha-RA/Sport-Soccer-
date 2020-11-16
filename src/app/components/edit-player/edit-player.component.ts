import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

   id:any;
  player: any ;
  playerForm: FormGroup; // verifier dans htaml 
  constructor(private formBuilder: FormBuilder,
    private playerService:PlayerService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.playerForm = this.formBuilder.group({
      name: [''],
      postion: [''],
      birthdate: [''],
      image: ['']
    })
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.id).subscribe(
      data=>{
        console.log('data from db',data);
        this.player=data;
      }
    )

  }
  validateEdit() {
    this.playerService.editPlayer(this.player).subscribe(
      ()=>{
        this.router.navigate(['Admin']);
      }
    )
  }

}
