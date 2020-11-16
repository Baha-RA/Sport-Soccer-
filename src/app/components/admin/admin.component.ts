import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';
import { PublicService } from 'src/app/services/public.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  players: any;
  matches: any;
  users: any;
  publics:any;
  constructor(private matchService: MatchService,
    private playerService: PlayerService,
    private userService: UserService,
    private publicService:PublicService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPlayers();    // this.players = [
    //   { id: 1, name: 'Messi', position: 'ATK', age: '20', image: 'assets/images/person_1.jpg' },
    //   { id: 2, name: 'Pogba', position: 'MC', age: '25', image: 'assets/images/person_2.jpg' },
    //   { id: 3, name: 'Ronaldo', position: 'CEN', age: '20', image: 'assets/images/person_3.jpg' },
    //   { id: 4, name: 'Kanté', position: 'DEF', age: '5', image: 'assets/images/bg_1.jpg' }
    // ]
    // this.matches = [
    //   { id: 1, teamOne: 'EST', teamTwo: 'CA', scoreOne: 2, scoreTwo: 1, imageOne: 'assets/images/logo_4.png', imageTwo: 'assets/images/logo_1.png' },
    //   { id: 2, teamOne: 'ST', teamTwo: 'ESS', scoreOne: 2, scoreTwo: 11, imageOne: 'assets/images/logo_4.png', imageTwo: 'assets/images/logo_1.png' },
    //   { id: 3, teamOne: 'bl', teamTwo: 'ac', scoreOne: 2, scoreTwo: 12, imageOne: 'assets/images/logo_4.png', imageTwo: 'assets/images/logo_1.png' },
    //   { id: 3, teamOne: 'bl', teamTwo: 'ac', scoreOne: 2, scoreTwo: 12, imageOne: 'assets/images/logo_4.png', imageTwo: 'assets/images/logo_1.png' },
    //   { id: 4, teamOne: 'bl', teamTwo: 'ac', scoreOne: 12, scoreTwo: 12, imageOne: 'assets/images/logo_4.png', imageTwo: 'assets/images/logo_1.png' }
    // ];
    this.getMatches();
    this.getUsers();
    this.getPublics();

  }
  getMatches() {
    this.matchService.getAllMatches().subscribe(
      data => {
        this.matches = data;
      }
    )
  }
  getPublics(){
    this.publicService.getAllpublics().subscribe(
      data=>{
        this.publics=data;
      }
    )

  }
  getUsers() {
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data;
      }
    )
  }
  getPlayers() {
    this.playerService.getAllPlayers().subscribe(
      data => {
        this.players = data;
      }
    )
  }
  displayPlayer(id: number) {
    this.router.navigate([`display-player/${id}`]);
  }
  displayPublic(id: number) {
    this.router.navigate([`display-public/${id}`]);
  }
  editPublic(id: number) {
    this.router.navigate([`editpublic/${id}`]);
  }
  deletePublic(id: number) {
    this.publicService.deletePublic(id).subscribe(
      ()=>{
       this.getPublics();
      }
    )
  }
  displayMatch(id: number) {
    this.router.navigate([`display-match/${id}`]);
  }
  displayUser(id: number) {
    this.router.navigate([`display-user/${id}`]);
  }
  edit(id: number) {
    this.router.navigate([`editplayer/${id}`]);
  }
  editMatch(id: number) {
    this.router.navigate([`editmatch/${id}`]);
  }
  editUser(id: number) {
    this.router.navigate([`edituser/${id}`]);
  }
  deleteMatch(id: number) {
    this.matchService.deleteMatch(id).subscribe(
      () => {
        this.getMatches()
      }
    )
  }
  deletePlayer(id: number) {
    this.playerService.deletePlayer(id).subscribe(
      () => {
        this.getPlayers()
      }
    )
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      () => {
        this.getUsers()
      }
    )
  }
}

