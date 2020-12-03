import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusiquesPageRoutingModule } from './musiques-routing.module';

import { MusiquesPage } from './musiques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusiquesPageRoutingModule
  ],
  declarations: [MusiquesPage]
})
export class MusiquesPageModule {}
