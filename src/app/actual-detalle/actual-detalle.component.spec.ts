import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualDetalleComponent } from './actual-detalle.component';

describe('ActualDetalleComponent', () => {
  let component: ActualDetalleComponent;
  let fixture: ComponentFixture<ActualDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
