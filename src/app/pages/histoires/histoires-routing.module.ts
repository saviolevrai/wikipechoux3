import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoiresPage } from './histoires.page';

const routes: Routes = [
  {
    path: '',
    component: HistoiresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoiresPageRoutingModule {}
