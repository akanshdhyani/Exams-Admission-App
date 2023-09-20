import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CctvVerificationService } from '../services/cctv-verification.service';
import { Router, Routes } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CctvApprovalPopupComponent } from '../dialogs/cctv-approval-popup/cctv-approval-popup.component';
interface Course {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-cctv-management-admin',
  templateUrl: './cctv-management-admin.component.html',
  styleUrls: ['./cctv-management-admin.component.scss']
})
export class CctvManagementAdminComponent {

  //#region (global variables)
  examCycleControl = new FormControl(''); 
  examCycleList = [
    {
      examName: 'Exam Cucle 1',
      value: '1'
    },{
      examName: 'Exam Cucle 2',
      value: '2'
    },{
      examName: 'Exam Cucle 3',
      value: '3'
    },
  ]
  instituteesCCTVpendingTableHeaders = [
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
      header: 'Institute Code',
      columnDef: 'instituteCode',
      cell: (element: Record<string, any>) => `${element['instituteCode']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '200px', 'color': '#00000099'
      },
    },{
      header: 'District name',
      columnDef: 'districtName',
      cell: (element: Record<string, any>) => `${element['districtName']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '165px', 'color': '#00000099'
      },
    },{
      header: '',
      columnDef: 'status',
      cell: (element: Record<string, any>) => `${element['status']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '200px', 'color': '#00000099'
      },
    }
  ]
  instituteesCCTVpendingTableData = [
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteCode: '123',
      districtName: 'Agra',
      status: 'Approve / Reject',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteCode: 'xxxxx',
      districtName: 'Agra',
      status: 'Approve / Reject',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteCode: 'xxxxx',
      districtName: 'Agra',
      status: 'Approve / Reject',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteCode: 'xxxxx',
      districtName: 'Lucknow',
      status: 'Approve / Reject',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'TEST PARAMEDICAL INSTITUTE',
      instituteCode: 'xxxxx',
      districtName: 'Lucknow',
      status: 'Approve / Reject',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': '#0074B6'
        },
      }
    },
  ];

  instituteesCCTVverifiedTableHeaders = [
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
      header: 'Institute Code',
      columnDef: 'instituteCode',
      cell: (element: Record<string, any>) => `${element['instituteCode']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '200px', 'color': '#00000099'
      },
    },{
      header: 'District name',
      columnDef: 'districtName',
      cell: (element: Record<string, any>) => `${element['districtName']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '200px', 'color': '#00000099'
      },
    },{
      header: 'IP address',
      columnDef: 'IPaddress',
      cell: (element: Record<string, any>) => `${element['IPaddress']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '200px', 'color': '#00000099'
      },
    },{
      header: '',
      columnDef: 'status',
      cell: (element: Record<string, any>) => `${element['status']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
      },
    }
  ]
  instituteesCCTVverifiedTableData = [
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteCode: '123',
      districtName: 'Agra',
      IPaddress: '1.10.10.255',
      status: 'Reject',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': '#0074B6'
        },
      }
    },{
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteCode: '123',
      districtName: 'Agra',
      IPaddress: '1.10.10.255',
      status: 'Reject',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': '#0074B6'
        },
      }
    },{
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteCode: '123',
      districtName: 'Agra',
      IPaddress: '1.10.10.255',
      status: 'Reject',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': '#0074B6'
        },
      }
    },{
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteCode: '123',
      districtName: 'Agra',
      IPaddress: '1.10.10.255',
      status: 'Reject',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': '#0074B6'
        },
      }
    },{
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteCode: '123',
      districtName: 'Agra',
      IPaddress: '1.10.10.255',
      status: 'Reject',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': '#0074B6'
        },
      }
    },{
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteCode: '123',
      districtName: 'Agra',
      IPaddress: '1.10.10.255',
      status: 'Reject',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': '#0074B6'
        },
      }
    },
  ];

  instituteesCCTVrejectedTableHeaders = [
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
      header: 'Institute Code',
      columnDef: 'instituteCode',
      cell: (element: Record<string, any>) => `${element['instituteCode']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '200px', 'color': '#00000099'
      },
    },{
      header: 'District name',
      columnDef: 'districtName',
      cell: (element: Record<string, any>) => `${element['districtName']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '200px', 'color': '#00000099'
      },
    },{
      header: 'IP address',
      columnDef: 'IPaddress',
      cell: (element: Record<string, any>) => `${element['IPaddress']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '200px', 'color': '#00000099'
      },
    },{
      header: '',
      columnDef: 'status',
      cell: (element: Record<string, any>) => `${element['status']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '215px', 'color': '#00000099'
      },
    }
  ]
  instituteesCCTVrejectedTableData = [
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteCode: '123',
      districtName: 'Agra',
      IPaddress: '1.10.10.255',
      status: 'Enter altenate Institute',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': '#0074B6'
        },
      }
    },{
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteCode: '123',
      districtName: 'Agra',
      IPaddress: '1.10.10.255',
      status: 'Enter altenate Institute',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': '#0074B6'
        },
      }
    },{
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteCode: '123',
      districtName: 'Agra',
      IPaddress: '1.10.10.255',
      status: 'Enter altenate Institute',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': '#0074B6'
        },
      }
    },{
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteCode: '123',
      districtName: 'Agra',
      IPaddress: '1.10.10.255',
      status: 'Enter altenate Institute',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': '#0074B6'
        },
      }
    },{
      instituteName: 'NEW COLLEGE OF NURSING',
      instituteCode: '123',
      districtName: 'Agra',
      IPaddress: '1.10.10.255',
      status: 'Enter altenate Institute',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': '#0074B6'
        },
      }
    },
  ];

  searcControl = '';
  //#endregion

  constructor(
    private cctvVerificationService: CctvVerificationService,
    private router: Router,
    private dialog: MatDialog,
  ){
  }

  ngOnInit() {
    this.intialisation()
  }

  intialisation() {
    this.getExamCycles()
    this.getInstituteesCCTVtableData()
  }

  getExamCycles() {
    this.cctvVerificationService.getExamCycles()
    // .subscribe((examCucles: any) => {
    //   this.examCycleList = examCucles
    // })
  }

  getInstituteesCCTVtableData(searchKey: string = '') {
    // this.cctvVerificationService.getInstitutesCCTVdetails()
    // .subscribe((InstituteesCCTVtableData: any) => {
    //   this.instituteesCCTVData = InstituteesCCTVtableData
    // })
  }

  getTablesData(InstituteesCCTVtableData: any) {
    this.instituteesCCTVpendingTableData = InstituteesCCTVtableData.filter()
    this.instituteesCCTVverifiedTableData = InstituteesCCTVtableData.filter()
    this.instituteesCCTVrejectedTableData = InstituteesCCTVtableData.filter()
  }

  cancel() {
    this.router.navigateByUrl('')
  }

  approveOrReject(event: any) {
    const dialogRef = this.dialog.open(CctvApprovalPopupComponent, {
      data: {
        controls: [
          {
            controlLable: 'Enter IP address',
            controlName: 'IPaddress',
            controlType: 'input',
            placeholder: 'Type here',
            value: '',
            validators: ['required'],
          },{
            controlLable: 'Enter remarks',
            controlName: 'remarks',
            controlType: 'textArea',
            placeholder: 'Type here',
            value: '',
            validators: []
          },
        ],
        buttons: [
          {
            btnText: 'Cancel',
            positionClass: 'left',
            btnClass: 'btn-outline-gray',
            type: 'close'
          },
          {
            btnText: 'Approve',
            positionClass: 'right',
            btnClass: 'btn-full',
            type: 'submit'
          },
          {
            btnText: 'Reject',
            positionClass: 'right',
            btnClass: 'btn-outline mr2',
            type: 'submit'
          },
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

  rejectCCTV(event: any) {
    const dialogRef = this.dialog.open(CctvApprovalPopupComponent, {
      data: {
        controls: [
          {
            controlLable: 'Enter IP address',
            controlName: 'IPaddress',
            controlType: 'input',
            placeholder: 'Type here',
            value: '',
            validators: ['required'],
          },{
            controlLable: 'Enter remarks',
            controlName: 'remarks',
            controlType: 'textArea',
            placeholder: 'Type here',
            value: '',
            validators: []
          },
        ],
        buttons: [
          {
            btnText: 'Cancel',
            positionClass: 'left',
            btnClass: 'btn-outline',
            type: 'close'
          },
          {
            btnText: 'Reject',
            positionClass: 'right',
            btnClass: 'btn-full',
            type: 'submit'
          },
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

  assignAlternateInstitute(event: any) {
    let nearestInstitutesList = [
      {
        displayName: 'ABC Nursing College',
        id: '1'
      },{
        displayName: 'Agra Paramedical Collgege',
        id: '2'
      },{
        displayName: 'Agra Nursing College',
        id: '3'
      },{
        displayName: 'XYZ Agra',
        id: '4'
      },
    ]
    const dialogRef = this.dialog.open(CctvApprovalPopupComponent, {
      data: {
        controls: [
          {
            controlLable: 'Institute District',
            controlName: 'instituteDistrict',
            controlType: 'input',
            placeholder: 'Type here',
            value: 'Agra',
            validators: ['required'],
            readonly: true
          },{
            controlLable: 'Near Institute List',
            controlName: 'institute',
            controlType: 'select',
            optionsList: nearestInstitutesList,
            value: null,
            placeholder: 'Select the Institute',
            validators: ['required'],
          },
        ],
        buttons: [
          {
            btnText: 'Cancel',
            positionClass: 'left',
            btnClass: 'btn-outline',
            type: 'close'
          },
          {
            btnText: 'Assign',
            positionClass: 'right',
            btnClass: 'btn-full',
            type: 'submit'
          },
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
}

