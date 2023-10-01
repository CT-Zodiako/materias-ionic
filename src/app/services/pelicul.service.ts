import { Injectable } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PELICULAS } from '../lista-peliculas'
import { Observable , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculService {

  constructor() { }

  getPeliculas():Observable <Pelicula[]> {
    return of(PELICULAS);
  }

  borraPelicula(pelicula:Pelicula|number):Observable<Pelicula[]>{
    const id = typeof pelicula === 'number' ? pelicula:pelicula.id;
    if (id > -1) {
      PELICULAS.splice(id,1);
    }
    return of(PELICULAS);
  }

  getUnaPelicula(id: number):Observable<Pelicula | undefined>{
    id = Number(id);
    return of(PELICULAS.find(x => x.id === id));
  }

  editarPelicula(pelicula:Pelicula): Observable<Pelicula | undefined>{
    let id = Number(pelicula.id);
    let indice:number = PELICULAS.findIndex(x => x.id === id)
    PELICULAS[indice] = pelicula;
    return of(PELICULAS[indice]);
  }

  crearNuevo(pelicula:Pelicula): Observable<Pelicula>{
    PELICULAS.push(pelicula);
    let indice: number = PELICULAS.findIndex(x => x.id === pelicula.id);
    return of(PELICULAS[indice])
  }

}
