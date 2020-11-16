import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

 
  id :any;
user:any;
  constructor( private activatedrouter:ActivatedRoute,
    private userService:UserService) { }

  ngOnInit(): void {
    this.id=this.activatedrouter.snapshot.paramMap.get('id'); // recherche de l'id
    this.userService.getUserById(this.id).subscribe(
      (y)=>{
        console.log('data',y)
        this.user=y;
      }
    )
  }

}

