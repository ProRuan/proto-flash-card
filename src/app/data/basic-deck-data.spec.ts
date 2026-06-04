import { TestBed } from '@angular/core/testing';

import { BasicDeckData } from './basic-deck-data';

describe('BasicDeckData', () => {
  let service: BasicDeckData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicDeckData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
