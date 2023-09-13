import { Component } from '@angular/core';
import { QuestionPaper } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';
import { FormControl,  Validators } from '@angular/forms';

@Component({
  selector: 'app-register-students',
  templateUrl: './register-students.component.html',
  styleUrls: ['./register-students.component.scss']
})
export class RegisterStudentsComponent {
  examCycle: string;
  constructor(
    private router: Router,
  ) { }

  examCycleList: string[] = ['examCycle1', 'examCycle2', 'examCycle3'];
  examCycleControl: any;
  examDetails: QuestionPaper[] = [
    {

      examId: 1,
      courseName: 'One',
      examDate: 'One',
      examStartTime: '10.00 A.M.',
      marks: '100',
      examName: 'msc Nursing (Exam 1)',
      questionPaperList: [
        {
          id: 1234,
          name: 'Question paper set 1'
        },
        {
          id: 1234,
          name: 'Question paper set 2'
        }
      ]
    },
    {
      examId: 1,
      courseName: 'Two',
      examDate: 'Some date',
      marks: '100',
      examStartTime: '12.00 A.M.',
      examName: 'msc Nursing (Exam 2)',
      questionPaperList: [
        {
          id: 1234,
          name: 'Question paper set 1'
        },
        {
          id: 1234,
          name: 'Question paper set 2'
        }
      ]

    },
    {
      examId: 1,
      courseName: 'Three',
      examDate: 'Some date',
      examStartTime: '10.00 A.M.',
      marks: '100',
      examName: 'msc Nursing (Exam 3)',
      questionPaperList: [
        {
          id: 1234,
          name: 'Question paper set 1'
        },
        {
          id: 1234,
          name: 'Question paper set 2'
        }
      ]

    },
    {

      examId: 1,
      courseName: 'Four',
      examDate: 'Some date',
      examStartTime: '10.00 A.M.',
      marks: '100',
      examName: 'msc Nursing (Exam 4)',
      questionPaperList: [
        {
          id: 1234,
          name: 'Question paper set 1'
        },
        {
          id: 1234,
          name: 'Question paper set 2'
        }
      ]

    },

  ]

  ngOnInit(): void {
    this.examCycleControl = new FormControl('', [Validators.required]);

  }

  examCycleSelected(e: any) {
    console.log(e.value)
    this.examCycle = e.value;
  }


  viewRegdStdnts(exam: QuestionPaper) {

    if (this.examCycleControl.valid) {
      this.router.navigate(['student-registration/view-regd-students'], { state: { examId: exam.examId, examCycle: this.examCycle, examName: exam.examName } });
    }

  }

  regNewStdnts(exam: QuestionPaper) {
    if (this.examCycleControl.valid) {
    this.router.navigate(['student-registration/add-new-students-regn'], { state: { examId: exam.examId, examCycle: this.examCycle, examName: exam.examName } });
    }
  }

}
