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
  file:any;
   fileUploadError: string;
   listOfFiles: any[] = [];
   files: any[] = [];

   isDataLoading: boolean = false;
   questionPapersList: QuestionPaper[] = [];

  constructor(
    private baseService: BaseService,
    private dialog: MatDialog,
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

  formatBytes(bytes: any, decimals = 2) {
    if (!+bytes) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }

  onUploadQuesPaper(event:any){
    // const request ={
    //   // file:,
    //   userId: this.userData?.id,
    //   examCycleId: 2
    // }
    // // console.log("onUploadQuesPaperonUploadQuesPaper", qp)
    // this.baseService.uploadQuestionPaper(request).subscribe({
    //   next: (response) => {
    //     console.log("Download question paper response", response);
    //   },
    //   error: (error) => {
    //     console.log("Download question paper error", error);
    //   }
    // });

    this.fileUploadError = '';
      let selectedFile = event.target.files[0];
      const extension = selectedFile.name.split('.').pop();
      const fileSize = selectedFile.size;
      const allowedExtensions = ['pdf'];
      if (allowedExtensions.includes(extension)) {
        // validate file size to be less than 2mb if the file has a valid extension
        if (fileSize < 2000000) {
          if (this.listOfFiles.indexOf(selectedFile?.name) === -1) {
            this.files.push(selectedFile);
            this.listOfFiles.push(
              selectedFile.name.concat(this.formatBytes(selectedFile.size))
            );
          } else {
            console.log('file already exists');
          }
        } else {
          this.fileUploadError = 'Please upload files with size less than 2MB';
        }
      } else {
        this.fileUploadError = `Please upload ${allowedExtensions.join(', ')} files`;
      }
      if(this.files.length > 0){
      const dialogRef = this.dialog.open(ConformationDialogComponent, {
        data: {
          dialogType: 'success',
          description: ['Internal marks uploaded successfully'],
          buttons: [
            {
              btnText: 'Ok',
              positionClass: 'center',
              btnClass: 'btn-full',
              response: true,
              // click:this.router.navigateByUrl('/manage-result/institute'),

            },
          ],
        },
        width: '700px',
        height: '400px',
        maxWidth: '90vw',
        maxHeight: '90vh'
      })
      dialogRef.afterClosed().subscribe(files => {
        if (files) {
        //  this.router.navigateByUrl('/manage-result/institute')
        console.log("hello")
        }
      })
    }
  }
}
