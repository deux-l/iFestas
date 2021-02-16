import { TestBed } from '@angular/core/testing';

import { UsuarioareaService } from './usuarioarea.service';

describe('UsuarioareaService', () => {
  let service: UsuarioareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
