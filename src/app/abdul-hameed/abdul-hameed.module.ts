import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbdulHameedPageRoutingModule } from './abdul-hameed-routing.module';

import { AbdulHameedPage } from './abdul-hameed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbdulHameedPageRoutingModule
  ],
  declarations: [AbdulHameedPage]
})
export class AbdulHameedPageModule {}
