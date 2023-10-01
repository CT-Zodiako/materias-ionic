import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevapeliculaPageRoutingModule } from './nuevapelicula-routing.module';

import { NuevapeliculaPage } from './nuevapelicula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevapeliculaPageRoutingModule
  ],
  declarations: [NuevapeliculaPage]
})
export class NuevapeliculaPageModule {}
