//#region (imports)

//#region ()
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region (created modules && components)
import { ManageQuestionPapersRoutingModule } from './manage-question-papers-routing.module';
import { MaterialModule } from 'src/material/material.module';
import { DownloadQuesPapersComponent } from './download-ques-papers/download-ques-papers.component';
//#endregion

//#endregion



@NgModule({
  declarations: [
    DownloadQuesPapersComponent
  ],
  imports: [
    CommonModule,
    ManageQuestionPapersRoutingModule,
    MaterialModule
  ]
})
export class ManageQuestionPapersModule { }
