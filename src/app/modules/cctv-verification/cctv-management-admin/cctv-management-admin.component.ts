import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
interface Course {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-cctv-management-admin',
  templateUrl: './cctv-management-admin.component.html',
  styleUrls: ['./cctv-management-admin.component.scss']
})
export class CctvManagementAdminComponent {
  public examCycleForm = new FormGroup({
    course: new FormControl('')
  }); 
  constructor(){
  }
  courses: Course[] = [
    {value: 'bsc', viewValue: 'BSc'},
    {value: 'msc', viewValue: 'MSc'},
  ];
  ngOnInit() {
       
  }
}

