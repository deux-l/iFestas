import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprodutoComponent } from './editproduto.component';

describe('EditprodutoComponent', () => {
  let component: EditprodutoComponent;
  let fixture: ComponentFixture<EditprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprodutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
