import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FeeManagementService } from '../../fee-management/services/fee-management.service';

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

  // studentExamsTableHeader = [
  //   {
  //     header: 'Full name',
  //     columnDef: 'studentName',
  //     isSortable: true,
  //     cell: (element: Record<string, any>) => `${element['studentName']}`,
  //     cellStyle: {
  //       'background-color': '#0000000a',
  //       'color': '#00000099'
  //     },
  //   },{
  //     header: 'Enrolement Number',
  //     columnDef: 'enrolementNumber',
  //     cell: (element: Record<string, any>) => `${element['enrolementNumber']}`,
  //     cellStyle: {
  //       'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
  //     },
  //   },{
  //     header: 'Course name',
  //     columnDef: 'courseName',
  //     cell: (element: Record<string, any>) => `${element['courseName']}`,
  //     cellStyle: {
  //       'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
  //     },
  //   },{
  //     header: 'Exam',
  //     columnDef: 'exams',
  //     cell: (element: Record<string, any>) => `${element['exams']}`,
  //     cellStyle: {
  //       'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
  //     },
  //   },{
  //     header: 'No. of Exams',
  //     columnDef: 'numberOfExams',
  //     cell: (element: Record<string, any>) => `${element['numberOfExams']}`,
  //     cellStyle: {
  //       'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
  //     },
  //   },{
  //     header: 'Fee',
  //     columnDef: 'fee',
  //     cell: (element: Record<string, any>) => `${element['fee']}`,
  //     cellStyle: {
  //       'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
  //     },
  //   },{
  //     header: '',
  //     columnDef: 'status',
  //     cell: (element: Record<string, any>) => `${element['status']}`,
  //     cellStyle: {
  //       'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
  //     },
  //   },
  // ]

  // studentExamsTableData = [
  //   {
  //     studentName: '',
  //     enrolementNumber: 'XXXX',
  //     courseName: 'XXXX',
  //     exams: 'Exam ',
  //     numberOfExams: '',
  //     fee: '000',
  //     status: 'Paid',
  //     hasStyle: true,
  //     cellStyle: {
  //       status: {
  //         'color': '#1D8923'
  //       },
  //     }
  //   },
  //   {
  //     studentName: 'Madison Tran',
  //     enrolementNumber: 'XXXX',
  //     courseName: 'XXXX',
  //     exams: 'Exam 1,Exam 2,Exam 3 ',
  //     numberOfExams: '3',
  //     fee: '3000',
  //     status: 'Paid',
  //     hasStyle: true,
  //     cellStyle: {
  //       status: {
  //         'color': '#1D8923'
  //       },
  //     }
  //   },
  //   {
  //     studentName: 'Raci Verma',
  //     enrolementNumber: 'XXXX',
  //     courseName: 'XXXX',
  //     exams: 'Exam 2',
  //     numberOfExams: '1',
  //     fee: '1000',
  //     status: 'Paid',
  //     hasStyle: true,
  //     cellStyle: {
  //       status: {
  //         'color': '#1D8923'
  //       },
  //     }
  //   },
  //   {
  //     studentName: 'Sumalatha Krishna',
  //     enrolementNumber: 'XXXX',
  //     courseName: 'XXXX',
  //     exams: 'Exam 3',
  //     numberOfExams: '1',
  //     fee: '1000',
  //     status: 'Paid',
  //     hasStyle: true,
  //     cellStyle: {
  //       status: {
  //         'color': '#1D8923'
  //       },
  //     }
  //   },
  //   {
  //     studentName: 'Kanaka Rao',
  //     enrolementNumber: 'XXXX',
  //     courseName: 'XXXX',
  //     exams: 'Exam 1,Exam 2',
  //     numberOfExams: '2',
  //     fee: '2000',
  //     status: 'Paid',
  //     hasStyle: true,
  //     cellStyle: {
  //       status: {
  //         'color': '#1D8923'
  //       },
  //     }
  //   },
  //   {
  //     studentName: 'Ravi Verma',
  //     enrolementNumber: 'XXXX',
  //     courseName: 'XXXX',
  //     exams: 'Exam 2',
  //     numberOfExams: '1',
  //     fee: '1000',
  //     status: 'Paid',
  //     hasStyle: true,
  //     cellStyle: {
  //       status: {
  //         'color': '#1D8923'
  //       },
  //     }
  //   },
  // ];
  
  examCycleControl = new FormControl('');
  examControl = new FormControl('');

  // searcControl = '';
  // searchKey = ''
  showInstitutesTable = true

  //#endregion

  constructor(
    private feeManagementService: FeeManagementService
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

}
