import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-exam-cycle-view',
  templateUrl: './manage-exam-cycle-view.component.html',
  styleUrls: ['./manage-exam-cycle-view.component.scss']
})
export class ManageExamCycleViewComponent {

  constructor(private router: Router) {
    
  }

  onCancel() {
    this.router.navigateByUrl('/manage-exam-cycle')
  }

}
