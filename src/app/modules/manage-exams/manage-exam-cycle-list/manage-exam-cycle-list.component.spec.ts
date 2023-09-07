import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExamCycleListComponent } from './manage-exam-cycle-list.component';

describe('ManageExamCycleListComponent', () => {
  let component: ManageExamCycleListComponent;
  let fixture: ComponentFixture<ManageExamCycleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageExamCycleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageExamCycleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
