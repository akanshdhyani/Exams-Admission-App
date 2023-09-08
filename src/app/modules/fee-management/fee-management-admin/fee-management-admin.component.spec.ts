import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeManagementAdminComponent } from './fee-management-admin.component';

describe('FeeManagementAdminComponent', () => {
  let component: FeeManagementAdminComponent;
  let fixture: ComponentFixture<FeeManagementAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeManagementAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeManagementAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
