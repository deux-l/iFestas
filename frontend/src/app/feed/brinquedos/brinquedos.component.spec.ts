import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrinquedosComponent } from './brinquedos.component';

describe('BrinquedosComponent', () => {
  let component: BrinquedosComponent;
  let fixture: ComponentFixture<BrinquedosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrinquedosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrinquedosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
