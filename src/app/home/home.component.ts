import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cardList: any[] = [
    {
      title: 'Student Enrollment',
      type: 'admin',
    },
    {
      title: 'Manage Exam Cycles & Exams',
      type: 'admin',
    },

    {
      title: 'Fee Management',
      type: 'admin',
    },

    {
      title: 'Update CCTV Verification Status',
      type: 'admin',
    },
    {
      title: 'Manage Hall Tickets',
      type: 'users',
    },
    // {
    //   title: 'Attendence Record',
    //   type: 'admin',
    // },
    {
      title: 'Manage Question Papers',
      type: 'admin',
    },
    {
      title: 'Track Dispatches',
      type: 'admin',
    },
    {
      title: 'Manage Result',
      type: 'admin',
    },
  ];

}
