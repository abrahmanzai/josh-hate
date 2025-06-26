import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'brenden',
    loadChildren: () => import('./brenden/brenden.module').then( m => m.BrendenPageModule)
  },
  {
    path: 'abdul-hameed',
    loadChildren: () => import('./abdul-hameed/abdul-hameed.module').then( m => m.AbdulHameedPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
