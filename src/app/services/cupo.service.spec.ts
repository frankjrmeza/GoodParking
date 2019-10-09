import { TestBed } from '@angular/core/testing';

import { CupoService } from './cupo.service';

describe('CupoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CupoService = TestBed.get(CupoService);
    expect(service).toBeTruthy();
  });
});
