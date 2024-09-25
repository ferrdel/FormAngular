import { TestBed } from '@angular/core/testing';

import { NservService } from './nserv.service';

describe('NservService', () => {
  let service: NservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
