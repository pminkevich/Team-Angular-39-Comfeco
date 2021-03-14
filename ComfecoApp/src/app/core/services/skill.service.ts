import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


import { Observable, from, forkJoin } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Insignias } from '../models/insignias.model';


@Injectable({
  providedIn: 'root',
})
export class SkillService {
insignias: Insignias[];
insignias$:Observable<Insignias[]>;
  constructor() { 

    this.insignias = [
      new Insignias('sociable', 'social', 'Eres muy sociable por ello te recompensamos!', 'Debes Compartir tu información con la comunidad (Redes, Biografía, etc)', false),
      new Insignias('experto', 'experto', 'prueba descripcion', 'se gana asi', false),
      new Insignias('productivo', 'productivo', 'prueba descripcion', 'se gana asi', true),
      new Insignias('soporte', 'soporte', 'prueba descripcion', 'se gana asi', false),
      new Insignias('detective', 'detective', 'prueba descripcion', 'se gana asi', true),

    ];
this.insignias$=new Observable(subscribe=>{

  subscribe.next(this.insignias);



    });

this.insignias$.subscribe(resp=>{

console.log(resp);
})


            }


}
