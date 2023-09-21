import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  userForm: FormGroup
  isUsertable: boolean = true;
  optionList: any[] = ['Active', 'Inactive']
  roleList: any[] = ['Institute', 'Candidate', 'Admin']
  editDataObject: any;
  isEditData:boolean = false;

  userObject={
    name: 'Amit kumar',
    enrollmentNumber: '1234567890',
    emailId : 'amitkumar@gmail.com' ,
    phoneNumber : '9876543210',
    role: 'Candidate',
    activeStatus: 'Active'
  }

  constructor(private router: Router,
    private _location: Location,
    private route: ActivatedRoute) {
    this.userForm = new FormGroup({
      firstName: new FormControl(this.userObject?.name.split(' ').slice(0, -1).join(' '), Validators.required),
      lastName: new FormControl(this.userObject?.name.split(' ').slice(-1).join(' '), Validators.required),
      emailId: new FormControl(this.userObject?.emailId, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(this.userObject?.phoneNumber, Validators.required),
      // role: new FormControl('', Validators.required),
      // activeStatus: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {

  }

  setUserFormData() {
    this.userForm.setValue({
      firstName: this.userObject?.name,
      lastName: this.userObject?.name,
      emailId: this.userObject?.emailId,
      phoneNumber: this.userObject?.phoneNumber,
      role: this.userObject?.role,
      activeStatus: this.userObject?.activeStatus
    })
  }
  

  get firstName() {
    return this.userForm.get('firstName')
  }
  get lastName() {
    return this.userForm.get('lastName')
  }

  get emailId() {
    return this.userForm.get('emailId')
  }

  get phoneNumber() {
    return this.userForm.get('phoneNumber')
  }
  backClicked() {
    this._location.back();
  }

  addUserFn() {
    this.isUsertable = false;
  }
  navigateToHome() {
    this.router.navigate(['home'])
  }

  onClickEdit(){
    this.isEditData = true;
  }

  onClickCancel(){
    this.isEditData = false;
  }

  onSubmit() {
    console.log(this.userForm.value)
  }


}
