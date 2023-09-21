import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services';
import { JwtTokenService } from 'src/app/core/services/jwt-token-service/jwt-token.service';
import { RequestParam } from 'src/app/shared';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamManagementService extends HttpService {
  override baseUrl: string;
  constructor(http: HttpClient, private configService: ConfigService,
    jwtTokenService: JwtTokenService) {
    super(http,jwtTokenService);
    this.baseUrl = environment.apiUrl;
   }

   getExamCycleList() {
    const requestParam: RequestParam = {
      url: this.baseUrl + this.configService.urlConFig.URLS.EXAM_MANAGEMENT.GET_EXAM_CYCLE_LIST,
      data: {},
    }
    return this.get(requestParam);
  }

  createExamCycle(request: any) {
    const requestParam: RequestParam = {
      url: this.baseUrl + this.configService.urlConFig.URLS.EXAM_MANAGEMENT.CREATE_EXAM_CYCLE,
      data: request
    }
    return this.post(requestParam);
  }

  createExam(request: any) {
    const requestParam: RequestParam = {
      url: this.baseUrl + this.configService.urlConFig.URLS.EXAM_MANAGEMENT.this.configService.urlConFig.URLS.EXAM_MANAGEMENT.CREATE_EXAM,
      data: request
    }
    return this.post(requestParam);
  }


}
