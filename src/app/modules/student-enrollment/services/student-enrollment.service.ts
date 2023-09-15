import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services';
import { JwtTokenService } from 'src/app/core/services/jwt-token-service/jwt-token.service';
import { ConfigService, RequestParam, ServerResponse } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentEnrollmentService extends HttpService {
  override baseUrl: string;
  constructor(http: HttpClient, private configService: ConfigService,
    jwtTokenService: JwtTokenService) {
    super(http,jwtTokenService);
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

  /** institute login */
  getStudentDetailsById(id: any) {
    const requestParam: RequestParam = {
      url: `${this.baseUrl}${this.configService.urlConFig.URLS.STUDENT_ENROLLMENT.GET_DETAILS_BY_ID}/${id}`,
      data: {},
    }
    return this.get(requestParam);
  }

  /** verify student(Approve/reject) */
  updateStudentEnrollmentStatus() {
    
  }
  
}
