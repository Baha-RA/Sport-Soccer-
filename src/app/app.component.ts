import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';

grandElement(T:any)
{ let max=T[0];
    for (let i = 0; i < T.length; i++) {
    if (T[i]>max){
      max=T[i];
    }
     
  }
  return(max);
}
alertMessage(){
  alert("bienvenue");

}
calculMoyenne(){

}
 displayData(T:any){
   let msg="";
   for (let i = 0; i < T.length; i++) {
    msg=msg+T[i]+" : " + T[i].length + ' ';
   }
   return msg;
 }

}

