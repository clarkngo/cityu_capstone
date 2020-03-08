import { TestBed } from '@angular/core/testing';

import { BookOfflineService } from './book-offline.service';

describe('BookOfflineService', () => {
  let service: BookOfflineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookOfflineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
