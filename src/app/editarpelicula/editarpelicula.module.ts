import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarpeliculaPageRoutingModule } from './editarpelicula-routing.module';

import { EditarpeliculaPage } from './editarpelicula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarpeliculaPageRoutingModule
  ],
  declarations: [EditarpeliculaPage]
})
export class EditarpeliculaPageModule {}
