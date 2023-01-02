import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';

import { PhotoService } from '../../services/photo.service';

import { FirestoreService } from 'src/app/services/firestore.service';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  @Input() test : number;

  @Output() atrasEvent = new EventEmitter<number>();

  misImagenes : boolean = false;
  feed : boolean = true;
  graficos : boolean = false;
  foto: boolean = true;
  tema : number;

  tituloMenuCosa : string;
  tituloMenu : string;

  apretado: boolean = false;

  referencia : any;


  constructor(private auth: AngularFireAuth, private router: Router, private menu: MenuController,public photoService: PhotoService,
    public firesoteService : FirestoreService, public as : AuthService) { 
  }

  ngOnInit() {
    if(this.test == 1){
      this.tituloMenuCosa = 'Cosas Lindas';
      this.tituloMenu = 'Cosas Lindas';
      this.tema = 1;
    }else if(this.test == 2){
      this.tema = 2;
      this.tituloMenuCosa = 'Cosas Feas';
      this.tituloMenu = 'Cosas Feas';
    }
  }

  addPhotoToGallery() {
    let foto = {
      pathFoto: '',
      email: this.as.logeado.email,
      hora: '',
      likes: []
    }
    this.photoService.addNewToGallery(foto, this.tema).then(()=>{
      this.apretado = true;
      setTimeout(() => {
      this.apretado = false;
      }, 4000);
    });
  }
  

  openMenu() {
    this.menu.open();
  }

  opcionMenu(a: any){
    switch (a) {
      case 1:
        this.menu.close();
        
        this.apretado = true;

        setTimeout(()=>{
        
          this.atrasEvent.emit(0);
  
          this.apretado = false;
          this.misImagenes = false;
          this.feed = true;
          this.graficos = false;
          this.foto = false;

        },2000);
      break;
      case 2:
        this.menu.close();
        
        this.apretado = true;

        setTimeout(()=>{
        
          this.misImagenes = true;
          this.feed = false;
          this.graficos = false;
          this.foto = false;

          this.tituloMenu = 'Mis Imagenes';

          this.apretado = false;
          
        },2000);
      break;
      case 3:
        this.menu.close();
        
        this.apretado = true;

        setTimeout(()=>{
        
          this.misImagenes = false;
          this.feed = false;
          this.graficos = true;
          this.foto = false;

          this.tituloMenu = 'Graficos';

          this.apretado = false;
          
        },2000);
      break;
      case 4:
        
      this.menu.close();

      this.logOut();

      break;
      case 5:
        this.menu.close();
        
        this.apretado = true;

        setTimeout(()=>{

          this.misImagenes = false;
          this.feed = true;
          this.graficos = false;
          this.foto = true;
          if(this.test == 1){
            this.tituloMenu = 'Cosas Lindas';
          }else if(this.test == 2){
            this.tituloMenu = 'Cosas Feas';
          }

          this.apretado = false;
   
        },2000);
      break;
    
    }
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
