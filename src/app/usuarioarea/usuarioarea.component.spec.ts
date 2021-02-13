import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioareaComponent } from './usuarioarea.component';

describe('UsuarioareaComponent', () => {
  let component: UsuarioareaComponent;
  let fixture: ComponentFixture<UsuarioareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
