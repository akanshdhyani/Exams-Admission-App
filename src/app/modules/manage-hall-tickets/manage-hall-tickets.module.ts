//#region (imports)

//#region ()
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region (created modules && components)
import { ManageHallTicketsRoutingModule } from './manage-hall-tickets-routing.module';
import { ManageHallTicketsAdminListComponent } from './manage-hall-tickets-admin-list/manage-hall-tickets-admin-list.component';
import { MaterialModule } from 'src/material/material.module';
//#endregion

//#endregion



@NgModule({
  declarations: [
    ManageHallTicketsAdminListComponent,
  ],
  imports: [
    CommonModule,
    ManageHallTicketsRoutingModule,
    MaterialModule
  ]
})
export class ManageHallTicketsModule { }
