import { Component, OnInit } from '@angular/core';
import { RepartidoresService } from './repartidores.service';
import { Repartidor } from './repartidor.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-repartidores',
  templateUrl: './repartidores.page.html',
  styleUrls: ['./repartidores.page.scss'],
})
export class RepartidoresPage implements OnInit {

  

  repartidores: Repartidor[] | undefined;

  

  constructor( private repartidoresService: RepartidoresService, private router:Router) { }

  ngOnInit() {
    this.repartidores = this.repartidoresService.getRepartidores()
  }

  addNewRepartidor(){
    this.router.navigate(['/new-repartidor'])
  }

}
