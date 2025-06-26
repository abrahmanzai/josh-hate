import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbdulHameedPage } from './abdul-hameed.page';

const routes: Routes = [
  {
    path: '',
    component: AbdulHameedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbdulHameedPageRoutingModule {}
