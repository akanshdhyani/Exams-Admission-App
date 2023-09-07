//#region (imports)

//#region ()
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region (created modules && components)
import { FeeManagementRoutingModule } from './fee-management-routing.module';
import { FeeManagementAdminComponent } from './fee-management-admin/fee-management-admin.component';
import { FeeManagementInstituteComponent } from './fee-management-institute/fee-management-institute.component';
import { MaterialModule } from 'src/material/material.module';
//#endregion

//#endregion



@NgModule({
  declarations: [
    FeeManagementAdminComponent,
    FeeManagementInstituteComponent
  ],
  imports: [
    CommonModule,
    FeeManagementRoutingModule,
    MaterialModule
  ]
})
export class FeeManagementModule { }
