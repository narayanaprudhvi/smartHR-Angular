import { TestBed } from '@angular/core/testing';

import { AccServiceService } from './acc-service.service';

describe('AccServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccServiceService = TestBed.get(AccServiceService);
    expect(service).toBeTruthy();
  });
});
