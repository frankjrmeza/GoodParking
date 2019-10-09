import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlazaBocagrandeComponent } from './plaza-bocagrande.component';

describe('PlazaBocagrandeComponent', () => {
  let component: PlazaBocagrandeComponent;
  let fixture: ComponentFixture<PlazaBocagrandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlazaBocagrandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlazaBocagrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
