import { TestBed } from '@angular/core/testing';

import { ManageQuestionPaperService } from './manage-question-paper.service';

describe('ManageQuestionPaperService', () => {
  let service: ManageQuestionPaperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageQuestionPaperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
