import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-display-public',
  templateUrl: './display-public.component.html',
  styleUrls: ['./display-public.component.css']
})
export class DisplayPublicComponent implements OnInit {
  id:any;
  public:any;

  constructor(private activatedrouter:ActivatedRoute,
    private publicService:PublicService) { }

  ngOnInit(): void {
    this.id=this.activatedrouter.snapshot.paramMap.get('id');
this.publicService.getPublicById(this.id).subscribe(
  data=>{
    this.public=data;
  }

)
  }

}
