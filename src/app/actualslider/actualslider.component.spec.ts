import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualsliderComponent } from './actualslider.component';

describe('ActualsliderComponent', () => {
  let component: ActualsliderComponent;
  let fixture: ComponentFixture<ActualsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualsliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
