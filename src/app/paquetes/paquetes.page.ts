import { Component, OnInit } from '@angular/core';
import { PaquetesService } from './paquetes.service';
import { Paquete } from './paquete.model';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.page.html',
  styleUrls: ['./paquetes.page.scss'],
})
export class PaquetesPage implements OnInit {

    
  paquetes: Paquete[] | undefined;


  

  constructor(private paqueteService: PaquetesService) { }

  ngOnInit() {

    this.paquetes = this.paqueteService.getPaquetes()
  }

}
