import { TestBed } from '@angular/core/testing';

import { RueserviceService } from './rueservice.service';

describe('RueserviceService', () => {
  let service: RueserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RueserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
