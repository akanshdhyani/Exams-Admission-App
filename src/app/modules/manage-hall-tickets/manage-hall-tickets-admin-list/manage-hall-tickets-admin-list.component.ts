import { Component, ViewChild } from '@angular/core';
import { HallTicket, Institute, Course, Year, TableColumn } from '../../../interfaces/interfaces';
import { BaseService } from '../../../service/base.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { mergeMap, of } from 'rxjs';
@Component({
  selector: 'app-manage-hall-tickets-admin-list',
  templateUrl: './manage-hall-tickets-admin-list.component.html',
  styleUrls: ['./manage-hall-tickets-admin-list.component.scss']
})
export class ManageHallTicketsAdminListComponent {
  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;

  isDataLoading: boolean = false;

  halltickets: any;
  institutes: Institute[];
  courses: Course[];
  years: Year[];
  hallTicketsData: HallTicket[];
  //generatedHallTickets: HallTicket[];
  pendingHallTicketsTableColumns: TableColumn[] = [];
  generatedHallTicketsTableColumns: TableColumn[] = [];

  filters = ["Attendance > 75", "Attendance < 75"]
  breadcrumbItems = [
    { label: 'Manage Hall Tickets', url: '' },
  ]
  constructor(
    private baseService: BaseService,
    private router: Router,
  ) {

  }
  ngOnInit(): void {

    this.initializeTableColumns();
    this.initializePageData();
    this.getHallTickets();
    //this.getGeneratedHallTickets();
  }


  hallTicketControl = new FormControl('',[Validators.required]);
  courseControl = new FormControl('',[Validators.required]);
  examCycleControl = new FormControl('',[Validators.required]);
  instituteControl = new FormControl('',[Validators.required]);
  
  initializeTableColumns(): void {

    this.pendingHallTicketsTableColumns = [
      {
        columnDef: 'select',
        header: '',
        isSortable: false,
        isCheckBox: true,
        cell: (element: Record<string, any>) => ``,
        cellStyle: {
          'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
        },
      },
      {
        columnDef: 'studentName',
        header: 'Student Name',
        isSortable: true,
        cell: (element: Record<string, any>) => `${element['studentName']}`,
        cellStyle: {
          'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
        },
      },
      {
        columnDef: 'courseName',
        header: 'Course Name',
        isSortable: true,
        cell: (element: Record<string, any>) => `${element['courseName']}`,
        cellStyle: {
          'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
        },
        /*   cell: (element: Record<string, any>) => {
            const timestamp = element['createdAt'];
            const date = new Date(timestamp);
            const month = this.monthNames[date.getMonth()];
            const day = date.getDate();
            const year = date.getFullYear();
            return `${month} ${day}, ${year}`;
          } */
      },
      {
        columnDef: 'rollNo',
        header: 'Roll Number',
        isSortable: true,
        cell: (element: Record<string, any>) => `${element['rollNo']}`,
        cellStyle: {
          'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
        },

      },
      {
        columnDef: 'attendancePercentage',
        header: 'Attendance(%)',
        isSortable: false,
        isLink: true,
        cell: (element: Record<string, any>) => `${element['attendancePercentage']}`,
        cellStyle: {
          'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
        },
      },
      {
        columnDef: 'paymentStatus',
        header: '',
        isSortable: false,
        isLink: true,
        cell: (element: Record<string, any>) => `Paid`,
        cellStyle: {
          'background-color': '#0000000a', 'width': '145px', 'color': '#00000099'
        },
      },
      {
        columnDef: 'viewHallTicket',
        header: '',
        isSortable: false,
        isLink: true,
        isAction: true,
        cell: (element: Record<string, any>) => `View`,
        cellStyle: {
            'background-color': '#0000000a', 'width': '145px', 'color': '#0074B6'
          },
          
        
      }

    ];

    this.generatedHallTicketsTableColumns = [
      {
        columnDef: 'studentName',
        header: 'Student Name',
        isSortable: true,
        cell: (element: Record<string, any>) => `${element['studentName']}`,
        cellStyle: {
          'background-color': '#0000000a', 'width': '180px', 'color': '#00000099'
        },
      },
      {
        columnDef: 'courseName',
        header: 'Course Name',
        isSortable: true,
        cell: (element: Record<string, any>) => `${element['courseName']}`,
        cellStyle: {
          'background-color': '#0000000a', 'width': '200px', 'color': '#00000099'
        },
        /*   cell: (element: Record<string, any>) => {
            const timestamp = element['createdAt'];
            const date = new Date(timestamp);
            const month = this.monthNames[date.getMonth()];
            const day = date.getDate();
            const year = date.getFullYear();
            return `${month} ${day}, ${year}`;
          } */
      },
      {
        columnDef: 'rollNo',
        header: 'Roll Number',
        isSortable: true,
        cell: (element: Record<string, any>) => `${element['rollNo']}`,
        cellStyle: {
          'background-color': '#0000000a', 'width': '200px', 'color': '#00000099'
        },

      },
      {
        columnDef: 'attendancePercentage',
        header: 'Attendance(%)',
        isSortable: false,
        isLink: true,
        cell: (element: Record<string, any>) => `${element['attendancePercentage']}`,
        cellStyle: {
          'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
        },
      },
      {
        columnDef: 'viewHallTicket',
        header: '',
        isSortable: false,
        isLink: true,
        isAction: true,
        cell: (element: Record<string, any>) => `View`,
        cellStyle: {
          'background-color': '#0000000a', 'width': '180px', 'color': '#00000099'
        },
      }

    ];

  }

