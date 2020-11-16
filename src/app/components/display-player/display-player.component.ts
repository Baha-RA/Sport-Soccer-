import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {

  id :any;
player:any;
  constructor( private activatedrouter:ActivatedRoute,
    private playerService:PlayerService) { }

  ngOnInit(): void {
    this.id=this.activatedrouter.snapshot.paramMap.get('id'); // recherche de l'id
    this.playerService.getPlayerById(this.id).subscribe(
      (y)=>{
        console.log('data',y)
        this.player=y;
      }
    )
  }

}
