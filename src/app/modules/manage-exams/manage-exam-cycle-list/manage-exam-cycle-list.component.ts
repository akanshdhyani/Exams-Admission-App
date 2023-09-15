import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TableColumn } from 'src/app/interfaces/interfaces';
import { Tabs } from 'src/app/shared/config/tabs.config';


interface Course {
  value: string;
  viewValue: string;
}
interface Year {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-manage-exam-cycle-list',
  templateUrl: './manage-exam-cycle-list.component.html',
  styleUrls: ['./manage-exam-cycle-list.component.scss']
})
export class ManageExamCycleListComponent {
  tabs: any[] = [];
  isDataLoading: boolean = false;
  examCycleData: any[] = [];
  examCycleTableColumns: TableColumn[] = [];
  pageIndex = 0;
  pageSize = 10;
  length = 10;
  constructor(private router: Router){}
  courses: Course[] = [
    {value: 'bsc', viewValue: 'BSc'},
    {value: 'msc', viewValue: 'MSc'},
  ];
  years: Year[] = [
    {value: 'sem-1', viewValue: '2020'},
    {value: 'sem-2', viewValue: '2021'},
    {value: 'sem-3', viewValue: '2022'},
  ];

  ngOnInit() {
   this.initializeTabs();
  }

  goToCreate() {
    this.router.navigate(['manage-exam-cycle/form'])
  }

  initializeTabs() {
    this.tabs = Tabs['student_enrollment'];
    this.initializeColumns();
    this.getEnrollmentData();
  }

  getEnrollmentData() {
    this.isDataLoading = true;
    this.examCycleData = [{
      id: 0,
      examCycle: 'M.SC.(Nursing) - Semester-1',
      courseName: 'M.SC.(Nursing)',
      startDate: '29-06-2023',
      endDate: '29-06-2023',
    },
    {
      id: 1,
      examCycle: 'M.SC.(Nursing) - Semester-2',
      courseName: 'M.SC.(Nursing)',
      startDate: '29-06-2024',
      endDate: '29-06-2024',
    }
  ]
  setTimeout(() => {
    this.isDataLoading = false;
  }, 2000);
  }

  initializeColumns(): void {
    this.examCycleTableColumns = [];
  
      this.examCycleTableColumns = [
        {
          columnDef: 'examCycle',
          header: 'Exam cycle',
          isSortable: true,
          isLink: false,
          cell: (element: Record<string, any>) => `${element['examCycle']}`
        },
        {
          columnDef: 'courseName',
          header: 'Course Name',
          isSortable: true,
          isLink: false,
          cell: (element: Record<string, any>) => `${element['courseName']}`
        },
        {
          columnDef: 'startDate',
          header: 'Start Date',
          isSortable: true,
          isLink: false,
          cell: (element: Record<string, any>) => `${element['startDate']}`
        },
        {
          columnDef: 'endDate',
          header: 'End Date',
          isSortable: true,
          isLink: true,
          cell: (element: Record<string, any>) => `${element['endDate']}`
        },
        {
          columnDef: 'isLink',
          header: '',
          isSortable: false,
          isLink: false,
          cell: (element: Record<string, any>) => `View`
        },
      ]
    }

  handlePageChange(event: any) {

  }

  onClickItem(event: any) {

  }

  getSearchParams(event: any) {

  }
}
