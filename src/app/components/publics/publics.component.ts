import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-publics',
  templateUrl: './publics.component.html',
  styleUrls: ['./publics.component.css']
})
export class PublicsComponent implements OnInit {

  allPublics: any;
  constructor(private publicService: PublicService) { }

  ngOnInit(): void {
    this.publicService.getAllpublics().subscribe(
      data => {
        this.allPublics = data;
      }
    )
  }

}
