import { Component } from '@angular/core';


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
  courses: Course[] = [
    {value: 'bsc', viewValue: 'BSc'},
    {value: 'msc', viewValue: 'MSc'},
  ];
}
