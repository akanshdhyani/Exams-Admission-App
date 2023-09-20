import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatePortalService } from '../services/candidate-portal.service';
import { MatDialog } from '@angular/material/dialog';
import { ConformationDialogComponent } from 'src/app/shared/components/conformation-dialog/conformation-dialog.component';
import { AuthServiceService } from 'src/app/core/services';

@Component({
  selector: 'app-exam-cycle',
  templateUrl: './exam-cycle.component.html',
  styleUrls: ['./exam-cycle.component.scss']
})
export class ExamCycleComponent {
  loggedInUserRole: string;

  @Input() hallTicketDetails: any;
  @Input() examTableHeader: any;
  @Input() examTableData: any;
  @Input() isHallTicket: any;

  constructor(
    private router: Router,
    private candidatePortalService: CandidatePortalService,
    private dialog: MatDialog,
    private authService: AuthServiceService
  ) {
    this.loggedInUserRole = this.authService.getUserRoles()[0];
  }

  downloadHallTicket() {
    this.candidatePortalService.downloadHallTicket('')
    // .subscribe((data: any) => {
      const dialogRef = this.dialog.open(ConformationDialogComponent, {
        data: {
          dialogType: 'success',
          description: ['Hall ticket downloaded successfully'],
          buttons: [
            {
              btnText: 'Ok',
              positionClass: 'center',
              btnClass: 'btn-full',
              response: true
            },
          ],
        },
        width: '700px',
        height: '400px',
        maxWidth: '90vw',
        maxHeight: '90vh'
      })
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
         this.router.navigateByUrl('/candidate-portal')
        }
      })
    // })
  }

  cancel() {
    this.router.navigateByUrl('/candidate-portal')
  }

  onApprove() {
    console.log("Approve details");
  }

  onReject() {
    console.log("Reject details");
  }


}
