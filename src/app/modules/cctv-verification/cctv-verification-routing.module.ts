import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CctvManagementAdminComponent } from './cctv-management-admin/cctv-management-admin.component';

const routes: Routes = [
  {path: '', component: CctvManagementAdminComponent}
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
export class CctvVerificationRoutingModule { }
