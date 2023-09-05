import { Component } from '@angular/core';

interface HallTicket {
  value: string;
  viewValue: string;
}

interface Institute {
  value: string;
  viewValue: string;
}
interface Course {
  value: string;
  viewValue: string;
}
interface Year {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-manage-hall-tickets-admin-list',
  templateUrl: './manage-hall-tickets-admin-list.component.html',
  styleUrls: ['./manage-hall-tickets-admin-list.component.scss']
})
export class ManageHallTicketsAdminListComponent {

  halltickets: HallTicket[] = [
    {
      value:'new hall ticket',viewValue:"New Hall Tikcet"
    },
    {
      value:'modification hall ticket',viewValue:"Modification Hall Ticket"

    }
  ]
  institutes: Institute[] = [
    {
      value:'abc institute',viewValue:"ABC , Institute"
    },
    {
      value:'xyz institute',viewValue:"XYZ , Institute"

    }
  ]
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
