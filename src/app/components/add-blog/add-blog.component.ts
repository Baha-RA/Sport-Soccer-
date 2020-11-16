import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  

  blogForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.blogForm = this.formBuilder.group({
      firstName: ['', Validators.minLength(5)],
      lastName: [''],
      age: ['', Validators.maxLength(2)],
      position: ['', [Validators.minLength(0), Validators.maxLength(12)]]
      
    })  
  }

  addPlayer(Player:any) {
    console.log('This is my blog', Player);
    alert('Btn clicked');
  }
}