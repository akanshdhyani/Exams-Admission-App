import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, inject} from '@angular/core';
import { FormGroup ,AbstractControl, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
// import { DateTime } from 'luxon';

export interface Exam {
  examname: string | undefined | null;
  examdate:string | undefined | null;
  starttime:string | undefined | null;
  endtime:string | undefined | null;
}
@Component({
  selector: 'app-manage-exam-cycle-form',
  templateUrl: './manage-exam-cycle-form.component.html',
  styleUrls: ['./manage-exam-cycle-form.component.scss']
})
export class ManageExamCycleFormComponent {
  exams: Exam[]=[];
  startMinTime:"08:00";
  startMaxTime: "24:00";
  announcer = inject(LiveAnnouncer);
  pickerMinDate = new Date(new Date().setHours(0, 0, 0, 0));
  createExamCycle = new FormGroup({
    'examcycle':new FormControl('', Validators.required),
    'coursename':new FormControl('', Validators.required),
    'startdate':new FormControl('', Validators.required),
    'enddate':new FormControl('',Validators.required),
    'examname':new FormControl('', Validators.required),
    'examdate':new FormControl('', Validators.required),
    'starttime':new FormControl('', Validators.required),
    'endtime':new FormControl('', Validators.required),
  });
  breadcrumbItems = [
    { label: 'Exam Management', url: '/home' },
    { label: 'Manage Exam Cycles and Exams', url: '' },
  ]
  constructor(private router: Router) {}
 
  
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
   console.log(examCycleValue);
   this.exams.push({
    examname: this.createExamCycle.value.examname,
    examdate: this.convertDateFormat(this.createExamCycle.value.examdate),
    starttime: this.createExamCycle.value.starttime ? this.createExamCycle.value.starttime : '10:00 AM',
    endtime: this.createExamCycle.value.endtime ? this.createExamCycle.value.endtime: '10:00 PM',
   })
   console.log(this.exams);
 }
  onSubmit(){
   console.log(this.createExamCycle)
 }
      

 remove(exams:Exam): void{
   const index = this.exams.indexOf(exams);
 
   if(index >= 0){
     this.exams.splice(index, 1);
 
     this.announcer.announce('Removed ${exam}');
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
   
//    const starttime = this.createExamCycle.controls['starttime'].value;
//    const endtime = this.createExamCycle.controls['endtime'].value;
 
//    const startTime = new Date(starttime);
//    startTime.setHours(starttime.getHours(), starttime.getMinutes());
 
//    const endTime = new Date(endtime);
//    endTime.setHours(endtime.getHours(), endtime.getMinutes());
//    console.log(endtime.getHours());
//    console.log(starttime.getHours());
 
 
//    if (endTime <= startTime) {
//      this.createExamCycle.controls['endtime'].setErrors({ endTimeInvalid: true });
//    } else {
//      this.createExamCycle.controls['endtime'].setErrors(null);
//    }
   
   
//  }

goBack() {
  this.router.navigate(['/manage-exam-cycle']);
}
  
 }

