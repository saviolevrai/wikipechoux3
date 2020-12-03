import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dossiers',
    loadChildren: () => import('./pages/dossiers/dossiers.module').then( m => m.DossiersPageModule)
  },
  {
    path: 'aleatoire',
    loadChildren: () => import('./pages/aleatoire/aleatoire.module').then( m => m.AleatoirePageModule)
  },
  {
    path: 'code',
    loadChildren: () => import('./pages/code/code.module').then( m => m.CodePageModule)
  },
  {
    path: 'livres',
    loadChildren: () => import('./pages/livres/livres.module').then( m => m.LivresPageModule)
  },
  {
    path: 'musiques',
    loadChildren: () => import('./pages/musiques/musiques.module').then( m => m.MusiquesPageModule)
  },
  {
    path: 'histoires',
    loadChildren: () => import('./pages/histoires/histoires.module').then( m => m.HistoiresPageModule)
  },
  {
    path: 'connecter',
    loadChildren: () => import('./pages/connecter/connecter.module').then( m => m.ConnecterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
