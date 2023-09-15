import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoadingDialogComponent } from '../loading-dialog/loading-dialog.component';
import { FeeManagementService } from '../services/fee-management.service';

interface Course {
  value: string;
  viewValue: string;
}
interface Year {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-fee-management-list-institute',
  templateUrl: './fee-management-list-institute.component.html',
  styleUrls: ['./fee-management-list-institute.component.scss']
})
export class FeeManagementListInstituteComponent implements OnInit {

  courses: Course[] = [
    {value: 'bsc', viewValue: 'BSc'},
    {value: 'msc', viewValue: 'MSc'},
  ];
  years: Year[] = [
    {value: 'sem-1', viewValue: '2020'},
    {value: 'sem-2', viewValue: '2021'},
    {value: 'sem-3', viewValue: '2022'},
  ];

  isHallTicket = true;
  removeTbodyColor = true;

  // allFeeTableHeader = [
  //   {
  //     header: '',
  //     columnDef: 'select',
  //     isSortable: false,
  //     isCheckBox: true,
  //     cell: (element: Record<string, any>) => ``,
  //     cellStyle: {
  //       'background-color': '#0000000a', 'width': '30px', 'color': '#00000099'
  //     },
  //   }, {
  //     header: 'Full name',
  //     columnDef: 'studentName',
  //     isSortable: true,
  //     cell: (element: Record<string, any>) => `${element['studentName']}`,
  //     cellStyle: {
  //       'background-color': '#0000000a',
  //       'color': '#00000099'
  //     },
  //   },{
  //     header: 'Exam',
  //     columnDef: 'examName',
  //     cell: (element: Record<string, any>) => `${element['examName']}`,
  //     cellStyle: {
  //       'background-color': '#0000000a', 'width': '300px', 'color': '#00000099'
  //     },
  //   },{
  //     header: 'No. of Exams',
  //     columnDef: 'noOfExams',
  //     cell: (element: Record<string, any>) => `${element['noOfExams']}`,
  //     cellStyle: {
  //       'background-color': '#0000000a', 'width': '135px', 'color': '#00000099'
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
  //       'background-color': '#0000000a', 'width': '130px', 'color': '#00000099'
  //     },
  //   }
  // ]

  // allFeeTableData = [
  //   {
  //     studentName: 'Nancy Kurian',
  //     examName: 'Exam 1',
  //     noOfExams: '1',
  //     fee: '1000',
  //     status: 'Pending',
  //     hasStyle: true,
  //     cellStyle: {
  //         status: {
  //         'color': 'rgb(0, 116, 182)'
  //       },
  //     }
  //   },{
  //     studentName: 'Sumalatha Krishna',
  //     examName: 'Exam 3',
  //     noOfExams: '1',
  //     fee: '1000',
  //     status: 'Paid',
  //     hasStyle: true,
  //     cellStyle: {
  //         status: {
  //         'color': 'rgb(29, 137, 35)'
  //       },
  //     }
  //   },{
  //     studentName: 'Purandara Das',
  //     examName: 'Exam 1, Exam 2',
  //     noOfExams: '2',
  //     fee: '2000',
  //     status: 'Pending',
  //     hasStyle: true,
  //     cellStyle: {
  //         status: {
  //         'color': 'rgb(0, 116, 182)'
  //       },
  //     }
  //   },
  // ]

