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
// import { SharedTableComponent } from './shared-table/shared-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentEnrollmentComponent,
    RegisterStudentsComponent,
    AddNewStudentEnrolmentComponent,
    EducationalDetailsComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
