import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, ParamMap,Params } from '@angular/router';
import { Pelicula } from '../pelicula';
import { PeliculService } from '../services/pelicul.service';
import {Actor} from '../actor';
import {ActorService} from '../services/actor.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.page.html',
  styleUrls: ['./actores.page.scss'],
})
export class ActoresPage implements OnInit {

  id:any;
  seleccionado?:Pelicula;
  public actores?:Actor[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peliculaService: PeliculService,
    private actorService: ActorService,
    public alertController: AlertController
  ) { }
  

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.peliculaService.getUnaPelicula(params['id']).subscribe(selecionado => {
        this.seleccionado = selecionado;
      });
    this.actorService.getActoresPorPelicula(params["id"])?.subscribe(actores => {
      this.actores = actores;
    })
    });
  }

  regresar(){
    this.router.navigate(['/tabs/peliculas']); 
  }

  async borrarPelicula(actor: Actor) {
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
            this.actores = this.actores?.filter(
              (h) => h !== actor
            );
            this.actorService.borraPelicula(actor).subscribe();
          },
        },
      ],
    });
    await alert.present();
  }


}
