import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupoComponent } from './cupo.component';

describe('CupoComponent', () => {
  let component: CupoComponent;
  let fixture: ComponentFixture<CupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
