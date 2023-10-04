import { Injectable } from '@angular/core';
import { HttpService } from "../core/services/http-service/http.service";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

import { ConfigService, RequestParam, ServerResponse } from '../shared';


@Injectable({
  providedIn: 'root'
})
export class BaseService extends HttpService {
  token: string;
  override baseUrl: string;
  headers = {
    'Accept': 'application/json',
    'Authorization': `Bearer `
  };
  
  private userData = new BehaviorSubject({})
  currentUserData = this.userData.asObservable();


  constructor(private httpClient: HttpClient, cookieService: CookieService, private configService: ConfigService
  ) {
    super(httpClient, cookieService);
    this.baseUrl = environment.apiUrl;
    this.token = this.cookieService.get('access_token');
  }
  
  //#region (common apis)
  getExamCycleList$() {
    const requestParam: RequestParam = {
      url: this.baseUrl + this.configService.urlConFig.URLS.EXAM_MANAGEMENT.GET_EXAM_CYCLE_LIST,
      data: {},
    }
    return this.get(requestParam);
  }

  getAllInstitutesList$() {
    const response = {
      "result": {
        "response": [
            {
                "institute": {
                    "allowedForExamCentre": false,
                    "courses": [
                        {
                            "course_id": 3,
                            "courseName": "MSc in Nursing",
                            "seatCapacity": 30,
                            "courseCode": "GNM102",
                            "description": "MSc in Nursing"
                        },
                        {
                            "course_id": 2,
                            "courseName": "GNM",
                            "seatCapacity": 10,
                            "courseCode": "GNM101",
                            "description": "General Nursing and Midwifery"
                        }
                    ],
                    "address": "abc",
                    "district": "Bhopal",
                    "instituteCode": "121",
                    "ipAddress": "2654789",
                    "instituteId": 1,
                    "cctvVerified": false,
                    "email": "abc@gmail.com",
                    "remarks": "abcd",
                    "instituteName": "RGPV"
                }
            },
            {
                "institute": {
                    "allowedForExamCentre": true,
                    "courses": [
                        {
                            "course_id": 3,
                            "courseName": "MSc in Nursing",
                            "seatCapacity": 20,
                            "courseCode": "GNM102",
                            "description": "MSc in Nursing"
                        },
                        {
                            "course_id": 2,
                            "courseName": "GNM",
                            "seatCapacity": 10,
                            "courseCode": "GNM101",
                            "description": "General Nursing and Midwifery"
                        }
                    ],
                    "address": "Victoria Hospital Campus, Thyagi M Palanivelu Rd, Bengaluru, Karnataka 560002",
                    "district": "Bengaluru",
                    "instituteCode": "122",
                    "ipAddress": "26704342",
                    "instituteId": 2,
                    "cctvVerified": true,
                    "email": "abcd@gmail.com",
                    "remarks": "abc",
                    "instituteName": "Bangalore Medical College and Research Institute"
                }
            },
            {
                "institute": {
                    "allowedForExamCentre": false,
                    "courses": [
                        {
                            "course_id": 2,
                            "courseName": "GNM",
                            "seatCapacity": 50,
                            "courseCode": "GNM101",
                            "description": "General Nursing and Midwifery"
                        }
                    ],
                    "address": "XHHG+3W5, 5th Main Rd, Gandhi Nagar, Bengaluru, Karnataka 560009",
                    "district": "lucknow",
                    "instituteCode": "123",
                    "ipAddress": "560009",
                    "instituteId": 3,
                    "cctvVerified": true,
                    "email": "abcde@gmail.com",
                    "remarks": "abcde",
                    "instituteName": "Sri Laxmi gnm Nursing College"
                }
            }
        ],
      }
    }
    return response
  }
  //#endregion


