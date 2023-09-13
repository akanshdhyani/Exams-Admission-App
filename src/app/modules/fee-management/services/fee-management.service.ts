import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs';
import { HttpService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class FeeManagementService {

  constructor(
    private httpService: HttpService
  ) { }

  getExamFeeDetails(requestData: any) {
    // return this.httpService.get().pipe(
    //   mergeMap(response => {
    //     return this.formateExamFeeDetails(response)
    //   })
    // )
  }

  formateExamFeeDetails(data: any) {
    return data
  }

  updateExamFeeDetails() {
    // return this.httpService.post()
  }

  getPaymentUrl(postData: any) {
    // return this.httpService
  }

}
