import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { RegdStudentsTableData, TableColumn } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-add-new-regn',
  templateUrl: './add-new-regn.component.html',
  styleUrls: ['./add-new-regn.component.scss']
})
export class AddNewRegnComponent {


  stateData : any;  
  constructor(
    private router: Router){
      this.stateData = this.router?.getCurrentNavigation()?.extras.state;
      console.log( this.stateData)
  }
 
  viewStudentsTableColumns: TableColumn[] = [];
  isDataLoading: boolean = false;
  regdStudents : RegdStudentsTableData[] = [];
  
  examList =  ["Exam1", "Exam2","Exam3", "Exam4","Exam5", "Exam6"];
  ngOnInit(): void {
  
    this.initializeColumns();
    this.getRegdStudents(this.stateData?.examId, this.stateData?.examCycle);
  }

  onSelectedRows(value: any) {
    console.log(value)
  }

  getRegdStudents(examId: number, examCycle: string){
    this.isDataLoading = false;
    this.regdStudents = [
      {
        name: "Vidhu",
        rollNo: "1234",
        course:"BSC GNM",
        admissionYr:"2020",
        noOfExam:"3",

      },
      {
        name: "Vidhu",
        rollNo: "1234",
        course:"BSC GNM",
        admissionYr:"2020",
        noOfExam:"3",

      },
      {
        name: "Adhi",
        rollNo: "12345",
        course:"BSC GNM",
        admissionYr:"2020",
        noOfExam:"3",

      },
      {
        name: "Vidhu",
        rollNo: "1234",
        course:"BSC GNM",
        admissionYr:"2020",
        noOfExam:"3",

      }
    ]
  }

  initializeColumns(): void {
    
    this.viewStudentsTableColumns = [
      {
        columnDef: 'select',
        header: '',
        isSortable: false,
        isCheckBox: true,
        cell: (element: Record<string, any>) => ``
      }, 
      {
        columnDef: 'name',
        header: 'Name',
        isSortable: true,
        cell: (element: Record<string, any>) => `${element['name']}`
      },
      {
        columnDef: 'rollNo',
        header: 'Roll no',
        isSortable: true,
        cell: (element: Record<string, any>) => `${element['rollNo']}`
      },
      {
        columnDef: 'course',
        header: 'Course',
        isSortable: true,
        cell: (element: Record<string, any>) => `${element['course']}`
      },
      {
        columnDef: 'admissionYr',
        header: 'Year Of Admission',
        isSortable: true,
        cell: (element: Record<string, any>) => `${element['admissionYr']}`
      },
      {
        columnDef: 'noOfExam',
        header: 'No of Exam',
        isSortable: true,
        cell: (element: Record<string, any>) => `${element['noOfExam']}`
      },
      {
        columnDef: 'examName',
        header: 'Exam Name',
        isCheckBox: false,
        isDropdown: true,
        cell: (element: Record<string, any>) => ``
      }, 

    ];
  }
}

