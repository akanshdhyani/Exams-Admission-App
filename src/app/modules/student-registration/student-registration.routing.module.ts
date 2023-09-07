import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterStudentsComponent } from './register-students/register-students.component';


const routes: Routes = [
  {path: '', component: RegisterStudentsComponent}
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
export class StudentRegistrationRoutingModule { }
