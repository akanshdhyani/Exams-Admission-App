import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadQuesPapersComponent } from './download-ques-papers.component';

describe('DownloadQuesPapersComponent', () => {
  let component: DownloadQuesPapersComponent;
  let fixture: ComponentFixture<DownloadQuesPapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadQuesPapersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadQuesPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
