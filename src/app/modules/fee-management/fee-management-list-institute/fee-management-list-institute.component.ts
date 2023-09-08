import { Component } from '@angular/core';

interface Course {
  value: string;
  viewValue: string;
}
interface Year {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-fee-management-list-institute',
  templateUrl: './fee-management-list-institute.component.html',
  styleUrls: ['./fee-management-list-institute.component.scss']
})
export class FeeManagementListInstituteComponent {
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
