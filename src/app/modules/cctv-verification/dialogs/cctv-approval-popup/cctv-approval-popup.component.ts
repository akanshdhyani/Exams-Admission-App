import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cctv-approval-popup',
  templateUrl: './cctv-approval-popup.component.html',
  styleUrls: ['./cctv-approval-popup.component.scss']
})
export class CctvApprovalPopupComponent {
  //#region (global variables)
  dialogDetails: any
  dynamicFormGroup: FormGroup
  //#endregion

  //#region (constructor)
  constructor(
    public dialogRef: MatDialogRef<CctvApprovalPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.dialogDetails = data
    this.dynamicFormGroup = this.createFormControls(data.controls);
    console.log(this.dynamicFormGroup);
  }

  createFormControls(controls: any[]) {
    const formGroup: any = {}
    if (controls && controls.length) {
      controls.forEach((control: any) => {
        let validators: any[] = []
        if (control.validators) {
          control.validators.forEach((validator: string) => {
            if (validator === 'required') {
              validators.push(Validators.required)
            }
          })
        }

        formGroup[control.contolName] = new FormControl(control.value, validators)
      })
    }
    return new FormGroup(formGroup);
  }

  buttonClicked(type: string) {
    if (type === 'close') {
      this.dialogRef.close()
    } else if (type === 'submit') {
      this.submit()
    }
  }

  submit() {
    console.log(this.dynamicFormGroup.value);
    if (this.dynamicFormGroup.valid) {
      this.dialogRef.close(this.dynamicFormGroup.value)
    }
  }
}
