import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AleatoirePage } from './aleatoire.page';

const routes: Routes = [
  {
    path: '',
    component: AleatoirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AleatoirePageRoutingModule {}
