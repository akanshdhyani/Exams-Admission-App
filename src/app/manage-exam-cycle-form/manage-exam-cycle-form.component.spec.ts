import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExamCycleFormComponent } from './manage-exam-cycle-form.component';

describe('ManageExamCycleFormComponent', () => {
  let component: ManageExamCycleFormComponent;
  let fixture: ComponentFixture<ManageExamCycleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageExamCycleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageExamCycleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
