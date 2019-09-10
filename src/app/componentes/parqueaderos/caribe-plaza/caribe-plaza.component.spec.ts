import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaribePlazaComponent } from './caribe-plaza.component';

describe('CaribePlazaComponent', () => {
  let component: CaribePlazaComponent;
  let fixture: ComponentFixture<CaribePlazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaribePlazaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaribePlazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
