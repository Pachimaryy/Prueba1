import { Injectable } from '@angular/core';
import { Paquete } from './paquete.model';

@Injectable({
  providedIn: 'root'
})
export class PaquetesService {

  public paquetes: Paquete[] =[{

    id:'1',
    objeto: 'Secador de pelo',
    direccion:'Profesor Matu 7865',
    imageURL:'https://www.elcontainer.cl/13330-big_default/secador-de-pelo-gama-mistral.jpg',
    
  },
  {

    id:'2',
    objeto: 'Pelota',
    direccion:'Avenida Comandante 4657',
    imageURL:'https://jumbo.vteximg.com.br/arquivos/ids/372936/Pelota-futbol-Barcelona-FC.jpg?v=637437361248630000',
    
  }

    

  ]

  constructor() { }


  getPaquetes(){
    return [...this.paquetes]
  }

  getPaquete(paqueteId: any){
    return {
      ...this.paquetes.find(paquete =>{
        return paquete.id === paqueteId;
      })
    };
    
  }

  addPaquete(objeto:any, imageURL:any, direccion:any){
    this.paquetes.push({
      objeto,
      imageURL,
      direccion,
      id: this.paquetes.length + 1 + ""
    });
  }
}
