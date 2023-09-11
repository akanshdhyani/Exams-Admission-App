import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './shared/components/common-layout/common-layout.component';
import { HomeComponent } from './home/home.component';
import { FeeManagementModule } from '../app/modules/fee-management/fee-management.module';

const routes: Routes = [
  {
    path: '', loadChildren :()=> import('../app/modules/auth-modules/auth-modules.module').then(m=>m.AuthModulesModule)
  },
  {
    path: '',
    component: CommonLayoutComponent,
    children: [
      {
        path: 'home', 
        component: HomeComponent, 
        // canActivate: [AuthGuard, RoleContentGuard],
        // data: {
        //   allowedRoles: [Roles.GRIEVANCEADMIN, Roles.NODALOFFICER, Roles.SUPERADMIN, Roles.ADMIN],
        // },
        pathMatch: 'full',
      },
      {
        path: 'student-enrollment',
        loadChildren:()=> import('../app/modules/student-enrollment/student-enrollment.module').then(m=>m.StudentEnrollmentModule)
      },
      {
        path: 'student-registration',
        loadChildren: () => import('../app/modules/student-registration/student-registration.module').then(m=>m.StudentRegistrationModule)
      },
      {
        path: 'fee-management',
        loadChildren: () => import('../app/modules/fee-management/fee-management.module').then(m => m.FeeManagementModule)
      },
      {
        path: 'manage-exam-cycle',
        loadChildren: () => import('../app/modules/manage-exams/manage-exams.module').then(m => m.ManageExamsModule)
      },
      {
        path: 'cctv-management',
        loadChildren: () => import('../app/modules/cctv-verification/cctv-verification.module').then(m => m.CctvVerificationModule)
      },
      {
        path: 'hall-ticket-management',
        loadChildren: () => import('../app/modules/manage-hall-tickets/manage-hall-tickets.module').then(m => m.ManageHallTicketsModule) 
      },
      {
        path: 'manage-question-papers',
        loadChildren: () => import('../app/modules/manage-question-papers/manage-question-papers.module').then(m => m.ManageQuestionPapersModule)
      },
      {
        path: 'dispatches',
        loadChildren: () => import('../app/modules/track-dispatches/track-dispatches.module').then(m => m.TrackDispatchesModule)
      },
      {
        path: 'manage-results',
        loadChildren: () => import('../app/modules/manage-results/manage-results.module').then(m => m.ManageResultsModule)
      },
      {
        path: 'candidate-portal',
        loadChildren: () => import('../app/modules/candidate-portal/candidate-portal-routing.module').then(m => m.CandidatePortalRoutingModule)
      },
      {
        path: "**",
        redirectTo:"/"
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
