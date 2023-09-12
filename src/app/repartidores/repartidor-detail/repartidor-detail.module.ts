import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepartidorDetailPageRoutingModule } from './repartidor-detail-routing.module';

import { RepartidorDetailPage } from './repartidor-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepartidorDetailPageRoutingModule
  ],
  declarations: [RepartidorDetailPage]
})
export class RepartidorDetailPageModule {}
