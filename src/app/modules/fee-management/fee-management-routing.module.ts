import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeeManagementAdminComponent } from './fee-management-admin/fee-management-admin.component';
import { FeeManagementInstituteComponent } from './fee-management-institute/fee-management-institute.component';

const routes: Routes = [
  {
    path: 'admin', component: FeeManagementAdminComponent
  },
  {
    path: 'institute', component: FeeManagementInstituteComponent
  }
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
export class FeeManagementRoutingModule { }
