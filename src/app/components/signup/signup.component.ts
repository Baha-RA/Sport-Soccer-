import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MustMatch } from 'src/app/validators/comparePw';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(5), Validators.required]],
      lastName: ['',[Validators.minLength(4), Validators.required]],
      email: ['', Validators.email],
      pwd: ['', [Validators.minLength(8), Validators.maxLength(12)]],
      confirmPwd: [''],
      tel: ['']
    },
    {
      validator : MustMatch('pwd','confirmPwd')
    }
    );
   
  }

  signup(user:any) {
    console.log('This is my user', user);
    alert('Btn clicked');
  }

}
