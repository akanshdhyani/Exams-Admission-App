import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvManagementAdminComponent } from './cctv-management-admin.component';

describe('CctvManagementAdminComponent', () => {
  let component: CctvManagementAdminComponent;
  let fixture: ComponentFixture<CctvManagementAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CctvManagementAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CctvManagementAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
