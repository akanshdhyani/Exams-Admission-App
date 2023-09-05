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
  selector: 'app-manage-exam-cycle-list',
  templateUrl: './manage-exam-cycle-list.component.html',
  styleUrls: ['./manage-exam-cycle-list.component.scss']
})
export class ManageExamCycleListComponent {
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
