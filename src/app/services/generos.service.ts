import { Injectable } from '@angular/core';
import { Genero } from '../tab3/genero';
import { GENEROS } from '../tab3/lista-generos';
import { Observable , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor() { }

  getGeneros():Observable <Genero[]> {
    return of(GENEROS);
  }
}