  getHallTickets() {
    this.isDataLoading = true;
    this.baseService.getHallTickets$()
    .pipe((mergeMap((response: any) => {
      return this.formateHallTicketsData(response)
    })))
    .subscribe({
      next: (res: any) => {
        console.log(res)
        this.hallTicketsData = res.hallTicketsDetailsList
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

  formateHallTicketsData(response: any) {
    const formatedHallTicketsDetails: {
      hallTicketsDetailsList: any[]
    } = {
      hallTicketsDetailsList: []
    }

    if(response) {
      response.forEach((hallTicketsDetails: any) => {
        const formatedHallTicketDetails = {
          id: hallTicketsDetails.id,
          studentName: hallTicketsDetails.studentName,
          courseName: hallTicketsDetails.courseName,
          rollNo: hallTicketsDetails.rollNo,
          attendancePercentage: hallTicketsDetails.attendancePercentage,
          hasStyle: true,
          cellStyle: {
            viewHallTicket: {
              'color': '#0074B6'
            }
          }
        }

        formatedHallTicketsDetails.hallTicketsDetailsList.push(formatedHallTicketDetails)
      })
    }
    return of(formatedHallTicketsDetails);
  }

  initializePageData() {
    this.halltickets = [
      {
        value: 'new_hall_ticket', viewValue: "New Hall Tikcet"
      },
      {
        value: 'modification_hall_ticket', viewValue: "Modification Hall Ticket"

      }
    ]
    this.institutes = [
      {
        value: 'abc institute', viewValue: "ABC , Institute"
      },
      {
        value: 'xyz institute', viewValue: "XYZ , Institute"

      }
    ]
    this.courses = [
      { value: 'bsc', viewValue: 'BSc' },
      { value: 'msc', viewValue: 'MSc' },
    ];
    this.years = [
      { value: 'sem-1', viewValue: '2020' },
      { value: 'sem-2', viewValue: '2021' },
      { value: 'sem-3', viewValue: '2022' },
    ];
  }

  onSelectedRows(value: any) {
    console.log(value)
  }

  generateHallTkt() {
    this.isDataLoading = true;

    this.baseService.generateHallTkt$().subscribe({
      next: (res: any) => {
        setTimeout(() => {
          this.isDataLoading = false;
        }, 1000);
        this.tabGroup.selectedIndex = 1;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
      }
    })

  }

  onAttendanceFilterClick(e: any) {
    console.log(e)
  }

  onViewClick(event: any)  {
    console.log(event);
    this.router.navigateByUrl('/hall-ticket-management/ticket-details')
  }
}
