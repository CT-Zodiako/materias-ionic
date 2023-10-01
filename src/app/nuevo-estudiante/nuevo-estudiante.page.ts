import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Actor } from '../actor';
import { ActorService } from '../services/actor.service';

@Component({
  selector: 'app-nuevo-estudiante',
  templateUrl: './nuevo-estudiante.page.html',
  styleUrls: ['./nuevo-estudiante.page.scss'],
})
export class NuevoEstudiantePage implements OnInit {

  nuevoActor = {} as Actor;

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private actorService: ActorService

  ) { }

  ngOnInit() {
  }
  regresar(): void{
    this.router.navigate(["tabs/peliculas"]);
  }
  ionViewDidEnter(){
    this.nuevoActor = {} as Actor;
  }

  guardar(nuevoActor:any){
    this.mostrarMensaje("Guardando...");
    this.nuevoActor.id = Number(this.nuevoActor.id);
    this.actorService.crearNuevo(nuevoActor).
    subscribe(actor =>{
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
