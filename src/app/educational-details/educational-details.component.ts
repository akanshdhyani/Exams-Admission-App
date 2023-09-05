import { Component } from '@angular/core';


interface Course {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.scss']
})
export class EducationalDetailsComponent {
  courses: Course[] = [
    {value: 'bsc', viewValue: 'BSc'},
    {value: 'msc', viewValue: 'MSc'},
  ];
  cardList: any[] = [
    {
      "Name": 'M.Sc.(NURSING)-SEMESTER 1',
      "Course_name" : 'xxxx xxxx',
      "Start_date" : "29-06-2023",
      "End_date" : "31-07-2023",
    },
    {
       "Name" : 'B.Sc.(NURSING)-SEMESTER 2',
      "Course_name" : 'xxxx xxxx',
      "Start_date" : "29-06-2023",
      "End_date" : "31-07-2023",
    },

    {
      "Name": 'M.Sc.(NURSING)-SEMESTER 1',
      "Course_name" : 'xxxx xxxx',
      "Start_date" : "29-06-2023",
      "End_date" : "31-07-2023",
    }
  ];

}
