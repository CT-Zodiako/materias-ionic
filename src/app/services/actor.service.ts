import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actor } from '../actor';
import { ACTORES } from '../lista-actores';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor() { }

  getActoresPorPelicula(id_pelicula: number): Observable<Actor[]> | undefined{
    id_pelicula = Number(id_pelicula);
    return of(ACTORES.filter(x => x.id_pelicula === id_pelicula));
  }

  borraPelicula(actor:Actor|number):Observable<Actor[]>{
    const id = typeof actor === 'number' ? actor:actor.id;
    if (id > -1) {
      ACTORES.splice(id,1);
    }
    return of(ACTORES);
  }
  getUnaPelicula(id: number):Observable<Actor | undefined>{
    id = Number(id);
    return of(ACTORES.find(x => x.id === id));
  }
  crearNuevo(actor:Actor): Observable<Actor>{
    ACTORES.push(actor);
    let indice: number = ACTORES.findIndex(x => x.id === actor.id);
    return of(ACTORES[indice])
  }

  editarPelicula(actor:Actor): Observable<Actor | undefined>{
    let id = Number(actor.id);
    let indice:number = ACTORES.findIndex(x => x.id === id)
    ACTORES[indice] = actor;
    return of(ACTORES[indice]);
  }

}
