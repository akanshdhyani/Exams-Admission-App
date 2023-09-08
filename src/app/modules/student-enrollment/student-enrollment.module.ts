//#region (imports)

//#region ()
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region (created modules && components)
import { StudentEnrollmentRoutingModule } from './student-enrollment-routing.module';
import { AddNewStudentEnrolmentComponent } from './add-new-student-enrolment/add-new-student-enrolment.component';
import { EducationalDetailsComponent } from './educational-details/educational-details.component';
import { StudentEnrollmentAdminComponent } from './student-enrollment-admin/student-enrollment-admin.component';
import { StudentEnrollmentComponent } from './student-enrollment/student-enrollment.component';
import { MaterialModule } from 'src/material/material.module';
import { StudentEnrollmentFormComponent } from './student-enrollment-form/student-enrollment-form.component';
//#endregion

//#endregion



@NgModule({
  declarations: [
    AddNewStudentEnrolmentComponent,
    EducationalDetailsComponent,
    StudentEnrollmentAdminComponent,
    StudentEnrollmentComponent,
    StudentEnrollmentFormComponent
  ],
  imports: [
    CommonModule,
    StudentEnrollmentRoutingModule,
    MaterialModule
  ]
})
export class StudentEnrollmentModule { }
