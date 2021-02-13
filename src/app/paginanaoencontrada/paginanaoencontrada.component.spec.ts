import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginanaoencontradaComponent } from './paginanaoencontrada.component';

describe('PaginanaoencontradaComponent', () => {
  let component: PaginanaoencontradaComponent;
  let fixture: ComponentFixture<PaginanaoencontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginanaoencontradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginanaoencontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
