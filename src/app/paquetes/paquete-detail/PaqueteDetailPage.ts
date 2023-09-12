import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaquetesService } from '../paquetes.service';
import { Paquete } from '../paquete.model';


@Component({
  selector: 'app-paquete-detail',
  templateUrl: './paquete-detail.page.html',
  styleUrls: ['./paquete-detail.page.scss'],
})
export class PaqueteDetailPage implements OnInit {

  paquete!: Paquete;

  constructor(private activatedrouter: ActivatedRoute, private paqueteservice: PaquetesService, private router:Router) { }

  ngOnInit() {
    this.activatedrouter.paramMap.subscribe(paramMap => {
      const recipedId = paramMap.get("paqueteId");
      if (recipedId) {
        this.paquete = this.paqueteservice.getPaquete(recipedId as string) as Paquete;
        console.log(this.paquete);
      }

    });
  }

}
