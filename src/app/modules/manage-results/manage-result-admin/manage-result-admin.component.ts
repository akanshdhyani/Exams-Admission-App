import { Component } from '@angular/core';
import { FeeManagementService } from '../../fee-management/services/fee-management.service';
import { FormControl } from '@angular/forms';
import { UploadDialogComponent } from 'src/app/shared/components/upload-dialog/upload-dialog.component';
import { ConformationDialogComponent } from 'src/app/shared/components/conformation-dialog/conformation-dialog.component';
import { MatDialog } from '@angular/material/dialog';


interface Course {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-manage-result-admin',
  templateUrl: './manage-result-admin.component.html',
  styleUrls: ['./manage-result-admin.component.scss']
})
export class ManageResultAdminComponent {
  selectedCellDetails: any;
  courses: Course[] = [
    {value: 'bsc', viewValue: 'BSc'},
    {value: 'msc', viewValue: 'MSc'},
  ];
  examCycleList = [
    {
      examName: 'Exam Cycle 1',
      value: '1'
    },{
      examName: 'Exam Cycle 2',
      value: '2'
    },{
      examName: 'Exam Cycle 3',
      value: '3'
    },
  ]

  instituteTableHeader = [
    {
      header: 'Institute name',
      columnDef: 'instituteName',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['instituteName']}`,
      cellStyle: {
        'background-color': '#0000000a',
        'color': '#00000099'
      },
    },{
      header: 'Institute ID',
      columnDef: 'instituteId',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['instituteId']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
      },
    },{
      header: 'Course',
      columnDef: 'course',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['course']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
      },
    },{
      header: 'Internal marks',
      columnDef: 'internalMarks',
      isSortable: false,
      cell: (element: Record<string, any>) => `${element['internalMarks']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
      },
      isAction: true,
    },{
      header: 'Final marks',
      columnDef: 'finalMarks',
      isSortable: false,
      cell: (element: Record<string, any>) => `${element['finalMarks']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '145px', 'color': '#00000099'
      },
      isAction: true,
    },
    {
      header: 'Revised final marks',
      columnDef: 'revisedFinalMarks',
      isSortable: false,
      cell: (element: Record<string, any>) => `${element['revisedFinalMarks']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '145px', 'color': '#00000099'
      },
      isAction: true,
    },    
    {
      header: '',
      columnDef: 'publish',
      isSortable: false,
      cell: (element: Record<string, any>) => `${element['publish']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '145px', 'color': '#00000099'
      },
      isAction: true,
    }
  ]  
  instituteTableData = [
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      course: 'xxxx',
      internalMarks: 'Pending',
      finalMarks: '-',
      revisedFinalMarks: '-',
      publish:'-',
      hasStyle: true,
      cellStyle: {
        publish: {
          'color': '#0074B6'
        },
        internalMarks :{
          'color' : '#E99E38' 
        },
        finalMarks:{
          'color': '#1D8923'
        },
        
        revisedFinalMarks :{
          'color' : '#E99E38'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      course: 'xxxx',
      internalMarks: 'View & download',
      finalMarks: 'Upload',
      revisedFinalMarks: '-',
      publish:'-',
      hasStyle: true,
      cellStyle: {
        publish: {
          'color': '#0074B6'
        },
        internalMarks :{
          'color' : '#1D8923' 
        },
        finalMarks:{
          'color': '#0074B6'
        },
        
        revisedFinalMarks :{
          'color' : '#E99E38'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      course: 'xxxx',
      internalMarks: 'View & download',
      finalMarks: 'View & delete',
      revisedFinalMarks: 'Upload',
      publish:'Publish',
      hasStyle: true,
      cellStyle: {
        publish: {
          'color': '#0074B6'
        },
        internalMarks :{
          'color' : '#1D8923' 
        },
        finalMarks:{
          'color': '#1D8923'
        },
        
        revisedFinalMarks :{
          'color' : '#0074B6'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      course: 'xxxx',
      internalMarks: 'View & download',
      finalMarks: 'View & delete',
      revisedFinalMarks: 'Upload',
      publish:'Publish',
      hasStyle: true,
      cellStyle: {
        publish: {
          'color': '#0074B6'
        },
        internalMarks :{
          'color' : '#1D8923' 
        },
        finalMarks:{
          'color': '#1D8923'
        },
        
        revisedFinalMarks :{
          'color' : '#0074B6'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      course: 'xxxx',
      internalMarks: 'View & download',
      finalMarks: 'View & delete',
      revisedFinalMarks: 'Upload',
      publish:'Publish',
      hasStyle: true,
      cellStyle: {
        publish: {
          'color': '#0074B6'
        },
        internalMarks :{
          'color' : '#1D8923' 
        },
        finalMarks:{
          'color': '#1D8923'
        },
        
        revisedFinalMarks :{
          'color' : '#0074B6'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      course: 'xxxx',
      internalMarks: 'View & download',
      finalMarks: 'View & delete',
      revisedFinalMarks: 'Upload',
      publish:'Publish',
      hasStyle: true,
      cellStyle: {
        publish: {
          'color': '#0074B6'
        },
        internalMarks :{
          'color' : '#1D8923' 
        },
        finalMarks:{
          'color': '#1D8923'
        },
        
        revisedFinalMarks :{
          'color' : '#0074B6'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      course: 'xxxx',
      internalMarks: 'View & download',
      finalMarks: 'View & delete',
      revisedFinalMarks: 'Upload',
      publish:'Publish',
      hasStyle: true,
      cellStyle: {
        publish: {
          'color': '#0074B6'
        },
        internalMarks :{
          'color' : '#1D8923' 
        },
        finalMarks:{
          'color': '#1D8923'
        },
        
        revisedFinalMarks :{
          'color' : '#0074B6'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      course: 'xxxx',
      internalMarks: 'View & download',
      finalMarks: 'View & delete',
      revisedFinalMarks: 'Upload',
      publish:'Publish',
      hasStyle: true,
      cellStyle: {
        publish: {
          'color': '#0074B6'
        },
        internalMarks :{
          'color' : '#1D8923' 
        },
        finalMarks:{
          'color': '#1D8923'
        },
        
        revisedFinalMarks :{
          'color' : '#0074B6'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      course: 'xxxx',
      internalMarks: 'Pending',
      finalMarks: '-',
      revisedFinalMarks: '-',
      publish:'-',
      hasStyle: true,
      cellStyle: {
        publish: {
          'color': '#0074B6'
        },
        internalMarks :{
          'color' : '#E99E38' 
        },
        finalMarks:{
          'color': '#1D8923'
        },
        
        revisedFinalMarks :{
          'color' : '#E99E38'
        }
      }
    },
  ]

  studentExamsTableHeader = [
    {
      header: 'Full name',
      columnDef: 'studentName',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['studentName']}`,
      cellStyle: {
        'background-color': '#0000000a',
        'color': '#00000099'
      },
    },{
      header: 'Course name',
      columnDef: 'courseName',
      cell: (element: Record<string, any>) => `${element['courseName']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '120px', 'color': '#00000099'
      },
    },{
      header: 'Exam',
      columnDef: 'exams',
      cell: (element: Record<string, any>) => `${element['exams']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '120px', 'color': '#00000099'
      },
    },{
      header: 'Internal marks',
      columnDef: 'internalMarks',
      cell: (element: Record<string, any>) => `${element['internalMarks']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '120px', 'color': '#00000099'
      },
    }
  ]

  studentExamsTableData = [
    {
      studentName: 'Devaprathap Nagendra',
      courseName: 'XXXX',
      exams: 'Exam 1',
      internalMarks: '45',
      
    },
    {
      studentName: 'Madison',
      courseName: 'XXXX',
      exams: 'Exam 1',
      internalMarks: '48',
      
    },
    {
      studentName: 'Ravi',
      courseName: 'XXXX',
      exams: 'Exam 1',
      internalMarks: '47',
      
    },
    {
      studentName: 'Kanaka Rao',
      courseName: 'XXXX',
      exams: 'Exam 1',
      internalMarks: '49',
      
    },
    {
      studentName: 'Arun',
      courseName: 'XXXX',
      exams: 'Exam 1',
      internalMarks: '49',
      
    },
    {
      studentName: 'Aman',
      courseName: 'XXXX',
      exams: 'Exam 1',
      internalMarks: '45',
      
    },
    {
      studentName: 'Devaprathap N.',
      courseName: 'XXXX',
      exams: 'Exam 1',
      internalMarks: '44',
      
    },

  ];
  
  examCycleControl = new FormControl('');
  examControl = new FormControl('');

  // searcControl = '';
  // searchKey = ''
  showInstitutesTable = true

  //#endregion

  constructor(
    private feeManagementService: FeeManagementService,
    private dialog: MatDialog,
  ) {
   
  }

  ngOnInit(): void {
    this.intialisation()
  }

  intialisation() {
    this.getExamCycles()
    this.getInstitutesData()
  }

  getExamCycles() {
    this.feeManagementService.getExamCycles()
    // .subscribe((examCucles: any) => {
    //   this.examCycleList = examCucles
    // })
  }

  getInstitutesData(searchKey: string = '') {
    // this.feeManagementService.getInstitutesData(searchKey)
    // .subscribe((InstitutesData: any) => {
    //   this.instituteTableData = InstitutesData
    // })
  }

  getExamsOfInstitute(instituteId: string) {
    // .subscribe((examsFeeDetails: any) => {
    //   this.studentExamsTableData = examsFeeDetails
    // })
  }

  // search() {
  //   this.searchKey = this.searcControl
  //   this.showInstitutesTable = true
  // }

  onSelecteInstitute(event: any) {
    if (event) {
      // this.instituteTableData = []
      // this.feeManagementService.getExamsOfInstitute('')
      // .subscribe((exams: any) => {
      //   this.instituteTableData = exams
      // })
    }
    this.showInstitutesTable = false

  }

  onCellClick(event: any) {
    console.log("Cell Data", event);
    switch(event.columnDef) {
      case "internalMarks":
        this.internalMarksHandler(event);
        break;
      case "finalMarks": 
        this.finalMarksHandler(event);
        break;
      case "revisedFinalMarks": 
        this.revisedFinalMarksHandler(event);
        break;
      case "publish":
        this.publishHandler(event);
        break;

    }
  }


  internalMarksHandler(cellDetails: any) {
    if(cellDetails.row.internalMarks === 'View & download'){
      this.showInstitutesTable = false;
      this.selectedCellDetails  = cellDetails;
    }
  }

  finalMarksHandler(cellDetails:any) {
    if(cellDetails.row.finalMarks === 'View & delete'){
      this.showInstitutesTable = false;
      this.selectedCellDetails  = cellDetails;
    } else if(cellDetails.row.finalMarks === 'Upload') {
      this.openUploadModal(cellDetails);
    }

  }

  revisedFinalMarksHandler(cellDetails:any) {
    if(cellDetails.row.revisedFinalMarks === 'Upload') {
      this.openUploadModal(cellDetails);
    }
  }

  openUploadModal(cellDetails: any){
    const heading= cellDetails.columnDef === "finalMarks" ? "Upoad final marks" : "Upload revised marks";
    const dialogRef = this.dialog.open(UploadDialogComponent, {
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


              description: ['Hall ticket downloaded successfully'],
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
              dialogType: 'success',
              description: ['Markes uploaded successfully'],
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
             
            }
          })        
        }
    })
  }

  publishHandler(cellDetails: any) {
    if(cellDetails.row.publish === 'Publish') {
      this.openPublishConfirmation(cellDetails);;
    }
  }

  openPublishConfirmation(cellDetails: any) {
    const dialogRef = this.dialog.open(ConformationDialogComponent, {
      data: {
        dialogType: 'confirmation',
        header: 'Publish marks ?',
        description: [`Are you sure you want to publish marks of ${cellDetails.row.instituteName} `],
        buttons: [
          {
            btnText: 'Publish',
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
        console.log("Confirmation result", result);
      }
    })
  }

  deleteMarksHander() {

  }

  downloadMarksHandler() {

  }


}
