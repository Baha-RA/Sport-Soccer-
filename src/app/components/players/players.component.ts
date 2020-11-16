import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  allPlayers: any;

  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {

    this.playerService.getAllPlayers().subscribe(
      data=>{
        this.allPlayers=data;
      }
    )
    // this.allPlayers = [
    //   { id: 1, name: 'Messi', postion: 'ATK', birthdate: '20/2/1980', image: 'assets/images/person_1.jpg' },
    //   { id: 2, name: 'Pogba', postion: 'MC', birthdate: '25/3/1980', image: 'assets/images/person_2.jpg' },
    //   { id: 3, name: 'Ronaldo', postion: 'CEN', birthdate: '20/1/1985', image: 'assets/images/person_3.jpg' },
    //   { id: 4, name: 'Kanté', postion: 'DEF', birthdate: '5/4/1981', image: 'assets/images/bg_1.jpg' }
    // ]
  }
  display(obj:any,x:string){
    return(obj.postion===x)
  }

}
