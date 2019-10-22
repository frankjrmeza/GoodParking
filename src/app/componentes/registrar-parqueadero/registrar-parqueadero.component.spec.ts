import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarParqueaderoComponent } from './registrar-parqueadero.component';

describe('RegistrarParqueaderoComponent', () => {
  let component: RegistrarParqueaderoComponent;
  let fixture: ComponentFixture<RegistrarParqueaderoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarParqueaderoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarParqueaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
