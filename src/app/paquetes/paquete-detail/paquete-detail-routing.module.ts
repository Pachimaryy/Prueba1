import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaqueteDetailPage } from './PaqueteDetailPage';

const routes: Routes = [
  {
    path: '',
    component: PaqueteDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaqueteDetailPageRoutingModule {}
