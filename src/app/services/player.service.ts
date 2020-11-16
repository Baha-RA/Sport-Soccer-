import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  //definir l'adresse 

  playerUrl = 'api/players';

  constructor(private httpClient:HttpClient) { }

  getAllPlayers(){ 
    return this.httpClient.get(this.playerUrl);
  }
  getPlayerById(id:number){ 
    return this.httpClient.get(`${this.playerUrl}/${id}`);
  }
  addPlayer(player:any){ // prend un objet JSON
    return this.httpClient.post(this.playerUrl,player);
  }
  deletePlayer(id:number){
    return this.httpClient.delete(`${this.playerUrl}/${id}`); // permet de pointer sur id 
  }
  editPlayer(player:any){
    return this.httpClient.put(`${this.playerUrl}/${player.id}`,player); // permet de pointer sur id (player : osbjet )
  }
}
