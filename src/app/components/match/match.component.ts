import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {


@Input() input: any ;
  constructor() { }

  ngOnInit(): void {
  }

  compare(a:number,b:number){
    if (a>b) {
      return 'win';
    }else if (a<b){
      return 'loss' ;
    }else{
      return 'draw';
    }


  }
  colorAffect(value:any)
  {
    switch (value) {
      case 'win': return 'green';
      case 'loss': return 'red';
      case 'draw': return 'blue';
        
    
    }
  }

}
