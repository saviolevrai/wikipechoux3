import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusiquesPage } from './musiques.page';

const routes: Routes = [
  {
    path: '',
    component: MusiquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusiquesPageRoutingModule {}
