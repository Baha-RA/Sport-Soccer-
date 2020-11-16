import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicService } from 'src/app/services/public.service';
import { MustMatch } from 'src/app/validators/comparePw';

@Component({
  selector: 'app-add-public',
  templateUrl: './add-public.component.html',
  styleUrls: ['./add-public.component.css']
})
export class AddPublicComponent implements OnInit {

  PublicForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private publicService:PublicService,
    private router:Router) { }

  ngOnInit() {
    this.PublicForm = this.formBuilder.group({
      firstName: ['', Validators.minLength(5)],  // validator required 
      lastName: ['',Validators.required],
      email: ['',Validators.email],
      pwd: [''], //Validators.maxLength(2)
      confPwd: [''],
      phone: ['']
    },
    {
     
        validator:MustMatch('pwd','confPwd')
      }
    
    )  
    
  }
// le probleme ici , je vais prendre qui en parametre dans la form reactive 
// player est un parametre qui est appelé dans la fonction qui faire retour de tous les champs saisis par l'utilisateur 
  addPublics(y:any) {
    console.log('This is my user', y);
    this.publicService.addPublic(y).subscribe(
      ()=>{
        console.log('Player added sucessfuly');
        this.router.navigate(['publics']);
      }

    )
    
  }

}
