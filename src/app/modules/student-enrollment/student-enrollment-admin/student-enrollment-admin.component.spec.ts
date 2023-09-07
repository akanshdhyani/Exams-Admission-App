import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEnrollmentAdminComponent } from './student-enrollment-admin.component';

describe('StudentEnrollmentAdminComponent', () => {
  let component: StudentEnrollmentAdminComponent;
  let fixture: ComponentFixture<StudentEnrollmentAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEnrollmentAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentEnrollmentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
