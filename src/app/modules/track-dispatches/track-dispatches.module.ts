//#region (imports)

//#region ()
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region (created modules && components)
import { TrackDispatchesRoutingModule } from './track-dispatches-routing.module';
import { MaterialModule } from 'src/material/material.module';
//#endregion

//#endregion



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TrackDispatchesRoutingModule,
    MaterialModule
  ]
})
export class TrackDispatchesModule { }
