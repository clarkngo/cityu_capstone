import { TestBed } from '@angular/core/testing';

import { OnlineOfflineService } from './online-offline.service';

describe('OnlineOfflineService', () => {
  let service: OnlineOfflineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineOfflineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
