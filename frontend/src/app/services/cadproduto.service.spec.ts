import { TestBed } from '@angular/core/testing';

import { CadprodutoService } from './cadproduto.service';

describe('CadprodutoService', () => {
  let service: CadprodutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadprodutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
