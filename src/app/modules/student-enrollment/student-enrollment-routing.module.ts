import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentEnrollmentComponent } from './student-enrollment/student-enrollment.component';
import { StudentEnrollmentAdminComponent } from './student-enrollment-admin/student-enrollment-admin.component';
import { StudentEnrollmentFormComponent } from './student-enrollment-form/student-enrollment-form.component';

const routes: Routes = [
  {path: 'institute', component: StudentEnrollmentComponent},
  {path: 'add-enrollment', component: StudentEnrollmentFormComponent, pathMatch: 'full'},
  { path: 'admin', component: StudentEnrollmentAdminComponent}
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
