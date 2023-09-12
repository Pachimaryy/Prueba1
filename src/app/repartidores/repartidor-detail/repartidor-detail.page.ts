import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepartidoresService } from '../repartidores.service';
import { Repartidor } from '../repartidor.model';

@Component({
  selector: 'app-repartidor-detail',
  templateUrl: './repartidor-detail.page.html',
  styleUrls: ['./repartidor-detail.page.scss'],
})
export class RepartidorDetailPage implements OnInit {

  repartidor!: Repartidor

  constructor(private activatedrouter: ActivatedRoute, private repartidorService: RepartidoresService, private router:Router) { }

  ngOnInit() {
    this.activatedrouter.paramMap.subscribe(paramMap =>{
      const rId = paramMap.get("repartidorId");
      this.repartidor = this.repartidorService.getRepartidor(rId as string) as Repartidor;
      console.log(this.repartidor);
    })
  }

}