  pendingFeeTableHeader = [
    {
      header: '',
      columnDef: 'select',
      isSortable: false,
      isCheckBox: true,
      cell: (element: Record<string, any>) => ``,
      cellStyle: {
        'background-color': '#0000000a', 'width': '30px', 'color': '#00000099'
      },
    }, {
      header: 'Full name',
      columnDef: 'studentName',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['studentName']}`,
      cellStyle: {
        'background-color': '#0000000a',
        'color': '#00000099'
      },
    },{
      header: 'Exam',
      columnDef: 'examName',
      cell: (element: Record<string, any>) => `${element['examName']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '300px', 'color': '#00000099'
      },
    },{
      header: 'No. of Exams',
      columnDef: 'noOfExams',
      cell: (element: Record<string, any>) => `${element['noOfExams']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '135px', 'color': '#00000099'
      },
    },{
      header: 'Fee',
      columnDef: 'fee',
      cell: (element: Record<string, any>) => `${element['fee']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
      },
    },{
      header: '',
      columnDef: 'status',
      cell: (element: Record<string, any>) => `${element['status']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '130px', 'color': '#00000099'
      },
    }
  ]

  pendingFeeTableData= [
    {
      studentName: 'Nancy Kurian',
      examName: 'Exam 1',
      noOfExams: '1',
      fee: '1000',
      status: 'Pending',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': 'rgb(0, 116, 182)'
        },
      }
    },{
      studentName: 'Jordan Allen',
      examName: 'Exam 1, Exam 2',
      noOfExams: '2',
      fee: '2000',
      status: 'Pending',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': 'rgb(0, 116, 182)'
        },
      }
    },{
      studentName: 'Purandara Das',
      examName: 'Exam 1, Exam 2',
      noOfExams: '2',
      fee: '2000',
      status: 'Pending',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': 'rgb(0, 116, 182)'
        },
      }
    },
  ]

  paidFeeTableHeader = [
    {
      header: 'Full name',
      columnDef: 'studentName',
      cell: (element: Record<string, any>) => `${element['studentName']}`,
      cellStyle: {
        'background-color': '#0000000a',
        'color': '#00000099'
      }
    },{
      header: 'Exam',
      columnDef: 'examName',
      cell: (element: Record<string, any>) => `${element['examName']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '300px', 'color': '#00000099'
      }
    },{
      header: 'No. of Exams',
      columnDef: 'noOfExams',
      cell: (element: Record<string, any>) => `${element['noOfExams']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '135px', 'color': '#00000099'
      }
    },{
      header: 'Fee',
      columnDef: 'fee',
      cell: (element: Record<string, any>) => `${element['fee']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
      }
    },{
      header: '',
      columnDef: 'status',
      cell: (element: Record<string, any>) => `${element['status']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '130px', 'color': '#00000099'
      }
    },
  ]

  paidFeeTableData= [
    {
      studentName: 'Devaprathap Nagendra',
      examName: 'Exam 1, Exam 2',
      noOfExams: '2',
      fee: '2000',
      status: 'Paid',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': 'rgb(29, 137, 35)'
        },
      }
    },{
      studentName: 'Madison Tran',
      examName: 'Exam 1, Exam 2, Exam 3',
      noOfExams: '3',
      fee: '3000',
      status: 'Paid',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': 'rgb(29, 137, 35)'
        },
      }
    },{
      studentName: 'Ravi Verma',
      examName: 'Exam 2',
      noOfExams: '1',
      fee: '1000',
      status: 'Paid',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': 'rgb(29, 137, 35)'
        },
      }
    },{
      studentName: 'Sumalatha Krishna',
      examName: 'Exam 3',
      noOfExams: '1',
      fee: '1000',
      status: 'Paid',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': 'rgb(29, 137, 35)'
        },
      }
    },{
      studentName: 'Kanaka Rao',
      examName: 'Exam 1, Exam 2',
      noOfExams: '2',
      fee: '2000',
      status: 'Paid',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': 'rgb(29, 137, 35)'
        },
      }
    },
  ]

  filterForm: FormGroup
  tabHeader = 'Pending'

  payingExams:any = []
  totalAmountToPay: string;

  constructor(
    private dialog: MatDialog,
    private feeManagementService: FeeManagementService
  ) {
    this.filterForm = new FormGroup({
      search: new FormControl(''),
      selectedStudent: new FormControl(),
      amount: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.getExamFeeDetails()
  }

  getExamFeeDetails() {
    this.feeManagementService.getExamFeeDetails('')
    // .subscribe((result: any) => {
    //   this.pendingFeeTableData = result.filter((exam: any) => {})
    //   this.paidFeeTableData = result.filter((exam: any) => {})
    // })
  }

  selectTab(event: any) {
    this.tabHeader = event.tab.textLabel
  }

  payFee() {
    const postData = {
      endpoint: "https://eazypayuat.icicibank.com/EazyPG",
      returnUrl: "https://payment.uphrh.in/api/v1/user/payment",
      paymode: "9",
      secret: "",
      merchantId: "600547",
      mandatoryFields: {
        referenceNo: '', //generate random number (this.baseService.generate_uuidv4())
        submerchantId: "45",
        transactionAmount: this.totalAmountToPay,
        invoiceId: "x1",
        invoiceDate: "x",
        invoiceTime: "x",
        merchantId: "x",
        payerType: "registration", //module you create
        payerId: 'instituteId',
        transactionId: "x",
        transactionDate: "x",
        transactionTime: "x",
        transactionStatus: "x",
        refundId: "x",
        refundDate: "x",
        refundTime: "x",
        refundStatus: "x",
      },
      optionalFields: "registration", //module you create
    };
    // this.feeManagementService.getPaymentUrl(postData)
    // .subscribe((result: any) => {
    //   window.open(result.url, "_blank");
    // })

    // const dialogRef = this.dialog.open(LoadingDialogComponent, {
    //   data: {
    //     description: 'Please wait a while. you are redirecting to payment page'
    //   },
    //   width: '800px',
    //   height: '500px',
    //   maxWidth: '90vw',
    //   maxHeight: '90vh'
    // })
  }

  onSelectedRows(event: any) {
    this.payingExams.push(event)
    this.calculateAmount();
  }

  calculateAmount() {
    let amount = 0
    this.totalAmountToPay = amount.toString()
  }
}
