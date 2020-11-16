import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  

  PlayerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private playerService:PlayerService,
    private router:Router) { }

  ngOnInit() {
    this.PlayerForm = this.formBuilder.group({
      name: ['', Validators.minLength(5)],  // validator required 
      postion: ['', [Validators.minLength(0), Validators.maxLength(12)]],
      birthdate: [''],
      image: [''] //Validators.maxLength(2)
      
    })  
  }
// le probleme ici , je vais prendre qui en parametre dans la form reactive 
// player est un parametre qui est appelé dans la fonction qui faire retour de tous les champs saisis par l'utilisateur 
  addPlayers(player:any) {
    console.log('This is my user', player);
    this.playerService.addPlayer(player).subscribe(
      ()=>{
        console.log('Player added sucessfuly');
        this.router.navigate(['Players']);
      }

    )
    
  }

}
