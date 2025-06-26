import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrendenPageRoutingModule } from './brenden-routing.module';

import { BrendenPage } from './brenden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrendenPageRoutingModule
  ],
  declarations: [BrendenPage]
})
export class BrendenPageModule {}
