import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-portal',
  templateUrl: './candidate-portal.component.html',
  styleUrls: ['./candidate-portal.component.scss']
})
export class CandidatePortalComponent {
  cardList: any[] = [
    {
      title: 'Hall Ticket',
      lable: 'Generated on',
      date: '25 Mar 2023',
      status: 'Generated',
      navigateUrl: '/candidate-portal/view-hallticket',
    }, {
      title: 'Results',
      lable: 'Published on',
      date: '25 Mar 2023',
      status: 'Published',
      navigateUrl: '/candidate-portal/view-results',
    },
  ];

  examCycleList = [
    {
      examName: 'Exam Cucle 1',
      value: '1'
    },{
      examName: 'Exam Cucle 2',
      value: '2'
    },{
      examName: 'Exam Cucle 3',
      value: '3'
    },
  ]

  examCycle = new FormControl('');

  constructor(
    private router: Router
  ) {}

  navigateToView(navigateUrl: string) {
    this.router.navigateByUrl(navigateUrl)
  }
}
