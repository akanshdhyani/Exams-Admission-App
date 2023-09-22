import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FeeManagementService } from '../../fee-management/services/fee-management.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewProofModalAdminComponent } from '../view-proof-modal-admin/view-proof-modal-admin.component';

interface Course {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-manage-track-dispatches',
  templateUrl: './manage-track-dispatches.component.html',
  styleUrls: ['./manage-track-dispatches.component.scss']
})
export class ManageTrackDispatchesComponent {
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
      header: 'Exam',
      columnDef: 'exam',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['exam']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
      },
    },{
      header: 'Dispatch date',
      columnDef: 'dispatchDate',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['dispatchDate']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
      },
    },{
      header: 'Dispatch Status',
      columnDef: 'dispatchStatus',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['dispatchStatus']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '145px', 'color': '#00000099'
      },
    },
    
    {
      header: '',
      columnDef: 'viewProof',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['viewProof']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '145px', 'color': '#00000099'
      },
      isAction: true,
      showDeleteIcon: false,
    }
  ]

  instituteTableData = [
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Dispatched',
      viewProof: 'View proof',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Dispatched',
      viewProof: 'View proof',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Dispatched',
      viewProof: 'View proof',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Dispatched',
      viewProof: 'View proof',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Pending',
      viewProof: '-',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': 'Pending' ? '#0074B6' : '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Dispatched',
      viewProof: 'View proof',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Pending',
      viewProof: '-',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': 'Pending' ? '#0074B6' : '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Pending',
      viewProof: '-',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': 'Pending' ? '#0074B6' : '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Dispatched',
      viewProof: 'View proof',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Pending',
      viewProof: '-',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': 'Pending' ? '#0074B6' : '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Dispatched',
      viewProof: 'View proof',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Pending',
      viewProof: '-',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': 'Pending' ? '#0074B6' : '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Dispatched',
      viewProof: 'View proof',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Pending',
      viewProof: '-',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': 'Pending' ? '#0074B6' : '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Dispatched',
      viewProof: 'View proof',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Pending',
      viewProof: '-',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': 'Pending' ? '#0074B6' : '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Pending',
      viewProof: '-',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': 'Pending' ? '#0074B6' : '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Dispatched',
      viewProof: 'View proof',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Dispatched',
      viewProof: 'View proof',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': '#1D8923'
        }
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteId: '123',
      exam: 'Exam 1',
      dispatchDate: '29-06-2023',
      dispatchStatus: 'Dispatched',
      viewProof: 'View proof',
      hasStyle: true,
      cellStyle: {
        viewProof: {
          'color': '#0074B6'
        },
        dispatchStatus:{
          'color': '#1D8923'
        }
      }
    },
  ]

  viewProof(event: any) {
    const dialogRef = this.dialog.open(ViewProofModalAdminComponent, {
      data: {
        // controls: [
        //   {
        //     controlLable: 'Enter IP address',
        //     contolName: 'IPaddress',
        //     controlType: 'input',
        //     placeholder: 'Type here',
        //     value: '',
        //     validators: ['required'],
        //   },{
        //     controlLable: 'Enter remarks',
        //     contolName: 'remarks',
        //     controlType: 'textArea',
        //     placeholder: 'Type here',
        //     value: '',
        //     validators: []
        //   },
        // ],
        buttons: [
          {
            btnText: 'Cancel',
            positionClass: 'left',
            btnClass: 'btn-outline-gray',
            type: 'close'
          }
        ],
      },
      width: '700px',
      maxWidth: '90vw',
      maxHeight: '90vh'
    })

    dialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
      }
    })
  }

  
  examCycleControl = new FormControl('');
  examControl = new FormControl('');

  // searcControl = '';
  // searchKey = ''
  showInstitutesTable = true

  //#endregion
  breadcrumbItems = [
    { label: 'Manage Track Dispatches', url: '' },
  ]
  constructor(
    private feeManagementService: FeeManagementService,
    private dialog: MatDialog,
  ) {}

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

  // onSelecteInstitute(event: any) {
  //   if (event) {
  //     this.instituteTableData = []
  //     this.feeManagementService.getExamsOfInstitute('')
  //     .subscribe((exams: any) => {
  //       this.instituteTableData = exams
  //     })
  //   }
  //   this.showInstitutesTable = false

  // }

}
