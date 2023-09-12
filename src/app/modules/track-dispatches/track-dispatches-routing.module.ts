import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageTrackDispatchesComponent } from './manage-track-dispatches/manage-track-dispatches.component';

const routes: Routes = [
  {path: '', component: ManageTrackDispatchesComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TrackDispatchesRoutingModule { }
