import { TestBed } from '@angular/core/testing';

import { EmitterService } from './emitter.service';

describe('EmitterService', () => {
  let service: EmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
