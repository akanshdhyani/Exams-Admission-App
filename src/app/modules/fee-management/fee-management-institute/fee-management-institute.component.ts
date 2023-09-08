import { Component } from '@angular/core';

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
    },
    {
      title: 'Exam schedule 2',
      type: 'Last date of payment: dd/mm/yyyy',
    },

    {
      title: 'Exam schedule 3',
      type: 'Last date of payment: dd/mm/yyyy',
    }
  ];

}
