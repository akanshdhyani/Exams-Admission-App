import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentEnrollmentComponent } from './student-enrollment/student-enrollment.component';
import { StudentEnrollmentAdminComponent } from './student-enrollment-admin/student-enrollment-admin.component';
import { AdminGuard, InstituteGuard } from 'src/app/core/guards/role-guard/role.guard';

const routes: Routes = [
  {path: 'institute', component: StudentEnrollmentComponent, canActivate: [InstituteGuard]},
  { path: 'admin', component: StudentEnrollmentAdminComponent, canActivate: [AdminGuard]}
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
export class StudentEnrollmentRoutingModule { }
