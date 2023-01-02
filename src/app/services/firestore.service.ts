import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  cosasLindasCollectionReference: any;
  cosasLindas: Observable<any>;

  cosasFeasCollectionReference: any;
  cosasFeas: Observable<any>;

  cosasLindasArray : any = [];
  cosasFeasArray : any = [];

  constructor(private angularF : AngularFirestore, private AngularFS : AngularFireStorage) 
  {
    this.cosasLindasCollectionReference = this.angularF.collection<any>('CosasLindas');
    this.cosasLindas = this.cosasLindasCollectionReference.valueChanges({idField: 'id'});

    this.cosasFeasCollectionReference = this.angularF.collection<any>('CosasFeas');
    this.cosasFeas = this.cosasFeasCollectionReference.valueChanges({idField: 'id'});

    this.traerCosasLindas().subscribe(value => {
      this.cosasLindasArray = value;
    });
    this.traerCosasFeas().subscribe(value => {
      this.cosasFeasArray = value;
    });
  }

  subirImagen(archivo : string, datos : any){
    return this.AngularFS.upload(archivo,datos);
  }

  agregarFoto(foto: any, tema : number){
    if(tema == 1){
      this.cosasLindasCollectionReference.add({...foto});
    }
    else if(tema == 2)
    {
      this.cosasFeasCollectionReference.add({...foto});
    }
  }

  modificarImagen(foto : any, id: any, coleccion: any){
    return this.angularF.collection(coleccion).doc(id).update(foto);
  }

  referenciaArchivo(archivo : string){
    return this.AngularFS.ref(archivo);
  }

  traerCosasLindas()
  {
    return this.cosasLindas;
  }

  traerCosasFeas()
  {
    return this.cosasFeas;
  }

}