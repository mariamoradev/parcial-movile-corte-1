import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmallcarPageRoutingModule } from './smallcar-routing.module';

import { SmallcarPage } from './smallcar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmallcarPageRoutingModule
  ],
  declarations: [SmallcarPage]
})
export class SmallcarPageModule {}
