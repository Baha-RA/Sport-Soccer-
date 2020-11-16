import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  publicUrl = 'api/publics';

  constructor(private httpClient: HttpClient) { }

  getAllpublics() {
    return this.httpClient.get(this.publicUrl);
  }
  getPublicById(id: any) {
    return this.httpClient.get(`${this.publicUrl}/${id}`);
  }
  addPublic(y: any) {
    return this.httpClient.post(this.publicUrl,y);
  }
  editPublic(y:any){
    return this.httpClient.put(`${this.publicUrl}/${y.id}`,y);
  }
  deletePublic(id:any){
    return this.httpClient.delete(`${this.publicUrl}/${id}`);

  }

}
