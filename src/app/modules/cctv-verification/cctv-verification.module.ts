//#region (imports)

//#region ()
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';
import { SharedModule } from 'src/app/shared';
//#endregion

//#region (created modules && components)
import { CctvVerificationRoutingModule } from './cctv-verification-routing.module';
import { CctvManagementAdminComponent } from './cctv-management-admin/cctv-management-admin.component';

@NgModule({
  declarations: [
    CctvManagementAdminComponent
  ],
  imports: [
    CommonModule,
    CctvVerificationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class CctvVerificationModule { }
