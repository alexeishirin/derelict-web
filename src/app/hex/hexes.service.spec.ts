/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HexesService } from './hexes.service';

describe('HexesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HexesService]
    });
  });

  it('should ...', inject([HexesService], (service: HexesService) => {
    expect(service).toBeTruthy();
  }));
});
