import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatePortalComponent } from './candidate-portal/candidate-portal.component';
import { ResultsComponent } from './results/results.component';
import { HallTicketComponent } from './hall-ticket/hall-ticket.component';
import { StudentGuard } from 'src/app/core/guards/role-guard/role.guard';

const routes: Routes = [
  { path: '', component: CandidatePortalComponent },
  { path: 'view-hallticket', component: HallTicketComponent },
  { path: 'view-results', component:  ResultsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CandidatePortalRoutingModule { }
