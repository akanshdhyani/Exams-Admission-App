import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services';
import { RequestParam, ServerResponse, ConfigService } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageQuestionPaperService extends HttpService {
  override baseUrl: string;
  constructor( http: HttpClient, private configService: ConfigService,cookieService: CookieService
    ) { 
    super(http, cookieService);
    this.baseUrl=  environment.apiUrl;
  }

  getAllQuestionPapers(examCycleId: any, examId: any): Observable<ServerResponse>  {
    const  reqParam: RequestParam = { 
      url: `${this.baseUrl}${this.configService.urlConFig.URLS.QUESTION_PAPER.GET_ALL}?examCycleId=${examCycleId}&examId=${examId}`
    }
    return this.get(reqParam);
  }

  uploadQuestionPaper(fileData: any):  Observable<ServerResponse> {
    const reqParam: RequestParam = {
      url: `${this.baseUrl}${this.configService.urlConFig.URLS.QUESTION_PAPER.UPLOAD}`,
      data: fileData,
      header: {
        Accept: "*/*",
        "Content-Type": "multipart/form-data",
      }

    }
   return this.post(reqParam);
  }

  downloadQuestionPaper(payloadData: any): Observable<ServerResponse> {
    const reqParam: RequestParam = {
      url: `${this.baseUrl}${this.configService.urlConFig.URLS.QUESTION_PAPER.DOWNLOAD}`,
      data: payloadData
    }
   return this.post(reqParam);
  }


  getQuestionPaperById(questionPaperId: any): Observable<ServerResponse>  {
    const  reqParam: RequestParam = { 
      url: `${this.baseUrl}${this.configService.urlConFig.URLS.QUESTION_PAPER.GET_BY_ID}/${questionPaperId}`
    }
    return this.get(reqParam);
  }


  getQuestionPaperPreviewUrl(questionPaperId: any): Observable<ServerResponse>  {
    const  reqParam: RequestParam = { 
      url: `${this.baseUrl}${this.configService.urlConFig.URLS.QUESTION_PAPER.GET_PREVIEW_URL}/${questionPaperId}`
    }
    return this.get(reqParam);
  }

  deleteQuestionPaper(questionPaperId: any): Observable<ServerResponse>  {
    const  reqParam: RequestParam = { 
      url: `${this.baseUrl}${this.configService.urlConFig.URLS.QUESTION_PAPER.DELETE}/${questionPaperId}`
    }
    return this.delete(reqParam);
  }



}
