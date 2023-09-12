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
  centersList = [{id: 434, name: 'Lucknow Centre'}];
  courseList = [{id: 31, name: 'AUXILIARY NURSE AND MIDWIFE'}];
  examBatchList = [{id: 1, name: '2023-2024'}];
  intermediateStreamList = [{id: '1', name: 'U.P BOARD'}];
  intermediatePassedBoardList = [{id: 1, name: 'U.P. BOARD OF HIGH SCHOOL, ALLAHABAD'}];
  intermediateSubjectsList = [{id: 1, name: 'Chemistry'}]
  selectedLink: string = 'Basic Details';
  basicDetailsForm: FormGroup;
  educationalDetailsForm: FormGroup;
  basicDetails: boolean = true;
  educationalDetails: boolean = false;
  fileUploadError: string;
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
      mobileNumber: new FormControl('', [Validators.required, Validators.pattern(`^[0-9]*$`)]),
      emailId: new FormControl('', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")),
      aadharNo: new FormControl('', Validators.pattern(`^[0-9]*$`)),
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
    this.educationalDetails = true;
    this.basicDetails = false;
  }

  previous() {
    this.selectedLink = 'Basic details';
    this.educationalDetails = false;
    this.basicDetails = true;
  }

  formatBytes(bytes: any, decimals = 2) {
    if (!+bytes) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }

  handleFileUpload(param: string, event: any) {
    this.fileUploadError = '';
    for (let i = 0; i <= event.target.files.length - 1; i++) {
      let selectedFile = event.target.files[i];
      const extension = selectedFile.name.split('.').pop();
      const fileSize = selectedFile.size;
      const allowedExtensions = ['pdf', 'jpeg', 'jpg', 'png'];
      if (allowedExtensions.includes(extension)) {
        // validate file size to be less than 5mb if the file has a valid extension
        if (fileSize < 5000000) { 
        switch(param) {
          case 'highschool_marksheet': 
            this.educationalDetailsForm.patchValue({
            highSchoolDocuments: {
             marksSheet: selectedFile.name
            }
            })
          break;
          case 'highschool_certificate':
           this.educationalDetailsForm.patchValue({
            highSchoolDocuments: {
             certificate: selectedFile.name
            }
            })
          break;
          case 'intermediate_marksheet':
            this.educationalDetailsForm.patchValue({
              intermediateDocuments: {
                marksSheet: selectedFile.name
              }
              })
          break;
          case 'intermediate_certificate': 
          this.educationalDetailsForm.patchValue({
            intermediateDocuments: {
             certificate: selectedFile.name
            }
            })
          break;
          }
          }
           else {
            //console.log('file already exists');
            this.fileUploadError = 'Please upload files with size less than 5MB';
          }
        } else {
          this.fileUploadError = `Please upload ${allowedExtensions.join(', ')} files`;
        }
        console.log(this.educationalDetailsForm.value);
      }
    }

  removeSelectedFiles(param: string, index: number) {
    switch(param) {
      case 'highschool_marksheet': 
        this.educationalDetailsForm.patchValue({
        highSchoolDocuments: {
         marksSheet: ''
        }
        })
      break;
      case 'highschool_certificate':
       this.educationalDetailsForm.patchValue({
        highSchoolDocuments: {
         certificate: ''
        }
        })
      break;
      case 'intermediate_marksheet':
        this.educationalDetailsForm.patchValue({
          intermediateDocuments: {
           marksheet: ''
          }
          })
      break;
      case 'intermediate_certificate': 
      this.educationalDetailsForm.patchValue({
        intermediateDocuments: {
         certificate: ''
        }
        })
      break;
      }
    }

    createEnrollment() {
      console.log(this.basicDetailsForm.value);
      console.log(this.educationalDetailsForm.value);
    }
  }

