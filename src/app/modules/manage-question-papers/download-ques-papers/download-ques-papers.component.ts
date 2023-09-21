import { Component } from '@angular/core';
import { QuestionPaper } from 'src/app/interfaces/interfaces';
import { ManageQuestionPaperService } from '../services/manage-question-paper.service';

@Component({
  selector: 'app-download-ques-papers',
  templateUrl: './download-ques-papers.component.html',
  styleUrls: ['./download-ques-papers.component.scss']
})
export class DownloadQuesPapersComponent {
  selectedExamCycleId: any;
  cctvVerificationStatus = 'Verified'
  constructor(
    private questionPaperService: ManageQuestionPaperService,
  ) {

  }

  examCycleList: string[] = ['examCycle1', 'examCycle2', 'examCycle3'];

  examDetails: QuestionPaper[] = [
    {
      examId:2,
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
      examId:2,
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
      examId:2,
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
      examId:2,
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

  examCycleSelected(e: Event) {
    console.log(e)
    
  }

  downloadQuestionPaper(questionPaperId: any) {
    this.questionPaperService.downloadQuestionPaper(questionPaperId).subscribe({
      next: (response) => {
        console.log("Download question paper response", response);
      },
      error: (error) => {
        console.log("Download question paper error", error);
      }
    });
  }

  getQuestionPapers(examCycleId: any, examId: any) {
    this.questionPaperService.getAllQuestionPapers(examCycleId, examId).subscribe({
      next: (response) => {
        console.log("All Question Papers response", response);
      },
      error: (error) => {
        console.log("get all question paper error", error);
      }
    })
  }

  viewQuestionPaper(questionPaperId: any) {
    this.questionPaperService.getQuestionPaperPreviewUrl(questionPaperId).subscribe({
      next: (response) => {
        console.log("question paper preview url response", response);
      },
      error: (error) => {
        console.log("question paper preview url error", error);
      }
    });
  }
}
