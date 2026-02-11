import { TestBed } from '@angular/core/testing';

import { LocationListProvider } from './location-list-provider';

describe('RouteListProvider', () => {
  let service: LocationListProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationListProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
