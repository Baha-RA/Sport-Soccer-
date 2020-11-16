import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

contact :any ={};
contactFrom:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.contactFrom=this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      subject:[''],
      Message:['']

    })
  }
  addContact(){
 console.log('here my cotact object',this.contact);
 alert('hello');
  }
}
