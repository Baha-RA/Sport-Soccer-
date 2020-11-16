import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  // from tuto sur le groupe messenger 
  constructor() { }
  createDb() {

    let matches = [
      { id: 1, teamOne: 'EST', teamTwo: 'CA', scoreOne: 2, scoreTwo: 1, logo1: 'assets/images/logo_4.png', logo2: 'assets/images/logo_3.png' },
      { id: 2, teamOne: 'ST', teamTwo: 'ESS', scoreOne: 2, scoreTwo: 11, logo1: 'assets/images/logo_4.png', logo2: 'assets/images/logo_3.png' },
      { id: 3, teamOne: 'bl', teamTwo: 'ac', scoreOne: 2, scoreTwo: 12, logo1: 'assets/images/logo_4.png', logo2: 'assets/images/logo_3.png' },
      { id: 4, teamOne: 'bl', teamTwo: 'ac', scoreOne: 12, scoreTwo: 12, logo1: 'assets/images/logo_4.png', logo2: 'assets/images/logo_3.png'}
    ];
    //charger la liste de players : 
    let players = [
      { id: 1, name: 'Messi', postion: 'ATK', birthdate: '20/2/1980', image: 'assets/images/person_1.jpg' },
      { id: 2, name: 'Pogba', postion: 'MC', birthdate: '25/3/1980', image: 'assets/images/person_2.jpg' },
      { id: 3, name: 'Ronaldo', postion: 'CEN', birthdate: '20/1/1985', image: 'assets/images/person_3.jpg'},
      { id: 4, name: 'Kanté', postion: 'DEF', birthdate: '5/4/1981', image: 'assets/images/bg_1.jpg' }];
     
        //charger la liste de Users : 
    let users = [
      { id: 1, firstName: 'Messi', lastName: 'Leo', email: 'Messi@gmail.com', pwd: '123456789', confPwd: '123456789', phone: '20970410'},
      { id: 2, firstName: 'Pogba', lastName: 'Matrin', email: 'Pogba@gmail.com', pwd: '123456789', confPwd: '123456789', phone: '25688399'},
      { id: 3, firstName: 'Ronaldo', lastName: 'Cristiano', email: 'Ronaldo@gmail.com', pwd: '123456789', confPwd: '123456789', phone: '26790380'},
      { id: 4, firstName: 'Kanté', lastName: 'Angolo', email: 'kanté@gmail.com', pwd: '123456789', confPwd: '123456789', phone: '94154080'}];
      //charger la liste de Users : 
    let publics = [
      { id: 1, firstName: 'hazar', lastName: 'elhola', email: 'hazar@gmail.com', pwd: '123456789', confPwd: '123456789', phone: '20970410'},
      { id: 2, firstName: 'sana', lastName: 'ansi', email: 'sana@gmail.com', pwd: '123456789', confPwd: '123456789', phone: '25688399'},
      { id: 3, firstName: 'hana', lastName: 'rachdi', email: 'hana@gmail.com', pwd: '123456789', confPwd: '123456789', phone: '26790380'},
      { id: 4, firstName: 'heni', lastName: 'naffakh', email: 'heni@gmail.com', pwd: '123456789', confPwd: '123456789', phone: '94154080'}];
    return { matches, players,users,publics};

  }
}