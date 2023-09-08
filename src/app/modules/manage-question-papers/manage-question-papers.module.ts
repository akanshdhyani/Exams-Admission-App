//#region (imports)

//#region ()
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region (created modules && components)
import { ManageQuestionPapersRoutingModule } from './manage-question-papers-routing.module';
import { MaterialModule } from 'src/material/material.module';
import { ManageQuestionPapersComponent } from './manage-question-papers/manage-question-papers.component';
//#endregion

//#endregion



@NgModule({
  declarations: [
    ManageQuestionPapersComponent
  ],
  imports: [
    CommonModule,
    ManageQuestionPapersRoutingModule,
    MaterialModule
  ]
})
export class ManageQuestionPapersModule { }
