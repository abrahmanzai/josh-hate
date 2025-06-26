import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrendenPage } from './brenden.page';

const routes: Routes = [
  {
    path: '',
    component: BrendenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrendenPageRoutingModule {}
