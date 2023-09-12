import { Component, OnInit } from '@angular/core';
import { PaquetesService } from './paquetes.service';
import { Paquete } from './paquete.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.page.html',
  styleUrls: ['./paquetes.page.scss'],
})
export class PaquetesPage implements OnInit {

    
  paquetes: Paquete[] | undefined;


  

  constructor(private paqueteService: PaquetesService, private router:Router) { }

  ngOnInit() {

    this.paquetes = this.paqueteService.getPaquetes()
  }

  addNewPaquete(){
    this.router.navigate(['/new-paquete']);
  }

}
