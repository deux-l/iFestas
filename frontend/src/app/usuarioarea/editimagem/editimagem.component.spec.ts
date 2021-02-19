import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditimagemComponent } from './editimagem.component';

describe('EditimagemComponent', () => {
  let component: EditimagemComponent;
  let fixture: ComponentFixture<EditimagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditimagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditimagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
