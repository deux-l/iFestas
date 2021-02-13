import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FecharnegocioComponent } from './fecharnegocio.component';

describe('FecharnegocioComponent', () => {
  let component: FecharnegocioComponent;
  let fixture: ComponentFixture<FecharnegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FecharnegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FecharnegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
