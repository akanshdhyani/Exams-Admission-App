import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamHallTicketStudentDetailsComponent } from './exam-hall-ticket-student-details.component';

describe('ExamHallTicketStudentDetailsComponent', () => {
  let component: ExamHallTicketStudentDetailsComponent;
  let fixture: ComponentFixture<ExamHallTicketStudentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamHallTicketStudentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamHallTicketStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
