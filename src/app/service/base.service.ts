import { Injectable } from '@angular/core';
import { HttpService } from "../core/services/http-service/http.service";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';


@Injectable({
  providedIn: 'root'
})
export class BaseService extends HttpService {

  override baseUrl: string;
  headers = {
    'Accept': 'application/json',
    'Authorization': `Bearer `
  };

  constructor(private httpClient: HttpClient
  ) {
    super(httpClient);
    this.baseUrl = environment.apiUrl;
  }


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

  

}
