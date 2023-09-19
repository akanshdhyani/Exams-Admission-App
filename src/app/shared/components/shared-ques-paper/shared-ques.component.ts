import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionPaper } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';
import { FormControl,  Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/core/services';

@Component({
  selector: 'app-shared-ques-paper',
  templateUrl: './shared-ques.component.html',
  styleUrls: ['./shared-ques.component.scss']
})
export class SharedQuestionPaperComponent {
  examCycle: string;
  constructor(
    private authService: AuthServiceService
  ) { }

  @Input() examCycleList : string[] ;
  @Input() examCycleControl: FormControl;
  @Input() questionPapersList : QuestionPaper[];

  @Output() viewRegdStdnts: EventEmitter<any> = new EventEmitter<any>();//view regd students
  @Output() addNewStdnts: EventEmitter<any> = new EventEmitter<any>();//add new students
  @Output() uploadQuesPaper: EventEmitter<any> = new EventEmitter<any>();//upload ques paper
  loggedInUserRole: string;
  ngOnInit(): void {
    this.loggedInUserRole = this.authService.getUserRoles()[0];
    console.log( this.loggedInUserRole )
    // this.examCycleControl = new FormControl('', [Validators.required]);
  }

  examCycleSelected(e: any) {
    console.log(e.value)
    this.examCycle = e.value;
  }


  emitViewRegdStdnts(questionPaper: QuestionPaper) {
    if (this.examCycleControl.valid) {
      this.viewRegdStdnts.emit(questionPaper);
     // this.router.navigate(['student-registration/view-regd-students'], { state: { examId: exam.examId, examCycle: this.examCycle, examName: exam.examName } });
    }

  }

  emitRegNewStdnts(questionPaper: QuestionPaper) {
    if (this.examCycleControl.valid) {
      this.addNewStdnts.emit(questionPaper);
   // this.router.navigate(['student-registration/add-new-students-regn'], { state: { examId: exam.examId, examCycle: this.examCycle, examName: exam.examName } });
    }
  }

  emitUploadQuesPaper(questionPaper: QuestionPaper) {
    if (this.examCycleControl.valid) {
      this.uploadQuesPaper.emit(questionPaper);
    }
  }

}
