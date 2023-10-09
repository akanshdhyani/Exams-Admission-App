import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatePortalService } from '../services/candidate-portal.service';
import { MatDialog } from '@angular/material/dialog';
import { ConformationDialogComponent } from 'src/app/shared/components/conformation-dialog/conformation-dialog.component';
import { AuthServiceService } from 'src/app/core/services';
import { BaseService } from '../../../service/base.service';

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
    private authService: AuthServiceService,
    private baseService: BaseService,
    private route: ActivatedRoute
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

  getTicketID(){
    let id = parseFloat(this?.route?.snapshot?.paramMap?.get('id') || '0'); 
    this.baseService.approveHallTicket$(id).subscribe({
      next: (res: any) => {
      },
      error: (error: any) => {
        alert(error.message)
      }
    })
  }

  onApprove() {
    console.log("Approve details");
    this.getTicketID();
  
  }

  onReject() {
    console.log("Reject details");
/*     this.baseService.rejectHallTicket$().subscribe({
      next: (res: any) => {
        setTimeout(() => {
          this.isDataLoading = false;
        }, 1000);
        this.tabGroup.selectedIndex = 1;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
      }
    }) */
  }


}
