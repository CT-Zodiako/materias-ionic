import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Pelicula } from '../pelicula';
import { PeliculService } from '../services/pelicul.service';

@Component({
  selector: 'app-nuevapelicula',
  templateUrl: './nuevapelicula.page.html',
  styleUrls: ['./nuevapelicula.page.scss'],
})
export class NuevapeliculaPage implements OnInit {

  nuevaPelicula = {} as Pelicula;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private peliculaService: PeliculService
  ) { 

  }

  ngOnInit() {
  }

  regresar(): void{
    this.router.navigate(["tabs/peliculas"]);
  }

  ionViewDidEnter(){
    this.nuevaPelicula = {} as Pelicula;
  }

  guardar(nuevaPelicula:any){
    this.mostrarMensaje("Guardando...");
    this.nuevaPelicula.id = Number(this.nuevaPelicula.id);
    this.peliculaService.crearNuevo(nuevaPelicula).
    subscribe(pelicula =>{
      this.router.navigate(["tabs/peliculas"]);
      this.mostrarMensaje("Materia registrada");
    })
  }

  mostrarMensaje(mensaje:string){
    this.toastCtrl.create({
      message:mensaje,
      duration: 20000
    }).then(toast => toast.present());
  }
}
