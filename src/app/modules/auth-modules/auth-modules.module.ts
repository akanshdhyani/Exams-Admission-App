import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModulesRoutingModule } from './auth-modules-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from 'src/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthModulesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class AuthModulesModule { }
