import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FeeManagementService } from '../services/fee-management.service';


interface Course {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-fee-management-admin',
  templateUrl: './fee-management-admin.component.html',
  styleUrls: ['./fee-management-admin.component.scss']
})
export class FeeManagementAdminComponent implements OnInit {
  //#region (global variables)
  courses: Course[] = [
    {value: 'bsc', viewValue: 'BSc'},
    {value: 'msc', viewValue: 'MSc'},
  ];

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
      header: 'Course name',
      columnDef: 'courseName',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['courseName']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
      },
    },{
      header: 'Institute code',
      columnDef: 'instituteCode',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['instituteCode']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
      },
    },{
      header: 'Students register',
      columnDef: 'registerStudentsCount',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['registerStudentsCount']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
      },
    },{
      header: 'Students paid',
      columnDef: 'paidStudentsCount',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['paidStudentsCount']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '145px', 'color': '#00000099'
      },
    },{
      header: 'Total fee paid',
      columnDef: 'totalFeePaid',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['totalFeePaid']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '145px', 'color': '#00000099'
      },
    },{
      header: '',
      columnDef: 'viewList',
      cell: (element: Record<string, any>) => `${element['viewList']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
      },
      isAction: true,
      showDeleteIcon: false,
    },
  ]

  instituteTableData = [
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '28',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '50',
      paidStudentsCount: '40',
      totalFeePaid: '40000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '20',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '28',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '50',
      paidStudentsCount: '40',
      totalFeePaid: '40000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '20',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '28',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '50',
      paidStudentsCount: '40',
      totalFeePaid: '40000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '20',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '28',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '50',
      paidStudentsCount: '40',
      totalFeePaid: '40000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '20',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '28',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '50',
      paidStudentsCount: '40',
      totalFeePaid: '40000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '20',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '28',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '50',
      paidStudentsCount: '40',
      totalFeePaid: '40000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '20',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '28',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '50',
      paidStudentsCount: '40',
      totalFeePaid: '40000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '20',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '28',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '50',
      paidStudentsCount: '40',
      totalFeePaid: '40000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '20',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '28',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '50',
      paidStudentsCount: '40',
      totalFeePaid: '40000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '20',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '28',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '50',
      paidStudentsCount: '40',
      totalFeePaid: '40000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '30',
      paidStudentsCount: '20',
      totalFeePaid: '28000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '25',
      paidStudentsCount: '25',
      totalFeePaid: '25000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
      }
    },
    {
      instituteName: 'NEW COLLEGE OF NURSING',
      courseName: 'xxxx',
      instituteCode: 'xxxx',
      registerStudentsCount: '10',
      paidStudentsCount: '10',
      totalFeePaid: '10000',
      viewList: 'View list',
      hasStyle: true,
      cellStyle: {
        viewList: {
          'color': '#0074B6'
        },
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
      header: 'Enrolement Number',
      columnDef: 'enrolementNumber',
      cell: (element: Record<string, any>) => `${element['enrolementNumber']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
      },
    },{
      header: 'Course name',
      columnDef: 'courseName',
      cell: (element: Record<string, any>) => `${element['courseName']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
      },
    },{
      header: 'Exam',
      columnDef: 'exams',
      cell: (element: Record<string, any>) => `${element['exams']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
      },
    },{
      header: 'No. of Exams',
      columnDef: 'numberOfExams',
      cell: (element: Record<string, any>) => `${element['numberOfExams']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
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
        'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
      },
    },
  ]

  studentExamsTableData = [
    {
      studentName: '',
      enrolementNumber: 'XXXX',
      courseName: 'XXXX',
      exams: 'Exam ',
      numberOfExams: '',
      fee: '000',
      status: 'Paid',
      hasStyle: true,
      cellStyle: {
        status: {
          'color': '#1D8923'
        },
      }
    },
    {
      studentName: 'Madison Tran',
      enrolementNumber: 'XXXX',
      courseName: 'XXXX',
      exams: 'Exam 1,Exam 2,Exam 3 ',
      numberOfExams: '3',
      fee: '3000',
      status: 'Paid',
      hasStyle: true,
      cellStyle: {
        status: {
          'color': '#1D8923'
        },
      }
    },
    {
      studentName: 'Raci Verma',
      enrolementNumber: 'XXXX',
      courseName: 'XXXX',
      exams: 'Exam 2',
      numberOfExams: '1',
      fee: '1000',
      status: 'Paid',
      hasStyle: true,
      cellStyle: {
        status: {
          'color': '#1D8923'
        },
      }
    },
    {
      studentName: 'Sumalatha Krishna',
      enrolementNumber: 'XXXX',
      courseName: 'XXXX',
      exams: 'Exam 3',
      numberOfExams: '1',
      fee: '1000',
      status: 'Paid',
      hasStyle: true,
      cellStyle: {
        status: {
          'color': '#1D8923'
        },
      }
    },
    {
      studentName: 'Kanaka Rao',
      enrolementNumber: 'XXXX',
      courseName: 'XXXX',
      exams: 'Exam 1,Exam 2',
      numberOfExams: '2',
      fee: '2000',
      status: 'Paid',
      hasStyle: true,
      cellStyle: {
        status: {
          'color': '#1D8923'
        },
      }
    },
    {
      studentName: 'Ravi Verma',
      enrolementNumber: 'XXXX',
      courseName: 'XXXX',
      exams: 'Exam 2',
      numberOfExams: '1',
      fee: '1000',
      status: 'Paid',
      hasStyle: true,
      cellStyle: {
        status: {
          'color': '#1D8923'
        },
      }
    },
  ];
  
  examCycleControl = new FormControl('');
  searcControl = '';
  searchKey = ''
  showInstitutesTable = true

  //#endregion
  breadcrumbItems = [
    { label: 'Exam Management', url: '/home' },
    { label: 'Fee Management', url: '' },
  ]
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

  search() {
    this.searchKey = this.searcControl
    this.showInstitutesTable = true
  }

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
