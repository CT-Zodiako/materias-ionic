import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarpeliculaPage } from './editarpelicula.page';

const routes: Routes = [
  {
    path: '',
    component: EditarpeliculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarpeliculaPageRoutingModule {}
