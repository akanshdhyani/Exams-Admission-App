import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExamCycleViewComponent } from './manage-exam-cycle-view.component';

describe('ManageExamCycleViewComponent', () => {
  let component: ManageExamCycleViewComponent;
  let fixture: ComponentFixture<ManageExamCycleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageExamCycleViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageExamCycleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
