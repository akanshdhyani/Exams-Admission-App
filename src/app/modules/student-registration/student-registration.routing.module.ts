import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterStudentsComponent } from './register-students/register-students.component';
import { RegdStudentsComponent } from './regd-students/regd-students.component';

const routes: Routes = [
  {
    path: 'institute', component: RegisterStudentsComponent, pathMatch: 'full'
},
{path: 'view-regd-students', component: RegdStudentsComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRegistrationRoutingModule { }


