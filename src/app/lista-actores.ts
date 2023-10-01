import { Actor } from './actor';

export const ACTORES: Actor[] = [
  {
    id: 1,
    nombre_estudiante: 'El Chapulín Colorado',
    faltas: 2,
    nota_uno: 30,
    nota_dos: 30,
    nota_tres: 30,
    definitiva: (30 + 30 + 30) / 3,
    id_pelicula: 1,
  },
  {
    id: 2,
    nombre_estudiante: 'Jhon Jairo',
    faltas: 2,
    nota_uno: 40,
    nota_dos: 40,
    nota_tres: 40,
    definitiva: (40 + 40 + 40) / 3,
    id_pelicula: 2,
  },
  {
    id: 3,
    nombre_estudiante: 'Juanito Alimaña',
    faltas: 3,
    nota_uno: 30,
    nota_dos: 30,
    nota_tres: 30,
    definitiva: (30 + 30 + 30) / 3,
    id_pelicula: 1,
  },
];
