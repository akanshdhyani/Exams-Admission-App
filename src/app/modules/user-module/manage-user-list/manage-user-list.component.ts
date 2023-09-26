import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TableColumn } from 'src/app/interfaces/interfaces';
import { Tabs } from 'src/app/shared/config/tabs.config';
import { ConformationDialogComponent } from 'src/app/shared/components/conformation-dialog/conformation-dialog.component';
import { UploadFileComponent } from 'src/app/modules/manage-exams/upload-file/upload-file.component';
import { BaseService } from 'src/app/service/base.service';



@Component({
  selector: 'app-manage-user-list',
  templateUrl: './manage-user-list.component.html',
  styleUrls: ['./manage-user-list.component.scss']
})
export class ManageUserListComponent {
  tabs: any[] = [];
  isDataLoading: boolean = false;
  isEditData: boolean = false;  
  examCycleData: any[] = [];
  examCycleTableColumns: TableColumn[] = [];
  pageIndex = 0;
  pageSize = 10;
  length = 10;
  breadcrumbItems = [
    { label: 'Manage Users', url: '' },
  ]
  constructor(private router: Router, private dialog: MatDialog,
    private baseService : BaseService){}
   

  ngOnInit() {
   this.initializeTabs();
  }

  

  initializeTabs() {
    this.tabs = Tabs['student_enrollment'];
    this.initializeColumns();
    this.getEnrollmentData();
  }


  getEnrollmentData() {
    this.isDataLoading = true;
    this.examCycleData = [{
      fullName: 'Devaprathap Nagendra',
      email: 'name@gmail.com',
      phoneNumber: '9765454333',
      role: 'Institute',
      accountStatus: 'Active',
      hasStyle: true,
      cellStyle: {
        viewExamCycle: {
          'color': '#0074B6'
        }
      }
    },
    {
      fullName: 'D. Nagendra',
      email: 'name@gmail.com',
      phoneNumber: '9765454333',
      role: 'Admin',
      accountStatus: 'Active',
      hasStyle: true,
      cellStyle: {
        viewExamCycle: {
          'color': '#0074B6'
        }
      }
    },
  ]
  setTimeout(() => {
    this.isDataLoading = false;
  }, 2000);
  }

  initializeColumns(): void {
    this.examCycleTableColumns   = [];
  
      this.examCycleTableColumns = [
        {
          columnDef: 'fullName',
          header: 'Full name',
          isSortable: true,
          isLink: false,
          cell: (element: Record<string, any>) => `${element['fullName']}`
        },
        {
          columnDef: 'email',
          header: 'Email',
          isSortable: true,
          isLink: false,
          cell: (element: Record<string, any>) => `${element['email']}`
        },
        {
          columnDef: 'phoneNumber',
          header: 'Phone Number',
          isSortable: true,
          isLink: false,
          cell: (element: Record<string, any>) => `${element['phoneNumber']}`
        },
        {
          columnDef: 'role',
          header: 'Role',
          isSortable: true,
          isLink: true,
          cell: (element: Record<string, any>) => `${element['role']}`
        },
        {
          columnDef: 'accountStatus',
          header: 'Account Status',
          isSortable: false,
          isLink: false,
          cell: (element: Record<string, any>) => `${element['accountStatus']}`,
          isAction: false
        },
        {
          columnDef: 'isAction',
          header: '',
          isSortable: false,
          isLink: false,
          isAction: true,
          isMenuOption: true,
          cell: (element: Record<string, any>) => ``,
          
        },
      ]
    }


  handlePageChange(event: any) {

  }

  onClickItem(event: any) {
  console.log("item clicked")
  }

  onClickEdit(user: any){
    this.isEditData = true;
    console.log(this.isEditData);
    console.log(user)
    this.baseService.setUserData(user)
    this.router.navigate(['user-management/user-form'])
  }
  
  goToCreate() {
    this.router.navigate(['user-management/user-form'])
  }
  
  getSearchParams(event: any) {

  }

  
  // onViewClick(event: any) {
  //   console.log(event);
  //   this.router.navigateByUrl('/manage-exam-cycle/details')
  // }
}
