import { Component } from '@angular/core';

interface Course {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-manage-question-papers',
  templateUrl: './manage-question-papers.component.html',
  styleUrls: ['./manage-question-papers.component.scss']
})
export class ManageQuestionPapersComponent {
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
      "Maximum_marks": "100"
    },
    {
       "Name" : 'B.Sc.(NURSING)-SEMESTER 2',
      "Course_name" : 'xxxx xxxx',
      "Start_date" : "29-06-2023",
      "End_date" : "31-07-2023",
      "Maximum_marks": "100"
    },

    {
      "Name": 'M.Sc.(NURSING)-SEMESTER 1',
      "Course_name" : 'xxxx xxxx',
      "Start_date" : "29-06-2023",
      "End_date" : "31-07-2023",
      // max marks is for
      "Maximum_marks": "100"
    }
  ];

}
