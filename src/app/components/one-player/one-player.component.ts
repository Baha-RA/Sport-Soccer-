import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-player',
  templateUrl: './one-player.component.html',
  styleUrls: ['./one-player.component.css']
})
export class OnePlayerComponent implements OnInit {

  @Input() player:any;

  constructor() { }

  ngOnInit(): void {
  }

}
