import { TestBed } from '@angular/core/testing';

import { CadusuarioService } from './cadusuario.service';

describe('CadusuarioService', () => {
  let service: CadusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
