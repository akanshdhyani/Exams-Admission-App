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
import { StudentEnrollmentComponent } from './student-enrollment/student-enrollment.component';
import { RegisterStudentsComponent } from './register-students/register-students.component';
import { AddNewStudentEnrolmentComponent } from './add-new-student-enrolment/add-new-student-enrolment.component';
import { EducationalDetailsComponent } from './educational-details/educational-details.component';
import { ManageExamCycleFormComponent } from './manage-exam-cycle-form/manage-exam-cycle-form.component';
// import { MatTimepickerModule } from 'mat-timepicker';
import { ManageExamCycleListComponent } from './manage-exam-cycle-list/manage-exam-cycle-list.component';
import { ManageExamCycleViewComponent } from './manage-exam-cycle-view/manage-exam-cycle-view.component';
import { FeeManagementInstituteComponent } from './fee-management-institute/fee-management-institute.component';
import { StudentEnrollmentAdminComponent } from './student-enrollment-admin/student-enrollment-admin.component';
import { FeeManagementAdminComponent } from './fee-management-admin/fee-management-admin.component';
import { CctvManagementAdminComponent } from './cctv-management-admin/cctv-management-admin.component';
import { ManageHallTicketsAdminListComponent } from './manage-hall-tickets-admin-list/manage-hall-tickets-admin-list.component';

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
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
