import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterStudentsComponent } from './register-students/register-students.component';
import { MaterialModule } from 'src/material/material.module';


const routes: Routes = [
  {path: '', component: RegisterStudentsComponent}
];

@NgModule({
  declarations: [
    RegisterStudentsComponent
  ],
  imports: [
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudentRegistrationRoutingModule { }
