import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculService } from '../services/pelicul.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {
  public mispeliculas?: Pelicula[];

  constructor(
    private peliculaService: PeliculService,
    public alertController: AlertController
  ) {}

  getPeliculas(): void {
    this.peliculaService
      .getPeliculas()
      .subscribe((peliculas) => (this.mispeliculas = peliculas));
  }

  ngOnInit() {
    this.getPeliculas();
  }

  async borrarPelicula(pelicula: Pelicula) {
    const alert = await this.alertController.create({
      header: 'Borrar',
      message: '¿Estás seguro de que quieres borrar la película?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancela borrado');
          },
        },
        {
          text: 'Si',
          handler: (blah) => {
            this.mispeliculas = this.mispeliculas?.filter(
              (h) => h !== pelicula
            );
            this.peliculaService.borraPelicula(pelicula).subscribe();
          },
        },
      ],
    });
    await alert.present();
  }
}
