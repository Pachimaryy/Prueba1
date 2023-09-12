import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepartidoresPage } from './repartidores.page';

const routes: Routes = [
  {
    path: '',
    component: RepartidoresPage
  },
  {
    path: 'repartidor-detail',
    loadChildren: () => import('./repartidor-detail/repartidor-detail.module').then( m => m.RepartidorDetailPageModule)
  },
  {
    path: 'add-repartidor',
    loadChildren: () => import('./add-repartidor/add-repartidor.module').then( m => m.AddRepartidorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepartidoresPageRoutingModule {}
