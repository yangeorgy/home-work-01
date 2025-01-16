import { TestBed } from '@angular/core/testing';

import { DataMngService } from './data-mng.service';

describe('DataMngService', () => {
  let service: DataMngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
