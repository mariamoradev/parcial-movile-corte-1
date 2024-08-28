import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmallcarPage } from './smallcar.page';

const routes: Routes = [
  {
    path: '',
    component: SmallcarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmallcarPageRoutingModule {}
