import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatePortalRoutingModule } from './candidate-portal-routing.module';
import { CandidatePortalComponent } from './candidate-portal/candidate-portal.component';
import { ExamCycleComponent } from './exam-cycle/exam-cycle.component';
import { ExamHallTicketStudentDetailsComponent } from './exam-hall-ticket-student-details/exam-hall-ticket-student-details.component';
import { HallTicketComponent } from './hall-ticket/hall-ticket.component';
import { ResultsComponent } from './results/results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared';
import { MaterialModule } from 'src/material/material.module';


@NgModule({
  declarations: [
    CandidatePortalComponent,
    ExamCycleComponent,
    ExamHallTicketStudentDetailsComponent,
    HallTicketComponent,
    ResultsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    CandidatePortalRoutingModule,
  ]
})
export class CandidatePortalModule { }
