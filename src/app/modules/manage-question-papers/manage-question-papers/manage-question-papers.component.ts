import { Component } from '@angular/core';
import { QuestionPaper } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-manage-question-papers',
  templateUrl: './manage-question-papers.component.html',
  styleUrls: ['./manage-question-papers.component.scss']
})
export class ManageQuestionPapersComponent {

  examCycleList: string[] = ['examCycle1', 'examCycle2', 'examCycle3'];
  examCycleControl: any;
  questionPapersList: QuestionPaper[] = [
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
  breadcrumbItems = [
    { label: 'Exam Management', url: '/home' },
    { label: 'Manage Question Paper', url: '' },
  ]


  onUploadQuesPaper(qp: any){
    console.log("onUploadQuesPaperonUploadQuesPaper", qp)
  }
}
