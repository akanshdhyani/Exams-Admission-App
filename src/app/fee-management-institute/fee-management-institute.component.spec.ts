import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeManagementInstituteComponent } from './fee-management-institute.component';

describe('FeeManagementInstituteComponent', () => {
  let component: FeeManagementInstituteComponent;
  let fixture: ComponentFixture<FeeManagementInstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeManagementInstituteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeManagementInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
