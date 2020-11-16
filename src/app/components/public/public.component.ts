import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  
@Input() public:any;
  constructor() { }

  ngOnInit(): void {
  }

}
