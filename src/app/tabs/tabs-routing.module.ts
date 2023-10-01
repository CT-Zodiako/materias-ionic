import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'peliculas',
        loadChildren: () =>
          import('../peliculas/peliculas.module').then(
            (m) => m.PeliculasPageModule
          ),
      },
      {
        path: 'editarpelicula/:id',
        loadChildren: () =>
          import('../editarpelicula/editarpelicula.module').then(
            (m) => m.EditarpeliculaPageModule
          ),
      },
      {
        path: 'nuevapelicula',
        loadChildren: () =>
          import('../nuevapelicula/nuevapelicula.module').then(
            (m) => m.NuevapeliculaPageModule
          ),
      },
      {
        path: 'actores/:id',
        loadChildren: () =>
          import('../actores/actores.module').then((m) => m.ActoresPageModule),
      },
      {
        path: 'nuevo-estudiante',
        loadChildren: () =>
          import('../nuevo-estudiante/nuevo-estudiante.module').then(
            (m) => m.NuevoEstudiantePageModule
          ),
      },
      {
        path: 'editar-estudiante/:id',
        loadChildren: () =>
          import('../editar-estudiante/editar-estudiante.module').then(
            (m) => m.EditarEstudiantePageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
