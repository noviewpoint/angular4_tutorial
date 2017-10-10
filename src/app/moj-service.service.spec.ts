import { TestBed, inject } from '@angular/core/testing';

import { MojServiceService } from './moj-service.service';

describe('MojServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MojServiceService]
    });
  });

  it('should be created', inject([MojServiceService], (service: MojServiceService) => {
    expect(service).toBeTruthy();
  }));
});