  getHallTickets$(): Observable<any> {
    // return this.httpClient.get<any>("https://api.agify.io/?name=meelad");

    return of(
      [
        {
          id: 0,
          name: "Vidhu",
          course: "BSC GNM",
          rollNo: "2020",
          attendancePercentage: "3",
          hasStyle: true,
          cellStyle: {
            viewHallTicket: {
              'color': '#0074B6'
            }
          }
        },
        {
          id: 0,
          name: "Vidhu",
          course: "BSC GNM",
          rollNo: "2020",
          attendancePercentage: "3",
          hasStyle: true,
          cellStyle: {
            viewHallTicket: {
              'color': '#0074B6'
            }
          }
        },
        {
          id: 0,
          name: "Vidhu",
          course: "BSC GNM",
          rollNo: "2020",
          attendancePercentage: "3",
          hasStyle: true,
          cellStyle: {
            viewHallTicket: {
              'color': '#0074B6'
            }
          }
        },
        {
          id: 0,
          name: "Vidhu",
          course: "BSC GNM",
          rollNo: "2020",
          attendancePercentage: "3",
          hasStyle: true,
          cellStyle: {
            viewHallTicket: {
              'color': '#0074B6'
            }
          }
        },
      ]
    )
  }

  generateHallTkt$(): Observable<any> {
    // return this.httpClient.get<any>("https://api.agify.io/?name=meelad");

    return of([])
  }

  getInstitutesResultData$(): Observable<any> {
    // return this.httpClient.get<any>("https://api.agify.io/?name=meelad");

    return of(  [
      {
        instituteName: 'NEW COLLEGE OF NURSING',
        instituteId: '123',
        course: 'xxxx',
        internalMarksProvided: true,
        finalMarksProvided: true,
        revisedFinalMarksProvided: true,
       
      },
      {
        instituteName: 'OLD COLLEGE OF NURSING',
        instituteId: '123',
        course: 'xxxx',
        internalMarksProvided:false,
        finalMarksProvided: true,
        revisedfinalMarksProvided: false,
     
      },
      {
        instituteName: 'MODERN COLLEGE OF NURSING',
        instituteId: '123',
        course: 'xxxx',
        internalMarksProvided: true,
        finalMarksProvided: false,
        revisedfinalMarksProvided: true,
    
      },
    
   
    ])
  }
  getStudentResultData$():Observable<any>{
    return of(
      [
        {
          studentName: 'Devaprathap Nagendra',
          courseName: 'XXXX',
          exams: 'Exam 1',
          internalMarks: '45',
          
        },
        {
          studentName: 'Madison',
          courseName: 'XXXX',
          exams: 'Exam 1',
          internalMarks: '48',
          
        },
        {
          studentName: 'Ravi',
          courseName: 'XXXX',
          exams: 'Exam 1',
          internalMarks: '47',
          
        },
        {
          studentName: 'Kanaka Rao',
          courseName: 'XXXX',
          exams: 'Exam 1',
          internalMarks: '49',
          
        },
        {
          studentName: 'Arun',
          courseName: 'XXXX',
          exams: 'Exam 1',
          internalMarks: '49',
          
        },
        {
          studentName: 'Aman',
          courseName: 'XXXX',
          exams: 'Exam 1',
          internalMarks: '45',
          
        },
        {
          studentName: 'Devaprathap N.',
          courseName: 'XXXX',
          exams: 'Exam 1',
          internalMarks: '44',
          
        },
    
   
      ])
    }

