import { TestBed, inject } from '@angular/core/testing';

import { SetdataService } from './setdata.service';

describe('SetdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetdataService]
    });
  });

  it('should be created', inject([SetdataService], (service: SetdataService) => {
    expect(service).toBeTruthy();
  }));
});
