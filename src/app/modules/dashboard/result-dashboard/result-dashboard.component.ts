import { Component } from '@angular/core';
import { HallTicket, Institute, Course, Year, TableColumn } from '../../../interfaces/interfaces';

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
  isDataLoading: false;

  ngOnInit(): void {

    this.initializeTableColumns();
    this.initializePageData();

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

    this.marksData = [
      {
        examName: 'Anatomy',
        totalMarks: 100,
        passingMarks: 40,
        totalAttempts: 96,
        failedAttempts: 12,
        passedAttempts: 84,
        passPercentage: 88,
        maximumMarks: 96,
        minimumMarks: 16,
        avgMarks: 62,
        standardDeviation: 15,

      },
      {
        examName: 'Physiology',
        totalMarks: 100,
        passingMarks: 40,
        totalAttempts: 96,
        failedAttempts: 12,
        passedAttempts: 84,
        passPercentage: 88,
        maximumMarks: 96,
        minimumMarks: 16,
        avgMarks: 62,
        standardDeviation: 15,
      },
      {
        examName: 'Biochemistry',
        totalMarks: 100,
        passingMarks: 40,
        totalAttempts: 96,
        failedAttempts: 12,
        passedAttempts: 84,
        passPercentage: 88,
        maximumMarks: 96,
        minimumMarks: 16,
        avgMarks: 62,
        standardDeviation: 15,
      },
      {
        examName: 'Pathology',
        totalMarks: 100,
        passingMarks: 40,
        totalAttempts: 96,
        failedAttempts: 12,
        passedAttempts: 84,
        passPercentage: 88,
        maximumMarks: 96,
        minimumMarks: 16,
        avgMarks: 62,
        standardDeviation: 15,
      },
      {
        examName: 'Microbiology',
        totalMarks: 100,
        passingMarks: 40,
        totalAttempts: 96,
        failedAttempts: 12,
        passedAttempts: 84,
        passPercentage: 88,
        maximumMarks: 96,
        minimumMarks: 16,
        avgMarks: 62,
        standardDeviation: 15,
      },
      {
        examName: 'Aggregate',
        totalMarks: 'NA',
        passingMarks: 'NA',
        totalAttempts: 480,
        failedAttempts: 60,
        passedAttempts: 420,
        passPercentage: 88,
        maximumMarks: 96,
        minimumMarks: 16,
        avgMarks: 62,
        standardDeviation: 15,
      },
    ]
  }
}
