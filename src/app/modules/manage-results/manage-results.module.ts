//#region (imports)

//#region ()
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region (created modules && components)
import { ManageResultsRoutingModule } from './manage-results-routing.module';
import { MaterialModule } from 'src/material/material.module';
//#endregion

//#endregion



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ManageResultsRoutingModule,
    MaterialModule
  ]
})
export class ManageResultsModule { }
