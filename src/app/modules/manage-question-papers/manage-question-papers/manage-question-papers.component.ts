import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthServiceService } from 'src/app/core/services';
import { QuestionPaper } from 'src/app/interfaces/interfaces';
import { BaseService } from 'src/app/service/base.service';
import { ConformationDialogComponent } from 'src/app/shared/components/conformation-dialog/conformation-dialog.component';


@Component({
  selector: 'app-manage-question-papers',
  templateUrl: './manage-question-papers.component.html',
  styleUrls: ['./manage-question-papers.component.scss']
})
export class ManageQuestionPapersComponent {

  examCycleList: string[] = ['examCycle1', 'examCycle2', 'examCycle3'];
  examCycleControl = new FormControl();
  loggedInUserRole = "";
  userData: any;
  

   isDataLoading: boolean = false;
   questionPapersList: QuestionPaper[] = [];

  constructor(
    private baseService: BaseService,
    private authService: AuthServiceService, 
  ) {
    this.loggedInUserRole = this.authService.getUserRoles()[0];
    this.userData = this.authService.getUserRepresentation();
  }

  ngOnInit(): void {
    this.getQuestionPapersList()
  }

  getQuestionPapersList() {
    this.isDataLoading = true;
    this.baseService.getExamsAndQuestionPapersList$().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.questionPapersList = res;
        setTimeout(() => {
          this.isDataLoading = false;
        }, 1000);

      },
      error: (error: HttpErrorResponse) => {
        this.isDataLoading = false;
        console.log(error)
      }

    })  
  } 

  breadcrumbItems = [
    { label: 'Manage Question Paper', url: '' },
  ]

 

  onUploadQuesPaper(files:any){
    const formData = new FormData()
    formData.append('files', files)
    console.log("formData",formData)
    console.log("file",files)

    const request ={
      file: files,
      userId: this.userData?.id,
      examCycleId: "2"
    }
    console.log("onUploadQuesPaperonUploadQuesPaper", files.name)
    this.baseService.uploadQuestionPaper(request).subscribe({
      next: (response) => {
        console.log("Download question paper response", response);
      },
      error: (error) => {
        console.log("Download question paper error", error);
      }
    });
  }

  downloadQuestionPaper(questionPaperId: any) {
    this.baseService.downloadQuestionPaper(questionPaperId).subscribe({
      next: (response) => {
        console.log("Download question paper response", response);
      },
      error: (error) => {
        console.log("Download question paper error", error);
      }
    });
  }

  viewQuestionPapers(questionPaperId: any) {
    console.log(questionPaperId);
    console.log("viewQuestionPaper questionPaperId",questionPaperId)
    this.baseService.getQuestionPaperPreviewUrl(questionPaperId).subscribe({
      next: (response) => {
        console.log("question paper preview url response", response);
      },
      error: (error) => {
        console.log("question paper preview url error", error);
      }
    });
  }
}