  getUserData$(): Observable<any>{
    return of([
      {
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
  ])
  }

  getInstituteFeeTableData$(): Observable<any>{
    return of([
      {
        instituteName: 'NEW COLLEGE OF NURSING',
        courseName: 'xxxx',
        instituteCode: 'xxxx',
        registerStudentsCount: '10',
        paidStudentsCount: '10',
        totalFeePaid: '10000',
        viewList: 'View list',
        hasStyle: true,
        cellStyle: {
          viewList: {
            'color': '#0074B6'
          },
        }
      },
      {
        instituteName: 'NEW COLLEGE OF NURSING',
        courseName: 'xxxx',
        instituteCode: 'xxxx',
        registerStudentsCount: '25',
        paidStudentsCount: '25',
        totalFeePaid: '25000',
        viewList: 'View list',
        hasStyle: true,
        cellStyle: {
          viewList: {
            'color': '#0074B6'
          },
        }
      },
      {
        instituteName: 'NEW COLLEGE OF NURSING',
        courseName: 'xxxx',
        instituteCode: 'xxxx',
        registerStudentsCount: '30',
        paidStudentsCount: '28',
        totalFeePaid: '28000',
        viewList: 'View list',
        hasStyle: true,
        cellStyle: {
          viewList: {
            'color': '#0074B6'
          },
        }
      },
      {
        instituteName: 'NEW COLLEGE OF NURSING',
        courseName: 'xxxx',
        instituteCode: 'xxxx',
        registerStudentsCount: '50',
        paidStudentsCount: '40',
        totalFeePaid: '40000',
        viewList: 'View list',
        hasStyle: true,
        cellStyle: {
          viewList: {
            'color': '#0074B6'
          },
        }
      },
      {
        instituteName: 'NEW COLLEGE OF NURSING',
        courseName: 'xxxx',
        instituteCode: 'xxxx',
        registerStudentsCount: '30',
        paidStudentsCount: '20',
        totalFeePaid: '28000',
        viewList: 'View list',
        hasStyle: true,
        cellStyle: {
          viewList: {
            'color': '#0074B6'
          },
        }
      },
      {
        instituteName: 'NEW COLLEGE OF NURSING',
        courseName: 'xxxx',
        instituteCode: 'xxxx',
        registerStudentsCount: '25',
        paidStudentsCount: '25',
        totalFeePaid: '25000',
        viewList: 'View list',
        hasStyle: true,
        cellStyle: {
          viewList: {
            'color': '#0074B6'
          },
        }
      },
      {
        instituteName: 'NEW COLLEGE OF NURSING',
        courseName: 'xxxx',
        instituteCode: 'xxxx',
        registerStudentsCount: '10',
        paidStudentsCount: '10',
        totalFeePaid: '10000',
        viewList: 'View list',
        hasStyle: true,
        cellStyle: {
          viewList: {
            'color': '#0074B6'
          },
        }
      },
      {
        instituteName: 'NEW COLLEGE OF NURSING',
        courseName: 'xxxx',
        instituteCode: 'xxxx',
        registerStudentsCount: '25',
        paidStudentsCount: '25',
        totalFeePaid: '25000',
        viewList: 'View list',
        hasStyle: true,
        cellStyle: {
          viewList: {
            'color': '#0074B6'
          },
        }
      }
    ])
  }
  getStudentFeeTableData$(): Observable<any>{
    return of([
      {
        studentName: '',
        enrolementNumber: 'XXXX',
        courseName: 'XXXX',
        exams: 'Exam ',
        numberOfExams: '',
        fee: '000',
        status: 'Paid',
        hasStyle: true,
        cellStyle: {
          status: {
            'color': '#1D8923'
          },
        }
      },
      {
        studentName: 'Madison Tran',
        enrolementNumber: 'XXXX',
        courseName: 'XXXX',
        exams: 'Exam 1,Exam 2,Exam 3 ',
        numberOfExams: '3',
        fee: '3000',
        status: 'Paid',
        hasStyle: true,
        cellStyle: {
          status: {
            'color': '#1D8923'
          },
        }
      },
      {
        studentName: 'Raci Verma',
        enrolementNumber: 'XXXX',
        courseName: 'XXXX',
        exams: 'Exam 2',
        numberOfExams: '1',
        fee: '1000',
        status: 'Paid',
        hasStyle: true,
        cellStyle: {
          status: {
            'color': '#1D8923'
          },
        }
      },
      {
        studentName: 'Sumalatha Krishna',
        enrolementNumber: 'XXXX',
        courseName: 'XXXX',
        exams: 'Exam 3',
        numberOfExams: '1',
        fee: '1000',
        status: 'Paid',
        hasStyle: true,
        cellStyle: {
          status: {
            'color': '#1D8923'
          },
        }
      },
      {
        studentName: 'Kanaka Rao',
        enrolementNumber: 'XXXX',
        courseName: 'XXXX',
        exams: 'Exam 1,Exam 2',
        numberOfExams: '2',
        fee: '2000',
        status: 'Paid',
        hasStyle: true,
        cellStyle: {
          status: {
            'color': '#1D8923'
          },
        }
      },
      {
        studentName: 'Ravi Verma',
        enrolementNumber: 'XXXX',
        courseName: 'XXXX',
        exams: 'Exam 2',
        numberOfExams: '1',
        fee: '1000',
        status: 'Paid',
        hasStyle: true,
        cellStyle: {
          status: {
            'color': '#1D8923'
          },
        }
      }
    ])
  }
  getMarksForDashboard$(): Observable<any>{
    return of(
      [
        {
          examName: 'Anatomy',
          totalMarks: 100,
          passingMarks: 40,
          totalAttempts: 96,
          failedAttempts: 12,
          passedAttempts: 84,
          passPercentage: 88,
          maximumMarks: 96,
          minimumMarks: 16,
          avgMarks: 62,
          standardDeviation: 15,
  
        },
        {
          examName: 'Physiology',
          totalMarks: 100,
          passingMarks: 40,
          totalAttempts: 96,
          failedAttempts: 12,
          passedAttempts: 84,
          passPercentage: 88,
          maximumMarks: 96,
          minimumMarks: 16,
          avgMarks: 62,
          standardDeviation: 15,
        },
        {
          examName: 'Biochemistry',
          totalMarks: 100,
          passingMarks: 40,
          totalAttempts: 96,
          failedAttempts: 12,
          passedAttempts: 84,
          passPercentage: 88,
          maximumMarks: 96,
          minimumMarks: 16,
          avgMarks: 62,
          standardDeviation: 15,
        },
        {
          examName: 'Pathology',
          totalMarks: 100,
          passingMarks: 40,
          totalAttempts: 96,
          failedAttempts: 12,
          passedAttempts: 84,
          passPercentage: 88,
          maximumMarks: 96,
          minimumMarks: 16,
          avgMarks: 62,
          standardDeviation: 15,
        },
        {
          examName: 'Microbiology',
          totalMarks: 100,
          passingMarks: 40,
          totalAttempts: 96,
          failedAttempts: 12,
          passedAttempts: 84,
          passPercentage: 88,
          maximumMarks: 96,
          minimumMarks: 16,
          avgMarks: 62,
          standardDeviation: 15,
        },
        {
          examName: 'Aggregate',
          totalMarks: 'NA',
          passingMarks: 'NA',
          totalAttempts: 480,
          failedAttempts: 60,
          passedAttempts: 420,
          passPercentage: 88,
          maximumMarks: 96,
          minimumMarks: 16,
          avgMarks: 62,
          standardDeviation: 15,
        },
      ]
    )
  }

  setUserData(userData:any){
    this.userData.next(userData)
  }


  getAllCourses$(): Observable<any> {
    const requestParam: RequestParam = {
      url: this.baseUrl + this.configService.urlConFig.URLS.COURSE.GET_ALL,
      data: {}
    }
    return this.get(requestParam);
  }

  

  /**************************** exam services ****************************/
  getExamCycleList() {
    const requestParam: RequestParam = {
      url: this.baseUrl + this.configService.urlConFig.URLS.EXAM_MANAGEMENT.GET_EXAM_CYCLE_LIST,
      data: {},
    }
    return this.get(requestParam);
  }

  createExamCycle(request: object) {
    const requestParam: RequestParam = {
      url: `${this.baseUrl}${this.configService.urlConFig.URLS.EXAM_MANAGEMENT.CREATE_EXAM_CYCLE}`,
      data: request
    }
    return this.post(requestParam);
  }

  createExam(request: object, examCycleId: string | number) {
    const requestParam: RequestParam = {
      url: `${this.baseUrl}${this.configService.urlConFig.URLS.EXAM_MANAGEMENT.CREATE_EXAM}/${examCycleId}/addExam`,
      data: request
    }
    return this.post(requestParam);
  }

  examcyclebulkupload(formdata: FormData): Observable<ServerResponse> {
    const requestParam: RequestParam = {
      url: this.baseUrl + this.configService.urlConFig.URLS.EXAM_MANAGEMENT.EXAM_CYCLE_BULK_UPLOAD,
      data: formdata,
      header: {
        'Accept': '*/*',
        'x-authenticated-user-token': this.token
      }
    }
    return this.multipartPost(requestParam);
  }

/*********************************** enrollment service *****************************/
enrollStudent(formData: FormData): Observable<ServerResponse> {
  const requestParam: RequestParam = {
    url: this.baseUrl + this.configService.urlConFig.URLS.STUDENT_ENROLLMENT.CREATE,
    data: formData, 
    header: {
      'Accept': '*/*',
    }
  }
  return this.multipartPost(requestParam);
}


/** institute login */
getStudentDetailsById(id: string | number) {
  const requestParam: RequestParam = {
    url: `${this.baseUrl}${this.configService.urlConFig.URLS.STUDENT_ENROLLMENT.GET_DETAILS_BY_ID}/${id}`,
    data: {},
  }
  return this.get(requestParam);
}

getEnrollmentList(request: any) {
  const requestParam: RequestParam = {
    url: `${this.baseUrl}${this.configService.urlConFig.URLS.STUDENT_ENROLLMENT.FIND_ENROLLMENT_BY_FILTER}?instituteId=${request.instituteId}&courseId=${request.courseId}&academicYear=${request.academicYear}&verificationStatus=${request.verificationStatus}`,
    data: request,
  }
  return this.get(requestParam);
}

/** verify student(Approve/reject) */

  //#region (CCTV management admin) 
  updateCCTVstatus$(request: any) {
    const requestParam: RequestParam = {
      url: `${this.baseUrl}${this.configService.urlConFig.URLS.EXAM_CENTER.UPDATE_CCTV_STATUS}/${request.instituteId}?ipAddress=${request.ipAddress}&remarks=${request.remarks}&status=${request.status}`,
      data: {},
    }
    return this.put(requestParam);
  }

  assignAlternateExamCenter$(request: any) {
    const requestParam: RequestParam = {
      url: `${this.baseUrl}${this.configService.urlConFig.URLS.EXAM_CENTER.ASSIGN_ALTERNATE_EXAM_CENTER}/${request.instituteID}?alternateInstituteId=${request.alternateInstituteId}`,
      data: request,
    }
    return this.put(requestParam);
  }

  getNearestInstitutesList(formBody: any) {
    const requestParam: RequestParam = {
      url: this.baseUrl + this.configService.urlConFig.URLS.EXAM_CENTER.VERIFIED_EXAM_CENTERS + '?district=' + formBody.district,
      data: formBody,
    }
    return this.get(requestParam);
  }
  //#endregion

  //#region (track dispatches)
  getExams$() {}
  //#endregion

  

getInstituteById(id: string | number) {
  const requestParam: RequestParam = {
    url: `${this.baseUrl}${this.configService.urlConFig.URLS.STUDENT_ENROLLMENT.GET_INSTITUTE_BY_ID}/${id}`,
    data: {},
  }
  return this.get(requestParam);
}

  //#region (candidate portal)
  getResults() {
    const response = [
      {
        examName: 'Exam 1', 
        internalMarks: '45', 
        externalMarks: '45',
        totalMarks: '90',
        status: 'Pass'
      },{
        examName: 'Exam 2', 
        internalMarks: '45', 
        externalMarks: '45',
        totalMarks: '95',
        status: 'Pass',
      },{
        examName: 'Exam 3', 
        internalMarks: '25', 
        externalMarks: '5',
        totalMarks: '30',
        status: 'Fail',
      },
    ]
    return of(response)
  }

  formateResultDetails() {
    const response = [

    {
      examName: 'Exam 1', 
      internalMarks: '45', 
      externalMarks: '45',
      totalMarks: '90',
      status: 'Pass',
      hasStyle: true
    },{
      examName: 'Exam 2', 
      internalMarks: '45', 
      externalMarks: '45',
      totalMarks: '95',
      status: 'Pass',
    },{
      examName: 'Exam 3', 
      internalMarks: '25', 
      externalMarks: '5',
      totalMarks: '30',
      status: 'Fail',
    },
    ]
    return of(response)
  }
  //#endregion
getIntermediateSubjectList() {
  const requestParam: RequestParam = {
    url: this.baseUrl + this.configService.urlConFig.URLS.STUDENT_ENROLLMENT.GET_INTERMEDIATE_SUBJECT_LIST,
    data: {}
  }
  return this.get(requestParam);
}

updateStudentEnrollmentStatus(request: any) {
  const {id, status, remarks} = request;
  const requestParam: RequestParam = {
    url: `${this.baseUrl + this.configService.urlConFig.URLS.STUDENT_ENROLLMENT.VERIFY_STUDENT}/${id}/verify?status=${status}&remarks=${remarks}`,
    data: {}
  }
  return this.put(requestParam);
}

updateEnrollmentDetails(request: object, id: string | number) {
  const requestParam: RequestParam = {
    url: `${this.baseUrl}${this.configService.urlConFig.URLS.STUDENT_ENROLLMENT.GET_INSTITUTE_BY_ID}/${id}`,
     data: request
  }
  return this.multipartPut(requestParam);
}

// getIntermediateSubjects(): Observable<any> {
//   return of([
//     'Physics', 'Chemistry', 'Biology', 'Mathematics','Biotechnology','Economics','Political Science', 'History', 'Geography', 'Civics', 'Business studies', 'Accountancy', 'Home science', 'Sociology', 'Psychology', 'Philosophy', 'Health Care Science - Vocational Stream', 'Science', 'Literature', 'Education', 'English Core', 'Englist Elective', 'Without English'
//   ])
// }

getIntermediateStreamList(): Observable<any> {
  return of([
    {
      id: 1, 
      name: 'U.P. BOARD'
    }
  ])
}

getIntermediatePassedBoard(): Observable<any> {
  return of([
    {
      name: 'U.P. BOARD OF HIGH SCHOOL, ALLAHABAD',
      id: 1
    }
  ])
}

getExamCycleDetails(id: string): Observable<ServerResponse> {
  const requestParam: RequestParam = {
    url: this.baseUrl + this.configService.urlConFig.URLS.EXAM_MANAGEMENT.GET_EXAM_CYCLE_BY_ID + `/${id}`,
    data: {}
  }
  return this.get(requestParam);
}

deleteExamCycle(id: string): Observable<ServerResponse> {
  const requestParam: RequestParam = {
    url: this.baseUrl + this.configService.urlConFig.URLS.EXAM_MANAGEMENT.DELETE_EXAM_CYCLE + `/${id}`,
    data: {}
  }
  return this.delete(requestParam);
}

getAllInstitutes(): Observable<ServerResponse> {
  const requestParam: RequestParam = {
    url: this.baseUrl + this.configService.urlConFig.URLS.INSTITUTE_COURSE_MAPPING.GET_ALL_INSTITUTE_COURSE_MAPPING,
    data: {}
  }
  return this.get(requestParam);
}


}
