import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModulesModule } from './modules/auth-modules/auth-modules.module';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from 'src/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { StudentEnrollmentComponent } from './modules/student-enrollment/student-enrollment/student-enrollment.component';
import { RegisterStudentsComponent } from './modules/student-registration/register-students/register-students.component';
import { AddNewStudentEnrolmentComponent } from './modules/student-enrollment/add-new-student-enrolment/add-new-student-enrolment.component';
import { EducationalDetailsComponent } from './modules/student-enrollment/educational-details/educational-details.component';
import { ManageExamCycleFormComponent } from './modules/manage-exams/manage-exam-cycle-form/manage-exam-cycle-form.component';
// import { MatTimepickerModule } from 'mat-timepicker';
import { ManageExamCycleListComponent } from './modules/manage-exams/manage-exam-cycle-list/manage-exam-cycle-list.component';
import { ManageExamCycleViewComponent } from './modules/manage-exams/manage-exam-cycle-view/manage-exam-cycle-view.component';
import { FeeManagementInstituteComponent } from './modules/fee-management/fee-management-institute/fee-management-institute.component';
import { StudentEnrollmentAdminComponent } from './modules/student-enrollment/student-enrollment-admin/student-enrollment-admin.component';
import { FeeManagementAdminComponent } from './modules/fee-management/fee-management-admin/fee-management-admin.component';
import { CctvManagementAdminComponent } from './modules/cctv-verification/cctv-management-admin/cctv-management-admin.component';
import { ManageHallTicketsAdminListComponent } from './modules/manage-hall-tickets/manage-hall-tickets-admin-list/manage-hall-tickets-admin-list.component';
import { SharedModule } from './shared';

// import { SharedTableComponent } from './shared-table/shared-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentEnrollmentComponent,
    RegisterStudentsComponent,
    AddNewStudentEnrolmentComponent,
    EducationalDetailsComponent,
    ManageExamCycleFormComponent,
    ManageExamCycleListComponent,
    ManageExamCycleViewComponent,
    FeeManagementInstituteComponent,
    StudentEnrollmentAdminComponent,
    FeeManagementAdminComponent,
    CctvManagementAdminComponent,
    ManageHallTicketsAdminListComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
