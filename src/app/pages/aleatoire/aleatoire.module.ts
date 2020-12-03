import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AleatoirePageRoutingModule } from './aleatoire-routing.module';

import { AleatoirePage } from './aleatoire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AleatoirePageRoutingModule
  ],
  declarations: [AleatoirePage]
})
export class AleatoirePageModule {}
