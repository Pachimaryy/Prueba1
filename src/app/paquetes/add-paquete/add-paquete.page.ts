import { Component, OnInit } from '@angular/core';
import { PaquetesService } from '../paquetes.service';
import { Paquete } from '../paquete.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-paquete',
  templateUrl: './add-paquete.page.html',
  styleUrls: ['./add-paquete.page.scss'],
})
export class AddPaquetePage implements OnInit {

  constructor(private paqueteservice:PaquetesService, private router:Router) { }

  ngOnInit() {
  }

  saveNewPaquete(objeto:any, imageURL:any, direccion:any){
    this.paqueteservice.addPaquete(objeto.value,imageURL.value,direccion.value);
    this.router.navigate(['/paquetes'])
  }

}
