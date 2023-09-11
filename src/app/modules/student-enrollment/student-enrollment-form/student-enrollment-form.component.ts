import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-enrollment-form',
  templateUrl: './student-enrollment-form.component.html',
  styleUrls: ['./student-enrollment-form.component.scss']
})
export class StudentEnrollmentFormComponent {
  links = ['Basic Details', 'Educational Details'];
  genderList = ['Male', 'Female', 'Others'];
  casteList = ['General', 'SC', 'ST', 'OBC', 'None'];
  categoryList = ['General', 'Freedom Fighter', 'Handicapped'];
  centersList = [{id: 430, name: 'Lucknow Centre'}, {id: 220, name: 'Varanasi center'}];
  courseList = [{id: 1, name: 'Physiotherapy'}]
  selectedLink: string = 'Basic Details';
  basicDetailsForm: FormGroup;
  educationalDetailsForm: FormGroup;
  basicDetails: boolean = true;
  educationalDetails: boolean = false;
  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.initBasicDetailsForm();
    this.initEducationalDetailsForm();
  }

  initBasicDetailsForm() {
    this.basicDetailsForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      mothersName: new FormControl('', Validators.required),
      fathersName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      caste: new FormControl('', Validators.required),
      category: new FormControl(''),
      mobileNumber: new FormControl('', Validators.required),
      emailId: new FormControl(''),
      aadharNo: new FormControl(''),
      address: this.formBuilder.group({
        addressLine1: new FormControl('', Validators.required),
        addressLine2: new FormControl('', Validators.required),
        district: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required),
        pincode: new FormControl('', Validators.required)
      })
    })
  }

  initEducationalDetailsForm() {
    this.educationalDetailsForm = this.formBuilder.group({
      centerCode: new FormControl(''),
      courseCode: new FormControl(''),
      examBatch: new FormControl('', Validators.required),
      admissionDate: new FormControl('', Validators.required),
      intermediateStream: new FormControl('', Validators.required),
      intermediatePassedBoard: new FormControl(''),
      intermediateSubjects: new FormControl(''),
      intermediatePercentage: new FormControl('', Validators.required),
      highSchoolDocuments: this.formBuilder.group({
        rollNo: new FormControl('', Validators.required),
        yearOfPassing: new FormControl('', Validators.required),
        marksSheet: new FormControl('', Validators.required),
        certificate: new FormControl('', Validators.required) 
      }),
      intermediateDocuments:  this.formBuilder.group({
        rollNo: new FormControl('', Validators.required),
        yearOfPassing: new FormControl('', Validators.required),
        marksSheet: new FormControl('', Validators.required),
        certificate: new FormControl('', Validators.required) 
      })
    })
  }

  selectLink(link: string) {
    this.selectedLink = link;
  }

  compareFn(cmp1: any,cmp2: any){
    return cmp1 && cmp2 ? cmp1.id === cmp2.id : cmp1 == cmp2;
  }
  showInfo(option: any) {
    this.selectLink(option);
    switch (option) {
      case 'Basic Details':
        this.basicDetails = true;
        this.educationalDetails = false;
        break;
      case 'Educational Details':
        this.basicDetails = false;
        this.educationalDetails = true;
        break;
      default:
        return '';
    }
    return;
  }

  next() {
    this.selectedLink = 'Educational Details';
  }
}
