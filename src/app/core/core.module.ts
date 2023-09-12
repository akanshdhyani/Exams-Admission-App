import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http-service/http.service';
import { AuthServiceService } from './services';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports :
  [
  ],
  providers: [HttpService, AuthServiceService]
})
export class CoreModule { }

