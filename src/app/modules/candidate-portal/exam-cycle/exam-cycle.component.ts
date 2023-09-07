import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-cycle',
  templateUrl: './exam-cycle.component.html',
  styleUrls: ['./exam-cycle.component.scss']
})
export class ExamCycleComponent {

  @Input() hallTicketDetails: any;
  @Input() examTableHeader: any;
  @Input() examTableData: any;
  @Input() isHallTicket: any;

  constructor(
    private router: Router
  ) {}

  cancel() {
    this.router.navigateByUrl('/candidate-portal')
  }

}
