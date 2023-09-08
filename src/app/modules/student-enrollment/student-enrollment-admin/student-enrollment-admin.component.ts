import { Component } from '@angular/core';

interface Institute {
  value: string;
  viewValue: string;
}
interface Course {
  value: string;
  viewValue: string;
}
interface Year {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-student-enrollment-admin',
  templateUrl: './student-enrollment-admin.component.html',
  styleUrls: ['./student-enrollment-admin.component.scss']
})
export class StudentEnrollmentAdminComponent {
  institutes: Institute[] = [
    {
      value:'abc institute',viewValue:"ABC , Institute"
    },
    {
      value:'xyz institute',viewValue:"XYZ , Institute"

    }
  ]
  courses: Course[] = [
    {value: 'bsc', viewValue: 'BSc'},
    {value: 'msc', viewValue: 'MSc'},
  ];
  years: Year[] = [
    {value: 'sem-1', viewValue: '2020'},
    {value: 'sem-2', viewValue: '2021'},
    {value: 'sem-3', viewValue: '2022'},
  ];
}
