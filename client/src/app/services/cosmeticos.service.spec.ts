import { TestBed } from '@angular/core/testing';

import { CosmeticosService } from './cosmeticos.service';

describe('CosmeticosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CosmeticosService = TestBed.get(CosmeticosService);
    expect(service).toBeTruthy();
  });
});
