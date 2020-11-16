import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  //definir l'adresse 
  matchUrl = 'api/matches';
  constructor(private httpClient:HttpClient) { }
  getAllMatches(){ 
    return this.httpClient.get(this.matchUrl);
  }
  getMatcheById(id:number){ 
    return this.httpClient.get(`${this.matchUrl}/${id}`);
  }
  addMatch(match:any){
    return this.httpClient.post(this.matchUrl,match);
  }
  deleteMatch(id:number){
    return this.httpClient.delete(`${this.matchUrl}/${id}`); // permet de pointer sur l'id 
  }
  editMatch(match:any){
    return this.httpClient.put(`${this.matchUrl}/${match.id}`,match);

  }
}
