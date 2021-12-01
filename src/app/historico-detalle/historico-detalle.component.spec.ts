import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoDetalleComponent } from './historico-detalle.component';

describe('HistoricoDetalleComponent', () => {
  let component: HistoricoDetalleComponent;
  let fixture: ComponentFixture<HistoricoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
