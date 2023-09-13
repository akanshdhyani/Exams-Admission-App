import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services';
import { ConfigService, RequestParam, ServerResponse } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentEnrollmentService extends HttpService {
  override baseUrl: string;
  constructor(http: HttpClient, private configService: ConfigService) {
    super(http);
    this.baseUrl = environment.apiUrl;
   }

  enrollStudent(formData: any): Observable<ServerResponse> {
    const requestParam: RequestParam = {
      url: this.baseUrl + this.configService.urlConFig.URLS.STUDENT_ENROLLMENT.CREATE,
      data: formData, 
      header: {
        'Accept': '*/*',
      }
    }
    return this.multipartPost(requestParam);
  }
}
