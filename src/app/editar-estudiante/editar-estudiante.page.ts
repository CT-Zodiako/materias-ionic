import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Actor} from '../actor';
import { ActorService } from '../services/actor.service';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.page.html',
  styleUrls: ['./editar-estudiante.page.scss'],
})
export class EditarEstudiantePage implements OnInit {

  id : any; 
  actor? : Actor;
  seleccionado? : Actor;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private actorService: ActorService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params)=>{
      this.actorService.getUnaPelicula(params['id'])
        .subscribe(seleccionado =>{
          this.seleccionado = seleccionado;
        })
    })
  }

  regresar(): void{
    this.router.navigate(["tabs/peliculas"]);
  }

  editar(actor:Actor):void{
    this.actorService.editarPelicula(actor).subscribe(() => {
      this.mostrarMensaje("editar exitoso");
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
