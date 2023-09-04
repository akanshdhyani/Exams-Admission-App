import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cardList: any[] = [
    {
      title: 'Student enrollment',
      type: 'admin',
    },
    {
      title: 'Register student to Exam Cycles & Exams',
      type: 'admin',
    },

    {
      title: 'Fee Management',
      type: 'admin',
    },

    {
      title: 'Attendence Record',
      type: 'admin',
    },
    {
      title: 'Download Question Papers',
      type: 'users',
    },
    {
      title: 'Attendence Record',
      type: 'admin',
    },
    {
      title: 'Download Question Paper',
      type: 'admin',
    },
    {
      title: 'Update Dispatches',
      type: 'admin',
    },
    {
      title: 'Manage Result',
      type: 'admin',
    },
  ];

}
