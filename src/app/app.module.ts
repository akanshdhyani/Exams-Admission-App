import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/material/material.module';
import { StudentEnrollmentComponent } from './student-enrollment/student-enrollment.component';
import { RegisterStudentsComponent } from './register-students/register-students.component';
import { AddNewStudentEnrolmentComponent } from './add-new-student-enrolment/add-new-student-enrolment.component';
import { EducationalDetailsComponent } from './educational-details/educational-details.component';
import { ManageExamCycleFormComponent } from './manage-exam-cycle-form/manage-exam-cycle-form.component';
import { MatTimepickerModule } from 'mat-timepicker';
import { ManageExamCycleListComponent } from './manage-exam-cycle-list/manage-exam-cycle-list.component';
import { ManageExamCycleViewComponent } from './manage-exam-cycle-view/manage-exam-cycle-view.component';
import { FeeManagementInstituteComponent } from './fee-management-institute/fee-management-institute.component';
import { StudentEnrollmentAdminComponent } from './student-enrollment-admin/student-enrollment-admin.component';
import { CctvVerificationModule } from './modules/cctv-verification/cctv-verification.module';
import { FeeManagementRoutingModule } from './modules/fee-management/fee-management-routing.module';
import { ManageExamsModule } from './modules/manage-exams/manage-exams.module';
import { ManageHallTicketsModule } from './modules/manage-hall-tickets/manage-hall-tickets.module';
import { ManageResultsModule } from './modules/manage-results/manage-results.module';
import { MangeQuestionPapersModule } from './modules/mange-question-papers/mange-question-papers.module';
import { StudentEnrollmentModule } from './modules/student-enrollment/student-enrollment.module';
import { TrackDispatchesModule } from './modules/track-dispatches/track-dispatches.module';

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
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTimepickerModule,

    //#region (Modules created)
    CctvVerificationModule,
    FeeManagementRoutingModule,
    ManageExamsModule,
    ManageHallTicketsModule,
    ManageResultsModule,
    MangeQuestionPapersModule,
    StudentEnrollmentModule,
    TrackDispatchesModule,
    //#endregion

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
