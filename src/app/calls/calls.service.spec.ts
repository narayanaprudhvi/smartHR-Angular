import { TestBed } from '@angular/core/testing';

import { CallsService } from './calls.service';

describe('CallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallsService = TestBed.get(CallsService);
    expect(service).toBeTruthy();
  });
});
