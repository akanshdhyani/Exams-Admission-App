import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageQuestionPapersComponent } from './manage-question-papers/manage-question-papers.component';

const routes: Routes = [
  {path: '', component: ManageQuestionPapersComponent }
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
export class ManageQuestionPapersRoutingModule { }
