import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuposComponent } from './cupos.component';

describe('CuposComponent', () => {
  let component: CuposComponent;
  let fixture: ComponentFixture<CuposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
