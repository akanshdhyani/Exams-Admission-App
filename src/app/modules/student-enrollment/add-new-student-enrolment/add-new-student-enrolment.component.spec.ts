import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewStudentEnrolmentComponent } from './add-new-student-enrolment.component';

describe('AddNewStudentEnrolmentComponent', () => {
  let component: AddNewStudentEnrolmentComponent;
  let fixture: ComponentFixture<AddNewStudentEnrolmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewStudentEnrolmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewStudentEnrolmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
