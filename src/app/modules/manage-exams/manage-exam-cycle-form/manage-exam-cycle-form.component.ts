import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, inject} from '@angular/core';
import { FormGroup ,AbstractControl, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ExamManagementService } from '../services/exam-management.service';
import { ToastrServiceService } from 'src/app/shared/services/toastr/toastr.service';
// import { DateTime } from 'luxon';

export interface Exam {
  examName: string | undefined | null;
  examDate:string | undefined | null;
  startTime:string | undefined | null;
  endTime:string | undefined | null;
  id?: number;
  course?: any;
}
@Component({
  selector: 'app-manage-exam-cycle-form',
  templateUrl: './manage-exam-cycle-form.component.html',
  styleUrls: ['./manage-exam-cycle-form.component.scss']
})
export class ManageExamCycleFormComponent {
  exams: Exam[]=[];
  examsToAdd: Exam[]=[];
  courses: any[]= [];
  startMinTime:"08:00";
  startMaxTime: "24:00";
  savingDetails = false;
  announcer = inject(LiveAnnouncer);
  pickerMinDate = new Date(new Date().setHours(0, 0, 0, 0));
  createExamCycle = new FormGroup({
    'examCycleName':new FormControl('', Validators.required),
    'courseId':new FormControl('', Validators.required),
    'startDate':new FormControl('', Validators.required),
    'endDate':new FormControl('',Validators.required),
    'examName':new FormControl('', Validators.required),
    'examDate':new FormControl('', Validators.required),
    'startTime':new FormControl('', Validators.required),
    'endTime':new FormControl('', Validators.required),
  });
  breadcrumbItems = [
    { label: 'Manage Exam Cycles and Exams', url: '' },
  ]
  constructor(
    private router: Router, 
    private examService: ExamManagementService,
    private toasterService: ToastrServiceService,
    ) {
    this.courses= [
      {
          "id": 1,
          "courseCode": "CS101",
          "courseName": "Introduction to Computer Science",
          "description": "This course covers the fundamentals of computer science."
      }
    ];
  }
 
  
  ngOnInit(){
   this.initForm();
 }
 
 initForm(){
 }

 convertDateFormat(date: any) {
  const dateString = new Date(date);
  console.log(dateString);
  const formattedDate = dateString.getFullYear() + '-' + dateString.getMonth() + '-' + dateString.getDate();
  return formattedDate;
}
 
 
 addNewExam() {
   const examCycleValue = this.createExamCycle.value;
   const {examName, examDate, startTime, endTime, courseId} = this.createExamCycle.value;
   const selectedCourse= this.courses.find(course => course.courseCode === courseId);
   console.log(examCycleValue);
   const examDetail = {
    examName: examName,
    examDate: this.convertDateFormat(examDate),
    startTime: startTime ? startTime : '10:00 AM',
    endTime: endTime ? endTime: '10:00 PM',
    course: selectedCourse
   }
   this.exams.push(examDetail);
   this.examsToAdd.push(examDetail);
   console.log(this.examsToAdd);
 }

  onSubmit(){
    const {examCycleName, courseId, startDate, endDate} = this.createExamCycle.value;
    const examCycleDetail= {
      examCycleName,
      courseId,
      startDate: this.convertDateFormat(startDate),
      endDate: this.convertDateFormat(endDate),
    };
    this.savingDetails = true;
    this.examService.createExamCycle(examCycleDetail).pipe(
      switchMap((examCycleResponse) => {
        // Extract examCycleId from examCycleResponse
        const examCycleId = examCycleResponse.responseData.id; 
  
        // Call the createExam API with examCycleId
        return this.examService.createExam(this.exams, examCycleId);
      })
    ).subscribe({
      next: (res) => {
        this.examsToAdd = [];
        this.toasterService.showToastr("Exam Cycle and Exam is created successfully!", 'Success', 'success', '');
        this.savingDetails = false;
      },
      error: (err) => {
        this.toasterService.showToastr(err, 'Error', 'error', '');
        this.savingDetails = false;
        // Handle the error here in case of file upload or ticket creation failure
      }
    });

    console.log(this.createExamCycle)
  }
      

 remove(exam:Exam): void{
   const index = this.examsToAdd.indexOf(exam);
   if(index >= 0){
     this.exams.splice(index, 1);
     this.examsToAdd.splice(index, 1);
     this.announcer.announce('Removed ${exam}');
     
   } else {
    const index = this.exams.indexOf(exam);
    if(index >= 0) {
      // delete exam using delete exam service
    }
   }
 }
//  getFormattedTime(timestamp: string): string {
//    const date = new Date(timestamp);
//    const hours = date.getHours();
//    const minutes = date.getMinutes();
//    const ampm = hours >= 12 ? 'PM' : 'AM';
//    const twelveHourFormat = (hours % 12) || 12;
 
//    return `${twelveHourFormat}:${minutes.toString().padStart(2, '0')} ${ampm}`;
//  }
 
//  endTimeValidator() {
//    console.log("Working");
   
//    const startTime = this.createExamCycle.controls['startTime'].value;
//    const endTime = this.createExamCycle.controls['endTime'].value;
 
//    const startTime = new Date(startTime);
//    startTime.setHours(startTime.getHours(), startTime.getMinutes());
 
//    const endTime = new Date(endTime);
//    endTime.setHours(endTime.getHours(), endTime.getMinutes());
//    console.log(endTime.getHours());
//    console.log(startTime.getHours());
 
 
//    if (endTime <= startTime) {
//      this.createExamCycle.controls['endTime'].setErrors({ endTimeInvalid: true });
//    } else {
//      this.createExamCycle.controls['endTime'].setErrors(null);
//    }
   
   
//  }

  goBack() {
    this.router.navigate(['/manage-exam-cycle']);
  }
  
 }

