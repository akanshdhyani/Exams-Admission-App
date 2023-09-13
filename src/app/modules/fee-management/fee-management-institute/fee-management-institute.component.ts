import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fee-management-institute',
  templateUrl: './fee-management-institute.component.html',
  styleUrls: ['./fee-management-institute.component.scss']
})
export class FeeManagementInstituteComponent {
  cardList: any[] = [
    {
      title: 'Exam schedule 1',
      type: 'Last date of payment: dd/mm/yyyy',
      examId: 1,
    },
    {
      title: 'Exam schedule 2',
      type: 'Last date of payment: dd/mm/yyyy',
      examId: 2,
    },

    {
      title: 'Exam schedule 3',
      type: 'Last date of payment: dd/mm/yyyy',
      examId: 3,
    }
  ];

  constructor(
    private router: Router,
  ) {}

  reDirectToFeemanagement(examId: any) {
    if (examId) {
      this.router.navigateByUrl('/fee-management/manage-fee');
    }
  }

}
