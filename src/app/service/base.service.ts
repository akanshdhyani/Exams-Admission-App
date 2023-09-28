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

  getInstitutesData$(): Observable<any> {
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

getEnrollmentList(request: object) {
  const requestParam: RequestParam = {
    url: this.baseUrl + this.configService.urlConFig.URLS.STUDENT_ENROLLMENT.GET_ENROLLMENT_LIST,
    data: request,
  }
  return this.get(requestParam);
}

/** verify student(Approve/reject) */
updateStudentEnrollmentStatus() {
}
  
  //#region (CCTV management admin) 
  updateCCTVstatus$(request: any) {
    const requestParam: RequestParam = {
      url: this.baseUrl + this.configService.urlConFig.URLS.EXAM_CENTER.UPDATE_CCTV_STATUS,
      data: request,
    }
    return this.put(requestParam);
  }

  assignAlternateExamCenter$(request: any) {
    const requestParam: RequestParam = {
      url: this.baseUrl + this.configService.urlConFig.URLS.EXAM_CENTER.ASSIGN_ALTERNATE_EXAM_CENTER,
      data: request,
    }
    return this.put(requestParam);
  }

  getNearestInstitutesList(formBody: any) {
    const requestParam: RequestParam = {
      url: this.baseUrl + this.configService.urlConFig.URLS.EXAM_CENTER.VERIFIED_EXAM_CENTERS,
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
}
