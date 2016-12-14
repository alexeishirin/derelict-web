/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MapsStoreService } from './maps-store.service';

describe('MapsStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapsStoreService]
    });
  });

  it('should ...', inject([MapsStoreService], (service: MapsStoreService) => {
    expect(service).toBeTruthy();
  }));
});
