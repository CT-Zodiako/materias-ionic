import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Pelicula } from '../pelicula';
import { PeliculService } from '../services/pelicul.service';

@Component({
  selector: 'app-editarpelicula',
  templateUrl: './editarpelicula.page.html',
  styleUrls: ['./editarpelicula.page.scss'],
})
export class EditarpeliculaPage implements OnInit {

  id : any; 
  pelicula? : Pelicula;
  seleccionado? : Pelicula;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private peliculaService: PeliculService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params)=>{
      this.peliculaService.getUnaPelicula(params['id'])
        .subscribe(seleccionado =>{
          this.seleccionado = seleccionado;
        })
    })
  }

  regresar(): void{
    this.router.navigate(["tabs/peliculas"]);
  }

  editar(pelicula:Pelicula):void{
    this.peliculaService.editarPelicula(pelicula).subscribe(() => {
      this.mostrarMensaje("Registro exitoso");
      this.regresar();
    })
  }

  mostrarMensaje(mensaje:string){
    this.toastCtrl.create({
      message:mensaje,
      duration:2000
    }).then(toast => toast.present());
  }
}
