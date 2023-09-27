import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BaseService } from 'src/app/service/base.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TableColumn } from 'src/app/interfaces/interfaces';


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
  isDataLoading: boolean = false;
  instituteData: any[] =[];
  studentData:any[] = [];
  searcControl = '';
  searchKey = '';
  showInstitutesTable = true;
  instituteTableHeader: TableColumn[] = [];
  studentExamsTableHeader: TableColumn[] = [];

  breadcrumbItems = [
    { label: 'Fee Management', url: '' },
  ]
  
  //#endregion

  examCycleControl = new FormControl('',[Validators.required]);

  constructor(
    private baseService : BaseService
  ) {this.instituteTableData()}

  ngOnInit(): void {
    this.intialisation()
  }

  intialisation() {
    // this.getExamCycles()
    // this.getInstitutesData()
    this.initializeColumns();
    this.instituteTableData();
    this.initializeStudentColumns();
    this.studentExamsTableData();
  }

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

  initializeColumns():void{
    this.instituteTableHeader = [];
   this.instituteTableHeader = [
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
}
  instituteTableData() {
    this.isDataLoading = true;
    this.baseService.getInstituteFeeTableData$().subscribe({
      next:(res:any)=>{
        this.instituteData = res
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

 initializeStudentColumns():void{
  this.studentExamsTableHeader = [];
  this.studentExamsTableHeader = [
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
 }
  studentExamsTableData(){
    this.isDataLoading = true;
    this.baseService.getStudentFeeTableData$().subscribe({
      next:(res:any)=>{
        this.studentData = res
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
  
 
  

  getExamCycles() {
    // this.feeManagementService.getExamCycles()
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
