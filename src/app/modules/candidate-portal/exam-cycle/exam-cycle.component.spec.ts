import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCycleComponent } from './exam-cycle.component';

describe('ExamCycleComponent', () => {
  let component: ExamCycleComponent;
  let fixture: ComponentFixture<ExamCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamCycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
