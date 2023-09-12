import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TableColumn, attendanceTableData } from 'src/app/interfaces/interfaces';



interface Course {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-attendance-record-list',
  templateUrl: './attendance-record-list.component.html',
  styleUrls: ['./attendance-record-list.component.scss']
})
export class AttendanceRecordListComponent {
  constructor(private router: Router){}

  courses: Course[] = [
    {value: 'bsc', viewValue: 'BSc'},
    {value: 'msc', viewValue: 'MSc'},
  ];

  grievances: attendanceTableData[] = [];
  grievancesTableColumns: TableColumn[] = [];
  isDataLoading : boolean = false;
  userRole: string;
  tabs: any[] = [];
  selectedTab:any=null;
  responseLength: number;
  // breadcrumbItems: BreadcrumbItem[] = [
  //   { label: 'Grievance Management', url: '/home' },
  //   { label: 'Grievance List', url: 'grievance/manage-tickets' },
  // ];

  goToUpload() {
    this.router.navigate(['manage-attendance/upload'])
  }
}
