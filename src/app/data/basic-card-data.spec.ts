import { TestBed } from '@angular/core/testing';

import { BasicCardData } from './basic-card-data';

describe('BasicCardData', () => {
  let service: BasicCardData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicCardData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
