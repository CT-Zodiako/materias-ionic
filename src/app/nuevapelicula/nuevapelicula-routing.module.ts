import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevapeliculaPage } from './nuevapelicula.page';

const routes: Routes = [
  {
    path: '',
    component: NuevapeliculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevapeliculaPageRoutingModule {}
