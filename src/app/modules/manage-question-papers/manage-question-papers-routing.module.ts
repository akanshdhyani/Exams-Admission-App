import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadQuesPapersComponent } from './download-ques-papers/download-ques-papers.component';


const routes: Routes = [
  {
    path: 'institute', component: DownloadQuesPapersComponent, pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class ManageQuestionPapersRoutingModule { }
