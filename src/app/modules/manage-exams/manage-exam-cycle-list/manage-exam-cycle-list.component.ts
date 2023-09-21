import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TableColumn } from 'src/app/interfaces/interfaces';
import { Tabs } from 'src/app/shared/config/tabs.config';
import { ConformationDialogComponent } from 'src/app/shared/components/conformation-dialog/conformation-dialog.component';
import { UploadFileComponent } from 'src/app/modules/manage-exams/upload-file/upload-file.component';

interface Course {
  value: string;
  viewValue: string;
}
interface Year {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-manage-exam-cycle-list',
  templateUrl: './manage-exam-cycle-list.component.html',
  styleUrls: ['./manage-exam-cycle-list.component.scss']
})
export class ManageExamCycleListComponent {
  tabs: any[] = [];
  isDataLoading: boolean = false;
  examCycleData: any[] = [];
  examCycleTableColumns: TableColumn[] = [];
  pageIndex = 0;
  pageSize = 10;
  length = 10;
  constructor(private router: Router, private dialog: MatDialog){}
  courses: Course[] = [
    {value: 'bsc', viewValue: 'BSc'},
    {value: 'msc', viewValue: 'MSc'},
  ];
  years: Year[] = [
    {value: 'sem-1', viewValue: '2020'},
    {value: 'sem-2', viewValue: '2021'},
    {value: 'sem-3', viewValue: '2022'},
  ];

  ngOnInit() {
   this.initializeTabs();
  }

  goToCreate() {
    this.router.navigate(['manage-exam-cycle/form'])
  }

  initializeTabs() {
    this.tabs = Tabs['student_enrollment'];
    this.initializeColumns();
    this.getEnrollmentData();
  }

  getEnrollmentData() {
    this.isDataLoading = true;
    this.examCycleData = [{
      id: 0,
      examCycle: 'M.SC.(Nursing) - Semester-1',
      courseName: 'M.SC.(Nursing)',
      startDate: '29-06-2023',
      endDate: '29-06-2023',
    },
    {
      id: 1,
      examCycle: 'M.SC.(Nursing) - Semester-2',
      courseName: 'M.SC.(Nursing)',
      startDate: '29-06-2024',
      endDate: '29-06-2024',
    }
  ]
  setTimeout(() => {
    this.isDataLoading = false;
  }, 2000);
  }

  initializeColumns(): void {
    this.examCycleTableColumns = [];
  
      this.examCycleTableColumns = [
        {
          columnDef: 'examCycle',
          header: 'Exam cycle',
          isSortable: true,
          isLink: false,
          cell: (element: Record<string, any>) => `${element['examCycle']}`
        },
        {
          columnDef: 'courseName',
          header: 'Course Name',
          isSortable: true,
          isLink: false,
          cell: (element: Record<string, any>) => `${element['courseName']}`
        },
        {
          columnDef: 'startDate',
          header: 'Start Date',
          isSortable: true,
          isLink: false,
          cell: (element: Record<string, any>) => `${element['startDate']}`
        },
        {
          columnDef: 'endDate',
          header: 'End Date',
          isSortable: true,
          isLink: true,
          cell: (element: Record<string, any>) => `${element['endDate']}`
        },
        {
          columnDef: 'isLink',
          header: '',
          isSortable: false,
          isLink: false,
          cell: (element: Record<string, any>) => `View`
        },
        {
          columnDef: 'isAction',
          header: '',
          isSortable: false,
          isLink: false,
          isAction: true,
          showDeleteIcon: false,
          cell: (element: Record<string, any>) => ``
        },
      ]
    }

  handlePageChange(event: any) {

  }

  onClickItem(event: any) {

  }

  onDeleteClick(event: any) {
    const dialogRef = this.dialog.open(ConformationDialogComponent, {
      data: {
        dialogType: 'confirmation',
        header: 'Want to delete?',
        description: ["Are you sure you want to delete the exam cycle? Once deleted you can't revert back the action"],
        buttons: [
          {
            btnText: 'Delete',
            positionClass: 'right',
            btnClass: 'btn-full',
            response: true
          },
          {
            btnText: 'Cancel',
            positionClass: 'right',
            btnClass: 'btn-outline mr2',
            response: false
          },
        ],
      },
      width: '700px',
      height: '300px',
      maxWidth: '90vw',
      maxHeight: '30vh'
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       this.router.navigateByUrl('/candidate-portal')
      }
    })
  }

  getSearchParams(event: any) {

  }

  openBulkUploadModal() {
      const heading = "Upload Exam cycle/List"
      const dialogRef = this.dialog.open(UploadFileComponent, {
      data: {
                heading: heading,     
                // labelOne: 'Select Dispatch Date',
                labelTwo:'Attach file(s)',
                // dateSelect: 'dateSelect',  
  
                // select: {
                //   selectCycleList: [
                //     {
                //       displayValue: 'Exam 1',
                //       value: 'Exam 1'
                //     },
                //     {
                //       displayValue: 'Exam 2',
                //       value: 'Exam 2'
                //     }
                //   ]
                // },
  
  
                description: [''],
                buttons: [
                  {
                    btnText: 'Browse',
                    positionClass: 'right ml2',
                    btnClass: 'btn-full',
                    showBtn: 1,
                    hideButton: false,
                    btnType: 'browse'
  
                  },
                  {
                    btnText: 'Upload',
                    positionClass: 'right ml2',
                    btnClass: 'btn-full',
                    btnType: 'submit',
                    hideButton: true,
                  },
                  {
                    btnText: 'Cancel',
                    positionClass: 'right',
                    btnClass: 'btn-outline',
                    hideButton: false,
                    btnType: 'close'
                  },
                  
                ],
              },
      })
      dialogRef.afterClosed().subscribe(result => {
          if (result) {
            const dialogRef = this.dialog.open(ConformationDialogComponent, {
              data: {
              },
              width: '40vh',
              height: '20vh',
              maxWidth: '90vw',
              maxHeight: '90vh'
            })
            dialogRef.afterClosed().subscribe(files => {
              if (files) {
               
              }
            })        
          }
      })
  }
}
