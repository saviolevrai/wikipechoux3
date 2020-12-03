import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoiresPageRoutingModule } from './histoires-routing.module';

import { HistoiresPage } from './histoires.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoiresPageRoutingModule
  ],
  declarations: [HistoiresPage]
})
export class HistoiresPageModule {}
