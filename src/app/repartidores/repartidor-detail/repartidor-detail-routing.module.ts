import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepartidorDetailPage } from './repartidor-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RepartidorDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepartidorDetailPageRoutingModule {}
