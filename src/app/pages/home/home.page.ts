import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  menu : number = 0;

  tema : number = 1;
  
  apretado: boolean = false;

  tituloMenu : string;

  mostrarMenu : boolean = false;

  constructor(private auth: AngularFireAuth, private router: Router) {}

  opciones(a : any){
    switch(a){
      case 1:
        this.apretado = true;

        setTimeout(()=>{        

          this.menu = 1;
          this.tema = 1;
          this.apretado = false;
          
        },2000);
      break;
      
      case 2:

        this.apretado = true;

        setTimeout(()=>{

          this.menu = 1;
          this.tema = 2;
          this.apretado = false;
          
        },2000);
      break;
      case 3:
      this.logOut();
      break;
    }
  }

  capturaEvento(a : number){
    console.log(a);
    this.menu = a;
  }


  logOut(){
    this.auth.signOut().then(()=>{

      this.apretado = true;

      setTimeout(()=>{
        
        this.router.navigate(["/login"]);

        this.apretado = false;
        
      },2000);
    });
  }

}
