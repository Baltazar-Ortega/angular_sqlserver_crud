import { TestBed } from '@angular/core/testing';

import { CitasService } from './citas.service';

describe('CitasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitasService = TestBed.get(CitasService);
    expect(service).toBeTruthy();
  });
});
