//#region (imports)

//#region ()
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region (created modules && components)
import { ManageQuestionPapersRoutingModule } from './manage-question-papers-routing.module';
import { MaterialModule } from 'src/material/material.module';
//#endregion

//#endregion



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ManageQuestionPapersRoutingModule,
    MaterialModule
  ]
})
export class ManageQuestionPapersModule { }
