import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  loggedInUserRole = 'exams_admin';
  constructor(private router: Router){}
  cardList: any[] = [
    {
      title: 'Student Enrollment',
      type: 'student-enrollment-admin',
      url: '/student-enrollment/admin',
      visibility: 'exams_admin'
    },
    {
      title: 'Student Enrollment',
      type: 'student-enrollment-institute',
      url: '/student-enrollment/institute',
      visibility: 'exams_institute'
    },
    {
      title: 'Student Registration',
      type: 'student-registration',
      url: '/student-registration',
      visibility: 'exams_student',
    },
    {
      title: 'Manage Exam Cycles & Exams',
      type: 'manageCycle',
      url: '/manage-exam-cycle',
      visibility: 'exams_admin',
    },

    {
      title: 'Fee Management',
      type: 'feeManagementAdmin',
      url: '/fee-management/admin',
      visibility: 'exams_admin'
    },
    {
      title: 'Fee Management',
      type: 'feeManagementInstitute',
      url: '/fee-management/institute',
      visibility: 'exams_institute'
    },
    {
      title: 'Update CCTV Verification Status',
      type: 'cctvVerification',
      url: '/cctv-management',
      visibility: 'exams_admin'
    },
    {
      title: 'Manage Hall Tickets',
      type: 'hallTickets',
      url: '/hall-ticket-management',
      visibility: 'exams_admin'
    },
    {
      title: 'Manage Question Papers',
      type: 'manageQp',
      url: '',
      visibility: '' // has to be added for both admin and institute
    },
    {
      title: 'Track Dispatches',
      type: 'trackDispatches',
      url: '/dispatches/track',
      visibility: 'exams_admin'
    },
    {
      title: 'Update Dispatches',
      type: 'updateDispatches',
      url: '/dispatches/update',
      visibility: 'exams_institute'
    },
    {
      title: 'Manage Result',
      type: 'manageResult',
      url: '/manage-result',
      visibility: '' // has to be added for both admin and institute
    },
  ];

  navigateTo(item: any) {
    this.router.navigate([item.url]);
  }
}
