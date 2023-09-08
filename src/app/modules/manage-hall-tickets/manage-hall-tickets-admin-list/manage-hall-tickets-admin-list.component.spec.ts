import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHallTicketsAdminListComponent } from './manage-hall-tickets-admin-list.component';

describe('ManageHallTicketsAdminListComponent', () => {
  let component: ManageHallTicketsAdminListComponent;
  let fixture: ComponentFixture<ManageHallTicketsAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageHallTicketsAdminListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageHallTicketsAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
