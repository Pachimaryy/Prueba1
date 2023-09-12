import { Component, OnInit } from '@angular/core';
import { RepartidoresService } from '../repartidores.service';
import { Router } from '@angular/router';
import { Repartidor } from '../repartidor.model';

@Component({
  selector: 'app-add-repartidor',
  templateUrl: './add-repartidor.page.html',
  styleUrls: ['./add-repartidor.page.scss'],
})
export class AddRepartidorPage implements OnInit {

  constructor(private repartidorservice: RepartidoresService, private router: Router) { }

  ngOnInit() {
  }

  saveNewRepartidor(nombre:any, imageURL:any,transporte:any,rut:any, comentarios:any, carga:any){
    this.repartidorservice.addRepartidor(nombre.value,imageURL.value,transporte.value,rut.value, comentarios.value, carga.value)
    this.router.navigate(['/repartidores'])

  }

}
