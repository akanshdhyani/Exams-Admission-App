import { Component } from '@angular/core';
import { HallTicket, Institute, Course, Year, TableColumn } from '../../../interfaces/interfaces';
import { BaseService } from 'src/app/service/base.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-result-dashboard',
  templateUrl: './result-dashboard.component.html',
  styleUrls: ['./result-dashboard.component.scss']
})
export class ResultDashboardComponent {
  breadcrumbItems = [
    { label: 'Result Dashboard', url: '' },
  ];
  institutes: Institute[];
  years: Year[];
  marksTableColumns: TableColumn[] = [];
  marksData: any[];
  isDataLoading: boolean = false;


  constructor(
    private baseService : BaseService){
      this.getMarksData()
    }

  ngOnInit(): void {

    this.initializeTableColumns();
    this.initializePageData();
    this.getMarksData();

  }


  initializeTableColumns(): void {

    this.marksTableColumns = [
      {
        columnDef: 'examName',
        header: 'Exam',
        isSortable: false,
        cell: (element: Record<string, any>) => `${element['examName']}`,
        cellStyle: {
          'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
        },
      },
      {
        columnDef: 'totalMarks',
        header: 'Total Marks',
        isSortable: false,
        cell: (element: Record<string, any>) => `${element['totalMarks']}`,
        cellStyle: {
          'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
        },
      },
      {
        columnDef: 'passingMarks',
        header: 'Passing Marks',
        isSortable: false,
        cell: (element: Record<string, any>) => `${element['passingMarks']}`,
        cellStyle: {
          'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
        },

      },
      {
        columnDef: 'totalAttempts',
        header: 'Total Attempts',
        isSortable: false,
        cell: (element: Record<string, any>) => `${element['totalAttempts']}`,
        cellStyle: {
          'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
        },
      },
      {
        columnDef: 'failedAttempts',
        header: 'Failed Attempts',
        isSortable: false,
        cell: (element: Record<string, any>) => `${element['failedAttempts']}`,
        cellStyle: {
          'background-color': '#0000000a', 'width': '145px', 'color': '#00000099'
        },
      },
      {
        columnDef: 'passedAttempts',
        header: 'Passed Attempts',
        isSortable: false,
        cell: (element: Record<string, any>) => `${element['passedAttempts']}`,
        cellStyle: {
            'background-color': '#0000000a', 'width': '145px', 'color': '#00000099'
          },
      },
      {
        columnDef: 'passPercentage',
        header: 'Pass %age',
        isSortable: false,
        cell: (element: Record<string, any>) => `${element['passPercentage']}`,
        cellStyle: {
            'background-color': '#0000000a', 'width': '145px', 'color': '#00000099'
          },
      },
      {
        columnDef: 'maximumMarks',
        header: 'Maximum Marks',
        isSortable: false,
        cell: (element: Record<string, any>) => `${element['maximumMarks']}`,
        cellStyle: {
            'background-color': '#0000000a', 'width': '145px', 'color': '#00000099'
          },
      },
      {
        columnDef: 'minimumMarks',
        header: 'Minimum Marks',
        isSortable: false,
        cell: (element: Record<string, any>) => `${element['minimumMarks']}`,
        cellStyle: {
            'background-color': '#0000000a', 'width': '145px', 'color': '#00000099'
          },
      },
      {
        columnDef: 'avgMarks',
        header: 'Average Marks',
        isSortable: false,
        cell: (element: Record<string, any>) => `${element['avgMarks']}`,
        cellStyle: {
            'background-color': '#0000000a', 'width': '145px', 'color': '#00000099'
          },
      },
      {
        columnDef: 'standardDeviation',
        header: 'Standard Deviation',
        isSortable: false,
        cell: (element: Record<string, any>) => `${element['standardDeviation']}`,
        cellStyle: {
            'background-color': '#0000000a', 'width': '145px', 'color': '#00000099'
          },
      }

    ];

  }


  initializePageData() {
    this.institutes = [
      {
        value: 'abc institute', viewValue: "ABC , Institute"
      },
      {
        value: 'xyz institute', viewValue: "XYZ , Institute"

      }
    ];

    this.years = [
      { value: 'sem-1', viewValue: '2020' },
      { value: 'sem-2', viewValue: '2021' },
      { value: 'sem-3', viewValue: '2022' },
    ];

  }
  getMarksData() {
    this.isDataLoading = true;
    this.baseService.getMarksForDashboard$().subscribe({
      next:(res:any)=>{
        this.marksData = res
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

}
