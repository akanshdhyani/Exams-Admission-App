import { Component } from '@angular/core';


interface Course {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-fee-management-admin',
  templateUrl: './fee-management-admin.component.html',
  styleUrls: ['./fee-management-admin.component.scss']
})
export class FeeManagementAdminComponent {
  courses: Course[] = [
    {value: 'bsc', viewValue: 'BSc'},
    {value: 'msc', viewValue: 'MSc'},
  ];
}
