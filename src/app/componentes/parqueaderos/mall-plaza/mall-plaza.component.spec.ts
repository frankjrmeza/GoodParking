import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MallPlazaComponent } from './mall-plaza.component';

describe('MallPlazaComponent', () => {
  let component: MallPlazaComponent;
  let fixture: ComponentFixture<MallPlazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MallPlazaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MallPlazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
