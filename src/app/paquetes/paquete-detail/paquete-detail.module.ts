import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaqueteDetailPageRoutingModule } from './paquete-detail-routing.module';

import { PaqueteDetailPage } from './paquete-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaqueteDetailPageRoutingModule
  ],
  declarations: [PaqueteDetailPage]
})
export class PaqueteDetailPageModule {}
