import { Injectable } from '@angular/core';
import { Repartidor } from './repartidor.model';

@Injectable({
  providedIn: 'root'
})
export class RepartidoresService {

  public repartidores: Repartidor[] =[
    {
      id:'1',
      nombre:'Mauricio Rubio',
      imageURL:'https://media.discordapp.net/attachments/596794926688239617/1150916080630509628/328790645_1948976202125858_2223523011235268521_n.jpg',
      Rut:'18.675.768-3',
      valoracion:'4.8/5',
      transporte:'auto',
      carga:'secador de pelo',
      comentarios:['Es un gran repartidor, pero me da miedo']

    },
    {
      id:'2',
      nombre:'Alvaro Martinez',
      imageURL:'https://media.discordapp.net/attachments/596794926688239617/1150919250828087376/117317877_3314486978574235_7375060034742054314_o.jpg?width=673&height=676',
      Rut:'13.456.678-9',
      valoracion:'5/5',
      transporte:'moto',
      carga:'no hay entregas de momento.',
      comentarios:['Es de pana el repartidor hasta comimos las medias hamburguesas']

    },
    {
      id:'3',
      nombre:'Vergil chad',
      imageURL:'https://media.discordapp.net/attachments/596794926688239617/1150919311628701756/F5J2LA2WkAAqvgy.jpg',
      Rut:'18.456.678-9',
      valoracion:'4.7/5',
      transporte:'moto',
      carga:'Pelota',
      comentarios:['Bello el repartidor']

    },{
      id:'4',
      nombre:'Felipe Bello',
      imageURL:'https://media.discordapp.net/attachments/596794926688239617/1150919384076922940/fsfsfsfs.PNG',
      Rut:'19.435.348-6',
      valoracion:'4.0/5',
      transporte:'auto',
      carga:'no hay de momento.',
      comentarios:['no hay comentarios aun']

    }
    
  ]

  constructor() { }

  getRepartidores(){
    return [...this.repartidores]
  }

  getRepartidor(repartidorId:any){
    return {
      ...this.repartidores.find(repartidor =>{
        return repartidor.id === repartidorId;
  
      })
    }
  }

  addRepartidor(nombre:any, imageURL:any, Rut:any,transporte:any,carga:any, valoracion:any){
    this.repartidores.push({
      nombre,
      imageURL,
      Rut,
      transporte,
      carga,
      id: this.repartidores.length + 1 + "",
      valoracion: '',
      comentarios: []
    });
  }
}
