import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricosliderComponent } from './historicoslider.component';

describe('HistoricosliderComponent', () => {
  let component: HistoricosliderComponent;
  let fixture: ComponentFixture<HistoricosliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricosliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricosliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
